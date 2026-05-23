export default function Submission() {
  const features = [
    {
      title: 'Command recipes',
      body: 'Turn fragile wiki instructions into versioned workflows that run the same way for every developer.',
    },
    {
      title: 'Dependency heatmaps',
      body: 'See which services, caches, secrets, and queues are touched before a change reaches review.',
    },
    {
      title: 'Release locks',
      body: 'Freeze every passing build with its inputs, outputs, and environment facts attached.',
    },
  ]

  const testimonials = [
    {
      quote: 'The first time Forge explained a broken staging deploy, the whole team went quiet.',
      name: 'Nia Brooks',
      role: 'Engineering Director, AxisKit',
    },
    {
      quote: 'It feels opinionated in the places our homemade scripts were dangerously polite.',
      name: 'Jon Bell',
      role: 'Founder, Patchplane',
    },
    {
      quote: 'New hires no longer ask which script is the real one. Forge made the path obvious.',
      name: 'Priya Nandakumar',
      role: 'Infra Engineer, Loomport',
    },
  ]

  return (
    <main className="min-h-screen bg-[#130f0d] text-[#f8efe2]">
      <section className="mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-12">
        <nav className="mb-8 flex items-center justify-between border-y border-[#f97316]/30 py-4">
          <div className="text-2xl font-black uppercase tracking-[-0.08em] text-orange-300">
            Forge
          </div>
          <div className="hidden gap-8 font-mono text-xs uppercase tracking-[0.25em] text-orange-100/60 sm:flex">
            <span>Build</span>
            <span>Trace</span>
            <span>Release</span>
          </div>
        </nav>

        <div className="grid min-h-[650px] border-b border-orange-300/20 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col justify-center border-orange-300/20 py-16 lg:border-r lg:pr-12">
            <div className="mb-6 w-fit border border-orange-300/30 bg-orange-400/10 px-3 py-2 font-mono text-xs uppercase tracking-[0.3em] text-orange-200">
              Developer operations without ceremony
            </div>
            <h1 className="text-6xl font-black uppercase leading-[0.82] tracking-[-0.09em] text-[#fff8ed] sm:text-8xl lg:text-9xl">
              Strike. Shape. Ship.
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-9 text-[#d6c6b2]">
              Forge is a dark theme command layer for teams that want builds,
              local environments, and releases to feel deliberate instead of
              improvised.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#features"
                className="bg-orange-300 px-8 py-4 text-center font-mono text-sm font-bold uppercase tracking-[0.18em] text-[#130f0d]"
              >
                Forge a Workflow
              </a>
              <a
                href="#proof"
                className="border border-orange-300/40 px-8 py-4 text-center font-mono text-sm font-bold uppercase tracking-[0.18em] text-orange-100"
              >
                Read the Room
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center py-16 lg:pl-12">
            <div className="absolute inset-8 bg-orange-500/10 blur-3xl" />
            <div className="relative w-full max-w-md border border-orange-200/20 bg-[#1c1511] p-5 shadow-[16px_16px_0_rgba(251,146,60,0.15)]">
              <div className="mb-5 grid grid-cols-4 gap-2">
                {Array.from({ length: 16 }).map((_, index) => (
                  <span
                    key={index}
                    className={`h-12 border border-orange-300/20 ${
                      index % 5 === 0 ? 'bg-orange-300' : 'bg-orange-300/10'
                    }`}
                  />
                ))}
              </div>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between border-t border-orange-300/20 pt-4">
                  <span className="text-orange-200">run integrity</span>
                  <span className="text-orange-300">99.8%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-200">setup drift</span>
                  <span className="text-orange-300">-73%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-200">trace depth</span>
                  <span className="text-orange-300">full</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
        <div className="mb-8 grid gap-5 md:grid-cols-[0.85fr_1.15fr]">
          <h2 className="text-4xl font-black uppercase leading-none tracking-[-0.07em] text-orange-200 sm:text-6xl">
            Tooling with a spine.
          </h2>
          <p className="text-lg leading-8 text-[#d6c6b2]">
            Forge exposes the hidden machinery of delivery and gives teams a
            shared surface for the work that usually lives in shell history.
          </p>
        </div>
        <div className="grid border border-orange-300/20 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="border-b border-orange-300/20 p-7 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <h3 className="text-2xl font-black uppercase tracking-[-0.04em] text-[#fff8ed]">
                {feature.title}
              </h3>
              <p className="mt-5 leading-7 text-[#c3ad96]">{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="proof" className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-12">
        <div className="bg-[#f8efe2] p-5 text-[#130f0d] sm:p-8 lg:p-10">
          <div className="mb-8 flex items-end justify-between gap-6">
            <h2 className="max-w-3xl text-4xl font-black uppercase leading-none tracking-[-0.07em] sm:text-6xl">
              Proof from the people holding the pager.
            </h2>
            <span className="hidden font-mono text-xs uppercase tracking-[0.25em] text-[#8a4b22] md:block">
              03 teams
            </span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((item) => (
              <figure key={item.name} className="border border-[#130f0d]/20 p-6">
                <blockquote className="text-xl font-semibold leading-8">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-8 font-mono text-xs uppercase tracking-[0.18em]">
                  <div>{item.name}</div>
                  <div className="mt-2 text-[#8a4b22]">{item.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-orange-300/20 px-5 py-8 font-mono text-xs uppercase tracking-[0.2em] text-orange-100/50 sm:px-8 md:flex-row md:justify-between lg:px-12">
        <span>Forge</span>
        <span>Make every build explain itself.</span>
      </footer>
    </main>
  )
}
