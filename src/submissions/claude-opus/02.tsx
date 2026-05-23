const c = {
  void: '#06030d',
  voidSoft: '#0c0820',
  panel: '#120a2a',
  magenta: '#ff2e93',
  cyan: '#00f0ff',
  violet: '#a259ff',
  yellow: '#fff200',
  white: '#f5f0ff',
  dim: 'rgba(245,240,255,0.55)',
}

const neon = (color: string, size = 12) =>
  `0 0 ${size}px ${color}, 0 0 ${size * 2.5}px ${color}40`

function Spark() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
      <path d="M12 0l2.5 8.5L23 12l-8.5 3.5L12 24l-2.5-8.5L1 12l8.5-3.5L12 0z" />
    </svg>
  )
}

const features = [
  {
    glyph: '◆',
    title: 'Hyperdrive scaffolds',
    line: 'Spin up apps at warp speed',
    body: 'One prompt → a full TypeScript monorepo with auth, billing, and a CI pipeline that boots in under sixty seconds.',
    color: c.magenta,
  },
  {
    glyph: '▲',
    title: 'Liquid previews',
    line: 'Every branch is a working URL',
    body: 'Ephemeral environments spin up on push. Share a link, get feedback, merge. No clusters to babysit. No tickets to file.',
    color: c.cyan,
  },
  {
    glyph: '●',
    title: 'Synth deploys',
    line: 'Push once. Ship everywhere',
    body: 'Multi-region, multi-cloud, multi-runtime. Forge picks the cheapest path and rolls back the moment something fizzes.',
    color: c.violet,
  },
]

const testimonials = [
  {
    quote:
      'We deleted three Helm charts and a sad Jenkins box. Forge replaced them in an afternoon.',
    name: 'D. Reyes',
    role: 'Principal · Voltrun',
    tape: 'TAPE 01',
    accent: c.magenta,
  },
  {
    quote:
      "Ship velocity tripled. Our infra hire became our second product manager. Honestly didn't see that coming.",
    name: 'K. Tanaka',
    role: 'CTO · Kineto',
    tape: 'TAPE 02',
    accent: c.cyan,
  },
  {
    quote:
      "I haven't touched a Dockerfile in eight months. I do not miss the Dockerfile.",
    name: 'P. Adesanya',
    role: 'Solo founder · Zone7',
    tape: 'TAPE 03',
    accent: c.yellow,
  },
]

