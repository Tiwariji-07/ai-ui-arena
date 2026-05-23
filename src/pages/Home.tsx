import { Link } from 'react-router-dom'
import { models, PROMPT, BRIEF_TITLE, submittedCount } from '../data/models'
import { useState } from 'react'

export default function Home() {
  const totalVariants = models.reduce((s, m) => s + m.variants.length, 0)
  const totalSubmitted = models.reduce((s, m) => s + submittedCount(m), 0)
  const [copied, setCopied] = useState(false)

  const copyPrompt = async () => {
    await navigator.clipboard.writeText(PROMPT)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="route-fade">
      {/* MASTHEAD */}
      <section className="px-8 pt-20 pb-12 max-w-[1280px] mx-auto">
        <div className="flex items-end justify-between gap-8 flex-wrap">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.24em] text-[color:var(--color-ink-soft)] mb-5">
              Vol. 01 · An ongoing exhibition
            </p>
            <h1 className="serif text-[clamp(64px,11vw,180px)] leading-[0.9] tracking-[-0.025em]">
              One brief.<br />
              <span className="serif-italic">Four</span> minds.
            </h1>
          </div>
          <p className="mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-ink-soft)] max-w-xs pb-3">
            Each model receives the same brief. Each returns one page. Nothing is hand-edited.
          </p>
        </div>
      </section>

      {/* THE BRIEF — center stage */}
      <section className="border-y border-[color:var(--color-rule)] bg-[color:var(--color-paper-2)]/60 relative">
        <div className="px-8 py-20 md:py-28 max-w-[1100px] mx-auto relative">
          <div className="absolute left-8 top-12 mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--color-ink-soft)]">
            Brief №01 — {BRIEF_TITLE}
          </div>
          <div className="absolute right-8 top-12 flex items-center gap-3">
            <button
              onClick={copyPrompt}
              className="mono text-[10px] uppercase tracking-[0.2em] px-3 py-2 border border-[color:var(--color-ink)] hover:bg-[color:var(--color-ink)] hover:text-[color:var(--color-paper)] transition-colors"
            >
              {copied ? 'Copied ✓' : 'Copy Brief'}
            </button>
          </div>

          <blockquote className="relative">
            <span
              aria-hidden
              className="serif-italic absolute -left-2 md:-left-6 -top-10 text-[120px] leading-none text-[color:var(--color-ink-soft)]/40"
            >
              “
            </span>
            <p className="serif text-[clamp(28px,3.6vw,52px)] leading-[1.18] tracking-[-0.01em] text-[color:var(--color-ink)]">
              {PROMPT}
            </p>
            <span
              aria-hidden
              className="serif-italic absolute -right-2 -bottom-16 text-[120px] leading-none text-[color:var(--color-ink-soft)]/40"
            >
              ”
            </span>
          </blockquote>

          <div className="mt-12 pt-6 border-t border-[color:var(--color-rule)] flex items-center justify-between flex-wrap gap-4 mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-ink-soft)]">
            <span>Curator · You</span>
            <span>{models.length.toString().padStart(2, '0')} respondents · 3 variants each</span>
            <span>
              {totalSubmitted.toString().padStart(2, '0')} of{' '}
              {totalVariants.toString().padStart(2, '0')} submitted
            </span>
          </div>
        </div>
      </section>

      {/* RESPONDENTS */}
      <section className="max-w-[1280px] mx-auto px-8 pt-20 pb-24">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="serif text-4xl tracking-tight">
            The respondents
          </h2>
          <span className="mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-ink-soft)]">
            Click to view their page
          </span>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[color:var(--color-rule)] border border-[color:var(--color-rule)] stagger">
          {models.map((m, i) => (
            <li key={m.id} className="bg-[color:var(--color-paper)]">
              <Link
                to={`/model/${m.id}`}
                className="group block p-8 md:p-10 relative h-full transition-colors duration-500 hover:bg-[color:var(--color-paper-2)]"
                style={
                  { ['--accent' as never]: m.color } as React.CSSProperties
                }
              >
                {/* accent bar that grows on hover */}
                <span
                  aria-hidden
                  className="absolute left-0 top-0 bottom-0 w-[3px] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"
                  style={{ background: m.color }}
                />

                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-6">
                      <span
                        className="inline-block w-2 h-2 rounded-full"
                        style={{ background: m.color }}
                        aria-hidden
                      />
                      <span className="mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-ink-soft)]">
                        {(i + 1).toString().padStart(2, '0')} · {m.provider}
                      </span>
                    </div>
                    <h3 className="serif text-5xl md:text-6xl tracking-[-0.015em] leading-[1]">
                      {m.name}
                    </h3>
                  </div>
                  <div className="text-right pt-1 shrink-0">
                    <p className="serif text-3xl leading-none tracking-tight">
                      <span style={{ color: m.color }}>
                        {submittedCount(m).toString().padStart(2, '0')}
                      </span>
                      <span className="text-[color:var(--color-ink-soft)]">
                        {' / '}
                        {m.variants.length.toString().padStart(2, '0')}
                      </span>
                    </p>
                    <p className="mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-ink-soft)] mt-2">
                      variants
                    </p>
                  </div>
                </div>

                <div className="mt-12 flex items-center justify-between">
                  <span className="serif-italic text-lg text-[color:var(--color-ink-soft)]">
                    {m.notes ?? 'No notes from the curator.'}
                  </span>
                  <span className="mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-ink-soft)] group-hover:text-[color:var(--color-ink)] transition-colors">
                    View the page
                    <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* PULL QUOTE */}
      <section className="px-8 max-w-[1280px] mx-auto pb-12 grid grid-cols-12 gap-8">
        <p className="col-span-12 md:col-span-7 md:col-start-3 serif-italic text-[clamp(20px,2.4vw,32px)] leading-snug text-[color:var(--color-ink-soft)]">
          The brief is the same. The taste — the restraint, the courage to leave space — is what we are looking at here.
        </p>
      </section>
    </div>
  )
}
