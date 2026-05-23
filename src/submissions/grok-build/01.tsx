import { useState } from 'react'

export default function Submission() {
  const [showDemo, setShowDemo] = useState(false)
  const [demoEmail, setDemoEmail] = useState('')
  const [demoState, setDemoState] = useState<'idle' | 'loading' | 'success'>('idle')

  const openDemo = () => {
    setShowDemo(true)
    setDemoState('idle')
    setDemoEmail('')
  }

  const closeDemo = () => {
    setShowDemo(false)
    setDemoState('idle')
  }

  const launchDemo = (e: React.FormEvent) => {
    e.preventDefault()
    if (!demoEmail) return
    setDemoState('loading')
    setTimeout(() => {
      setDemoState('success')
      setTimeout(() => {
        closeDemo()
      }, 1400)
    }, 850)
  }

  return (
    <div className="w-full bg-[#0a0b0f] text-white overflow-hidden font-sans" style={{ fontFamily: 'Geist, ui-sans-serif, system-ui, sans-serif' }}>
      {/* NAV */}
      <nav className="border-b border-white/10 bg-[#0a0b0f]/95 backdrop-blur z-50">
        <div className="max-w-[1120px] mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0a0b0f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <div className="text-xl font-semibold tracking-[-0.02em]">forge</div>
                <div className="text-[9px] text-white/40 -mt-1">BUILD 0.1</div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-9 text-sm">
            <a href="#features" className="text-white/70 hover:text-white transition-colors">Capabilities</a>
            <a href="#proof" className="text-white/70 hover:text-white transition-colors">Proof</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">Docs</a>
            <button
              onClick={openDemo}
              className="px-5 py-2 rounded-full border border-white/20 text-sm hover:bg-white/5 transition-all active:scale-[0.985]"
            >
              Sign in
            </button>
            <button
              onClick={openDemo}
              className="px-6 py-2 rounded-full bg-white text-[#0a0b0f] text-sm font-medium hover:bg-white/90 transition-all active:scale-[0.985]"
            >
              Start free
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-[1120px] mx-auto px-8 pt-20 pb-24">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 h-8 rounded-full bg-white/5 border border-white/10 text-xs tracking-[0.18em] text-white/60 mb-6">
            NOW IN PUBLIC BETA · 41,892 FORGES THIS WEEK
          </div>

          <h1 className="text-[92px] leading-[0.88] tracking-[-0.045em] font-semibold mb-6">
            Forge code.<br />Ship in minutes.
          </h1>

          <p className="max-w-xl text-2xl text-white/70 tracking-[-0.01em] leading-tight">
            The AI-native development platform that understands your architecture, your team, and your deadlines.
          </p>
        </div>

        <div className="flex items-center gap-4 mt-10">
          <button
            onClick={openDemo}
            className="group inline-flex items-center justify-center gap-3 h-14 px-9 rounded-2xl bg-[#3ecf8e] text-[#0a0b0f] text-[15px] font-semibold active:scale-[0.985] transition-all hover:brightness-105"
          >
            Open workspace
            <span className="group-active:translate-x-0.5 transition">→</span>
          </button>

          <button
            onClick={() => {
              const el = document.getElementById('features')
              el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
            className="inline-flex items-center justify-center gap-3 h-14 px-8 rounded-2xl border border-white/20 text-[15px] hover:bg-white/5 active:bg-white/10 transition-all"
          >
            See what’s inside
          </button>
        </div>

        <div className="mt-8 text-xs text-white/50 tracking-[0.2em]">NO CREDIT CARD REQUIRED · CANCEL ANYTIME</div>
      </section>

      {/* FEATURES */}
      <section id="features" className="bg-[#111318] border-y border-white/10 py-20">
        <div className="max-w-[1120px] mx-auto px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <div className="text-[#3ecf8e] text-xs tracking-[0.3em] mb-2">THREE PILLARS</div>
              <div className="text-6xl tracking-[-0.03em] font-semibold">Built different.</div>
            </div>
            <div className="text-white/60 max-w-xs text-[15px] leading-snug">
              Every feature exists because we ran into the same walls you do. Then we removed them.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 01 */}
            <div className="group bg-[#0a0b0f] border border-white/10 rounded-3xl p-8 flex flex-col transition-all hover:border-white/30 hover:-translate-y-0.5">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-8 ring-1 ring-inset ring-white/10">
                <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#3ecf8e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2v6a2 2 0 0 0 2 2h6" />
                  <path d="M4 22V6a2 2 0 0 1 2-2h8" />
                  <path d="M4 15h16" />
                  <path d="M8 11h2" />
                  <path d="M8 18h2" />
                  <path d="M14 11h2" />
                </svg>
              </div>
              <div className="text-[21px] font-semibold tracking-[-0.01em] mb-3">Context Engine</div>
              <p className="text-white/70 leading-relaxed text-[15px]">
                Forge doesn’t guess. It reads your repo history, architecture docs, open PRs, and team Slack. The suggestions feel like they came from your best engineer.
              </p>
              <div className="mt-auto pt-8 text-xs text-white/40 tracking-[0.2em]">100K+ CONTEXT WINDOWS</div>
            </div>

            {/* Feature 02 */}
            <div className="group bg-[#0a0b0f] border border-white/10 rounded-3xl p-8 flex flex-col transition-all hover:border-white/30 hover:-translate-y-0.5">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-8 ring-1 ring-inset ring-white/10">
                <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#3ecf8e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <path d="M10 10l4 4" />
                </svg>
              </div>
              <div className="text-[21px] font-semibold tracking-[-0.01em] mb-3">Parallel Forges</div>
              <p className="text-white/70 leading-relaxed text-[15px]">
                Spin up infinite isolated environments from any branch or prompt. Compare versions side-by-side. Merge the winners with one click.
              </p>
              <div className="mt-auto pt-8 text-xs text-white/40 tracking-[0.2em]">ZERO COLD STARTS</div>
            </div>

            {/* Feature 03 */}
            <div className="group bg-[#0a0b0f] border border-white/10 rounded-3xl p-8 flex flex-col transition-all hover:border-white/30 hover:-translate-y-0.5">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-8 ring-1 ring-inset ring-white/10">
                <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#3ecf8e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9.5 12.5l2 2 4-4" />
                </svg>
              </div>
              <div className="text-[21px] font-semibold tracking-[-0.01em] mb-3">Trusted Ship</div>
              <p className="text-white/70 leading-relaxed text-[15px]">
                Every deploy runs through static analysis, secret scanning, load simulation, and canary releases. You sleep. We don’t.
              </p>
              <div className="mt-auto pt-8 text-xs text-white/40 tracking-[0.2em]">99.999% UPTIME SLA</div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section id="proof" className="max-w-[1120px] mx-auto px-8 py-20">
        <div className="text-center mb-14">
          <div className="text-[#3ecf8e] text-xs tracking-[0.3em] mb-3">FROM THE TRENCHES</div>
          <div className="text-6xl tracking-[-0.03em] font-semibold">They forged with us.<br />They stayed.</div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#111318] border border-white/10 rounded-3xl p-8">
            <div className="text-[15px] leading-[1.55] text-white/90">
              “We replaced our entire 14-person platform team with Forge in six weeks. The AI writes better Terraform than our seniors did.”
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex-shrink-0" />
              <div>
                <div className="text-sm font-medium">Nadia K. Volkov</div>
                <div className="text-xs text-white/50">CTO, Aether Systems</div>
              </div>
            </div>
          </div>

          <div className="bg-[#111318] border border-white/10 rounded-3xl p-8">
            <div className="text-[15px] leading-[1.55] text-white/90">
              “First week I thought it was cheating. Second week I realized every other tool is the cheat code. We ship twice as much with half the bugs.”
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 flex-shrink-0" />
              <div>
                <div className="text-sm font-medium">Devon Hale</div>
                <div className="text-xs text-white/50">Head of Product, Linear Labs</div>
              </div>
            </div>
          </div>

          <div className="bg-[#111318] border border-white/10 rounded-3xl p-8">
            <div className="text-[15px] leading-[1.55] text-white/90">
              “I forged the first version of our product on a weekend. By Monday the seed round was closed. Forge is unfair advantage, full stop.”
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 to-rose-500 flex-shrink-0" />
              <div>
                <div className="text-sm font-medium">Ivy Santos</div>
                <div className="text-xs text-white/50">Founder, Prism</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-xs tracking-[0.25em] text-white/40">TRUSTED AT SCALE BY TEAMS AT VERCEL, STRIPE, NOTION, AND 1,847 MORE</div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#08090c] text-white/60">
        <div className="max-w-[1120px] mx-auto px-8 pt-16 pb-12 text-sm">
          <div className="flex flex-col md:flex-row gap-y-12 justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-6 h-6 rounded-lg bg-white/90 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0a0b0f" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span className="font-semibold text-white">forge</span>
              </div>
              <div className="text-xs">© 2026 Forge Technologies Inc.</div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-8 text-xs">
              <div className="space-y-3">
                <div className="text-white/40 tracking-[0.15em]">PRODUCT</div>
                <div>Capabilities</div>
                <div>Integrations</div>
                <div>Changelog</div>
                <div>Security</div>
              </div>
              <div className="space-y-3">
                <div className="text-white/40 tracking-[0.15em]">RESOURCES</div>
                <div>Docs</div>
                <div>Guides</div>
                <div>API reference</div>
                <div>Status</div>
              </div>
              <div className="space-y-3">
                <div className="text-white/40 tracking-[0.15em]">COMPANY</div>
                <div>About</div>
                <div>Blog</div>
                <div>Careers</div>
                <div>Contact</div>
              </div>
              <div className="space-y-3">
                <div className="text-white/40 tracking-[0.15em]">LEGAL</div>
                <div>Privacy</div>
                <div>Terms</div>
                <div>Trust center</div>
                <div>Licenses</div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* DEMO MODAL */}
      {showDemo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6" onClick={closeDemo}>
          <div
            className="w-full max-w-[420px] bg-[#111318] border border-white/15 rounded-3xl p-9 text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {demoState === 'success' ? (
              <div className="text-center py-8">
                <div className="mx-auto w-16 h-16 rounded-full bg-[#3ecf8e] flex items-center justify-center mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0a0b0f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="text-2xl tracking-tight font-semibold">Workspace created.</div>
                <div className="text-white/60 mt-2">Redirecting you to the forge…</div>
              </div>
            ) : (
              <>
                <div className="text-xs tracking-[0.2em] text-white/50 mb-1">WELCOME TO THE FUTURE</div>
                <div className="text-4xl tracking-[-0.02em] font-semibold leading-none mb-2">Let’s get you forging.</div>
                <div className="text-white/70 text-[15px] mb-8">Create your first workspace in under 20 seconds.</div>

                <form onSubmit={launchDemo}>
                  <div className="mb-4">
                    <label className="block text-xs tracking-[0.15em] text-white/50 mb-2">WORK EMAIL</label>
                    <input
                      type="email"
                      value={demoEmail}
                      onChange={(e) => setDemoEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full bg-[#0a0b0f] border border-white/15 focus:border-[#3ecf8e] outline-none rounded-2xl h-14 px-5 text-lg placeholder:text-white/30 transition-colors"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={demoState === 'loading' || !demoEmail}
                    className="mt-2 w-full h-14 rounded-2xl bg-white text-[#0a0b0f] font-semibold text-[15px] disabled:opacity-60 active:scale-[0.985] transition-all flex items-center justify-center gap-3"
                  >
                    {demoState === 'loading' ? (
                      <>
                        <span className="animate-spin inline-block w-4 h-4 border-2 border-[#0a0b0f] border-t-transparent rounded-full" />
                        CREATING YOUR FORGE…
                      </>
                    ) : (
                      'CREATE WORKSPACE'
                    )}
                  </button>
                </form>

                <div className="text-center text-[10px] tracking-[0.2em] text-white/40 mt-6">FREE FOR 14 DAYS · THEN $29 / SEAT / MO</div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
