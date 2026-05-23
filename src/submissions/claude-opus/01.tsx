const palette = {
  cream: '#f4efe1',
  creamDeep: '#ebe4d0',
  forest: '#0f2a1c',
  leaf: '#1f5436',
  moss: '#3f6f50',
  lime: '#c6e552',
  limeDeep: '#a7c93a',
  bark: '#5c4a33',
  sand: '#e0d4b3',
}

function Leaf({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 21c0-8 6-14 14-14-1 9-6 14-14 14z" />
      <path d="M5 21 19 7" />
    </svg>
  )
}

function ArrowRight({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  )
}

function Sprout() {
  return (
    <svg viewBox="0 0 120 120" className="h-20 w-20" fill="none">
      <path
        d="M60 100V60"
        stroke={palette.forest}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M60 70c0-14-12-22-26-22 0 14 12 26 26 26z"
        fill={palette.lime}
        stroke={palette.forest}
        strokeWidth="2"
      />
      <path
        d="M60 60c0-12 10-22 24-22 0 14-10 24-24 24z"
        fill={palette.leaf}
        stroke={palette.forest}
        strokeWidth="2"
      />
      <ellipse cx="60" cy="104" rx="30" ry="6" fill={palette.creamDeep} />
    </svg>
  )
}

function Hive() {
  return (
    <svg viewBox="0 0 120 120" className="h-20 w-20" fill="none">
      <path
        d="M40 40h40l16 28-16 28H40L24 68z"
        fill={palette.lime}
        stroke={palette.forest}
        strokeWidth="2"
      />
      <path
        d="M40 40h40M40 96h40M24 68h72"
        stroke={palette.forest}
        strokeWidth="2"
      />
      <circle cx="60" cy="54" r="4" fill={palette.forest} />
      <circle cx="60" cy="82" r="4" fill={palette.forest} />
    </svg>
  )
}

function Sun() {
  return (
    <svg viewBox="0 0 120 120" className="h-20 w-20" fill="none">
      <circle
        cx="60"
        cy="60"
        r="22"
        fill={palette.lime}
        stroke={palette.forest}
        strokeWidth="2"
      />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * Math.PI) / 6
        const x1 = 60 + Math.cos(a) * 32
        const y1 = 60 + Math.sin(a) * 32
        const x2 = 60 + Math.cos(a) * 46
        const y2 = 60 + Math.sin(a) * 46
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={palette.forest}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        )
      })}
    </svg>
  )
}

const features = [
  {
    icon: <Sprout />,
    tag: '01 · scaffold',
    title: 'Plant a project.',
    body: 'A single command grows a complete stack — types, tests, CI, and a deploy pipeline already wired to your cloud.',
  },
  {
    icon: <Hive />,
    tag: '02 · build',
    title: 'Tend the rows.',
    body: 'A focused workspace with live previews, type-safe migrations and a code review that reads diffs the way humans do.',
  },
  {
    icon: <Sun />,
    tag: '03 · ship',
    title: 'Harvest the build.',
    body: 'Push to production with one command. Previews on every branch, instant rollbacks, zero downtime — by default.',
  },
]

const testimonials = [
  {
    quote:
      'Forge replaced a two-week setup with a fifteen-minute walk. Our smallest team now ships like our biggest one.',
    name: 'Mira Okafor',
    role: 'Staff engineer, Linen',
    initials: 'MO',
  },
  {
    quote:
      'It feels like the tool finally caught up with the way I think about software. Less yak shaving, more building.',
    name: 'Theo Liang',
    role: 'Founder, Quill & Co.',
    initials: 'TL',
  },
  {
    quote:
      'We replaced four tools with Forge. The diff was measured in months of saved engineering, not lines of YAML.',
    name: 'Aisha Verma',
    role: 'CTO, Garden Labs',
    initials: 'AV',
  },
]

