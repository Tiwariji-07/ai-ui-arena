import { Suspense, useEffect, useState } from 'react'
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

  useEffect(() => {
    if (!fullscreen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setFullscreen(false)
    }
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [fullscreen])

  if (fullscreen) {
    return (
      <div className="fixed inset-0 z-50 bg-white overflow-auto route-fade">
        <button
          onClick={() => setFullscreen(false)}
          aria-label="Exit fullscreen"
          className="group fixed top-5 right-5 z-50 inline-flex items-center gap-2 pl-3 pr-2 py-2 rounded-full bg-[color:var(--color-ink)] text-[color:var(--color-paper)] mono text-[10px] uppercase tracking-[0.22em] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] hover:bg-black transition-colors"
        >
          <span>Exit fullscreen</span>
          <kbd className="px-1.5 py-0.5 rounded bg-white/15 text-[9px] tracking-normal">
            Esc
          </kbd>
          <span
            aria-hidden
            className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors"
          >
            ✕
          </span>
        </button>
        <Suspense fallback={<Loading />}>
          <Component key={variant.id} />
        </Suspense>
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
              <p
                className="serif text-[17px] leading-[1.4] text-[color:var(--color-ink)] pl-4 border-l whitespace-pre-line"
                style={{ borderColor: model.color }}
              >
                {PROMPT}
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* CANVAS HEADER */}
      <section className="border-y border-[color:var(--color-rule)]">
        <div className="max-w-[1280px] mx-auto px-8 py-4 flex items-center justify-between mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-ink-soft)]">
          <span>The page · Three variants from the same brief</span>
          <span>
            {variant.status === 'submitted'
              ? `Variant ${variant.id} · Submitted ${variant.submittedAt ?? ''}`
              : `Variant ${variant.id} · Pending submission`}
          </span>
        </div>
      </section>

      {/* RENDERED PAGE */}
      <section className="max-w-[1280px] mx-auto px-8 py-10">
        <div
          className="relative border border-[color:var(--color-rule)] bg-white"
          style={{ boxShadow: '0 40px 80px -50px rgba(20,17,15,0.28)' }}
        >
          {/* CANVAS CHROME — sticky to viewport while canvas is in view */}
          <div
            className="sticky top-[68px] z-20 flex items-center justify-between gap-4 px-4 py-2.5 border-b border-[color:var(--color-rule)] bg-[color:var(--color-paper-2)]/95 backdrop-blur"
          >
            <div className="flex items-center gap-3 shrink-0">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full border border-[color:var(--color-rule-strong)]" />
                <span className="w-2.5 h-2.5 rounded-full border border-[color:var(--color-rule-strong)]" />
                <span className="w-2.5 h-2.5 rounded-full border border-[color:var(--color-rule-strong)]" />
              </div>
              <span className="hidden sm:inline mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-ink-soft)]">
                {model.id}
              </span>
            </div>

            {/* Variant tabs — center */}
            <div className="flex items-center gap-1 p-1 rounded-full bg-[color:var(--color-ink)]/[0.06] border border-[color:var(--color-rule)]">
              <span className="mono text-[10px] uppercase tracking-[0.22em] pl-3 pr-1 text-[color:var(--color-ink-soft)]">
                Variant
              </span>
              {model.variants.map((v) => {
                const isActive = v.id === variant.id
                return (
                  <button
                    key={v.id}
                    onClick={() => setVariant(v.id)}
                    aria-pressed={isActive}
                    className="relative mono text-[11px] tracking-[0.16em] px-3 py-1 rounded-full transition-colors"
                    style={{
                      background: isActive ? model.color : 'transparent',
                      color: isActive
                        ? '#fff'
                        : 'var(--color-ink-soft)',
                    }}
                  >
                    {v.id}
                    {v.status === 'awaiting' && !isActive && (
                      <span
                        aria-hidden
                        className="absolute top-1 right-1 w-1 h-1 rounded-full bg-[color:var(--color-ink-soft)]/40"
                      />
                    )}
                  </button>
                )
              })}
            </div>

            <button
              onClick={() => setFullscreen(true)}
              className="shrink-0 mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-ink)] transition-colors"
            >
              Fullscreen ↗
            </button>
          </div>

          <Suspense fallback={<Loading />}>
            <Component key={variant.id} />
          </Suspense>
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

function Loading() {
  return (
    <div className="p-24 text-center mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-ink-soft)]">
      Loading the page…
    </div>
  )
}
