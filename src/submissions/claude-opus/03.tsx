const m = {
  coal: '#0c0e12',
  iron: '#15191f',
  steel: '#1f252e',
  steelLight: '#2a3140',
  rivet: '#3a4252',
  paper: '#ece8df',
  paperDim: '#b8b3a8',
  molten: '#ff6b1a',
  ember: '#ffa84a',
  spark: '#ffd166',
  hot: '#ff3d00',
}

function Anvil({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M3 7h14l-2 3h-2v3h4l-2 4H6l-2-4h4v-3H6L3 7zm10 11h2v2h-2v-2zM9 18h2v2H9v-2z" />
    </svg>
  )
}

function HammerStrike() {
  return (
    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
      <path d="M14 2l8 8-3 3-3-3-9 9-3 1 1-3 9-9-3-3 3-3z" />
    </svg>
  )
}

function Diagonal({ color = m.molten }: { color?: string }) {
  return (
    <div
      className="h-2 w-full"
      style={{
        backgroundImage: `repeating-linear-gradient(45deg, ${color} 0 8px, transparent 8px 16px)`,
      }}
    />
  )
}

const features = [
  {
    no: 'N°01',
    stamp: 'IGNITE',
    title: 'Bring the heat.',
    body: 'A single command stokes a complete development environment. Compilers warm, databases primed, secrets vaulted — before your second sip of coffee.',
    spec: ['scaffold · 1.2s', '14 templates', 'mono · poly · solo'],
  },
  {
    no: 'N°02',
    stamp: 'STRIKE',
    title: 'Shape the metal.',
    body: 'A code workbench tuned for precision. Type-aware refactors, deterministic builds, and a review process that catches what humans miss.',
    spec: ['live preview', 'typed migrations', 'AI co-pilot'],
  },
  {
    no: 'N°03',
    stamp: 'QUENCH',
    title: 'Ship it hardened.',
    body: 'Multi-region deploys, immutable releases, automatic rollback on bad gauges. Every push is a piece of work — not a prayer.',
    spec: ['blue/green', 'zero-downtime', 'global edge'],
  },
]

const testimonials = [
  {
    quote:
      'We retired a forty-thousand-line deploy script and an ops engineer who hated their job. Both came back happier.',
    name: 'Henrietta Vogel',
    role: 'Director of Platform, Stahlwerk',
    plate: 'WORKS №7421',
  },
  {
    quote:
      'Forge has the weight of enterprise tooling without the bureaucracy. It feels like it was built by people who actually ship.',
    name: 'Caleb Mensah',
    role: 'Engineering Lead, Cinder Co.',
    plate: 'WORKS №3308',
  },
  {
    quote:
      'Our release cadence went from monthly to twice daily. Nothing else changed except the tool. Take that for what it is.',
    name: 'Yui Nakamura',
    role: 'VP Engineering, Embers',
    plate: 'WORKS №9152',
  },
]