export default function Submission() {
  return (
    <div
      className="min-h-screen w-full"
      style={{ background: palette.cream, color: palette.forest }}
    >
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            'radial-gradient(1200px 700px at 85% -10%, rgba(198,229,82,0.25), transparent 60%), radial-gradient(900px 600px at -10% 110%, rgba(31,84,54,0.18), transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-6 sm:px-10">
        <nav className="flex items-center justify-between pt-7">
          <div className="flex items-center gap-2.5">
            <div
              className="grid h-9 w-9 place-items-center rounded-full"
              style={{ background: palette.forest, color: palette.lime }}
            >
              <Leaf className="h-4 w-4" />
            </div>
            <span className="text-[18px] font-semibold tracking-tight">
              Forge
            </span>
          </div>
          <div className="hidden items-center gap-8 text-sm md:flex">
            <a className="opacity-80 hover:opacity-100">Garden</a>
            <a className="opacity-80 hover:opacity-100">Pricing</a>
            <a className="opacity-80 hover:opacity-100">Docs</a>
            <a className="opacity-80 hover:opacity-100">Changelog</a>
          </div>
          <button
            className="rounded-full px-4 py-2 text-sm font-medium"
            style={{ background: palette.forest, color: palette.lime }}
          >
            Open app
          </button>
        </nav>

        <section className="grid items-end gap-12 pt-20 pb-28 md:grid-cols-12 md:pt-32">
          <div className="md:col-span-7">
            <div
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs"
              style={{
                borderColor: 'rgba(15,42,28,0.18)',
                background: 'rgba(198,229,82,0.18)',
              }}
            >
              <span
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ background: palette.limeDeep }}
              />
              <span className="tracking-wide uppercase">
                v3.2 · the seedling release
              </span>
            </div>

            <h1 className="mt-6 text-[64px] leading-[0.95] font-medium tracking-[-0.03em] sm:text-[88px] md:text-[104px]">
              Forge
              <br />
              <span
                style={{
                  fontStyle: 'italic',
                  fontFamily: 'ui-serif, Georgia, serif',
                  color: palette.leaf,
                }}
              >
                your craft.
              </span>
            </h1>

            <p
              className="mt-7 max-w-[560px] text-[18px] leading-relaxed"
              style={{ color: 'rgba(15,42,28,0.78)' }}
            >
              A quiet, opinionated toolbelt for software gardeners. Forge takes
              care of the soil — scaffolding, builds, deploys — so you can
              spend your week actually growing something.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <button
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-medium transition-transform hover:-translate-y-[1px]"
                style={{
                  background: palette.forest,
                  color: palette.lime,
                  boxShadow: '0 18px 40px -22px rgba(15,42,28,0.7)',
                }}
              >
                Start growing
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <button
                className="inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-[15px] font-medium"
                style={{
                  borderColor: 'rgba(15,42,28,0.3)',
                  background: 'transparent',
                }}
              >
                <span
                  className="font-mono text-[12px]"
                  style={{ color: palette.leaf }}
                >
                  ~
                </span>
                npx forge init
              </button>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm opacity-70">
              <span>No credit card</span>
              <span style={{ color: 'rgba(15,42,28,0.3)' }}>·</span>
              <span>Free for solo gardeners</span>
              <span style={{ color: 'rgba(15,42,28,0.3)' }}>·</span>
              <span>Self-host friendly</span>
            </div>
          </div>

          <div className="md:col-span-5">
            <div
              className="relative overflow-hidden rounded-[28px] border p-5 font-mono text-[12.5px] leading-relaxed shadow-2xl"
              style={{
                background: '#0f2a1c',
                color: '#dfe9d2',
                borderColor: 'rgba(15,42,28,0.4)',
                boxShadow: '0 50px 100px -30px rgba(15,42,28,0.45)',
              }}
            >
              <div className="mb-4 flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]" />
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: palette.lime }}
                />
                <span className="ml-3 text-[11px] opacity-60">
                  ~/projects/orchard
                </span>
              </div>
              <div>
                <span style={{ color: palette.lime }}>$</span> forge new
                orchard --stack=ts,postgres
              </div>
              <div className="opacity-70">
                ✓ scaffolded 84 files in 1.2s
              </div>
              <div className="opacity-70">
                ✓ provisioned db · seeded 3 environments
              </div>
              <div className="mt-3">
                <span style={{ color: palette.lime }}>$</span> forge ship
              </div>
              <div className="opacity-70">
                ↗ deploying to fly · iad, sjc, fra
              </div>
              <div className="opacity-70">
                ↗ preview: orchard-pr-128.forge.app
              </div>
              <div className="mt-3">
                <span style={{ color: palette.lime }}>$</span>{' '}
                <span className="relative">
                  forge plant pricing-page
                  <span
                    className="ml-0.5 inline-block h-[14px] w-[7px] translate-y-[2px] animate-pulse"
                    style={{ background: palette.lime }}
                  />
                </span>
              </div>
            </div>

            <div
              className="mt-5 flex items-center justify-between rounded-2xl border px-5 py-4 text-sm"
              style={{
                borderColor: 'rgba(15,42,28,0.14)',
                background: palette.creamDeep,
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="grid h-8 w-8 place-items-center rounded-full text-[11px] font-medium"
                  style={{ background: palette.lime, color: palette.forest }}
                >
                  ★
                </span>
                <div className="leading-tight">
                  <div className="font-medium">12,400 builds today</div>
                  <div className="opacity-60">across 2,100 gardens</div>
                </div>
              </div>
              <span className="font-mono text-xs opacity-70">+18% w/w</span>
            </div>
          </div>
        </section>

        <section className="border-t pt-20 pb-24" style={{ borderColor: 'rgba(15,42,28,0.12)' }}>
          <div className="mb-14 flex items-end justify-between">
            <div>
              <div
                className="mb-3 inline-block rounded-full px-3 py-1 text-[11px] tracking-[0.18em] uppercase"
                style={{ background: palette.forest, color: palette.lime }}
              >
                what's inside
              </div>
              <h2 className="max-w-[640px] text-[40px] leading-[1.05] font-medium tracking-[-0.02em] sm:text-[52px]">
                Three tools, one quiet rhythm.
              </h2>
            </div>
            <p
              className="hidden max-w-[300px] text-sm md:block"
              style={{ color: 'rgba(15,42,28,0.7)' }}
            >
              We built Forge for the kind of teams who measure progress in
              ships, not in standups.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((f, i) => (
              <article
                key={i}
                className="group relative overflow-hidden rounded-[26px] border p-7 transition-transform hover:-translate-y-1"
                style={{
                  borderColor: 'rgba(15,42,28,0.12)',
                  background:
                    i === 1
                      ? palette.forest
                      : i === 2
                        ? palette.creamDeep
                        : '#fbf7ea',
                  color: i === 1 ? palette.lime : palette.forest,
                }}
              >
                <div
                  className="absolute -top-12 -right-12 h-44 w-44 rounded-full opacity-30"
                  style={{
                    background:
                      i === 1
                        ? 'rgba(198,229,82,0.35)'
                        : 'rgba(31,84,54,0.18)',
                  }}
                />
                <div className="relative">
                  <div className="mb-6">{f.icon}</div>
                  <div
                    className="mb-3 font-mono text-[11px] tracking-[0.18em] uppercase opacity-70"
                  >
                    {f.tag}
                  </div>
                  <h3 className="mb-3 text-[26px] leading-[1.1] font-medium tracking-[-0.01em]">
                    {f.title}
                  </h3>
                  <p
                    className="text-[15px] leading-relaxed"
                    style={{
                      color:
                        i === 1
                          ? 'rgba(223,233,210,0.8)'
                          : 'rgba(15,42,28,0.75)',
                    }}
                  >
                    {f.body}
                  </p>
                  <div className="mt-7 inline-flex items-center gap-2 text-sm font-medium">
                    Read the field guide
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t py-24" style={{ borderColor: 'rgba(15,42,28,0.12)' }}>
          <div className="mb-14 max-w-[720px]">
            <div
              className="mb-3 inline-block rounded-full border px-3 py-1 text-[11px] tracking-[0.18em] uppercase"
              style={{ borderColor: 'rgba(15,42,28,0.3)' }}
            >
              from the garden
            </div>
            <h2 className="text-[40px] leading-[1.05] font-medium tracking-[-0.02em] sm:text-[52px]">
              Teams who already grow with Forge.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="relative flex flex-col justify-between rounded-[24px] border p-7"
                style={{
                  borderColor: 'rgba(15,42,28,0.14)',
                  background: i === 1 ? palette.lime : '#fbf7ea',
                }}
              >
                <div
                  className="absolute top-5 right-6 font-serif text-[64px] leading-none"
                  style={{
                    color: i === 1 ? palette.forest : palette.lime,
                    opacity: i === 1 ? 0.45 : 1,
                  }}
                >
                  ”
                </div>
                <blockquote
                  className="text-[17px] leading-[1.55]"
                  style={{ color: palette.forest }}
                >
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  <span
                    className="grid h-10 w-10 place-items-center rounded-full text-sm font-medium"
                    style={{
                      background: i === 1 ? palette.forest : palette.lime,
                      color: i === 1 ? palette.lime : palette.forest,
                    }}
                  >
                    {t.initials}
                  </span>
                  <div className="leading-tight">
                    <div className="text-sm font-medium">{t.name}</div>
                    <div
                      className="text-xs"
                      style={{ color: 'rgba(15,42,28,0.65)' }}
                    >
                      {t.role}
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="my-12">
          <div
            className="relative overflow-hidden rounded-[32px] px-10 py-16 text-center md:px-16 md:py-20"
            style={{ background: palette.forest, color: palette.cream }}
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(600px 300px at 50% 0%, rgba(198,229,82,0.25), transparent 60%)',
              }}
            />
            <div className="relative">
              <h3 className="mx-auto max-w-[680px] text-[40px] leading-[1.05] font-medium tracking-[-0.02em] sm:text-[56px]">
                Stop watering YAML.
                <br />
                <span
                  style={{
                    fontFamily: 'ui-serif, Georgia, serif',
                    fontStyle: 'italic',
                    color: palette.lime,
                  }}
                >
                  Start shipping.
                </span>
              </h3>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <button
                  className="rounded-full px-6 py-3.5 text-[15px] font-medium"
                  style={{ background: palette.lime, color: palette.forest }}
                >
                  Get Forge free
                </button>
                <button
                  className="rounded-full border px-6 py-3.5 text-[15px] font-medium"
                  style={{
                    borderColor: 'rgba(244,239,225,0.3)',
                    color: palette.cream,
                  }}
                >
                  Talk to a gardener
                </button>
              </div>
            </div>
          </div>
        </section>

        <footer
          className="grid gap-10 border-t pt-14 pb-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]"
          style={{ borderColor: 'rgba(15,42,28,0.12)' }}
        >
          <div>
            <div className="flex items-center gap-2.5">
              <div
                className="grid h-9 w-9 place-items-center rounded-full"
                style={{ background: palette.forest, color: palette.lime }}
              >
                <Leaf className="h-4 w-4" />
              </div>
              <span className="text-[18px] font-semibold tracking-tight">
                Forge
              </span>
            </div>
            <p
              className="mt-4 max-w-[280px] text-sm"
              style={{ color: 'rgba(15,42,28,0.7)' }}
            >
              Made by a small team in Lisbon, Lagos and Lima. Built on
              borrowed time and a lot of espresso.
            </p>
          </div>
          {[
            {
              title: 'Product',
              items: ['Garden', 'Pricing', 'Changelog', 'Roadmap'],
            },
            {
              title: 'Learn',
              items: ['Docs', 'Field guide', 'Examples', 'Community'],
            },
            {
              title: 'Company',
              items: ['About', 'Careers', 'Contact', 'Manifesto'],
            },
          ].map((col) => (
            <div key={col.title}>
              <div className="mb-4 text-xs tracking-[0.18em] uppercase opacity-60">
                {col.title}
              </div>
              <ul className="space-y-2.5 text-sm">
                {col.items.map((it) => (
                  <li key={it} className="opacity-80 hover:opacity-100">
                    <a>{it}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </footer>
        <div
          className="flex flex-wrap items-center justify-between gap-3 border-t py-6 text-xs"
          style={{
            borderColor: 'rgba(15,42,28,0.12)',
            color: 'rgba(15,42,28,0.6)',
          }}
        >
          <div>© {new Date().getFullYear()} Forge Studio. All seeds reserved.</div>
          <div className="flex items-center gap-5">
            <a>Privacy</a>
            <a>Terms</a>
            <a>Security</a>
            <span className="font-mono">v3.2.1 · seedling</span>
          </div>
        </div>
      </div>
    </div>
  )
}
