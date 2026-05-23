export default function Submission() {
  const features = [
    {
      title: 'Spec sync',
      body: 'Keep OpenAPI, Terraform, and README definitions aligned with a single source of truth.',
    },
    {
      title: 'Preview sandboxes',
      body: 'Spin ephemeral environments from any branch in under ninety seconds.',
    },
    {
      title: 'Review gates',
      body: 'Block merges until tests, lint, and security scans pass your custom policy.',
    },
  ]

  const testimonials = [
    {
      quote: 'Our design and backend teams finally agree on what shipped because Forge shows one truth.',
      name: 'Clara Mendez',
      role: 'Engineering Manager, Serif Labs',
    },
    {
      quote: 'Preview sandboxes cut our QA cycle in half. That number is not marketing.',
      name: 'Tom Bradley',
      role: 'VP Engineering, Halcyon',
    },
    {
      quote: 'Review gates replaced a spreadsheet nobody updated. I consider that a win.',
      name: 'Yuki Tanaka',
      role: 'Tech Lead, Meridian Apps',
    },
  ]

  return (
    <main className="min-h-screen bg-[#faf9f7] text-[#1a1a1a]">
      {/* Hero */}
      <section className="border-b border-[#1a1a1a]">
        <div className="mx-auto max-w-5xl px-8 py-6 sm:px-12">
          <header className="flex items-baseline justify-between">
            <span className="text-2xl font-light tracking-[-0.04em]">Forge</span>
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#888]">
              Developer tool
            </span>
          </header>
        </div>

        <div className="mx-auto max-w-5xl px-8 pb-28 pt-16 sm:px-12 sm:pt-24">
          <h1 className="max-w-4xl text-[2.75rem] font-light leading-[1.12] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
            Clarity for every
            <br />
            <span className="font-normal italic">release</span> you ship.
          </h1>
          <p className="mt-10 max-w-lg text-lg font-light leading-[1.7] text-[#555]">
            Forge unifies specs, sandboxes, and review policy so your team moves from idea to
            production without losing the thread.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <a
              href="#"
              className="bg-[#1a1a1a] px-8 py-4 text-sm font-medium tracking-wide text-white transition hover:bg-[#333]"
            >
              Request access
            </a>
            <a
              href="#"
              className="group flex items-center gap-2 text-sm font-medium text-[#1a1a1a] underline decoration-[#ccc] underline-offset-4 transition hover:decoration-[#1a1a1a]"
            >
              Watch overview
              <span className="transition group-hover:translate-x-0.5" aria-hidden>
                ↗
              </span>
            </a>
          </div>
        </div>

        <div className="h-px w-full bg-[#1a1a1a]" />
        <div className="mx-auto grid max-w-5xl grid-cols-2 divide-x divide-[#1a1a1a] border-b border-[#1a1a1a] sm:grid-cols-4">
          {['Specs', 'Sandboxes', 'Gates', 'Logs'].map((label) => (
            <div
              key={label}
              className="px-8 py-5 text-center text-[11px] font-medium uppercase tracking-[0.15em] text-[#888] sm:py-6"
            >
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-28">
        <div className="mx-auto max-w-5xl px-8 sm:px-12">
          <div className="mb-20 grid gap-8 border-b border-[#e0e0e0] pb-12 sm:grid-cols-2">
            <h2 className="text-3xl font-light tracking-[-0.02em] sm:text-4xl">
              What Forge handles
            </h2>
            <p className="self-end text-base font-light leading-relaxed text-[#666]">
              Three focused modules. No dashboard sprawl. Each one solves one problem completely.
            </p>
          </div>

          <div className="space-y-0 divide-y divide-[#e0e0e0]">
            {features.map((f, i) => (
              <article
                key={f.title}
                className="grid gap-6 py-12 sm:grid-cols-[4rem_1fr] sm:gap-12"
              >
                <span className="text-5xl font-extralight text-[#ddd]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-xl font-normal tracking-[-0.02em]">{f.title}</h3>
                  <p className="mt-4 max-w-md text-base font-light leading-relaxed text-[#666]">
                    {f.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-[#1a1a1a] bg-[#1a1a1a] py-28 text-[#faf9f7]">
        <div className="mx-auto max-w-5xl px-8 sm:px-12">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#888]">
            Testimonials
          </p>
          <h2 className="mt-4 text-3xl font-light tracking-[-0.02em] sm:text-4xl">
            Trusted by disciplined teams.
          </h2>

          <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex flex-col">
                <blockquote className="flex-1 text-base font-light leading-[1.75] text-[#ccc]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-10 border-t border-[#333] pt-6">
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="mt-1 text-xs text-[#777]">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-8 py-16 sm:flex-row sm:items-end sm:justify-between sm:px-12">
          <div>
            <p className="text-3xl font-light tracking-[-0.03em]">Forge</p>
            <p className="mt-3 text-sm font-light text-[#888]">
              © 2026 Forge Inc. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-10 gap-y-3 text-sm font-light text-[#555]">
            <a href="#" className="transition hover:text-[#1a1a1a]">
              Privacy
            </a>
            <a href="#" className="transition hover:text-[#1a1a1a]">
              Terms
            </a>
            <a href="#" className="transition hover:text-[#1a1a1a]">
              Contact
            </a>
            <a href="#" className="transition hover:text-[#1a1a1a]">
              Careers
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
