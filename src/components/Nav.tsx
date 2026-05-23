import { Link, useLocation } from 'react-router-dom'
import { findModel } from '../data/models'

export default function Nav() {
  const { pathname } = useLocation()
  const parts = pathname.split('/').filter(Boolean)

  const crumbs: { label: string; to: string }[] = [{ label: 'Arena', to: '/' }]
  if (parts[0] === 'model' && parts[1]) {
    const model = findModel(parts[1])
    crumbs.push({ label: model?.name ?? parts[1], to: `/model/${parts[1]}` })
  }

  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-[color:var(--color-paper)]/80 border-b border-[color:var(--color-rule)]">
      <div className="px-8 py-5 flex items-center justify-between gap-8 max-w-[1400px] mx-auto">
        <Link
          to="/"
          className="flex items-baseline gap-3 group"
          aria-label="AI UI Arena, home"
        >
          <span className="serif text-[26px] tracking-tight leading-none">
            AI UI
          </span>
          <span className="serif-italic text-[26px] text-[color:var(--color-ink-soft)] group-hover:text-[color:var(--color-ink)] transition-colors leading-none">
            Arena
          </span>
        </Link>

        <nav className="flex items-center gap-3 text-[11px] mono uppercase tracking-[0.18em]">
          {crumbs.map((c, i) => {
            const last = i === crumbs.length - 1
            return (
              <span key={c.to} className="flex items-center gap-3">
                {i > 0 && (
                  <span className="text-[color:var(--color-ink-soft)]">/</span>
                )}
                <Link
                  to={c.to}
                  className={
                    last
                      ? 'text-[color:var(--color-ink)]'
                      : 'text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-ink)] transition-colors'
                  }
                >
                  {c.label}
                </Link>
              </span>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
