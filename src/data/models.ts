import { lazy, type ComponentType, type LazyExoticComponent } from 'react'

export const PROMPT = `Build a landing page for a developer tool called "Forge" in React with 
Tailwind CSS. Include: a hero section with headline, subheadline, and 
two CTAs, a features section with 3 feature cards, a social proof 
section with 3 testimonials, and a footer.No external 
libraries or images.`

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

// const awaiting = (modelId: string, v: '01' | '02' | '03'): Variant => ({
//   id: v,
//   status: 'awaiting',
//   component: lazy(() => import(`../submissions/${modelId}/${v}.tsx`)),
// })

const submitted = (
  modelId: string,
  v: '01' | '02' | '03',
  submittedAt: string,
): Variant => ({
  id: v,
  status: 'submitted',
  submittedAt,
  component: lazy(() => import(`../submissions/${modelId}/${v}.tsx`)),
})

export const models: Model[] = [
  {
    id: 'claude-opus',
    name: 'Claude Opus 4.7',
    provider: 'Anthropic',
    color: '#B8552A',
    variants: [
      submitted('claude-opus', '01', '2026-05-23'),
      submitted('claude-opus', '02', '2026-05-23'),
      submitted('claude-opus', '03', '2026-05-23'),
    ],
  },
  {
    id: 'gpt-5',
    name: 'GPT-5.5',
    provider: 'OpenAI',
    color: '#2E5D4F',
    variants: [
      submitted('gpt-5', '01', '2026-05-23'),
      submitted('gpt-5', '02', '2026-05-23'),
      submitted('gpt-5', '03', '2026-05-23'),
    ],
  },
  {
    id: 'gemini',
    name: 'Gemini 3.5 flash',
    provider: 'Google DeepMind',
    color: '#2A4FB8',
    variants: [
      submitted('gemini', '01', '2026-05-23'),
      submitted('gemini', '02', '2026-05-23'),
      submitted('gemini', '03', '2026-05-23'),
    ],
  },
  {
    id: 'composer',
    name: 'Composer 2.5',
    provider: 'Cursor',
    color: '#7C2D3A',
    variants: [
      submitted('composer', '01', '2026-05-23'),
      submitted('composer', '02', '2026-05-23'),
      submitted('composer', '03', '2026-05-23'),
    ],
  },
  {
    id: 'grok-build',
    name: 'Grok Build 0.1 beta',
    provider: 'XAI',
    color: '#7C2D3A',
    variants: [
      submitted('grok-build', '01', '2026-05-23'),
      submitted('grok-build', '02', '2026-05-23'),
      submitted('grok-build', '03', '2026-05-23'),
    ],
  },
  {
    id: 'gemini-3.1',
    name: 'Gemini 3.1 pro',
    provider: 'Google DeepMind',
    color: '#2A4FB8',
    variants: [
      submitted('gemini-3.1', '01', '2026-05-23'),
      submitted('gemini-3.1', '02', '2026-05-23'),
      submitted('gemini-3.1', '03', '2026-05-23'),
    ],
  },
]

export const findModel = (modelId?: string) =>
  models.find((m) => m.id === modelId)

export const submittedCount = (m: Model) =>
  m.variants.filter((v) => v.status === 'submitted').length
