export default function Submission() {
  const features = [
    {
      title: 'Neural routing',
      body: 'Auto-route traffic to the healthiest region based on latency and error budgets.',
      icon: '◈',
    },
    {
      title: 'Secret vault',
      body: 'Inject API keys at runtime without ever committing them to version control.',
      icon: '◇',
    },
    {
      title: 'Pulse monitor',
      body: 'Real-time heartbeat dashboards for every microservice in your mesh.',
      icon: '◎',
    },
  ]

  const testimonials = [
    {
      quote: 'Forge turned our spaghetti deploys into something I would actually demo to investors.',
      name: 'Zara Kim',
      role: 'CTO, Neonpath',
      accent: 'cyan',
    },
    {
      quote: 'The pulse monitor caught a memory leak before our pager did. That paid for the year.',
      name: 'Marcus Webb',
      role: 'SRE, Voltstream',
      accent: 'fuchsia',
    },
    {
      quote: 'Secret vault alone justified the migration. Our security team stopped asking questions.',
      name: 'Anika Desai',
      role: 'DevOps, Prism.io',
      accent: 'lime',
    },
  ]

  const accentBorder: Record<string, string> = {
    cyan: 'border-cyan-400/40 hover:border-cyan-400',
    fuchsia: 'border-fuchsia-400/40 hover:border-fuchsia-400',
    lime: 'border-lime-400/40 hover:border-lime-400',
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#06050f] text-slate-200">
      {/* ambient glow */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-fuchsia-500/10 blur-[100px]" />
      </div>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 pt-8 sm:px-10">
          <header className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-sm font-bold text-[#06050f]">
                F
              </span>
              <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-lg font-bold text-transparent">
                Forge
              </span>
            </div>
            <span className="rounded-full border border-cyan-400/30 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-cyan-300/80">
              Now in beta
            </span>
          </header>
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pb-28 pt-20 text-center sm:px-10 sm:pt-28">
          <p className="mx-auto mb-6 inline-block rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-4 py-1.5 font-mono text-xs text-fuchsia-300">
            {'// ship faster, break less'}
          </p>
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-cyan-200 via-white to-fuchsia-200 bg-clip-text text-transparent">
              The control plane
            </span>
            <br />
            <span className="text-white">your stack deserves.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-400">
            Forge connects routing, secrets, and observability into one neon-lit dashboard built
            for teams running at the edge of scale.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-8 py-3.5 font-semibold text-[#06050f] shadow-lg shadow-cyan-500/25 transition hover:shadow-cyan-500/40"
            >
              Launch Forge free
            </a>
            <a
              href="#"
              className="rounded-xl border border-white/20 bg-white/5 px-8 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:border-cyan-400/50 hover:bg-white/10"
            >
              Explore API
            </a>
          </div>

          {/* decorative terminal block */}
          <div className="mx-auto mt-16 max-w-2xl rounded-2xl border border-white/10 bg-[#0a0918]/80 p-6 text-left font-mono text-sm shadow-2xl shadow-cyan-500/5 backdrop-blur">
            <div className="mb-4 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-lime-400/80" />
            </div>
            <p className="text-cyan-400">
              <span className="text-fuchsia-400">$</span> forge deploy --env production
            </p>
            <p className="mt-2 text-slate-500">→ Routing 3 regions...</p>
            <p className="text-lime-400">✓ Deploy complete in 4.2s</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative border-y border-white/10 py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
            Three modules.{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Infinite leverage.
            </span>
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <article
                key={f.title}
                className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent p-8 transition hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <span className="text-3xl text-cyan-400 transition group-hover:text-fuchsia-400">
                  {f.icon}
                </span>
                <h3 className="mt-6 text-xl font-bold text-white">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
            Loved by builders at the frontier
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className={`rounded-2xl border bg-[#0a0918]/60 p-8 backdrop-blur transition ${accentBorder[t.accent]}`}
              >
                <p className="text-sm leading-relaxed text-slate-300">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-8 flex items-center gap-3">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full font-bold text-[#06050f] ${
                      t.accent === 'cyan'
                        ? 'bg-cyan-400'
                        : t.accent === 'fuchsia'
                          ? 'bg-fuchsia-400'
                          : 'bg-lime-400'
                    }`}
                  >
                    {t.name[0]}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-14 sm:flex-row sm:justify-between sm:px-10">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-xs font-bold text-[#06050f]">
              F
            </span>
            <span className="font-mono text-xs text-slate-500">forge.dev — 2026</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <a href="#" className="transition hover:text-cyan-300">
              Docs
            </a>
            <a href="#" className="transition hover:text-fuchsia-300">
              Pricing
            </a>
            <a href="#" className="transition hover:text-lime-300">
              Discord
            </a>
            <a href="#" className="transition hover:text-white">
              Twitter
            </a>
          </nav>
        </div>
      </footer>
    </main>
  )
}
