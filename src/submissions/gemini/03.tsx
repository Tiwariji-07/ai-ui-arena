import { useState, useEffect, useRef } from 'react'

interface EdgeNode {
  id: string
  location: string
  latency: number
  status: 'online' | 'replicating' | 'offline'
}

export default function Submission() {
  // Syncing Simulation State
  const [syncStatus, setSyncStatus] = useState<'idle' | 'syncing' | 'completed'>('idle')
  const [syncProgress, setSyncProgress] = useState(0)
  const [edgeNodes, setEdgeNodes] = useState<EdgeNode[]>([
    { id: 'node-us-east', location: 'Virginia, US', latency: 14, status: 'online' },
    { id: 'node-eu-west', location: 'Frankfurt, DE', latency: 42, status: 'online' },
    { id: 'node-ap-south', location: 'Singapore, SG', latency: 89, status: 'online' }
  ])

  // Feature expansion state
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  // Testimonial selector state
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  // Simulation ref
  const syncIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const triggerReplication = () => {
    if (syncStatus === 'syncing') return
    setSyncStatus('syncing')
    setSyncProgress(0)

    setEdgeNodes(prev => prev.map(node => ({ ...node, status: 'replicating' })))

    let currentProgress = 0
    if (syncIntervalRef.current) clearInterval(syncIntervalRef.current)

    syncIntervalRef.current = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 25) + 12
      if (currentProgress >= 100) {
        currentProgress = 100
        if (syncIntervalRef.current) clearInterval(syncIntervalRef.current)
        setSyncStatus('completed')
        setSyncProgress(100)
        setEdgeNodes([
          { id: 'node-us-east', location: 'Virginia, US', latency: Math.floor(Math.random() * 5) + 8, status: 'online' },
          { id: 'node-eu-west', location: 'Frankfurt, DE', latency: Math.floor(Math.random() * 15) + 30, status: 'online' },
          { id: 'node-ap-south', location: 'Singapore, SG', latency: Math.floor(Math.random() * 20) + 75, status: 'online' }
        ])
      } else {
        setSyncProgress(currentProgress)
      }
    }, 200)
  }

  useEffect(() => {
    return () => {
      if (syncIntervalRef.current) clearInterval(syncIntervalRef.current)
    }
  }, [])

  const features = [
    {
      title: 'Quantum-Cache Edge',
      desc: 'Caches AST compilation targets globally. Instantly replicates cached segments to 1,200+ edge clusters so compilation is practically instantaneous anywhere.',
      accent: 'from-cyan-400 to-teal-400',
      shadow: 'shadow-cyan-500/10'
    },
    {
      title: 'Telepathic Telemetry',
      desc: 'Predictive anomaly monitoring analyzing live JVM and AST compiler performance heatmaps. Pinpoints logical blocks that threaten memory safety.',
      accent: 'from-fuchsia-500 to-pink-500',
      shadow: 'shadow-pink-500/10'
    },
    {
      title: 'Sub-Orbital Syncing',
      desc: 'Direct near-zero network latency file sync between local code editors and cloud runner nodes. Say goodbye to git commit-and-wait rituals.',
      accent: 'from-violet-500 to-indigo-500',
      shadow: 'shadow-violet-500/10'
    }
  ]

  const testimonials = [
    {
      quote: 'Forge is doing things with compiler synchronization that felt like magic. We save 3 hours per engineer every single day by removing wait states completely.',
      author: 'Lina Gellar',
      role: 'Core Systems Director, NeoNexus',
      borderGlow: 'hover:border-cyan-500/50'
    },
    {
      quote: 'We moved our entire serverless build chain to Forge in a weekend. The edge compilation caching makes standard CI setups look like dial-up internet.',
      author: 'Kaelen Vance',
      role: 'Principal Architect, Synapse Network',
      borderGlow: 'hover:border-fuchsia-500/50'
    },
    {
      quote: 'The telepathic telemetry system flags security exceptions in memory bounds before the build finishes. Incredible foresight, beautifully packaged.',
      author: 'Dr. Akira Thorne',
      role: 'Head of Infrastructure, DeepOrbit Systems',
      borderGlow: 'hover:border-violet-500/50'
    }
  ]

  return (
    <main className="min-h-screen bg-[#04040c] text-slate-100 font-sans relative overflow-hidden selection:bg-fuchsia-500 selection:text-white pb-12">
      
      {/* Radiant Glow Orbs */}
      <div className="absolute top-[10%] left-[20%] w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-violet-600/10 to-indigo-600/0 pointer-events-none blur-[100px] animate-pulse" />
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-cyan-500/10 to-emerald-500/0 pointer-events-none blur-[120px] animate-pulse" />
      <div className="absolute top-[60%] left-[-5%] w-[350px] h-[350px] rounded-full bg-gradient-to-br from-fuchsia-600/5 to-pink-600/0 pointer-events-none blur-[90px]" />

      {/* Grid Pattern Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#141527_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      {/* Navigation */}
      <header className="border-b border-white/5 relative z-10 bg-[#04040c]/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Glowing Logo */}
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-500 via-violet-500 to-fuchsia-500 p-[1.5px] shadow-[0_0_15px_rgba(139,92,246,0.3)]">
              <div className="w-full h-full bg-[#04040c] rounded-[7px] flex items-center justify-center">
                <span className="text-white font-black text-sm tracking-widest bg-gradient-to-tr from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">F</span>
              </div>
            </div>
            <span className="text-lg font-black tracking-widest bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              FORGE
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <a href="#cosmos" className="hover:text-cyan-400 transition-colors">Quantum Features</a>
            <a href="#replication-cockpit" className="hover:text-fuchsia-400 transition-colors">Cosmic Core</a>
            <a href="#reviews" className="hover:text-violet-400 transition-colors">Testimonials</a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              EDGE NETWORK: ACTIVE
            </div>
            <a 
              href="#replication-cockpit" 
              className="px-5 py-2.5 rounded-lg text-xs font-bold bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white transition-all transform hover:scale-[1.02] shadow-[0_0_20px_rgba(6,182,212,0.35)]"
            >
              LAUNCH CONSOLE
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-violet-500/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-cyan-300">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
              NEXT-GEN FEDERATED EDGE COMPILING
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              Orchestrate your code at the <br />
              <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                speed of thought.
              </span>
            </h1>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl">
              The classic developer pipeline is broken, slow, and disconnected. Forge coordinates local code files, telemetry channels, and cloud execution environments into a single seamless network.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#replication-cockpit" 
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 text-white font-bold text-center text-sm hover:opacity-95 shadow-[0_0_25px_rgba(139,92,246,0.3)] transition-all hover:scale-[1.01]"
              >
                Initiate Free Sync
              </a>
              <a 
                href="#cosmos" 
                className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 font-bold text-center text-sm transition-all"
              >
                Decipher Docs
              </a>
            </div>

            {/* Glowing specs */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 pt-6 border-t border-white/5 text-xs text-slate-500 font-mono">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">⚡</span> LATENCY: ~4MS
              </div>
              <div className="flex items-center gap-2">
                <span className="text-fuchsia-400">⚛</span> EDGE COMPILING
              </div>
              <div className="flex items-center gap-2">
                <span className="text-violet-400">✦</span> ZERO COLD-STARTS
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Replicating Edge Nodes Map */}
          <div id="replication-cockpit" className="lg:col-span-6">
            <div className="backdrop-blur-md bg-white/[0.03] border border-white/10 rounded-2xl p-6 shadow-2xl relative">
              
              {/* Glassmorphic overlay gloss */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/[0.02] to-transparent pointer-events-none" />
              
              <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                <div className="space-y-1">
                  <span className="text-[10px] text-cyan-400 font-mono tracking-widest uppercase">Global Mesh Map</span>
                  <h3 className="font-extrabold text-base text-white">REPLICATION RUNNERS</h3>
                </div>

                <button
                  onClick={triggerReplication}
                  disabled={syncStatus === 'syncing'}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all border ${
                    syncStatus === 'syncing'
                      ? 'bg-fuchsia-500/15 border-fuchsia-500/30 text-fuchsia-300'
                      : 'bg-white/5 hover:bg-white/10 border-white/10 text-white'
                  }`}
                >
                  {syncStatus === 'syncing' ? `SYNCING [${syncProgress}%]` : 'Replicate Workspace'}
                </button>
              </div>

              {/* Node Diagram Visual Container */}
              <div className="bg-[#020207]/80 rounded-xl p-5 border border-white/5 space-y-4 relative min-h-[220px] flex flex-col justify-center">
                
                {/* Node mapping grid links */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                  <svg className="w-full h-full text-violet-500" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <line x1="10" y1="50" x2="50" y2="20" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="10" y1="50" x2="50" y2="80" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="50" y1="20" x2="90" y2="50" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="50" y1="80" x2="90" y2="50" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>

                {/* Simulated workspace core node */}
                <div className="flex justify-between items-center bg-white/[0.02] border border-white/10 rounded-lg p-3.5 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center">
                      <span className="text-[10px] font-mono text-cyan-400">DEV</span>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">Local Workspace</span>
                      <span className="text-[10px] text-slate-500 font-mono">14 modified files ready</span>
                    </div>
                  </div>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                    syncStatus === 'syncing' ? 'bg-fuchsia-500/20 text-fuchsia-400' : 'bg-cyan-500/20 text-cyan-400'
                  }`}>
                    {syncStatus === 'syncing' ? 'UPLOADING' : 'STANDBY'}
                  </span>
                </div>

                {/* Edge replicated nodes status lists */}
                <div className="grid sm:grid-cols-3 gap-3 pt-2 relative z-10">
                  {edgeNodes.map((node) => (
                    <div key={node.id} className="bg-[#050510] border border-white/5 rounded-lg p-3 space-y-3 relative overflow-hidden">
                      {node.status === 'replicating' && (
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-fuchsia-500 animate-pulse" />
                      )}
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] text-slate-400 font-bold">{node.location}</span>
                        <span className={`w-1.5 h-1.5 rounded-full ${node.status === 'replicating' ? 'bg-fuchsia-400 animate-ping' : 'bg-cyan-400'}`} />
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-white font-mono">{node.latency}ms</span>
                        <span className="text-[9px] text-slate-600 font-mono uppercase">RTT Latency</span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              {/* Mini analytics logs footer */}
              <div className="mt-4 flex items-center justify-between font-mono text-[10px] text-slate-500 border-t border-white/5 pt-4">
                <span>REPLICATION_SECURE: AES-256</span>
                <span>SYNC TIME: {syncStatus === 'completed' ? '120ms' : '--'}</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Features Cards Cosmic Grid */}
      <section id="cosmos" className="py-20 md:py-28 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16 md:mb-24">
          <span className="text-xs font-bold tracking-widest text-fuchsia-400 uppercase font-mono">01 // QUANTUM WORKSPACE</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            DESTRUCTURE THE TRADITIONAL PIPELINE.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Forge replaces sluggish orchestration workflows with real-time compilation caching and direct, hot edge executions.
          </p>
        </div>

        {/* 3 Interactive feature cards with color gradients */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feat, index) => (
            <article
              key={index}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
              className={`backdrop-blur-md bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/[0.04] transition-all duration-300 relative shadow-2xl ${feat.shadow} ${
                hoveredFeature === index ? 'translate-y-[-4px] border-white/20' : ''
              }`}
            >
              {/* Highlight background light ray on hover */}
              <div className={`absolute -inset-[1px] bg-gradient-to-tr ${feat.accent} opacity-0 hover:opacity-10 rounded-2xl transition-opacity duration-300 pointer-events-none`} />

              <div className="space-y-6 relative z-10">
                <span className={`text-[10px] font-mono font-bold tracking-widest uppercase bg-gradient-to-r ${feat.accent} bg-clip-text text-transparent`}>
                  SPEC_0{index + 1} // ACTIVE
                </span>
                
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {feat.title}
                </h3>
                
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {feat.desc}
                </p>
                
                {/* Tech list */}
                <ul className="space-y-2 border-t border-white/5 pt-4 text-xs font-mono text-slate-500">
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">✓</span> Infinite compilation hit-rates
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">✓</span> Automated security boundary locks
                  </li>
                </ul>
              </div>
            </article>
          ))}
        </div>

      </section>

      {/* Social proof testimonials section */}
      <section id="reviews" className="py-20 md:py-28 bg-[#020207]/40 border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 pb-8 border-b border-white/5">
            <div className="space-y-3">
              <span className="text-xs font-bold text-violet-400 uppercase tracking-wider font-mono">02 // COGNITIVE REVIEWS</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                VERDICT FROM LEADING INFRASTRUCTURE TEAMS.
              </h2>
            </div>
            
            {/* Interactive testimonial indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-7 h-1 rounded-full transition-all duration-300 ${
                    activeTestimonial === index ? 'bg-cyan-400' : 'bg-white/10 hover:bg-white/20'
                  }`}
                  aria-label={`Show review ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Active quote card */}
            <div className="lg:col-span-8">
              <div className="backdrop-blur-md bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden transition-all duration-300">
                <span className="absolute top-4 right-6 text-9xl font-serif text-white/[0.01] pointer-events-none select-none">”</span>
                
                <div className="space-y-6 relative z-10">
                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-semibold italic">
                    “{testimonials[activeTestimonial].quote}”
                  </p>
                  
                  <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-violet-500 flex items-center justify-center font-bold text-white text-xs">
                      {testimonials[activeTestimonial].author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <cite className="not-italic font-bold text-white text-sm block tracking-tight">
                        {testimonials[activeTestimonial].author}
                      </cite>
                      <span className="text-[10px] text-slate-500 font-mono block mt-0.5">
                        {testimonials[activeTestimonial].role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial list grid column */}
            <div className="lg:col-span-4 space-y-4">
              {testimonials.map((test, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex flex-col gap-2 ${
                    activeTestimonial === index 
                      ? 'bg-white/[0.05] border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.1)]' 
                      : 'bg-white/[0.01] border-white/5 text-slate-400 hover:bg-white/[0.02] hover:text-slate-200'
                  }`}
                >
                  <span className="text-xs font-bold block">{test.author}</span>
                  <span className="text-[10px] font-mono block opacity-60">{test.role}</span>
                </button>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Futuristic launching Call to Action */}
      <section className="py-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden p-[1.5px] bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 shadow-[0_0_40px_rgba(139,92,246,0.15)]">
          <div className="w-full h-full bg-[#050510] rounded-[22px] p-8 md:p-14 text-center space-y-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-transparent to-fuchsia-500/5 pointer-events-none" />
            
            <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                LAUNCH DETECTABLE RELEASE CYCLES.
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                Connect your local workspace and achieve zero drift, infinite cache hit speeds, and automated release rollbacks in seconds.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto pt-4">
              <a 
                href="#replication-cockpit" 
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-bold text-sm hover:opacity-95 shadow-lg active:scale-[0.98] transition-all"
              >
                Launch Workspace Core
              </a>
              <a 
                href="#cosmos" 
                className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 font-bold text-sm transition-all"
              >
                Schedule Architecture Review
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Cosmic Footer */}
      <footer className="border-t border-white/5 bg-[#04040c] px-4 py-12 relative z-10 text-[10px] font-mono text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent font-black">FORGE NEBULA INDEX</span>
            <span className="text-slate-800">|</span>
            <span>BUILD BOLD. DEPLOY EDGE. LIVE SAFE.</span>
          </div>

          <div className="flex items-center gap-6">
            <span>© 2026 FORGE EDGE NETWORKS AG.</span>
            <a href="#" className="hover:text-cyan-400 transition-colors">SECURITY-BLUEPRINTS</a>
            <a href="#" className="hover:text-fuchsia-400 transition-colors">RELIABILITY-METRICS</a>
          </div>
        </div>
      </footer>

    </main>
  )
}
