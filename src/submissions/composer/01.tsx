export default function Submission() {
  const features = [
    {
      title: 'Command chains',
      body: 'Compose multi-step deploy pipelines from shell snippets your team already trusts.',
      tag: '01',
    },
    {
      title: 'Environment diff',
      body: 'Compare staging and production configs side by side before you merge.',
      tag: '02',
    },
    {
      title: 'Audit trail',
      body: 'Every run logs who triggered it, what changed, and when it rolled back.',
      tag: '03',
    },
  ]

  const testimonials = [
    {
      quote: 'We retired three bash scripts the week we adopted Forge. Nobody misses them.',
      name: 'Elena Voss',
      role: 'Platform Lead, Stackline',
    },
    {
      quote: 'The diff view alone saved us from two bad Friday deploys.',
      name: 'James Okonkwo',
      role: 'Senior SRE, Northbyte',
    },
    {
      quote: 'Finally a dev tool that feels built by people who ship on Fridays.',
      name: 'Priya Nair',
      role: 'Staff Engineer, Coilworks',
    },
  ]

  return (
    <main className="min-h-screen bg-[#0c0b0a] text-[#e8e4df] selection:bg-[#e85d2a]/40">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#2a2622]">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 47px, #1f1c18 47px, #1f1c18 48px)',
          }}
        />
        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#e85d2a]/15 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#c44a1a]/10 blur-[80px]" />

        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-10 sm:px-10 lg:px-12">
          <header className="mb-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center border-2 border-[#e85d2a] bg-[#141210] font-mono text-lg font-bold text-[#e85d2a]">
                F
              </span>
              <span className="font-mono text-sm font-semibold uppercase tracking-[0.35em] text-[#9a948c]">
                Forge
              </span>
            </div>
            <span className="hidden font-mono text-[10px] uppercase tracking-widest text-[#5c5650] sm:block">
              v2.4 — build tools for builders
            </span>
          </header>

          <div className="max-w-3xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-[#e85d2a]">
              Developer infrastructure
            </p>
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-[#f5f2ed] sm:text-5xl lg:text-6xl">
              Hammer your deploys into shape.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#9a948c]">
              Forge is the command layer between your repo and production — pipelines, diffs, and
              audit logs in one hardened workspace.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-[#e85d2a] px-7 py-3.5 font-mono text-sm font-semibold uppercase tracking-wider text-[#0c0b0a] transition hover:bg-[#f07040]"
              >
                Start forging
                <span aria-hidden>→</span>
              </a>
              <a
                href="#"
                className="inline-flex items-center border border-[#3d3832] px-7 py-3.5 font-mono text-sm font-semibold uppercase tracking-wider text-[#c4beb6] transition hover:border-[#e85d2a] hover:text-[#e85d2a]"
              >
                Read the docs
              </a>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-px border border-[#2a2622] bg-[#2a2622] sm:max-w-lg">
            {['12k+', '99.9%', '<2s'].map((stat, i) => (
              <div key={stat} className="bg-[#141210] px-4 py-5 text-center">
                <p className="font-mono text-xl font-bold text-[#e85d2a]">{stat}</p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-widest text-[#5c5650]">
                  {['Teams', 'Uptime', 'Cold start'][i]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-[#2a2622] py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
          <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#e85d2a]">
                Capabilities
              </p>
              <h2 className="mt-2 text-3xl font-bold text-[#f5f2ed] sm:text-4xl">
                Built for the grind.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-[#6b6560]">
              Three primitives. No fluff. Everything wired to your existing CLI workflow.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <article
                key={f.tag}
                className="group relative border border-[#2a2622] bg-[#141210] p-8 transition hover:border-[#e85d2a]/50"
              >
                <span className="font-mono text-4xl font-bold text-[#2a2622] transition group-hover:text-[#e85d2a]/30">
                  {f.tag}
                </span>
                <h3 className="mt-6 font-mono text-lg font-semibold text-[#f5f2ed]">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#7a746c]">{f.body}</p>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#e85d2a] transition-all group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#e85d2a]">
            From the floor
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[#f5f2ed]">Teams that ship hard.</h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="flex flex-col border-l-2 border-[#e85d2a] bg-[#141210]/60 py-6 pl-6"
              >
                <p className="flex-1 text-sm leading-relaxed text-[#b8b2aa]">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-8 border-t border-[#2a2622] pt-6">
                  <cite className="not-italic">
                    <p className="font-mono text-sm font-semibold text-[#f5f2ed]">{t.name}</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-[#5c5650]">
                      {t.role}
                    </p>
                  </cite>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#2a2622] bg-[#080706]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row sm:px-10 lg:px-12">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center border border-[#e85d2a] font-mono text-sm font-bold text-[#e85d2a]">
              F
            </span>
            <span className="font-mono text-xs text-[#5c5650]">© 2026 Forge Systems</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-8 font-mono text-[10px] uppercase tracking-widest text-[#5c5650]">
            <a href="#" className="transition hover:text-[#e85d2a]">
              Docs
            </a>
            <a href="#" className="transition hover:text-[#e85d2a]">
              Changelog
            </a>
            <a href="#" className="transition hover:text-[#e85d2a]">
              GitHub
            </a>
            <a href="#" className="transition hover:text-[#e85d2a]">
              Status
            </a>
          </nav>
        </div>
      </footer>
    </main>
  )
}
