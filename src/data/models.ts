import { lazy, type ComponentType, type LazyExoticComponent } from 'react'

export const PROMPT = `Design the landing page for a small independent magazine about the craft of software. One screen. No marketing fluff. Use whatever typography, palette, and layout you would choose if it were yours. Make it feel made, not generated.`

export const BRIEF_TITLE = 'The Craft'

export type Variant = {
  id: '01' | '02' | '03'
  status: 'submitted' | 'awaiting'
  submittedAt?: string
  component: LazyExoticComponent<ComponentType>
}

export type Model = {
  id: string
  name: string
  provider: string
  color: string
  notes?: string
  variants: Variant[]
}

const awaiting = (modelId: string, v: '01' | '02' | '03'): Variant => ({
  id: v,
  status: 'awaiting',
  component: lazy(() => import(`../submissions/${modelId}/${v}.tsx`)),
})

export const models: Model[] = [
  {
    id: 'claude-opus',
    name: 'Claude Opus 4.7',
    provider: 'Anthropic',
    color: '#B8552A',
    variants: [
      awaiting('claude-opus', '01'),
      awaiting('claude-opus', '02'),
      awaiting('claude-opus', '03'),
    ],
  },
  {
    id: 'gpt-5',
    name: 'GPT-5.5',
    provider: 'OpenAI',
    color: '#2E5D4F',
    variants: [
      awaiting('gpt-5', '01'),
      awaiting('gpt-5', '02'),
      awaiting('gpt-5', '03'),
    ],
  },
  {
    id: 'gemini',
    name: 'Gemini 3.5 flash',
    provider: 'Google DeepMind',
    color: '#2A4FB8',
    variants: [
      awaiting('gemini', '01'),
      awaiting('gemini', '02'),
      awaiting('gemini', '03'),
    ],
  },
  {
    id: 'composer',
    name: 'Composer 2.5',
    provider: 'Cursor',
    color: '#7C2D3A',
    variants: [
      awaiting('composer', '01'),
      awaiting('composer', '02'),
      awaiting('composer', '03'),
    ],
  },
  {
    id: 'grok-build',
    name: 'Grok Build 0.1 beta',
    provider: 'XAI',
    color: '#7C2D3A',
    variants: [
      awaiting('grok-build', '01'),
      awaiting('grok-build', '02'),
      awaiting('grok-build', '03'),
    ],
  },
]

export const findModel = (modelId?: string) =>
  models.find((m) => m.id === modelId)

export const submittedCount = (m: Model) =>
  m.variants.filter((v) => v.status === 'submitted').length
