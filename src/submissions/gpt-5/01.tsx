export default function Submission() {
  const features = [
    {
      title: 'Runnable playbooks',
      body: 'Convert setup notes, deploy steps, and recovery paths into checked commands your whole team can execute.',
    },
    {
      title: 'Live dependency map',
      body: 'Watch services, queues, tokens, and caches light up before a change reaches a fragile environment.',
    },
    {
      title: 'Proof packets',
      body: 'Attach logs, screenshots, timings, and rollback notes to every release candidate before it leaves review.',
    },
  ]

  const testimonials = [
    {
      quote: 'Forge turned our release ritual from a Slack scavenger hunt into one crisp page.',
      name: 'Rowan Ellis',
      role: 'Head of Platform, Bloomwell',
    },
    {
      quote: 'Our junior developers ship with context now. That changed the mood of every review.',
      name: 'Mika Chen',
      role: 'Staff Engineer, Quaybase',
    },
    {
      quote: 'The proof packets are the first artifact our SRE team actually asks product engineers to bring.',
      name: 'Arun Mehta',
      role: 'Reliability Lead, Softgrid',
    },
  ]

  return (
    <main className="min-h-screen bg-[#fbf7ea] text-[#16211b]">
      <section className="relative overflow-hidden border-b border-[#16211b]/10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(22,33,27,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(22,33,27,0.06)_1px,transparent_1px)] bg-[size:36px_36px]" />
        <div className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-[#b6f35c]/60 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-[#8bd7ff]/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-7 sm:px-10 lg:px-12">
          <nav className="flex items-center justify-between rounded-full border border-[#16211b]/10 bg-white/60 px-5 py-4 shadow-sm backdrop-blur">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#16211b] font-mono text-sm font-bold text-[#b6f35c]">
                F
              </span>
              <span className="text-lg font-black tracking-[-0.05em]">Forge</span>
            </div>
            <span className="hidden font-mono text-xs uppercase tracking-[0.25em] text-[#546056] sm:block">
              Developer Field Kit
            </span>
          </nav>

          <div className="grid min-h-[690px] items-center gap-12 py-20 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="mb-6 w-fit rounded-full bg-[#dfffa0] px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.22em]">
                Build Work You Can Point At
              </p>
              <h1 className="max-w-4xl text-6xl font-black leading-[0.9] tracking-[-0.08em] sm:text-8xl">
                Your team&apos;s delivery lab notebook.
              </h1>
              <p className="mt-7 max-w-2xl text-xl leading-9 text-[#4f5b52]">
                Forge gives developers a bright shared workspace for commands,
                dependencies, and release evidence, so shipping feels observed
                instead of guessed.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#features"
                  className="rounded-full bg-[#16211b] px-8 py-4 text-center font-mono text-sm font-bold uppercase tracking-[0.18em] text-[#fbf7ea] shadow-[0_18px_45px_rgba(22,33,27,0.22)]"
                >
                  Start a Run
                </a>
                <a
                  href="#proof"
                  className="rounded-full border border-[#16211b]/15 bg-white/70 px-8 py-4 text-center font-mono text-sm font-bold uppercase tracking-[0.18em]"
                >
                  Read Stories
                </a>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-[#16211b]/10 bg-white/70 p-5 shadow-[0_30px_80px_rgba(22,33,27,0.15)] backdrop-blur">
              <div className="rounded-[2rem] bg-[#16211b] p-6 text-[#fbf7ea]">
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#b6f35c]">
                    Today&apos;s run
                  </span>
                  <span className="rounded-full bg-[#b6f35c] px-3 py-1 text-xs font-bold text-[#16211b]">
                    verified
                  </span>
                </div>
                <div className="space-y-4">
                  {[
                    ['Plan', '9 steps captured'],
                    ['Graph', '14 dependencies'],
                    ['Release', '2 approvals left'],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl bg-white/8 p-5">
                      <div className="text-sm text-[#aeb7ad]">{label}</div>
                      <div className="mt-2 text-3xl font-black tracking-[-0.05em]">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-2xl bg-[#dfffa0] p-5 text-[#16211b]">
                  <div className="font-mono text-xs uppercase tracking-[0.2em]">
                    next command
                  </div>
                  <div className="mt-3 font-mono text-sm">forge ship --with-proof</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#66725f]">
            Practical by design
          </p>
          <h2 className="text-4xl font-black leading-none tracking-[-0.06em] sm:text-6xl">
            Delivery knowledge that survives the sprint.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="rounded-[2rem] border border-[#16211b]/10 bg-white/70 p-7 shadow-sm"
            >
              <div className="mb-12 font-mono text-sm font-bold text-[#7ba52e]">
                {(index + 1).toString().padStart(2, '0')}
              </div>
              <h3 className="text-2xl font-black tracking-[-0.04em]">{feature.title}</h3>
              <p className="mt-4 leading-7 text-[#5e695f]">{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="proof" className="bg-[#16211b] px-6 py-20 text-[#fbf7ea] sm:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-3xl text-4xl font-black leading-none tracking-[-0.06em] sm:text-6xl">
              Teams use Forge when release memory matters.
            </h2>
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#b6f35c]">
              3 field notes
            </span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <figure key={item.name} className="rounded-[2rem] bg-white/8 p-7">
                <blockquote className="text-xl leading-8 text-white">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 border-t border-white/10 pt-5">
                  <div className="font-bold">{item.name}</div>
                  <div className="mt-1 text-sm text-[#aeb7ad]">{item.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-[#657063] sm:px-10 md:flex-row md:items-center md:justify-between lg:px-12">
        <span className="font-black tracking-[-0.04em] text-[#16211b]">Forge</span>
        <span>Runnable delivery memory for software teams.</span>
      </footer>
    </main>
  )
}
