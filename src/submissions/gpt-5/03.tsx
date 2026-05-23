export default function Submission() {
  const features = [
    {
      title: 'Calm queues',
      body: 'Group noisy tasks into readable lanes with owners, status, and the exact command that moved each item.',
    },
    {
      title: 'Context cards',
      body: 'Summarize logs, diffs, risks, and environment snapshots into compact cards engineers can review quickly.',
    },
    {
      title: 'Team rituals',
      body: 'Turn recurring build checks, release reviews, and postmortem steps into lightweight rituals that stay current.',
    },
  ]

  const testimonials = [
    {
      quote: 'Forge made release review feel like reading a well-kept journal instead of decoding a crime scene.',
      name: 'Talia Grant',
      role: 'Engineering Manager, Kindly Cloud',
    },
    {
      quote: 'It gave our frontend, backend, and platform teams a shared place to reason about the same launch.',
      name: 'Noah Ivers',
      role: 'Product Engineer, MeadowAPI',
    },
    {
      quote: 'We kept the rigor but lost the dread. That is rare for any tool near production.',
      name: 'Iris Walton',
      role: 'Release Coordinator, Papertrail Labs',
    },
  ]

  return (
    <main className="min-h-screen bg-[#f2ecff] text-[#251a3f]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[580px] bg-[#251a3f]" />
        <div className="absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full bg-[#ffcf5a]/50 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-7 sm:px-10 lg:px-12">
          <nav className="flex items-center justify-between rounded-[1.75rem] border border-white/15 bg-white/10 px-5 py-4 text-white backdrop-blur">
            <div className="text-2xl font-black tracking-[-0.08em]">Forge</div>
            <span className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#251a3f] sm:inline-flex">
              Human-friendly DevOps
            </span>
          </nav>

          <div className="grid min-h-[700px] items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="text-white">
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.28em] text-[#ffcf5a]">
                The gentle command center
              </p>
              <h1 className="max-w-4xl text-6xl font-black leading-[0.9] tracking-[-0.08em] sm:text-8xl">
                Developer workflows without the panic glow.
              </h1>
              <p className="mt-7 max-w-2xl text-xl leading-9 text-white/70">
                Forge helps teams collect commands, context, approvals, and
                release notes in a calmer workspace built for people who still
                love precise tooling.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#features"
                  className="rounded-2xl bg-[#ffcf5a] px-8 py-4 text-center font-mono text-sm font-bold uppercase tracking-[0.18em] text-[#251a3f]"
                >
                  Organize a Run
                </a>
                <a
                  href="#proof"
                  className="rounded-2xl border border-white/20 px-8 py-4 text-center font-mono text-sm font-bold uppercase tracking-[0.18em] text-white"
                >
                  Meet Teams
                </a>
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-[#fffaf0] p-5 shadow-[0_35px_90px_rgba(37,26,63,0.28)]">
              <div className="rounded-[2rem] border border-[#251a3f]/10 p-6">
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <div className="font-mono text-xs uppercase tracking-[0.24em] text-[#7c6a99]">
                      release desk
                    </div>
                    <div className="mt-2 text-3xl font-black tracking-[-0.06em]">
                      Tuesday launch
                    </div>
                  </div>
                  <span className="rounded-full bg-[#d8c8ff] px-3 py-1 text-sm font-bold">
                    calm
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    ['API migration', 'ready'],
                    ['Docs update', 'review'],
                    ['Rollback note', 'attached'],
                    ['Customer flag', 'scheduled'],
                  ].map(([label, status]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between rounded-2xl bg-[#f2ecff] px-5 py-4"
                    >
                      <span className="font-semibold">{label}</span>
                      <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#7c6a99]">
                        {status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12">
        <div className="mb-12 grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <h2 className="text-5xl font-black leading-[0.92] tracking-[-0.07em] sm:text-7xl">
            Softer surface. Serious delivery.
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-[#6d617d]">
            Forge gives engineering teams a welcoming place to manage the work
            between commit and production without hiding the technical detail.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-[2rem] bg-white p-7 shadow-[0_18px_60px_rgba(37,26,63,0.08)]"
            >
              <div className="mb-8 h-14 w-14 rounded-2xl bg-[#251a3f] shadow-[10px_10px_0_#ffcf5a]" />
              <h3 className="text-2xl font-black tracking-[-0.04em]">{feature.title}</h3>
              <p className="mt-4 leading-7 text-[#6d617d]">{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="proof" className="px-6 pb-20 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[#fffaf0] p-6 shadow-[0_20px_80px_rgba(37,26,63,0.1)] sm:p-10">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-4xl font-black leading-none tracking-[-0.06em] sm:text-6xl">
              Teams choose Forge when clarity is part of the culture.
            </h2>
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#7c6a99]">
              customer notes
            </span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <figure key={item.name} className="rounded-[1.75rem] bg-[#251a3f] p-7 text-white">
                <blockquote className="text-xl leading-8">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 border-t border-white/10 pt-5">
                  <div className="font-bold">{item.name}</div>
                  <div className="mt-1 text-sm text-white/50">{item.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-[#7c6a99] sm:px-10 md:flex-row md:items-center md:justify-between lg:px-12">
        <span className="font-black tracking-[-0.05em] text-[#251a3f]">Forge</span>
        <span>Calm workflow control for exacting developer teams.</span>
      </footer>
    </main>
  )
}
