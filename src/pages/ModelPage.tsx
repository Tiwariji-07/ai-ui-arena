import { Suspense, useState } from 'react'
import {
  Link,
  Navigate,
  useParams,
  useSearchParams,
} from 'react-router-dom'
import {
  BRIEF_TITLE,
  PROMPT,
  findModel,
  models,
} from '../data/models'

export default function ModelPage() {
  const { modelId } = useParams()
  const [params, setParams] = useSearchParams()
  const [fullscreen, setFullscreen] = useState(false)
  const [copied, setCopied] = useState(false)

  const model = findModel(modelId)
  if (!model) return <Navigate to="/" replace />

  const activeVariantId =
    (params.get('v') as '01' | '02' | '03' | null) ?? '01'
  const variant =
    model.variants.find((v) => v.id === activeVariantId) ?? model.variants[0]
  const Component = variant.component

  const index = models.findIndex((m) => m.id === model.id)
  const prev = models[(index - 1 + models.length) % models.length]
  const next = models[(index + 1) % models.length]

  const setVariant = (id: string) => {
    const np = new URLSearchParams(params)
    np.set('v', id)
    setParams(np, { replace: true })
  }

  const copyPrompt = async () => {
    await navigator.clipboard.writeText(PROMPT)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  if (fullscreen) {
    return (
      <div className="fixed inset-0 z-50 bg-white overflow-auto route-fade">
        <button
          onClick={() => setFullscreen(false)}
          className="fixed top-5 right-5 z-10 px-3 py-2 bg-[color:var(--color-ink)] text-[color:var(--color-paper)] mono text-[10px] uppercase tracking-[0.2em]"
        >
          Exit ✕
        </button>
        <Suspense fallback={<Loading />}>
          <Component key={variant.id} />
        </Suspense>
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
          <VariantSwitcher
            variants={model.variants}
            active={variant.id}
            color={model.color}
            onChange={setVariant}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="route-fade pb-32">
      {/* MASTHEAD */}
      <section className="px-8 pt-16 pb-12 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-12 gap-10 items-end">
          <div className="col-span-12 md:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="inline-block w-2.5 h-2.5 rounded-full"
                style={{ background: model.color }}
                aria-hidden
              />
              <span className="mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-ink-soft)]">
                {(index + 1).toString().padStart(2, '0')} · {model.provider}
              </span>
            </div>
            <h1 className="serif text-[clamp(64px,10vw,160px)] leading-[0.92] tracking-[-0.025em]">
              {model.name}
            </h1>
            <p className="serif-italic text-[clamp(20px,2.2vw,28px)] mt-6 text-[color:var(--color-ink-soft)]">
              Three responses to the same brief.
            </p>
          </div>

          <aside className="col-span-12 md:col-span-4">
            <div className="border border-[color:var(--color-rule)] bg-[color:var(--color-paper-2)]/60 p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--color-ink-soft)]">
                  Brief №01 — {BRIEF_TITLE}
                </p>
                <button
                  onClick={copyPrompt}
                  className="mono text-[10px] uppercase tracking-[0.2em] px-2.5 py-1.5 border border-[color:var(--color-ink)] hover:bg-[color:var(--color-ink)] hover:text-[color:var(--color-paper)] transition-colors"
                >
                  {copied ? '✓' : 'Copy'}
                </button>
              </div>
              <p className="serif text-[19px] leading-[1.35] text-[color:var(--color-ink)]">
                <span
                  aria-hidden
                  className="serif-italic text-3xl mr-0.5"
                  style={{ color: model.color }}
                >
                  “
                </span>
                {PROMPT}
                <span
                  aria-hidden
                  className="serif-italic text-3xl ml-0.5"
                  style={{ color: model.color }}
                >
                  ”
                </span>
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* CANVAS HEADER */}
      <section className="border-y border-[color:var(--color-rule)]">
        <div className="max-w-[1280px] mx-auto px-8 py-4 flex items-center justify-between mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-ink-soft)]">
          <span>The page · Variant {variant.id}</span>
          <span>
            {variant.status === 'submitted'
              ? `Submitted ${variant.submittedAt ?? ''}`
              : 'Placeholder · pending submission'}
          </span>
          <button
            onClick={() => setFullscreen(true)}
            className="hover:text-[color:var(--color-ink)] transition-colors"
          >
            Fullscreen ↗
          </button>
        </div>
      </section>

      {/* RENDERED PAGE */}
      <section className="max-w-[1280px] mx-auto px-8 py-10">
        <div
          className="relative border border-[color:var(--color-rule)] bg-white overflow-hidden"
          style={{ boxShadow: '0 40px 80px -50px rgba(20,17,15,0.28)' }}
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-[color:var(--color-rule)] bg-[color:var(--color-paper-2)]/70">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full border border-[color:var(--color-rule-strong)]" />
              <span className="w-2.5 h-2.5 rounded-full border border-[color:var(--color-rule-strong)]" />
              <span className="w-2.5 h-2.5 rounded-full border border-[color:var(--color-rule-strong)]" />
            </div>
            <span className="mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-ink-soft)]">
              {model.id} / variant-{variant.id}
            </span>
            <span className="w-12" />
          </div>
          <Suspense fallback={<Loading />}>
            <Component key={variant.id} />
          </Suspense>

          {/* Floating switcher — sticks to bottom of viewport while the canvas is in view */}
          <div className="sticky bottom-5 z-20 flex justify-center pointer-events-none -mt-20 mb-5">
            <div className="pointer-events-auto">
              <VariantSwitcher
                variants={model.variants}
                active={variant.id}
                color={model.color}
                onChange={setVariant}
              />
            </div>
          </div>
        </div>
      </section>

      {/* PREV / NEXT */}
      <section className="border-t border-[color:var(--color-rule)]">
        <div className="max-w-[1280px] mx-auto px-8 py-8 grid grid-cols-2 gap-8">
          <Link to={`/model/${prev.id}`} className="group block py-2">
            <span className="mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-ink-soft)]">
              ← Previous respondent
            </span>
            <div className="serif text-3xl mt-2 group-hover:italic transition-all">
              {prev.name}
            </div>
          </Link>
          <Link
            to={`/model/${next.id}`}
            className="group block py-2 text-right"
          >
            <span className="mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-ink-soft)]">
              Next respondent →
            </span>
            <div className="serif text-3xl mt-2 group-hover:italic transition-all">
              {next.name}
            </div>
          </Link>
        </div>
      </section>

    </div>
  )
}

type SwitcherProps = {
  variants: { id: string; status: string }[]
  active: string
  color: string
  onChange: (id: string) => void
}

function VariantSwitcher({ variants, active, color, onChange }: SwitcherProps) {
  return (
    <div
      className="flex items-center gap-1 px-1.5 py-1.5 rounded-full bg-[color:var(--color-ink)] text-[color:var(--color-paper)]"
      style={{ boxShadow: '0 18px 40px -18px rgba(20,17,15,0.5)' }}
    >
        <span className="mono text-[10px] uppercase tracking-[0.24em] pl-3 pr-1 text-[color:var(--color-paper)]/60">
          Variant
        </span>
        {variants.map((v) => {
          const isActive = v.id === active
          return (
            <button
              key={v.id}
              onClick={() => onChange(v.id)}
              aria-pressed={isActive}
              className="relative mono text-[11px] tracking-[0.16em] px-3 py-1.5 rounded-full transition-colors"
              style={{
                background: isActive ? color : 'transparent',
                color: isActive ? '#fff' : 'rgba(242,237,227,0.7)',
              }}
            >
              {v.id}
              {v.status === 'awaiting' && !isActive && (
                <span
                  aria-hidden
                  className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-[color:var(--color-paper)]/40"
                />
              )}
            </button>
          )
        })}
    </div>
  )
}

function Loading() {
  return (
    <div className="p-24 text-center mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-ink-soft)]">
      Loading the page…
    </div>
  )
}
