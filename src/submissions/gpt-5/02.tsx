export default function Submission() {
  const features = [
    {
      title: 'Zero-drift terminals',
      body: 'Forge pins shells, secrets, runtimes, and service contracts so every build starts from the same metal.',
    },
    {
      title: 'Trace-first failures',
      body: 'Every broken task leaves behind a replayable record with commands, inputs, logs, and environment facts.',
    },
    {
      title: 'Release gates',
      body: 'Promote only the runs that pass the checks your team defines, with approvals and rollback notes attached.',
    },
  ]

  const testimonials = [
    {
      quote: 'Forge replaced three dashboards and the nervous ritual we had around deploy day.',
      name: 'Elena Park',
      role: 'VP Engineering, Boltframe',
    },
    {
      quote: 'The best part is how unforgiving it is about hidden state. Our builds finally tell the truth.',
      name: 'Miles Osei',
      role: 'Principal SRE, Rackline',
    },
    {
      quote: 'We debugged a two-week CI mystery in one afternoon because Forge had the whole run preserved.',
      name: 'Sofia Klein',
      role: 'Build Systems Lead, Northbay',
    },
  ]

  return (
    <main className="min-h-screen bg-[#08090d] text-[#f4f1e8]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(255,77,0,0.18),transparent_28%),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:auto,74px_74px]" />
        <div className="relative mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-12">
          <nav className="flex items-center justify-between border-b border-white/10 pb-6">
            <div className="font-mono text-sm uppercase tracking-[0.35em] text-[#ff6b2c]">
              Forge
            </div>
            <div className="hidden items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/45 sm:flex">
              <span className="h-2 w-2 rounded-full bg-[#ff6b2c]" />
              release control active
            </div>
          </nav>

          <div className="grid min-h-[710px] items-center gap-12 py-16 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="mb-8 inline-flex border border-[#ff6b2c]/40 bg-[#ff6b2c]/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.26em] text-[#ffb38e]">
                Industrial DevOps Console
              </div>
              <h1 className="text-6xl font-black uppercase leading-[0.82] tracking-[-0.09em] text-white sm:text-8xl lg:text-9xl">
                Heat for the whole pipeline.
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-9 text-[#b8b4aa]">
                Forge brings terminal runs, dependency state, failed traces,
                and release gates into a single high-contrast cockpit for teams
                that ship under pressure.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#features"
                  className="bg-[#ff6b2c] px-8 py-4 text-center font-mono text-sm font-bold uppercase tracking-[0.18em] text-[#08090d]"
                >
                  Ignite Build
                </a>
                <a
                  href="#proof"
                  className="border border-white/15 px-8 py-4 text-center font-mono text-sm font-bold uppercase tracking-[0.18em] text-white"
                >
                  Inspect Proof
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-5 border border-[#ff6b2c]/20" />
              <div className="relative border border-white/10 bg-[#111219] p-4 shadow-[22px_22px_0_rgba(255,107,44,0.12)]">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    ['build temp', '874deg'],
                    ['failed traces', '03'],
                    ['drift alerts', '00'],
                    ['release gate', 'armed'],
                  ].map(([label, value]) => (
                    <div key={label} className="border border-white/10 bg-black/30 p-5">
                      <div className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
                        {label}
                      </div>
                      <div className="mt-5 text-4xl font-black tracking-[-0.07em] text-[#ff6b2c]">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 border border-[#ff6b2c]/30 bg-[#ff6b2c]/10 p-5 font-mono text-sm">
                  <div className="text-[#ffb38e]">$ forge gate production</div>
                  <div className="mt-3 text-white/55">checks passed: 12 / 12</div>
                  <div className="mt-1 text-white/55">rollback bundle: ready</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
          <div className="mb-10 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <h2 className="text-5xl font-black uppercase leading-[0.86] tracking-[-0.08em] sm:text-7xl">
              Built for hot paths.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-[#b8b4aa]">
              Forge makes the hidden mechanics of delivery visible, strict, and
              easy to repeat without adding another vague dashboard to the stack.
            </p>
          </div>
          <div className="grid gap-px bg-white/10 md:grid-cols-3">
            {features.map((feature) => (
              <article key={feature.title} className="bg-[#08090d] p-7">
                <div className="mb-12 h-2 w-16 bg-[#ff6b2c]" />
                <h3 className="text-2xl font-black uppercase tracking-[-0.04em]">
                  {feature.title}
                </h3>
                <p className="mt-5 leading-7 text-[#b8b4aa]">{feature.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proof" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="max-w-3xl text-4xl font-black uppercase leading-none tracking-[-0.07em] sm:text-6xl">
            Operators trust the runbook they can replay.
          </h2>
          <span className="font-mono text-xs uppercase tracking-[0.26em] text-[#ff6b2c]">
            social proof
          </span>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.name} className="border border-white/10 bg-[#111219] p-7">
              <blockquote className="text-xl font-semibold leading-8">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 border-t border-white/10 pt-5 font-mono text-xs uppercase tracking-[0.16em]">
                <div className="text-[#ffb38e]">{item.name}</div>
                <div className="mt-2 text-white/40">{item.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-9 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 font-mono text-xs uppercase tracking-[0.22em] text-white/45 md:flex-row md:items-center md:justify-between">
          <span className="text-[#ff6b2c]">Forge</span>
          <span>Build heat. Trace truth. Release clean.</span>
        </div>
      </footer>
    </main>
  )
}
