import { useState, useEffect, useRef } from 'react'

export default function Submission() {
  // Build Simulator State
  const [isCompiling, setIsCompiling] = useState(false)
  const [progress, setProgress] = useState(0)
  const [selectedTarget, setSelectedTarget] = useState<'wasm' | 'native' | 'kernel'>('wasm')
  const [logs, setLogs] = useState<string[]>([
    'SYSTEM: Ready to forge new compiler instance.',
    'TARGET: WebAssembly (wasm32-unknown-unknown)',
    'STATUS: Idle'
  ])
  const [metrics, setMetrics] = useState({
    cpu: 12,
    memory: '142MB',
    throughput: '4.2 GB/s',
    stability: '99.998%'
  })
  
  // Feature Detail Toggle State
  const [activeFeature, setActiveTab] = useState(0)
  
  // Testimonial interactive index
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  // Simulation interval ref
  const compileIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const targets = {
    wasm: { name: 'WASM Build Engine', command: 'forge-compile --target=wasm', file: 'lib_forge.wasm' },
    native: { name: 'Native Mach-O Binary', command: 'forge-compile --target=native', file: 'bin_forge_macos' },
    kernel: { name: 'Bare-Metal eBPF Module', command: 'forge-compile --target=ebpf', file: 'forge_core.ko' }
  }

  // Trigger Build Simulation
  const handleCompile = () => {
    if (isCompiling) return
    setIsCompiling(true)
    setProgress(0)
    
    const timestamp = () => new Date().toLocaleTimeString().split(' ')[0]
    
    setLogs([
      `[${timestamp()}] INITIALIZING: Spawning isolated sandbox environment...`,
      `[${timestamp()}] TARGET: Executing: ${targets[selectedTarget].command}`,
    ])

    let currentProgress = 0
    if (compileIntervalRef.current) clearInterval(compileIntervalRef.current)
    
    compileIntervalRef.current = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 20) + 10
      if (currentProgress >= 100) {
        currentProgress = 100
        clearInterval(compileIntervalRef.current!)
        setIsCompiling(false)
        setLogs(prev => [
          ...prev,
          `[${timestamp()}] ANALYZING: Running steel-clad runtime tests...`,
          `[${timestamp()}] OPTIMIZING: Tree-shaking 14,204 dead branches...`,
          `[${timestamp()}] SUCCESS: Compiled ${targets[selectedTarget].file} successfully!`,
          `[${timestamp()}] METRICS: Compile time: 42ms | Code size reduced by 64.2%`
        ])
        setMetrics(prev => ({
          ...prev,
          cpu: Math.floor(Math.random() * 15) + 5,
          memory: `${Math.floor(Math.random() * 20) + 120}MB`,
          throughput: `${(Math.random() * 2 + 3.8).toFixed(2)} GB/s`
        }))
      } else {
        setProgress(currentProgress)
        // Add step logs occasionally
        if (currentProgress > 25 && currentProgress < 45) {
          setLogs(prev => {
            if (prev.some(l => l.includes('RESOLVING'))) return prev
            return [...prev, `[${timestamp()}] RESOLVING: Loading static dependency boundaries...`]
          })
        }
        if (currentProgress > 60 && currentProgress < 80) {
          setLogs(prev => {
            if (prev.some(l => l.includes('TRANSPILES'))) return prev
            return [...prev, `[${timestamp()}] TRANSPILES: Translating AST to safe kernel-grade code...`]
          })
        }
      }
    }, 150)
  }

  useEffect(() => {
    return () => {
      if (compileIntervalRef.current) clearInterval(compileIntervalRef.current)
    }
  }, [])

  const features = [
    {
      title: 'Hydra-Threading Compile',
      badge: 'SPEED',
      description: 'Parallel multi-target compilation with zero thread locking. Splices source code across custom worker clusters with instant incremental caching.',
      specs: ['Sub-millisecond hot-swaps', 'Distributed cluster caching', 'Intelligent dependency mapping'],
      svg: (
        <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Steel-Clad Sandbox',
      badge: 'SECURITY',
      description: 'Hardened, isolate-first runtimes wrapped inside ephemeral micro-containers. Zero system call drift means your local builds are identical to production cluster runs.',
      specs: ['Strict environment sandboxing', 'Zero runtime drift guarantees', 'Automated security boundary checks'],
      svg: (
        <svg className="w-8 h-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Soothe-Rollback Valves',
      badge: 'RESILIENCE',
      description: 'Safety-first delivery pipelines configured with automatic hot-swap relief valves. Instantly sheds bad loads and triggers a millisecond rollback before your cluster alerts fire.',
      specs: ['Microsecond release rollback', 'Auto load-shedding triggers', 'Failure telemetry logging'],
      svg: (
        <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 6H16" />
        </svg>
      )
    }
  ]

  const testimonials = [
    {
      quote: 'Forge replaced three complex tools and our nervous rituals around deployment day. We compile, wrap, and deploy 14 times a day without breaking a sweat.',
      author: 'Marcus Vance',
      role: 'Principal SRE, Overdrive Systems',
      avatar: 'MV',
      color: 'from-orange-600 to-amber-500'
    },
    {
      quote: 'Our build verification step was a massive, mysterious black box. Forge tracks every environment variable and library, giving us total trace clarity.',
      author: 'Aria Sterling',
      role: 'Head of Infrastructure, CloudScale',
      avatar: 'AS',
      color: 'from-red-600 to-orange-500'
    },
    {
      quote: 'Since introducing Forge, our telemetry alerts dropped by 82%. If a build experiences drift or high latency, Forge catches it and reverts instantly.',
      author: 'Tariq Al-Fayed',
      role: 'Lead Developer, QuantumFlow',
      avatar: 'TF',
      color: 'from-amber-600 to-red-500'
    }
  ]

  return (
    <main className="min-h-screen bg-[#08090c] text-slate-100 font-sans selection:bg-orange-500 selection:text-black relative overflow-hidden">
      {/* Mesh Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,107,53,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,107,53,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,107,53,0.05)_0%,transparent_70%)] pointer-events-none blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle_at_center,rgba(247,183,49,0.03)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      {/* Header / Nav */}
      <header className="border-b border-orange-500/15 relative z-10 bg-[#08090c]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo Mark */}
            <div className="w-8 h-8 rounded border border-orange-500 bg-orange-950/20 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-amber-500/20 animate-pulse" />
              <span className="font-mono font-bold text-orange-500 relative z-10 text-base">F</span>
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              FORGE
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#features" className="hover:text-orange-500 transition-colors">Blueprints</a>
            <a href="#interactive-simulator" className="hover:text-orange-500 transition-colors">Interactive Core</a>
            <a href="#testimonials" className="hover:text-orange-500 transition-colors">Operator Log</a>
          </nav>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 animate-pulse">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              v2.4.1 online
            </span>
            <a 
              href="#interactive-simulator" 
              className="px-4 py-2 rounded text-xs font-mono font-bold bg-orange-500 text-black hover:bg-orange-400 transition-all shadow-[0_0_15px_rgba(238,150,75,0.2)] active:translate-y-px"
            >
              IGNITE INSTANCE
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 border border-orange-500/30 bg-orange-950/20 px-3.5 py-1.5 rounded text-xs font-mono font-bold text-orange-400 tracking-wide">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-ping" />
              HOT DEPLOY PIPELINES ACTIVATED
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              HAMMER YOUR RAW CODE INTO{' '}
              <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 bg-clip-text text-transparent font-black block sm:inline">
                PRODUCTION.
              </span>
            </h1>
            
            <p className="text-slate-400 text-lg sm:text-xl leading-relaxed max-w-xl">
              Forge is the high-performance compiler-orchestrator that compiles, hardens, tests, and deploys raw code with zero-overhead containerization and instant failure tracing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#interactive-simulator" 
                className="px-8 py-4 rounded bg-orange-500 text-black font-semibold text-center hover:bg-orange-400 transition-all shadow-[0_0_25px_rgba(255,107,53,0.25)] flex items-center justify-center gap-2 group text-sm"
              >
                <span>Initialize Forge Cockpit</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a 
                href="#features" 
                className="px-8 py-4 rounded border border-slate-700 bg-slate-900/40 text-slate-300 font-semibold text-center hover:bg-slate-800 hover:text-white transition-all text-sm flex items-center justify-center"
              >
                Inspect Blueprints
              </a>
            </div>

            {/* Micro stats banner */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800/80 font-mono">
              <div>
                <div className="text-2xl font-bold text-white tracking-tight">42ms</div>
                <div className="text-xs text-slate-500 mt-1 uppercase">Avg Build Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white tracking-tight">99.998%</div>
                <div className="text-xs text-slate-500 mt-1 uppercase">Sandbox Integrity</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white tracking-tight">0%</div>
                <div className="text-xs text-slate-500 mt-1 uppercase">Configuration Drift</div>
              </div>
            </div>
          </div>

          {/* Hero Right: Interactive Build Simulator Console */}
          <div id="interactive-simulator" className="lg:col-span-6">
            <div className="rounded-xl border border-orange-500/25 bg-[#0b0c11] shadow-[0_0_50px_rgba(255,107,53,0.1)] overflow-hidden">
              
              {/* Console Header Bar */}
              <div className="bg-slate-950 px-4 py-3 border-b border-orange-500/15 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 block" />
                  <span className="ml-2 text-xs font-mono text-slate-500">forge-cockpit // core-panel</span>
                </div>
                <div className="font-mono text-[10px] text-orange-400 bg-orange-950/40 px-2 py-0.5 rounded border border-orange-500/20">
                  SYSTEM OK
                </div>
              </div>

              {/* Console Action Panel */}
              <div className="p-5 border-b border-slate-900 bg-slate-950/40">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider block">Target Architecture</span>
                    <div className="flex gap-2">
                      {(['wasm', 'native', 'kernel'] as const).map((tgt) => (
                        <button
                          key={tgt}
                          onClick={() => !isCompiling && setSelectedTarget(tgt)}
                          disabled={isCompiling}
                          className={`px-3 py-1.5 rounded text-xs font-mono font-bold transition-all border ${
                            selectedTarget === tgt
                              ? 'bg-orange-500/10 text-orange-400 border-orange-500/40 shadow-[0_0_10px_rgba(255,107,53,0.08)]'
                              : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700 disabled:opacity-50'
                          }`}
                        >
                          {tgt.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleCompile}
                    disabled={isCompiling}
                    className={`sm:self-end px-5 py-2.5 rounded font-mono text-xs font-bold tracking-wide uppercase transition-all duration-200 flex items-center justify-center gap-2 border ${
                      isCompiling
                        ? 'bg-amber-500/10 text-amber-400 border-amber-500/30 cursor-not-allowed'
                        : 'bg-orange-500 text-black hover:bg-orange-400 border-transparent active:scale-[0.98]'
                    }`}
                  >
                    {isCompiling ? (
                      <>
                        <svg className="animate-spin h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>FORGING [{progress}%]</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span>IGNITE COMPILER</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Progress bar */}
                <div className="mt-4 h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800/60">
                  <div 
                    className="h-full bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 transition-all duration-150 relative"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute top-0 right-0 bottom-0 w-2 bg-white animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Console Logs Terminal */}
              <div className="p-4 bg-slate-950 font-mono text-xs text-slate-300 min-h-[190px] max-h-[190px] overflow-y-auto space-y-2 selection:bg-slate-800">
                {logs.map((log, index) => {
                  let colorClass = 'text-slate-400'
                  if (log.includes('SUCCESS:')) colorClass = 'text-emerald-400 font-bold'
                  else if (log.includes('METRICS:')) colorClass = 'text-sky-400'
                  else if (log.includes('TARGET:') || log.includes('SYSTEM:')) colorClass = 'text-orange-400 font-semibold'
                  else if (log.includes('RESOLVING:') || log.includes('TRANSPILES:')) colorClass = 'text-amber-300'
                  
                  return (
                    <div key={index} className={`leading-relaxed break-all ${colorClass}`}>
                      {log}
                    </div>
                  )
                })}
              </div>

              {/* Console Metrics Dashboard Footer */}
              <div className="grid grid-cols-4 divide-x divide-slate-900 border-t border-slate-900 bg-slate-950/80 p-3 text-center">
                <div>
                  <span className="block text-[9px] text-slate-500 font-mono uppercase tracking-wider">Engine Temp</span>
                  <span className="font-mono text-xs font-bold text-orange-400">{isCompiling ? '1,180°C' : '340°C'}</span>
                </div>
                <div>
                  <span className="block text-[9px] text-slate-500 font-mono uppercase tracking-wider">VM Load</span>
                  <span className="font-mono text-xs font-bold text-slate-200">{metrics.cpu}% CPU</span>
                </div>
                <div>
                  <span className="block text-[9px] text-slate-500 font-mono uppercase tracking-wider">Isolation Leak</span>
                  <span className="font-mono text-xs font-bold text-emerald-400">0.00%</span>
                </div>
                <div>
                  <span className="block text-[9px] text-slate-500 font-mono uppercase tracking-wider">Release Gate</span>
                  <span className="font-mono text-xs font-bold text-amber-400">ARMED</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Feature Section */}
      <section id="features" className="py-20 md:py-28 border-y border-slate-900 bg-slate-950/40 relative">
        <div className="absolute top-0 right-0 w-[30%] h-[30%] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,107,53,0.02)_0%,transparent_70%)] pointer-events-none blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-24">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-orange-500">INDUSTRIAL CORE SPECIFICATION</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              HARDENED UNDER PRESSURE. BUILT FOR SCALE.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              We stripped away the fluff, the bloated containers, and the flaky web hooks. Forge builds your software directly on deterministic compiler systems.
            </p>
          </div>

          {/* Interactive Feature Board */}
          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Left selector menu */}
            <div className="lg:col-span-4 space-y-3">
              {features.map((feat, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-5 rounded-lg border transition-all flex items-center gap-4 ${
                    activeFeature === index 
                      ? 'bg-slate-900/80 border-orange-500/30 text-white shadow-[0_4px_20px_rgba(255,107,53,0.04)]' 
                      : 'bg-transparent border-transparent text-slate-400 hover:bg-slate-900/30 hover:text-slate-200'
                  }`}
                >
                  <div className={`p-2 rounded bg-slate-950 border ${
                    activeFeature === index ? 'border-orange-500/20 text-orange-500' : 'border-slate-800'
                  }`}>
                    {feat.svg}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-wider text-orange-500/70 block uppercase">{feat.badge}</span>
                    <span className="font-bold text-sm tracking-tight">{feat.title}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Right feature card detail */}
            <div className="lg:col-span-8">
              <div className="h-full rounded-xl border border-slate-800/80 bg-slate-950 p-6 sm:p-10 flex flex-col justify-between space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 px-4 py-2 bg-slate-900 text-slate-500 font-mono text-[10px] rounded-bl-lg border-l border-b border-slate-800">
                  REF // 0{activeFeature + 1}
                </div>
                
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-orange-500 uppercase">
                    <span>{features[activeFeature].badge} DIVISION</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {features[activeFeature].title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-base sm:text-lg">
                    {features[activeFeature].description}
                  </p>
                </div>

                <div className="border-t border-slate-900 pt-6">
                  <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider block mb-4">Technical Specifications</span>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {features[activeFeature].specs.map((spec, sidx) => (
                      <div key={sidx} className="flex items-center gap-2.5">
                        <svg className="w-4 h-4 text-orange-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-xs font-mono font-semibold text-slate-300">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Social Proof / Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute bottom-0 left-0 w-[30%] h-[30%] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,107,53,0.02)_0%,transparent_70%)] pointer-events-none blur-3xl" />
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left panel: Info */}
          <div className="lg:col-span-4 space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-orange-500">OPERATOR FEEDBACK LOGS</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              CRITICAL VERDICT FROM REAL DEPLOYMENTS.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              When hardware runs hot and service guarantees are on the line, engineers rely on Forge. Here is what leading operations systems leads say about our sandbox system.
            </p>
            <div className="flex gap-2 pt-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2.5 transition-all duration-300 rounded-full ${
                    activeTestimonial === index ? 'w-8 bg-orange-500' : 'w-2.5 bg-slate-800 hover:bg-slate-700'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right panel: Active Card container with layout transitions */}
          <div className="lg:col-span-8">
            <div className="relative min-h-[300px] flex items-center">
              
              {/* Main Active Testimonial Card */}
              <div className="w-full bg-[#0b0c11] border border-orange-500/15 rounded-xl p-6 sm:p-10 shadow-xl relative z-10 transition-all duration-500">
                
                {/* Quote Mark */}
                <span className="absolute top-6 left-6 text-7xl font-serif text-orange-500/10 pointer-events-none select-none">“</span>
                
                <div className="space-y-6 relative z-10">
                  <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-medium italic">
                    {testimonials[activeTestimonial].quote}
                  </p>
                  
                  <div className="flex items-center gap-4 pt-6 border-t border-slate-900">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${testimonials[activeTestimonial].color} flex items-center justify-center font-mono font-bold text-black text-sm`}>
                      {testimonials[activeTestimonial].avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base tracking-tight">{testimonials[activeTestimonial].author}</h4>
                      <p className="text-xs text-slate-500 font-mono mt-0.5">{testimonials[activeTestimonial].role}</p>
                    </div>
                  </div>
                </div>

                {/* Cyber HUD visual lines */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
                  <span className="w-8 h-[1px] bg-slate-800" />
                  <span className="text-[9px] text-slate-600 font-mono">Verified Sign-off</span>
                </div>
              </div>

              {/* Stacked background cards for depth */}
              <div className="absolute top-2 right-[-8px] bottom-2 left-2 bg-orange-950/10 border border-orange-500/5 rounded-xl pointer-events-none transform translate-x-2 translate-y-1 scale-[0.98] z-0" />
              <div className="absolute top-4 right-[-16px] bottom-4 left-4 bg-orange-950/5 border border-orange-500/5 rounded-xl pointer-events-none transform translate-x-4 translate-y-2 scale-[0.96] z-[-1]" />
            </div>
          </div>

        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-2xl border border-orange-500/25 bg-gradient-to-br from-slate-950 to-[#0e1017] p-8 md:p-14 text-center space-y-6 relative overflow-hidden shadow-[22px_22px_0_rgba(255,107,53,0.03)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,53,0.04)_0%,transparent_70%)] pointer-events-none blur-xl animate-pulse" />
          
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              STOP THE DRIFT. SHIELD YOUR RELEASES.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Start building compiler-orchestrated environments today. Set up a free developer cluster with 10 free container cores.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto pt-4">
            <a 
              href="#interactive-simulator" 
              className="px-6 py-3 rounded bg-orange-500 text-black font-bold text-sm hover:bg-orange-400 shadow-lg shadow-orange-500/10 active:translate-y-px transition-all"
            >
              BOOT STRAP INSTANCE
            </a>
            <a 
              href="#features" 
              className="px-6 py-3 rounded border border-slate-800 text-slate-300 hover:text-white font-bold text-sm bg-slate-950/20 hover:bg-slate-900 transition-all"
            >
              SCHEDULE SYSTEM TOUR
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 px-4 py-12 relative z-10 text-slate-500 text-xs font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-orange-500 font-bold tracking-wider">FORGE ENGINE</span>
            <span className="text-slate-800">|</span>
            <span>BUILD HEAT. TRACE TRUTH. RELEASE CLEAN.</span>
          </div>
          
          <div className="flex items-center gap-6">
            <span>© 2026 FORGE LABS INC.</span>
            <a href="#" className="hover:text-orange-500 transition-colors">SECURITY-DOCS</a>
            <a href="#" className="hover:text-orange-500 transition-colors">OPERATOR-STATUS</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