export default function Submission() {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        background: c.void,
        color: c.white,
        fontFamily:
          "'JetBrains Mono', ui-monospace, Menlo, monospace",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 0%, ${c.magenta}28, transparent 70%),
            radial-gradient(ellipse 60% 40% at 85% 30%, ${c.violet}25, transparent 70%),
            radial-gradient(ellipse 50% 40% at 15% 30%, ${c.cyan}20, transparent 70%)
          `,
        }}
      />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px]"
        style={{
          background: `
            linear-gradient(to top, ${c.void} 0%, transparent 100%),
            repeating-linear-gradient(to right, transparent 0 39px, ${c.magenta}40 39px 40px),
            repeating-linear-gradient(to bottom, transparent 0 39px, ${c.cyan}30 39px 40px)
          `,
          transform: 'perspective(600px) rotateX(60deg)',
          transformOrigin: 'bottom',
          maskImage:
            'linear-gradient(to top, black 30%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to top, black 30%, transparent 100%)',
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          background:
            'repeating-linear-gradient(0deg, #fff 0 1px, transparent 1px 4px)',
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 sm:px-10">
        <nav
          className="flex items-center justify-between border-b py-5"
          style={{ borderColor: 'rgba(255,255,255,0.08)' }}
        >
          <div className="flex items-center gap-2.5">
            <div
              className="grid h-9 w-9 place-items-center rounded-sm"
              style={{
                background: c.magenta,
                color: c.void,
                boxShadow: neon(c.magenta, 10),
              }}
            >
              <Spark />
            </div>
            <span
              className="text-[15px] font-bold tracking-[0.3em]"
              style={{ color: c.white }}
            >
              FORGE://
            </span>
          </div>
          <div className="hidden items-center gap-7 text-[12px] tracking-[0.2em] uppercase md:flex">
            <a className="opacity-70 hover:opacity-100">_features</a>
            <a className="opacity-70 hover:opacity-100">_pricing</a>
            <a className="opacity-70 hover:opacity-100">_docs</a>
            <a className="opacity-70 hover:opacity-100">_changelog</a>
          </div>
          <button
            className="border px-4 py-2 text-[12px] tracking-[0.2em] uppercase transition-colors"
            style={{
              borderColor: c.cyan,
              color: c.cyan,
              boxShadow: neon(c.cyan, 6),
            }}
          >
            launch_app →
          </button>
        </nav>

        <section className="relative pt-24 pb-32 text-center md:pt-32">
          <div
            className="absolute top-12 left-1/2 -z-0 h-[340px] w-[340px] -translate-x-1/2 rounded-full"
            style={{
              background: `radial-gradient(circle at 50% 60%, ${c.yellow}, ${c.magenta} 50%, transparent 75%)`,
              filter: 'blur(2px)',
              opacity: 0.85,
            }}
          />
          <div
            className="absolute top-[200px] left-1/2 -z-0 h-[170px] w-[340px] -translate-x-1/2"
            style={{
              background: `repeating-linear-gradient(to bottom, ${c.void} 0 6px, transparent 6px 14px)`,
              maskImage:
                'radial-gradient(circle at 50% -50%, black 65%, transparent 70%)',
              WebkitMaskImage:
                'radial-gradient(circle at 50% -50%, black 65%, transparent 70%)',
            }}
          />

          <div
            className="relative mx-auto inline-flex items-center gap-3 border px-4 py-1.5 text-[11px] tracking-[0.25em] uppercase"
            style={{
              borderColor: 'rgba(255,255,255,0.2)',
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <span
              className="inline-block h-1.5 w-1.5 animate-pulse"
              style={{ background: c.cyan, boxShadow: neon(c.cyan, 6) }}
            />
            sys.online · v3.2 · region: nightcity
          </div>

          <h1
            className="relative mx-auto mt-10 max-w-[1000px] text-[60px] leading-[0.95] font-black tracking-[-0.03em] sm:text-[88px] md:text-[120px]"
            style={{
              fontFamily:
                "'Geist', ui-sans-serif, -apple-system, sans-serif",
              background: `linear-gradient(180deg, ${c.white} 0%, ${c.white} 50%, ${c.magenta} 50%, ${c.violet} 100%)`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              textShadow: `0 0 60px ${c.magenta}40`,
            }}
          >
            BUILD AT
            <br />
            LIGHTSPEED.
          </h1>

          <p
            className="relative mx-auto mt-8 max-w-[620px] text-[16px] leading-relaxed sm:text-[18px]"
            style={{ color: c.dim }}
          >
            Forge is a dev kit for builders who think production should feel
            like a video game. Scaffold, ship, scale — without the boring
            parts in between.
          </p>

          <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              className="group relative px-7 py-3.5 text-[13px] font-bold tracking-[0.2em] uppercase transition-transform hover:-translate-y-[1px]"
              style={{
                background: c.magenta,
                color: c.void,
                boxShadow: neon(c.magenta, 20),
                clipPath:
                  'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))',
              }}
            >
              ▶ start_building
            </button>
            <button
              className="border px-7 py-3.5 text-[13px] font-bold tracking-[0.2em] uppercase transition-colors hover:bg-white/5"
              style={{
                borderColor: c.cyan,
                color: c.cyan,
                boxShadow: neon(c.cyan, 8),
              }}
            >
              ▷ watch_demo
            </button>
          </div>

          <div
            className="relative mx-auto mt-14 grid max-w-[760px] grid-cols-3 border"
            style={{
              borderColor: 'rgba(255,255,255,0.12)',
              background: 'rgba(6,3,13,0.6)',
              backdropFilter: 'blur(10px)',
            }}
          >
            {[
              { k: '4.2s', v: 'cold start', color: c.magenta },
              { k: '99.99', v: 'uptime %', color: c.cyan },
              { k: '∞', v: 'rollbacks', color: c.yellow },
            ].map((stat, i) => (
              <div
                key={i}
                className="border-r px-5 py-6 text-center last:border-r-0"
                style={{ borderColor: 'rgba(255,255,255,0.1)' }}
              >
                <div
                  className="text-[32px] font-black tracking-tight sm:text-[42px]"
                  style={{ color: stat.color, textShadow: neon(stat.color, 10) }}
                >
                  {stat.k}
                </div>
                <div
                  className="mt-1 text-[10px] tracking-[0.25em] uppercase"
                  style={{ color: c.dim }}
                >
                  {stat.v}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="relative py-24">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <div
                className="text-[11px] tracking-[0.3em] uppercase"
                style={{ color: c.cyan }}
              >
                ── section_02 / loadout
              </div>
              <h2
                className="mt-3 max-w-[680px] text-[40px] leading-[1] font-black tracking-[-0.02em] sm:text-[64px]"
                style={{
                  fontFamily:
                    "'Geist', ui-sans-serif, -apple-system, sans-serif",
                }}
              >
                The dev kit
                <br />
                <span style={{ color: c.magenta, textShadow: neon(c.magenta, 14) }}>
                  from the future.
                </span>
              </h2>
            </div>
            <div
              className="max-w-[280px] text-sm leading-relaxed"
              style={{ color: c.dim }}
            >
              Three modules. Click to equip. No subscriptions to swap, no
              vendors to lock you in.
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {features.map((f, i) => (
              <article
                key={i}
                className="group relative overflow-hidden border p-7 transition-transform hover:-translate-y-1"
                style={{
                  borderColor: f.color,
                  background: 'rgba(12,8,32,0.7)',
                  boxShadow: `0 0 0 1px ${f.color}, ${neon(f.color, 14)}`,
                }}
              >
                <div
                  className="absolute top-0 right-0 h-20 w-20"
                  style={{
                    background: `linear-gradient(225deg, ${f.color}30, transparent 60%)`,
                  }}
                />
                <div
                  className="flex items-center justify-between text-[10px] tracking-[0.25em] uppercase"
                  style={{ color: f.color }}
                >
                  <span>module_{String(i + 1).padStart(2, '0')}</span>
                  <span
                    className="text-[20px] leading-none"
                    style={{ textShadow: neon(f.color, 8) }}
                  >
                    {f.glyph}
                  </span>
                </div>

                <h3
                  className="mt-8 text-[26px] leading-[1.05] font-black tracking-tight"
                  style={{
                    fontFamily:
                      "'Geist', ui-sans-serif, -apple-system, sans-serif",
                    color: c.white,
                  }}
                >
                  {f.title}
                </h3>
                <div
                  className="mt-2 text-[12px] tracking-[0.15em] uppercase"
                  style={{ color: f.color }}
                >
                  // {f.line}
                </div>

                <p
                  className="mt-6 text-[14px] leading-relaxed"
                  style={{ color: c.dim }}
                >
                  {f.body}
                </p>

                <div
                  className="mt-8 inline-flex items-center gap-2 border-b pb-1 text-[11px] tracking-[0.25em] uppercase transition-transform group-hover:translate-x-1"
                  style={{ borderColor: f.color, color: f.color }}
                >
                  install →
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="relative py-24">
          <div className="mb-14 text-center">
            <div
              className="text-[11px] tracking-[0.3em] uppercase"
              style={{ color: c.yellow }}
            >
              ── section_03 / transmissions
            </div>
            <h2
              className="mx-auto mt-3 max-w-[760px] text-[40px] leading-[1] font-black tracking-[-0.02em] sm:text-[60px]"
              style={{
                fontFamily:
                  "'Geist', ui-sans-serif, -apple-system, sans-serif",
              }}
            >
              <span style={{ color: c.cyan, textShadow: neon(c.cyan, 12) }}>
                Operators
              </span>{' '}
              already on the grid.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="relative border p-7"
                style={{
                  borderColor: 'rgba(255,255,255,0.15)',
                  background:
                    'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
                  backdropFilter: 'blur(6px)',
                }}
              >
                <div
                  className="absolute -top-px left-0 h-px w-full"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${t.accent}, transparent)`,
                  }}
                />
                <div className="flex items-center justify-between text-[10px] tracking-[0.25em] uppercase">
                  <span style={{ color: t.accent }}>{t.tape}</span>
                  <span style={{ color: c.dim }}>● rec</span>
                </div>

                <blockquote
                  className="mt-6 text-[16px] leading-[1.6]"
                  style={{ color: c.white }}
                >
                  “{t.quote}”
                </blockquote>

                <figcaption className="mt-8 flex items-center gap-3 border-t pt-5"
                  style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                  <div
                    className="grid h-10 w-10 place-items-center text-[11px] font-bold"
                    style={{
                      background: t.accent,
                      color: c.void,
                      boxShadow: neon(t.accent, 8),
                    }}
                  >
                    {t.name.split(' ')[0][0]}
                    {t.name.split(' ')[1]?.[0]}
                  </div>
                  <div className="leading-tight">
                    <div
                      className="text-[13px] font-bold tracking-wide"
                    >
                      {t.name}
                    </div>
                    <div className="text-[11px]" style={{ color: c.dim }}>
                      {t.role}
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="relative my-16">
          <div
            className="relative overflow-hidden border px-8 py-16 text-center md:px-20 md:py-20"
            style={{
              borderColor: c.magenta,
              background:
                'linear-gradient(135deg, rgba(255,46,147,0.12), rgba(162,89,255,0.12) 50%, rgba(0,240,255,0.12))',
              boxShadow: `${neon(c.magenta, 18)}, inset 0 0 60px ${c.cyan}20`,
            }}
          >
            <div
              className="text-[11px] tracking-[0.3em] uppercase"
              style={{ color: c.yellow, textShadow: neon(c.yellow, 8) }}
            >
              ⚡ ready_player_one ⚡
            </div>
            <h3
              className="mx-auto mt-5 max-w-[760px] text-[40px] leading-[1] font-black tracking-[-0.02em] sm:text-[68px]"
              style={{
                fontFamily:
                  "'Geist', ui-sans-serif, -apple-system, sans-serif",
              }}
            >
              <span style={{ color: c.white }}>Press</span>{' '}
              <span style={{ color: c.magenta, textShadow: neon(c.magenta, 14) }}>
                START
              </span>{' '}
              <span style={{ color: c.white }}>to ship.</span>
            </h3>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button
                className="px-8 py-4 text-[13px] font-bold tracking-[0.2em] uppercase"
                style={{
                  background: c.yellow,
                  color: c.void,
                  boxShadow: neon(c.yellow, 16),
                }}
              >
                ► get_forge
              </button>
              <button
                className="border px-8 py-4 text-[13px] font-bold tracking-[0.2em] uppercase"
                style={{ borderColor: c.white, color: c.white }}
              >
                ?  contact_ops
              </button>
            </div>
          </div>
        </section>

        <footer
          className="relative border-t pt-12 pb-6"
          style={{ borderColor: 'rgba(255,255,255,0.1)' }}
        >
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-2.5">
                <div
                  className="grid h-8 w-8 place-items-center"
                  style={{
                    background: c.magenta,
                    color: c.void,
                    boxShadow: neon(c.magenta, 8),
                  }}
                >
                  <Spark />
                </div>
                <span className="text-[14px] font-bold tracking-[0.3em]">
                  FORGE://
                </span>
              </div>
              <p
                className="mt-4 max-w-[260px] text-[12px] leading-relaxed"
                style={{ color: c.dim }}
              >
                A studio of three. Built in Berlin, broadcasting from a
                cabin in the mountains.
              </p>
            </div>
            {[
              { t: 'system', i: ['Status', 'Uptime', 'Incidents'] },
              { t: 'product', i: ['Features', 'Pricing', 'Roadmap'] },
              { t: 'devs', i: ['Docs', 'CLI', 'API', 'SDKs'] },
              { t: 'signal', i: ['Discord', 'X', 'YouTube'] },
            ].map((col) => (
              <div key={col.t}>
                <div
                  className="mb-4 text-[11px] tracking-[0.25em] uppercase"
                  style={{ color: c.cyan }}
                >
                  // {col.t}
                </div>
                <ul className="space-y-2.5 text-[13px]">
                  {col.i.map((it) => (
                    <li
                      key={it}
                      className="opacity-80 hover:opacity-100"
                      style={{ color: c.white }}
                    >
                      <a>{it}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t pt-6 text-[11px] tracking-[0.2em] uppercase"
            style={{
              borderColor: 'rgba(255,255,255,0.08)',
              color: c.dim,
            }}
          >
            <div>
              © {new Date().getFullYear()} forge.sys // all rights compiled
            </div>
            <div className="flex items-center gap-4">
              <span style={{ color: c.cyan }}>● link_up</span>
              <span>privacy</span>
              <span>terms</span>
              <span>tx_3.2.1</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
