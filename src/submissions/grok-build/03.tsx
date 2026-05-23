import { useState } from 'react'

export default function Submission() {
  const [showDemo, setShowDemo] = useState(false)
  const [email, setEmail] = useState('')
  const [step, setStep] = useState<'form' | 'loading' | 'done'>('form')

  const launch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStep('loading')
    setTimeout(() => setStep('done'), 620)
    setTimeout(() => {
      setShowDemo(false)
      setStep('form')
      setEmail('')
    }, 1850)
  }

  return (
    <div className="w-full bg-white text-[#0f0f11] overflow-hidden font-sans" style={{ fontFamily: 'Geist, ui-sans-serif, system-ui, sans-serif' }}>
      {/* bright electric nav */}
      <nav className="border-b border-zinc-200 bg-white/90 backdrop-blur">
        <div className="max-w-[1140px] mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 flex items-center justify-center shadow-inner">
              <span className="text-white font-bold text-xl tracking-[-1px]">F</span>
            </div>
            <div className="font-semibold text-3xl tracking-[-1.2px]">forge</div>
          </div>

          <div className="flex items-center text-sm gap-9 text-zinc-600">
            <a href="#features" className="hover:text-black transition">Features</a>
            <a href="#proof" className="hover:text-black transition">Loved by</a>
            <a href="#" className="hover:text-black transition">Changelog</a>
            <button onClick={() => setShowDemo(true)} className="px-5 py-2 rounded-full border border-zinc-200 hover:bg-zinc-50 active:bg-zinc-100">Log in</button>
            <button onClick={() => setShowDemo(true)} className="px-6 py-2 rounded-full bg-black text-white text-sm font-medium active:bg-zinc-800">Try it free</button>
          </div>
        </div>
      </nav>

      {/* HERO — vibrant, bold, energetic */}
      <section className="max-w-[1140px] mx-auto px-8 pt-16 pb-20">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center rounded-full bg-zinc-100 px-4 h-8 text-xs tracking-[2.2px] text-zinc-500 mb-6">THE 2026 DEV TOOL OF THE YEAR • 138K ACTIVE FORGES</div>

          <h1 className="text-[92px] leading-[0.86] tracking-[-0.055em] font-semibold max-w-[18ch]">
            The fastest way<br />to <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500">forge</span> anything.
          </h1>

          <p className="mt-6 max-w-lg text-2xl text-zinc-600 tracking-[-0.1px]">One interface. Every model. Zero friction. Ship production software while the idea is still hot.</p>

          <div className="mt-9 flex gap-3">
            <button onClick={() => setShowDemo(true)} className="h-[58px] px-10 text-lg font-medium bg-black text-white rounded-3xl active:scale-[0.985] active:bg-zinc-900 transition">Start a forge now — it’s free</button>
            <button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="h-[58px] px-9 text-lg font-medium border border-zinc-200 hover:bg-zinc-50 rounded-3xl active:bg-zinc-100">Watch 47s demo</button>
          </div>
          <div className="text-xs text-zinc-400 mt-4 tracking-widest">NO CARD • INSTANT WORKSPACE • 200+ INTEGRATIONS</div>
        </div>

        {/* colorful live pulse bar */}
        <div className="mt-14 max-w-md mx-auto">
          <div className="flex items-center gap-2 text-xs text-zinc-500 mb-2 px-1">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
            LIVE RIGHT NOW
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-zinc-200 to-transparent" />
          </div>
          <div className="flex justify-center gap-8 text-sm">
            <div><span className="font-semibold text-emerald-600">3,912</span> <span className="text-zinc-500">forges started today</span></div>
            <div><span className="font-semibold text-indigo-600">94</span> <span className="text-zinc-500">deploys in the last 60s</span></div>
          </div>
        </div>
      </section>

      {/* FEATURES — colorful bento / cards with distinct personalities */}
      <section id="features" className="bg-zinc-50 border-y border-zinc-100 py-16">
        <div className="max-w-[1140px] mx-auto px-8">
          <div className="flex justify-between items-baseline mb-9 px-1">
            <div>
              <div className="text-indigo-600 text-xs font-medium tracking-[2.5px]">BUILT FOR VELOCITY</div>
              <div className="text-6xl tracking-[-0.03em] font-semibold mt-1">Three ways to move faster.</div>
            </div>
            <div className="text-zinc-500 max-w-[260px] text-[15px]">Everything is designed so you never wait for the tool again.</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card — electric indigo */}
            <div className="rounded-3xl p-8 bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-all group">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white flex items-center justify-center mb-7">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
              </div>
              <div className="font-semibold text-3xl tracking-tight mb-2 group-hover:text-indigo-600 transition-colors">Spark</div>
              <p className="text-zinc-600 leading-snug">Prompt in plain language. Get back a complete, typed, tested, documented feature branch ready to review. Models fight to give you their best.</p>
              <div className="text-xs text-indigo-600 tracking-widest mt-8">MULTI-MODEL ENSEMBLE</div>
            </div>

            {/* Card — cyan */}
            <div className="rounded-3xl p-8 bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-all group">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-400 text-white flex items-center justify-center mb-7">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
              </div>
              <div className="font-semibold text-3xl tracking-tight mb-2 group-hover:text-cyan-600 transition-colors">Flow</div>
              <p className="text-zinc-600 leading-snug">Every change streams to every teammate instantly. Previews appear on phones, tablets, and browsers before you even save the file. Real-time by default.</p>
              <div className="text-xs text-cyan-600 tracking-widest mt-8">SUB-100MS SYNC</div>
            </div>

            {/* Card — rose/fuchsia */}
            <div className="rounded-3xl p-8 bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-all group">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-500 to-fuchsia-500 text-white flex items-center justify-center mb-7">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
              </div>
              <div className="font-semibold text-3xl tracking-tight mb-2 group-hover:text-rose-600 transition-colors">Launch</div>
              <p className="text-zinc-600 leading-snug">One button. Production. Automatic canary, automatic rollback, automatic monitoring. Your users see it the moment you’re proud of it.</p>
              <div className="text-xs text-rose-600 tracking-widest mt-8">CONFIDENCE SCORE 99.4</div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF — vibrant testimonial cards */}
      <section id="proof" className="max-w-[1140px] mx-auto px-8 py-20">
        <div className="uppercase text-xs tracking-[3px] text-center text-zinc-400 mb-3">REAL BUILDERS, REAL RESULTS</div>
        <div className="text-center text-6xl tracking-[-0.03em] font-semibold mb-12">They stopped looking<br />for better tools.</div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-3xl bg-gradient-to-br from-indigo-50 to-white p-8 border border-indigo-100/70">
            <div className="text-[15px] text-zinc-700 leading-relaxed">“I have never shipped this fast in my life. My cofounder cried when she saw the first production deploy. It was that clean.”</div>
            <div className="mt-8 flex gap-3 items-center">
              <div className="w-8 h-8 rounded-full bg-indigo-500" />
              <div className="text-sm">
                <div className="font-medium">Amara Okoro</div>
                <div className="text-xs text-zinc-500">Founder &amp; CEO, Lumen</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-cyan-50 to-white p-8 border border-cyan-100/70">
            <div className="text-[15px] text-zinc-700 leading-relaxed">“We moved our entire 40 person org onto Forge in a week. Onboarding new engineers now takes 11 minutes instead of 11 days.”</div>
            <div className="mt-8 flex gap-3 items-center">
              <div className="w-8 h-8 rounded-full bg-cyan-500" />
              <div className="text-sm">
                <div className="font-medium">Rafael Kim</div>
                <div className="text-xs text-zinc-500">Director of Eng, Planetscale</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-rose-50 to-white p-8 border border-rose-100/70">
            <div className="text-[15px] text-zinc-700 leading-relaxed">“The AI is terrifyingly good. It suggested a refactor I had been putting off for a year. It was perfect. I felt seen.”</div>
            <div className="mt-8 flex gap-3 items-center">
              <div className="w-8 h-8 rounded-full bg-rose-500" />
              <div className="text-sm">
                <div className="font-medium">Soren Vale</div>
                <div className="text-xs text-zinc-500">Staff Engineer, Arc</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER — clean, colorful accents */}
      <footer className="bg-zinc-950 text-white/70 text-sm">
        <div className="max-w-[1140px] mx-auto px-8 pt-14 pb-11">
          <div className="flex flex-col md:flex-row md:items-center gap-y-8 justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-2xl bg-white flex items-center justify-center">
                <span className="text-black font-bold text-[21px] tracking-[-1.5px] -mt-px">F</span>
              </div>
              <div>
                <div className="text-white font-semibold tracking-tight">forge</div>
                <div className="text-[10px] -mt-0.5 text-white/40">2026</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-x-12 text-xs md:text-sm">
              <div className="space-y-2">
                <div className="text-white/40">Explore</div>
                <div>Platform</div><div>Models</div><div>Pricing</div>
              </div>
              <div className="space-y-2">
                <div className="text-white/40">Build</div>
                <div>Community</div><div>Gallery</div><div>Blog</div>
              </div>
              <div className="space-y-2">
                <div className="text-white/40">Legal</div>
                <div>Trust</div><div>Privacy</div><div>Accessibility</div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-xs tracking-widest text-white/40">MADE FOR PEOPLE WHO LOVE MAKING THINGS</div>
      </footer>

      {/* vibrant demo modal */}
      {showDemo && (
        <div className="fixed inset-0 z-[200] bg-black/70 flex items-center justify-center p-6" onClick={() => setShowDemo(false)}>
          <div className="bg-white w-full max-w-[400px] rounded-3xl p-9 shadow-xl" onClick={e => e.stopPropagation()}>
            {step === 'done' ? (
              <div className="text-center py-6">
                <div className="mx-auto mb-4 w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <div className="text-3xl font-semibold tracking-tight">You’re in.</div>
                <p className="text-zinc-500 mt-2">Opening your first forge…</p>
              </div>
            ) : (
              <>
                <div className="text-xs text-indigo-600 tracking-[2px]">30 SECONDS TO YOUR FIRST BUILD</div>
                <div className="mt-2 text-4xl tracking-[-1.4px] font-semibold">Ready when you are.</div>

                <form onSubmit={launch} className="mt-7">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@you.com"
                    className="w-full h-14 border border-zinc-200 focus:border-indigo-500 rounded-3xl px-6 text-lg outline-none placeholder:text-zinc-400"
                  />
                  <button
                    disabled={!email || step === 'loading'}
                    className="mt-3 w-full h-14 text-lg font-medium rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white active:brightness-105 disabled:opacity-60 transition-all"
                  >
                    {step === 'loading' ? 'SPINNING UP YOUR FORGE…' : 'CREATE MY WORKSPACE'}
                  </button>
                </form>
                <div className="text-center text-xs text-zinc-400 mt-5 tracking-widest">FREE FOREVER FOR INDIES • TEAMS START AT $18</div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