export default function Submission() {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        background: m.coal,
        color: m.paper,
        fontFamily:
          "'Geist', ui-sans-serif, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 50% 0%, ${m.molten}25, transparent 60%),
            radial-gradient(ellipse 40% 30% at 90% 110%, ${m.hot}30, transparent 60%)
          `,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(${m.paper} 1px, transparent 1px),
            linear-gradient(90deg, ${m.paper} 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 sm:px-10">
        <Diagonal />
        <nav className="flex items-center justify-between py-5">
          <div className="flex items-center gap-3">
            <div
              className="grid h-10 w-10 place-items-center"
              style={{
                background: m.molten,
                color: m.coal,
                clipPath:
                  'polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)',
              }}
            >
              <Anvil className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div
                className="text-[18px] font-black tracking-[0.15em] uppercase"
                style={{ color: m.paper }}
              >
                Forge
              </div>
              <div
                className="font-mono text-[9px] tracking-[0.3em] uppercase"
                style={{ color: m.ember }}
              >
                est · MMXXIV · works
              </div>
            </div>
          </div>
          <div className="hidden items-center gap-7 font-mono text-[11px] tracking-[0.25em] uppercase md:flex">
            <a className="opacity-70 hover:opacity-100">/foundry</a>
            <a className="opacity-70 hover:opacity-100">/specs</a>
            <a className="opacity-70 hover:opacity-100">/docs</a>
            <a className="opacity-70 hover:opacity-100">/log</a>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="hidden px-4 py-2.5 font-mono text-[11px] tracking-[0.25em] uppercase md:inline-block"
              style={{
                background: 'transparent',
                color: m.paper,
                border: `1px solid ${m.rivet}`,
              }}
            >
              sign in
            </button>
            <button
              className="px-5 py-2.5 font-mono text-[11px] font-bold tracking-[0.25em] uppercase"
              style={{
                background: m.molten,
                color: m.coal,
                clipPath:
                  'polygon(0 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%)',
              }}
            >
              open works ›
            </button>
          </div>
        </nav>

        <section className="relative grid gap-10 pt-20 pb-32 md:grid-cols-12 md:pt-28">
          <div className="md:col-span-7">
            <div className="flex items-center gap-4 font-mono text-[11px] tracking-[0.3em] uppercase">
              <span
                className="inline-block h-px w-12"
                style={{ background: m.molten }}
              />
              <span style={{ color: m.molten }}>
                ◆ release · 3.2 · the bellows
              </span>
            </div>

            <h1
              className="mt-7 text-[64px] leading-[0.9] font-black tracking-[-0.04em] uppercase sm:text-[96px] md:text-[124px]"
              style={{ color: m.paper }}
            >
              Built
              <br />
              in the
              <br />
              <span
                style={{
                  color: m.molten,
                  textShadow: `0 0 40px ${m.hot}80`,
                }}
              >
                fire.
              </span>
            </h1>

            <p
              className="mt-8 max-w-[540px] text-[17px] leading-relaxed"
              style={{ color: m.paperDim }}
            >
              Forge is a heavy-duty toolchain for teams who treat shipping
              software as a craft. Scaffold, build, deploy — with the weight
              of industrial tooling and the tempo of a startup.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <button
                className="group inline-flex items-center gap-3 px-7 py-4 font-mono text-[12px] font-bold tracking-[0.25em] uppercase transition-transform hover:-translate-y-[1px]"
                style={{
                  background: m.molten,
                  color: m.coal,
                  boxShadow: `0 18px 40px -20px ${m.hot}, inset 0 -3px 0 ${m.hot}`,
                  clipPath:
                    'polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)',
                }}
              >
                <HammerStrike />
                start the forge
              </button>
              <button
                className="inline-flex items-center gap-3 px-7 py-4 font-mono text-[12px] font-bold tracking-[0.25em] uppercase"
                style={{
                  background: 'transparent',
                  color: m.paper,
                  border: `1px solid ${m.rivet}`,
                }}
              >
                read the specs
                <span style={{ color: m.ember }}>›</span>
              </button>
            </div>

            <div
              className="mt-12 flex flex-wrap gap-6 border-t pt-6 font-mono text-[10px] tracking-[0.3em] uppercase"
              style={{ borderColor: m.steelLight, color: m.paperDim }}
            >
              <span>SOC 2 · type II</span>
              <span style={{ color: m.rivet }}>·</span>
              <span>ISO 27001</span>
              <span style={{ color: m.rivet }}>·</span>
              <span>self-hosted</span>
              <span style={{ color: m.rivet }}>·</span>
              <span>open core</span>
            </div>
          </div>

          <div className="md:col-span-5">
            <div
              className="relative overflow-hidden border"
              style={{
                background: m.iron,
                borderColor: m.steelLight,
              }}
            >
              <div
                className="flex items-center justify-between px-5 py-3 font-mono text-[10px] tracking-[0.25em] uppercase"
                style={{
                  background: m.steel,
                  borderBottom: `1px solid ${m.steelLight}`,
                  color: m.paperDim,
                }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="inline-block h-1.5 w-1.5 animate-pulse rounded-full"
                    style={{ background: m.molten }}
                  />
                  furnace · live
                </div>
                <span>temp · 1480°C</span>
              </div>

              <div className="space-y-3 p-6 font-mono text-[12px] leading-relaxed">
                <div>
                  <span style={{ color: m.ember }}>$</span>{' '}
                  <span style={{ color: m.paper }}>
                    forge new mill --stack go,postgres
                  </span>
                </div>
                <div style={{ color: m.paperDim }}>
                  ▸ scaffolding · 142 files · 1.4s
                </div>
                <div style={{ color: m.paperDim }}>
                  ▸ provisioning · 3 environments
                </div>
                <div style={{ color: m.paperDim }}>
                  ▸ casting CI pipeline · ready
                </div>
                <div className="pt-2">
                  <span style={{ color: m.ember }}>$</span>{' '}
                  <span style={{ color: m.paper }}>forge strike</span>
                </div>
                <div style={{ color: m.paperDim }}>
                  ▸ compiled · 0 errors · 0 warnings
                </div>
                <div style={{ color: m.paperDim }}>
                  ▸ tests · 412 / 412 ✓
                </div>
                <div className="pt-2">
                  <span style={{ color: m.ember }}>$</span>{' '}
                  <span style={{ color: m.paper }}>
                    forge ship --region all
                  </span>
                </div>
                <div style={{ color: m.molten }}>
                  ▸ rolling · iad · sjc · fra · hkg
                </div>
                <div style={{ color: m.spark }}>
                  ▸ quenched. live in 4.2s.
                </div>
                <div className="pt-1">
                  <span style={{ color: m.ember }}>$</span>{' '}
                  <span
                    className="inline-block h-3 w-2 align-middle"
                    style={{ background: m.molten }}
                  />
                </div>
              </div>

              <div
                className="grid grid-cols-3 border-t font-mono text-[10px] tracking-[0.2em] uppercase"
                style={{
                  borderColor: m.steelLight,
                  background: m.steel,
                  color: m.paperDim,
                }}
              >
                <div
                  className="border-r px-4 py-3"
                  style={{ borderColor: m.steelLight }}
                >
                  <div
                    className="text-[16px] font-bold"
                    style={{ color: m.molten }}
                  >
                    4.2s
                  </div>
                  <div className="mt-0.5">ship</div>
                </div>
                <div
                  className="border-r px-4 py-3"
                  style={{ borderColor: m.steelLight }}
                >
                  <div
                    className="text-[16px] font-bold"
                    style={{ color: m.ember }}
                  >
                    142
                  </div>
                  <div className="mt-0.5">files</div>
                </div>
                <div className="px-4 py-3">
                  <div
                    className="text-[16px] font-bold"
                    style={{ color: m.spark }}
                  >
                    99.99
                  </div>
                  <div className="mt-0.5">% up</div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <Diagonal />
              <span
                className="shrink-0 font-mono text-[10px] tracking-[0.3em] uppercase"
                style={{ color: m.molten }}
              >
                heavy duty
              </span>
              <Diagonal />
            </div>
          </div>
        </section>

        <Diagonal />
        <section className="relative py-24">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase">
                <span
                  className="inline-block h-px w-8"
                  style={{ background: m.molten }}
                />
                <span style={{ color: m.molten }}>chapter · 02</span>
              </div>
              <h2
                className="mt-4 max-w-[720px] text-[44px] leading-[0.95] font-black tracking-[-0.03em] uppercase sm:text-[72px]"
                style={{ color: m.paper }}
              >
                Three stations.
                <br />
                <span style={{ color: m.molten }}>One workshop.</span>
              </h2>
            </div>
            <p
              className="max-w-[300px] font-mono text-[12px] leading-relaxed tracking-wide"
              style={{ color: m.paperDim }}
            >
              Every Forge license is a license to all three. No add-ons, no
              upcharges, no surprise consumption pricing.
            </p>
          </div>

          <div className="grid gap-0 md:grid-cols-3">
            {features.map((f, i) => (
              <article
                key={i}
                className="relative border p-8 transition-colors md:-mr-px"
                style={{
                  background: i === 1 ? m.iron : m.steel,
                  borderColor: m.steelLight,
                }}
              >
                <div className="flex h-3 w-3 absolute top-3 left-3 rounded-full"
                  style={{ background: m.rivet }} />
                <div className="flex h-3 w-3 absolute top-3 right-3 rounded-full"
                  style={{ background: m.rivet }} />
                <div className="flex h-3 w-3 absolute bottom-3 left-3 rounded-full"
                  style={{ background: m.rivet }} />
                <div className="flex h-3 w-3 absolute bottom-3 right-3 rounded-full"
                  style={{ background: m.rivet }} />

                <div className="flex items-center justify-between">
                  <span
                    className="font-mono text-[11px] tracking-[0.3em] uppercase"
                    style={{ color: m.molten }}
                  >
                    {f.no}
                  </span>
                  <span
                    className="px-2 py-0.5 font-mono text-[9px] tracking-[0.3em] uppercase"
                    style={{
                      background: m.molten,
                      color: m.coal,
                    }}
                  >
                    {f.stamp}
                  </span>
                </div>

                <h3
                  className="mt-12 text-[32px] leading-[1] font-black tracking-[-0.02em] uppercase"
                  style={{ color: m.paper }}
                >
                  {f.title}
                </h3>
                <p
                  className="mt-5 text-[14px] leading-relaxed"
                  style={{ color: m.paperDim }}
                >
                  {f.body}
                </p>

                <ul
                  className="mt-10 space-y-2 border-t pt-5 font-mono text-[11px] tracking-[0.15em] uppercase"
                  style={{ borderColor: m.steelLight }}
                >
                  {f.spec.map((s) => (
                    <li
                      key={s}
                      className="flex items-center gap-2"
                      style={{ color: m.paperDim }}
                    >
                      <span style={{ color: m.ember }}>›</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <Diagonal />
        <section className="relative py-24">
          <div className="mb-14 max-w-[760px]">
            <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase">
              <span
                className="inline-block h-px w-8"
                style={{ background: m.molten }}
              />
              <span style={{ color: m.molten }}>chapter · 03 · field reports</span>
            </div>
            <h2
              className="mt-4 text-[44px] leading-[0.95] font-black tracking-[-0.03em] uppercase sm:text-[72px]"
              style={{ color: m.paper }}
            >
              From the
              <br />
              <span style={{ color: m.molten }}>shop floor.</span>
            </h2>
          </div>

          <div className="grid gap-px" style={{ background: m.steelLight }}>
            <div className="grid gap-px md:grid-cols-3" style={{ background: m.steelLight }}>
              {testimonials.map((t, i) => (
                <figure
                  key={i}
                  className="relative flex flex-col justify-between p-8"
                  style={{ background: m.steel, minHeight: '320px' }}
                >
                  <div>
                    <div
                      className="font-mono text-[10px] tracking-[0.3em] uppercase"
                      style={{ color: m.ember }}
                    >
                      {t.plate}
                    </div>
                    <blockquote
                      className="mt-6 text-[18px] leading-[1.5]"
                      style={{ color: m.paper }}
                    >
                      “{t.quote}”
                    </blockquote>
                  </div>

                  <figcaption
                    className="mt-8 border-t pt-5"
                    style={{ borderColor: m.steelLight }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="grid h-10 w-10 place-items-center font-bold tracking-wider"
                        style={{
                          background: m.molten,
                          color: m.coal,
                          fontSize: 12,
                        }}
                      >
                        {t.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </div>
                      <div className="leading-tight">
                        <div
                          className="text-[14px] font-bold tracking-wide"
                          style={{ color: m.paper }}
                        >
                          {t.name}
                        </div>
                        <div
                          className="font-mono text-[11px] tracking-wide"
                          style={{ color: m.paperDim }}
                        >
                          {t.role}
                        </div>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div
            className="mt-10 flex flex-wrap items-center justify-between gap-6 border-y py-6 font-mono text-[11px] tracking-[0.25em] uppercase"
            style={{ borderColor: m.steelLight, color: m.paperDim }}
          >
            <span>trusted at</span>
            {['STAHLWERK', 'CINDER·CO', 'EMBERS', 'VULKAN', 'IRONHIDE', 'BLAST/9'].map(
              (b) => (
                <span key={b} className="font-bold tracking-[0.3em]">
                  {b}
                </span>
              )
            )}
          </div>
        </section>

        <section className="relative my-12">
          <div
            className="relative overflow-hidden border px-8 py-16 md:px-16 md:py-20"
            style={{
              background: m.iron,
              borderColor: m.molten,
              boxShadow: `inset 0 0 80px ${m.molten}30`,
            }}
          >
            <div
              className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full"
              style={{
                background: `radial-gradient(circle, ${m.molten}50, transparent 70%)`,
              }}
            />
            <div className="relative grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
              <div>
                <div
                  className="font-mono text-[10px] tracking-[0.3em] uppercase"
                  style={{ color: m.molten }}
                >
                  ◆ closing argument
                </div>
                <h3
                  className="mt-4 text-[44px] leading-[0.95] font-black tracking-[-0.03em] uppercase sm:text-[68px]"
                  style={{ color: m.paper }}
                >
                  Stop assembling.
                  <br />
                  <span style={{ color: m.molten }}>Start forging.</span>
                </h3>
              </div>
              <div className="flex flex-col gap-3">
                <button
                  className="w-full px-7 py-4 font-mono text-[12px] font-bold tracking-[0.25em] uppercase"
                  style={{
                    background: m.molten,
                    color: m.coal,
                    boxShadow: `inset 0 -4px 0 ${m.hot}`,
                  }}
                >
                  start free · no card
                </button>
                <button
                  className="w-full px-7 py-4 font-mono text-[12px] font-bold tracking-[0.25em] uppercase"
                  style={{
                    background: 'transparent',
                    color: m.paper,
                    border: `1px solid ${m.steelLight}`,
                  }}
                >
                  book a foundry tour
                </button>
                <div
                  className="mt-2 text-center font-mono text-[10px] tracking-[0.3em] uppercase"
                  style={{ color: m.paperDim }}
                >
                  14-day works · cancel anytime
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="relative pt-14 pb-6">
          <div
            className="grid gap-10 border-t pt-12 md:grid-cols-[1.6fr_1fr_1fr_1fr]"
            style={{ borderColor: m.steelLight }}
          >
            <div>
              <div className="flex items-center gap-3">
                <div
                  className="grid h-10 w-10 place-items-center"
                  style={{ background: m.molten, color: m.coal }}
                >
                  <Anvil className="h-5 w-5" />
                </div>
                <div className="leading-tight">
                  <div
                    className="text-[18px] font-black tracking-[0.15em] uppercase"
                    style={{ color: m.paper }}
                  >
                    Forge
                  </div>
                  <div
                    className="font-mono text-[9px] tracking-[0.3em] uppercase"
                    style={{ color: m.ember }}
                  >
                    works · est. MMXXIV
                  </div>
                </div>
              </div>
              <p
                className="mt-5 max-w-[280px] text-[13px] leading-relaxed"
                style={{ color: m.paperDim }}
              >
                Heavy software for serious builders. A small workshop in
                Pittsburgh, Belfast, and Yokohama.
              </p>
            </div>
            {[
              { t: 'works', i: ['Foundry', 'Forge CLI', 'Cloud', 'Self-host'] },
              { t: 'docs', i: ['Specs', 'Recipes', 'API', 'Status'] },
              { t: 'co.', i: ['About', 'Careers', 'Press', 'Contact'] },
            ].map((col) => (
              <div key={col.t}>
                <div
                  className="mb-4 font-mono text-[10px] tracking-[0.3em] uppercase"
                  style={{ color: m.molten }}
                >
                  /{col.t}
                </div>
                <ul className="space-y-2.5 text-[14px]">
                  {col.i.map((it) => (
                    <li key={it} className="opacity-80 hover:opacity-100">
                      <a>{it}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t pt-6 font-mono text-[10px] tracking-[0.3em] uppercase"
            style={{ borderColor: m.steelLight, color: m.paperDim }}
          >
            <div>
              © {new Date().getFullYear()} Forge Works · forged in iron,
              shipped in code
            </div>
            <div className="flex items-center gap-5">
              <span>privacy</span>
              <span>terms</span>
              <span>security</span>
              <span style={{ color: m.molten }}>● furnace · live</span>
            </div>
          </div>
          <Diagonal />
        </footer>
      </div>
    </div>
  )
}
