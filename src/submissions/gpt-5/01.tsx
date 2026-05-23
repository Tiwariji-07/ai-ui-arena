export default function Submission() {
  const features = [
    {
      title: 'Blueprint Pipelines',
      body: 'Describe the release path once, then let Forge turn every branch into a predictable build with clear checkpoints.',
    },
    {
      title: 'Local Truth',
      body: 'Mirror production constraints on your machine without spinning up a maze of scripts, toggles, and tribal notes.',
    },
    {
      title: 'Failure Replay',
      body: 'Capture broken runs as durable traces so your team can replay the exact environment, logs, and inputs.',
    },
  ]

  const testimonials = [
    {
      quote: 'Forge made our build system feel like a product instead of folklore.',
      name: 'Mara Singh',
      role: 'Platform Lead, Northstar Labs',
    },
    {
      quote: 'We cut onboarding from a week to an afternoon because every workflow became visible.',
      name: 'Theo Grant',
      role: 'Staff Engineer, Cairn',
    },
    {
      quote: 'The replay traces changed how we debug. Nobody argues about what failed anymore.',
      name: 'Lin Ortega',
      role: 'DevEx Manager, MonoWorks',
    },
  ]

  return (
    <main className="min-h-screen bg-[#07110f] text-slate-100">
      <section className="relative overflow-hidden border-b border-emerald-300/10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(52,211,153,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(52,211,153,0.08)_1px,transparent_1px)] bg-[size:52px_52px]" />
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl" />

        <div className="relative mx-auto flex min-h-[720px] max-w-7xl flex-col px-6 py-8 sm:px-10 lg:px-12">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl border border-emerald-300/30 bg-emerald-300/10 font-mono text-sm text-emerald-200">
                F
              </div>
              <span className="font-mono text-sm uppercase tracking-[0.35em] text-emerald-100/80">
                Forge
              </span>
            </div>
            <span className="rounded-full border border-emerald-300/20 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-emerald-100/70">
              Dev Toolchain
            </span>
          </nav>

          <div className="grid flex-1 items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-5 font-mono text-sm uppercase tracking-[0.35em] text-emerald-300">
                Ship from a clean fire
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl">
                Build systems your team can actually trust.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                Forge gives developers one dark, readable command center for
                builds, environments, traces, and release confidence.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#features"
                  className="rounded-full bg-emerald-300 px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.2em] text-[#07110f] shadow-[0_0_40px_rgba(110,231,183,0.28)]"
                >
                  Start Forging
                </a>
                <a
                  href="#proof"
                  className="rounded-full border border-emerald-200/25 px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.2em] text-emerald-100"
                >
                  See Proof
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-emerald-200/15 bg-black/40 p-4 shadow-2xl shadow-emerald-950/50 backdrop-blur">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#091714] p-5 font-mono text-sm">
                <div className="mb-5 flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-300" />
                </div>
                {[
                  ['forge plan', 'environment locked'],
                  ['forge build --trace', '18 services compiled'],
                  ['forge replay failed-run-82', 'failure isolated'],
                  ['forge release', 'ready for review'],
                ].map(([command, result]) => (
                  <div key={command} className="mb-4 rounded-xl bg-white/[0.03] p-4">
                    <div className="text-emerald-300">$ {command}</div>
                    <div className="mt-2 text-slate-400">ok: {result}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            A forge for repeatable engineering work.
          </h2>
          <p className="max-w-sm text-slate-400">
            Less invisible setup. Fewer heroic fixes. More releases that behave
            exactly like the last one.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="rounded-[1.75rem] border border-emerald-200/10 bg-emerald-50/[0.03] p-7"
            >
              <div className="mb-10 font-mono text-xs text-emerald-300">
                0{index + 1}
              </div>
              <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="proof" className="bg-emerald-300 px-6 py-20 text-[#07110f] sm:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-4xl font-semibold tracking-[-0.04em]">
            Trusted by teams who maintain the sharp edges.
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <figure key={item.name} className="rounded-[1.5rem] bg-[#07110f] p-7 text-white">
                <blockquote className="text-xl leading-8">“{item.quote}”</blockquote>
                <figcaption className="mt-8">
                  <div className="font-semibold text-emerald-100">{item.name}</div>
                  <div className="mt-1 text-sm text-emerald-200/60">{item.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-10 text-sm text-slate-500 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-12">
        <span className="font-mono uppercase tracking-[0.3em] text-emerald-200">Forge</span>
        <span>Builds, environments, and traces for developers who ship.</span>
      </footer>
    </main>
  )
}
