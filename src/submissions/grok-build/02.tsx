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
  const closeDemo = () => setShowDemo(false)

  const launchDemo = (e: React.FormEvent) => {
    e.preventDefault()
    if (!demoEmail) return
    setDemoState('loading')
    setTimeout(() => {
      setDemoState('success')
      setTimeout(closeDemo, 1350)
    }, 780)
  }

  return (
    <div className="w-full bg-[#1f1a17] text-[#f5e8d3] overflow-hidden" style={{ fontFamily: 'Geist, ui-sans-serif, system-ui, sans-serif' }}>
      {/* NAV — warm industrial */}
      <nav className="border-b border-[#f5e8d3]/10 bg-[#1f1a17]">
        <div className="max-w-[1100px] mx-auto px-8 h-[78px] flex items-center justify-between text-[13px]">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border-2 border-[#f5e8d3]/70 flex items-center justify-center">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#f5e8d3" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 15l9-7 9 7" />
                  <path d="M21 21H3" />
                  <path d="M12 8V3" />
                </svg>
              </div>
              <div className="font-semibold tracking-[-0.015em] text-2xl text-[#f5e8d3]">forge</div>
            </div>
            <div className="text-[10px] px-2 py-px rounded bg-[#f5e8d3]/10 text-[#f5e8d3]/60 tracking-[2px] mt-1">EST 2019</div>
          </div>

          <div className="flex items-center gap-8 text-[#f5e8d3]/80">
            <a href="#features" className="hover:text-[#f5e8d3] transition-colors">The Work</a>
            <a href="#proof" className="hover:text-[#f5e8d3] transition-colors">Stories</a>
            <a href="#" className="hover:text-[#f5e8d3] transition-colors">Journal</a>
            <button onClick={openDemo} className="border border-[#f5e8d3]/30 hover:bg-[#f5e8d3]/5 px-5 py-2 rounded-xl transition-all">Enter the smithy</button>
          </div>
        </div>
      </nav>

      {/* HERO — split layout, warm craft aesthetic */}
      <section className="max-w-[1100px] mx-auto px-8 pt-16 pb-14 grid md:grid-cols-12 gap-x-8 items-center">
        <div className="md:col-span-7">
          <div className="uppercase tracking-[3.5px] text-xs text-[#d97757] mb-4">A TOOL FOR THE OBSESSED</div>
          <h1 className="text-[76px] leading-[0.9] tracking-[-0.03em] font-medium text-[#f5e8d3] mb-5" style={{ fontFamily: 'Instrument Serif, ui-serif, Georgia, serif' }}>
            Built by hand.<br />Forged by fire.
          </h1>
          <p className="max-w-md text-2xl text-[#f5e8d3]/75 tracking-[-0.005em]">
            Forge is the place where careful developers come to make software that feels inevitable.
          </p>

          <div className="flex gap-3 mt-9">
            <button onClick={openDemo} className="h-12 px-8 rounded-2xl bg-[#d97757] hover:bg-[#c45f40] active:bg-[#a64b30] text-[#1f1a17] font-medium text-[14px] tracking-[-0.1px] transition-colors">Begin a new forge</button>
            <button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="h-12 px-7 rounded-2xl border border-[#f5e8d3]/25 hover:bg-[#f5e8d3]/5 text-sm tracking-[-0.1px] transition-colors">See the process</button>
          </div>
          <div className="text-[10px] tracking-[1.5px] text-[#f5e8d3]/40 mt-4">USED BY 8,412 CRAFTSMEN • 94% RENEW AFTER FIRST YEAR</div>
        </div>

        {/* Visual: abstract anvil + code layers */}
        <div className="md:col-span-5 mt-10 md:mt-0 relative">
          <div className="relative mx-auto w-[310px] h-[310px] rounded-[48px] border border-[#f5e8d3]/15 bg-[#2a2521] flex items-center justify-center overflow-hidden">
            {/* Anvil base */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[188px] h-[38px] bg-[#3f3833] rounded-full" />
            <div className="absolute bottom-[72px] left-1/2 -translate-x-1/2 w-48 h-9 bg-[#4a423b] rounded-[20px]" />

            {/* Hammer head */}
            <div className="absolute top-[92px] left-[92px] w-[78px] h-[22px] bg-[#d97757] rounded-sm rotate-[-28deg] shadow-[0_6px_0_#a64b30]" />
            {/* Handle */}
            <div className="absolute top-[74px] left-[138px] w-[7px] h-[118px] bg-[#3f3833] rotate-[-28deg] origin-bottom" />

            {/* Floating code plates */}
            <div className="absolute top-[68px] right-[54px] bg-[#1f1a17] border border-[#f5e8d3]/20 text-[10px] font-mono tracking-[1px] px-3 py-2 rounded-xl rotate-[6deg] shadow-inner">
              &lt;Forge/&gt;
            </div>
            <div className="absolute bottom-[92px] left-[44px] bg-[#1f1a17] border border-[#f5e8d3]/20 text-[9px] font-mono tracking-[1.5px] px-2.5 py-1.5 rounded-xl -rotate-[11deg]">
              BUILD • TEST • SHIP
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES — warm, solid, numbered */}
      <section id="features" className="bg-[#2a2521] border-y border-[#f5e8d3]/10 py-20">
        <div className="max-w-[1100px] mx-auto px-8">
          <div className="mb-12 flex items-baseline gap-4">
            <div className="text-[#d97757] text-xs tracking-[4px]">THE THREE FIRES</div>
            <div className="h-px flex-1 bg-[#f5e8d3]/10" />
          </div>

          <div className="space-y-6">
            {/* Card 1 */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start border-l-[7px] border-[#d97757] pl-8 md:pl-9 py-1 group">
              <div className="w-9 h-9 rounded-full bg-[#d97757]/10 text-[#d97757] flex-shrink-0 flex items-center justify-center text-xl font-medium mt-1">I</div>
              <div className="flex-1">
                <div className="text-4xl tracking-[-0.015em] mb-2 text-[#f5e8d3]">The First Fire — Understanding</div>
                <p className="max-w-2xl text-[#f5e8d3]/75 text-[15px] leading-relaxed">Forge reads every commit, every decision, every comment you ever wrote. It doesn’t autocomplete — it co-authors with perfect recall of why things are the way they are.</p>
              </div>
              <div className="md:text-right text-xs text-[#f5e8d3]/40 md:pt-3 tracking-widest">DEEP REPOSITORY MEMORY</div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start border-l-[7px] border-[#f4a261] pl-8 md:pl-9 py-1 group">
              <div className="w-9 h-9 rounded-full bg-[#f4a261]/10 text-[#f4a261] flex-shrink-0 flex items-center justify-center text-xl font-medium mt-1">II</div>
              <div className="flex-1">
                <div className="text-4xl tracking-[-0.015em] mb-2 text-[#f5e8d3]">The Second Fire — Tension</div>
                <p className="max-w-2xl text-[#f5e8d3]/75 text-[15px] leading-relaxed">We surface the hard questions before code is written. Trade-offs become visible. You choose the shape. Forge holds the heat until you’re ready to strike.</p>
              </div>
              <div className="md:text-right text-xs text-[#f5e8d3]/40 md:pt-3 tracking-widest">CONFLICT SURFACING ENGINE</div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start border-l-[7px] border-[#c45f40] pl-8 md:pl-9 py-1 group">
              <div className="w-9 h-9 rounded-full bg-[#c45f40]/10 text-[#c45f40] flex-shrink-0 flex items-center justify-center text-xl font-medium mt-1">III</div>
              <div className="flex-1">
                <div className="text-4xl tracking-[-0.015em] mb-2 text-[#f5e8d3]">The Third Fire — Tempering</div>
                <p className="max-w-2xl text-[#f5e8d3]/75 text-[15px] leading-relaxed">Nothing ships until it has survived real traffic, real failures, and real humans. Automated canaries + human review gates. The final piece is always yours.</p>
              </div>
              <div className="md:text-right text-xs text-[#f5e8d3]/40 md:pt-3 tracking-widest">RITUALIZED RELEASE</div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF — testimonial blocks with warm tone */}
      <section id="proof" className="max-w-[1100px] mx-auto px-8 py-20">
        <div className="text-center mb-11">
          <div className="uppercase text-xs tracking-[3px] text-[#d97757]">VOICES FROM THE FORGE</div>
          <div className="text-[56px] tracking-[-0.025em] mt-3 leading-none" style={{ fontFamily: 'Instrument Serif, ui-serif, Georgia, serif' }}>What they say after<br />the metal cools.</div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <div className="bg-[#25201c] p-8 rounded-3xl border border-[#f5e8d3]/10">
            <div className="text-[#f5e8d3]/90 text-[15px] italic leading-[1.65]">“Forge made me fall in love with building again. Every session feels like working with a master craftsman who also happens to be a 10x engineer.”</div>
            <div className="mt-8">
              <div className="font-medium">Elias Thorn</div>
              <div className="text-xs text-[#f5e8d3]/50">Principal, Thorn &amp; Co.</div>
            </div>
          </div>

          <div className="bg-[#25201c] p-8 rounded-3xl border border-[#f5e8d3]/10">
            <div className="text-[#f5e8d3]/90 text-[15px] italic leading-[1.65]">“We used to spend three weeks on architecture reviews. Now the first 90% is done by Forge and we only debate the last 10%. The quality went up and the politics went down.”</div>
            <div className="mt-8">
              <div className="font-medium">Mira Patel</div>
              <div className="text-xs text-[#f5e8d3]/50">VP Engineering, Helios</div>
            </div>
          </div>

          <div className="bg-[#25201c] p-8 rounded-3xl border border-[#f5e8d3]/10">
            <div className="text-[#f5e8d3]/90 text-[15px] italic leading-[1.65]">“I forged my entire new product line over four evenings. The resulting codebase still feels like something I would have written — only better, and finished.”</div>
            <div className="mt-8">
              <div className="font-medium">Luca Moreau</div>
              <div className="text-xs text-[#f5e8d3]/50">Solo founder, Atelier</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER — grounded, warm */}
      <footer className="bg-[#181410] text-[#f5e8d3]/55 text-sm border-t border-[#f5e8d3]/10">
        <div className="max-w-[1100px] mx-auto px-8 py-16">
          <div className="flex flex-wrap gap-y-10 justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-7 h-7 rounded-full border border-[#f5e8d3]/40 flex items-center justify-center">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#f5e8d3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 15l9-7 9 7M21 21H3M12 8V3" />
                  </svg>
                </div>
                <span className="font-medium text-[#f5e8d3] tracking-tight">forge</span>
              </div>
              <div className="text-xs">Handcrafted in the Pacific Northwest since 2019.</div>
            </div>

            <div className="flex gap-16 text-xs">
              <div className="space-y-[13px]">
                <div className="text-[#f5e8d3]/35">THE FORGE</div>
                <div>Manifesto</div>
                <div>Process</div>
                <div>Public builds</div>
              </div>
              <div className="space-y-[13px]">
                <div className="text-[#f5e8d3]/35">FOR TEAMS</div>
                <div>Pricing</div>
                <div>Enterprise</div>
                <div>Security</div>
              </div>
              <div className="space-y-[13px]">
                <div className="text-[#f5e8d3]/35">STAY CLOSE</div>
                <div>Letters</div>
                <div>Events</div>
                <div>Press</div>
              </div>
            </div>
          </div>

          <div className="h-px bg-[#f5e8d3]/10 my-9" />
          <div className="flex justify-between text-[11px] tracking-wider">
            <div>© FORGE CRAFT CO. ALL RIGHTS RESERVED.</div>
            <div>PRIVACY • TERMS • ETHOS</div>
          </div>
        </div>
      </footer>

      {/* DEMO MODAL — warm version */}
      {showDemo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1f1a17]/90 p-6" onClick={closeDemo}>
          <div className="w-full max-w-md bg-[#2a2521] border border-[#f5e8d3]/15 rounded-3xl p-9 text-[#f5e8d3]" onClick={e => e.stopPropagation()}>
            {demoState === 'success' ? (
              <div className="py-10 text-center">
                <div className="mx-auto mb-5 w-14 h-14 rounded-full bg-[#d97757] flex items-center justify-center">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1f1a17" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div className="text-3xl tracking-tight" style={{ fontFamily: 'Instrument Serif, ui-serif, Georgia, serif' }}>The fire is lit.</div>
                <p className="text-[#f5e8d3]/60 mt-2">Your forge is ready. Stepping inside…</p>
              </div>
            ) : (
              <>
                <div className="uppercase text-xs tracking-[2.5px] text-[#d97757]">THE SMITHY AWAITS</div>
                <div className="mt-1.5 text-[34px] leading-none tracking-[-0.02em]" style={{ fontFamily: 'Instrument Serif, ui-serif, Georgia, serif' }}>Tell us where to send the heat.</div>

                <form onSubmit={launchDemo} className="mt-8">
                  <input
                    type="email"
                    value={demoEmail}
                    onChange={e => setDemoEmail(e.target.value)}
                    placeholder="your@workshop.com"
                    className="block w-full bg-[#1f1a17] border border-[#f5e8d3]/20 focus:border-[#d97757] h-14 px-6 rounded-2xl text-lg outline-none placeholder:text-[#f5e8d3]/30"
                    required
                  />
                  <button
                    type="submit"
                    disabled={!demoEmail || demoState === 'loading'}
                    className="mt-4 w-full h-14 bg-[#d97757] hover:bg-[#c45f40] active:bg-[#a64b30] text-[#1f1a17] rounded-2xl font-medium disabled:opacity-70 transition-all flex justify-center items-center gap-2"
                  >
                    {demoState === 'loading' ? 'HEATING THE ANVIL…' : 'START MY FIRST FORGE'}
                  </button>
                </form>
                <div className="text-center text-[10px] text-[#f5e8d3]/40 tracking-widest mt-5">14 DAYS OF PURE FIRE • NO CARD NEEDED</div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
