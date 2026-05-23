export default function Submission() {
  const features = [
    {
      title: 'Quiet automation',
      body: 'Schedule, trigger, and inspect workflows from one surface that stays calm even when the pipeline is noisy.',
    },
    {
      title: 'Environment snapshots',
      body: 'Pin the exact runtime state behind a successful build and restore it when the next change behaves differently.',
    },
    {
      title: 'Human approvals',
      body: 'Give reviewers compact evidence cards with diffs, risks, checks, and rollback notes before release.',
    },
  ]

  const testimonials = [
    {
      quote: 'Forge gave our team a shared language for releases without forcing us into a heavyweight platform.',
      name: 'Amelia Ross',
      role: 'VP Engineering, HarborStack',
    },
    {
      quote: 'It is rare for developer tooling to feel both powerful and quiet. Forge lands that balance.',
      name: 'Samir Vale',
      role: 'Principal Developer, Lattice Bay',
    },
    {
      quote: 'The approval cards made our release reviews shorter because the right context was already there.',
      name: 'Keiko Tan',
      role: 'Release Lead, StudioNine',
    },
  ]

  return (
    <main className="min-h-screen overflow-hidden bg-[#050712] text-slate-100">
      <section className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(125,92,255,0.32),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_50%_75%,rgba(244,114,182,0.16),transparent_34%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-8 sm:px-10 lg:px-12">
          <nav className="flex items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_24px_rgba(103,232,249,0.8)]" />
              <span className="font-semibold tracking-[-0.03em]">Forge</span>
            </div>
            <span className="text-sm text-slate-400">Developer workflow studio</span>
          </nav>

          <div className="grid min-h-[690px] items-center gap-12 py-20 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="mb-6 inline-flex rounded-full border border-cyan-200/20 bg-cyan-200/10 px-4 py-2 text-sm text-cyan-100">
                From first commit to release notes
              </div>
              <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-7xl">
                The luminous control room for modern builds.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
                Forge unifies workflow automation, environment snapshots, and
                release approvals in a focused dark interface built for
                developers.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#features"
                  className="rounded-2xl bg-white px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-[#050712]"
                >
                  Open Console
                </a>
                <a
                  href="#proof"
                  className="rounded-2xl border border-white/15 bg-white/[0.04] px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-white backdrop-blur"
                >
                  View Stories
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-8 rounded-[3rem] bg-cyan-400/10 blur-3xl" />
              <div className="relative rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-4 backdrop-blur-2xl">
                <div className="rounded-[2rem] border border-white/10 bg-[#080b18]/90 p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-sm font-semibold text-white">Release Orbit</span>
                    <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs text-cyan-200">
                      stable
                    </span>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      ['Build graph', '42 nodes'],
                      ['Snapshot', 'pinned'],
                      ['Risk score', 'low'],
                      ['Rollback', 'ready'],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                        <div className="text-sm text-slate-400">{label}</div>
                        <div className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 rounded-2xl border border-cyan-200/20 bg-cyan-200/10 p-5">
                    <div className="mb-3 flex items-center justify-between text-sm">
                      <span className="text-cyan-100">approval path</span>
                      <span className="text-cyan-200">3 / 3</span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-full rounded-full bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-200">
            Built for teams in motion
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
            Everything important, nothing frantic.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur"
            >
              <div className="mb-8 h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-300 to-violet-400" />
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">
                {feature.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-400">{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="proof" className="mx-auto max-w-7xl px-6 pb-20 sm:px-10 lg:px-12">
        <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl sm:p-10">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              Teams keep Forge open when the stakes rise.
            </h2>
            <span className="text-sm text-slate-400">Three field notes</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <figure key={item.name} className="rounded-[1.75rem] bg-[#050712]/70 p-7">
                <blockquote className="leading-8 text-slate-200">“{item.quote}”</blockquote>
                <figcaption className="mt-8 border-t border-white/10 pt-5">
                  <div className="font-semibold text-white">{item.name}</div>
                  <div className="mt-1 text-sm text-slate-500">{item.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-slate-500 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-12">
        <span className="text-white">Forge</span>
        <span>Workflow clarity for developers building in the dark.</span>
      </footer>
    </main>
  )
}
