import { useState } from 'react'

export default function Submission() {
  // Interactive Workflow State
  const [activeStep, setActiveStep] = useState(0)
  
  // Custom interactive linter simulator state
  const [linterFile, setLinterFile] = useState('main.fg')
  const [lintErrors, setLintErrors] = useState<string[]>([])
  const [isLinting, setIsLinting] = useState(false)

  const steps = [
    {
      label: '01 / Dependency Lock',
      title: 'Hermetic Isolation',
      desc: 'Forge scans your project and generates a cryptographically signed hardware lock. This ensures every compiler binary, dependency library, and environment flag is frozen forever.',
      badge: 'STRICT',
      color: 'bg-amber-100 text-amber-800 border-amber-300'
    },
    {
      label: '02 / Static Verification',
      title: 'Safe AST Translations',
      desc: 'Instead of waiting for code to crash in production, our local AST verification parses and simulates your code branches. If a side-effect leaks, we point directly to the line of code.',
      badge: 'SAFE',
      color: 'bg-emerald-100 text-emerald-800 border-emerald-300'
    },
    {
      label: '03 / Edge Distribution',
      title: 'Atomic Hot-Swaps',
      desc: 'Once verification succeeds, the artifact is distributed globally to edge kernels. We perform an atomic swap under load with zero connection-dropping or memory spikes.',
      badge: 'GLOBAL',
      color: 'bg-indigo-100 text-indigo-800 border-indigo-300'
    }
  ]

  const runSimulation = () => {
    if (isLinting) return
    setIsLinting(true)
    setLintErrors([])
    
    setTimeout(() => {
      if (linterFile === 'main.fg') {
        setLintErrors([
          '✔ AST Analysis complete. Zero drift detected.',
          '✔ Compiled successfully to standard target in 18ms.'
        ])
      } else {
        setLintErrors([
          '✖ Error (Line 14): Leaked environment context found in database pool hook.',
          '⚠ Warning (Line 29): Dead cache branch detected.'
        ])
      }
      setIsLinting(false)
    }, 800)
  }

  const features = [
    {
      title: 'Hermetic Lock files',
      subtitle: 'ZERO DRIFT',
      body: 'Forge locks the exact binaries, operating system system-calls, and dependencies into a deterministic build capsule. Run it locally, on a server, or on an airplane—it compiles identically.',
      color: 'bg-orange-50/50'
    },
    {
      title: 'Interactive Code Graph',
      subtitle: 'VISUAL DAG',
      body: 'See how code flows, where dependencies link, and which routes are hot. Our clean visual graph updates live as you type, mapping out errors before you push to git.',
      color: 'bg-green-50/50'
    },
    {
      title: 'Local Micro-clusters',
      subtitle: '12MB FOOTPRINT',
      body: 'Run a production-equivalent server cluster on your development machine. Forge replaces bloated docker daemons with tiny, hyper-optimized compiler-level processes.',
      color: 'bg-blue-50/50'
    }
  ]

  const testimonials = [
    {
      quote: 'Forge is the developer tool of the decade. It replaced our 800-line brittle GitHub Actions workflow with a clean, physical diagram of our system. No more guessing why builds fail.',
      author: 'Evelyn Cho',
      role: 'Staff Build Engineer, Monumental Inc.',
      tag: 'Verified User'
    },
    {
      quote: 'The local micro-cluster is incredible. I can simulate a multi-region network failover while on an airplane with zero latency. It has transformed how we test resilient pipelines.',
      author: 'Marcus Brody',
      role: 'VP Architecture, CloudArc',
      tag: 'Enterprise'
    },
    {
      quote: 'With other deployment tools, you spend days debugging environment drift. Forge makes that completely impossible. It is strict, predictable, and remarkably quick.',
      author: 'Selena Vance',
      role: 'Principal Developer, Shift-Left Solutions',
      tag: 'Early Adopter'
    }
  ]

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1C1C1C] font-mono selection:bg-[#C85C42] selection:text-white p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto border-4 border-[#1C1C1C] bg-white shadow-[12px_12px_0px_#1C1C1C] rounded-2xl overflow-hidden relative">
        
        {/* Aesthetic Page Lines */}
        <div className="absolute top-0 bottom-0 left-8 border-l border-red-200 pointer-events-none hidden sm:block" />
        <div className="absolute top-0 bottom-0 left-10 border-l border-red-100 pointer-events-none hidden sm:block" />

        {/* Navigation */}
        <header className="border-b-4 border-[#1C1C1C] bg-white py-6 px-6 sm:px-12 flex flex-col sm:flex-row justify-between items-center gap-6 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border-4 border-[#1C1C1C] bg-[#C85C42] text-white flex items-center justify-center font-black text-xl shadow-[3px_3px_0px_#1C1C1C]">
              F
            </div>
            <span className="font-extrabold text-2xl tracking-tighter uppercase">Forge</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm font-bold uppercase tracking-tight">
            <a href="#blueprint" className="hover:text-[#C85C42] transition-colors border-b-2 border-transparent hover:border-[#C85C42] pb-1">01. Blueprint</a>
            <a href="#playground" className="hover:text-[#C85C42] transition-colors border-b-2 border-transparent hover:border-[#C85C42] pb-1">02. Verify Core</a>
            <a href="#verdicts" className="hover:text-[#C85C42] transition-colors border-b-2 border-transparent hover:border-[#C85C42] pb-1">03. Logs</a>
          </nav>

          <a 
            href="#playground" 
            className="px-6 py-2.5 border-3 border-[#1C1C1C] bg-white text-xs font-black uppercase tracking-tight hover:bg-[#FAF8F5] active:translate-y-0.5 shadow-[4px_4px_0px_#1C1C1C] active:shadow-[1px_1px_0px_#1C1C1C] transition-all"
          >
            Run Sandbox
          </a>
        </header>

        {/* Hero Section */}
        <section className="border-b-4 border-[#1C1C1C] grid lg:grid-cols-12 relative z-10 bg-white">
          
          {/* Hero Content Left */}
          <div className="lg:col-span-7 p-6 sm:p-12 space-y-8 flex flex-col justify-center">
            <div className="inline-flex max-w-max border-2 border-[#1C1C1C] bg-[#E8EFE8] px-3 py-1 rounded text-xs font-bold text-[#3B543B] uppercase tracking-wider">
              [ SPECIFICATION: STABLE_BUILDER_RELEASE ]
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black uppercase tracking-tight leading-none text-[#1C1C1C]">
              A gentler compiler. <br />
              <span className="text-[#C85C42]">A sharper builder.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans font-medium max-w-xl">
              Forge organizes your compilation, testing, and cloud environments into a logical, hermetically sealed workflow. No cryptic YAML wrappers. No brittle shell scripts. Just pure, deterministic engineering.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#playground" 
                className="px-8 py-4 border-3 border-[#1C1C1C] bg-[#C85C42] text-white font-black text-center text-sm uppercase tracking-tight hover:bg-[#B34F37] shadow-[6px_6px_0px_#1C1C1C] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_#1C1C1C] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#1C1C1C] transition-all"
              >
                Get Started Free
              </a>
              <a 
                href="#blueprint" 
                className="px-8 py-4 border-3 border-[#1C1C1C] bg-white text-[#1C1C1C] font-black text-center text-sm uppercase tracking-tight hover:bg-[#FAF8F5] shadow-[6px_6px_0px_#1C1C1C] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_#1C1C1C] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#1C1C1C] transition-all"
              >
                Inspect Blueprints
              </a>
            </div>

            {/* Editorial list */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t-2 border-[#1C1C1C] text-xs font-bold text-slate-500">
              <div className="flex items-center gap-2">
                <span className="text-[#C85C42]">■</span> DETERMINISTIC RUNS
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#C85C42]">■</span> 12MB LIGHTWEIGHT CORRES
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#C85C42]">■</span> ZERO YAML DRIFT
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#C85C42]">■</span> AST COMPILE ANALYSIS
              </div>
            </div>
          </div>

          {/* Hero Diagram Right */}
          <div className="lg:col-span-5 border-t-4 lg:border-t-0 lg:border-l-4 border-[#1C1C1C] bg-[#FAF8F5] p-6 sm:p-12 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold text-[#C85C42] block uppercase tracking-wider">Interactive Flow Visualizer</span>
              <h3 className="font-extrabold text-xl uppercase">Click steps to inspect details:</h3>
            </div>

            {/* Interlocking Nodes */}
            <div className="space-y-4">
              {steps.map((st, sidx) => (
                <button
                  key={sidx}
                  onClick={() => setActiveStep(sidx)}
                  className={`w-full text-left p-4 border-3 border-[#1C1C1C] rounded-lg transition-all flex items-center justify-between ${
                    activeStep === sidx
                      ? 'bg-white shadow-[4px_4px_0px_#1C1C1C] translate-x-[-2px] translate-y-[-2px]'
                      : 'bg-white/40 hover:bg-white/80 hover:translate-y-[-1px]'
                  }`}
                >
                  <span className="font-bold text-sm">{st.label}</span>
                  <span className={`px-2 py-0.5 border-2 border-[#1C1C1C] rounded text-[10px] font-black uppercase ${st.badge === 'STRICT' ? 'bg-amber-200' : st.badge === 'SAFE' ? 'bg-emerald-200' : 'bg-indigo-200'}`}>
                    {st.badge}
                  </span>
                </button>
              ))}
            </div>

            {/* Details Bubble */}
            <div className="border-3 border-[#1C1C1C] bg-white p-5 rounded-xl shadow-[4px_4px_0px_#1C1C1C] relative">
              <div className="absolute top-[-10px] left-6 w-4 h-4 border-t-3 border-l-3 border-[#1C1C1C] bg-white transform rotate-45" />
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-base uppercase text-[#C85C42]">{steps[activeStep].title}</span>
                  <span className="text-[10px] font-bold text-slate-400 font-mono">SYS-STEP_0{activeStep + 1}</span>
                </div>
                <p className="text-xs font-sans font-semibold leading-relaxed text-slate-600">
                  {steps[activeStep].desc}
                </p>
              </div>
            </div>

          </div>

        </section>

        {/* Features Grid Section */}
        <section id="blueprint" className="border-b-4 border-[#1C1C1C] p-6 sm:p-12 bg-white relative z-10">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 pb-8 border-b-2 border-[#1C1C1C]">
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#C85C42] uppercase tracking-wider">CHAPTER 01 // PRINCIPLES</span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight leading-none">
                Engineered to stand up to reality.
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm font-sans font-semibold text-slate-600 leading-relaxed">
              We did not build another bloated cloud orchestrator. We engineered a direct link between compiler logic and machine environment variables.
            </p>
          </div>

          {/* 3 cards with Brutalist flat shadows */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feat, idx) => (
              <article 
                key={idx}
                className={`border-4 border-[#1C1C1C] p-6 rounded-xl shadow-[6px_6px_0px_#1C1C1C] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_#1C1C1C] transition-all flex flex-col justify-between space-y-8 ${feat.color}`}
              >
                <div className="space-y-4">
                  <span className="text-xs font-bold text-[#C85C42]">{feat.subtitle}</span>
                  <h3 className="text-xl font-black uppercase tracking-tight">{feat.title}</h3>
                  <p className="text-xs font-sans font-semibold leading-relaxed text-slate-600">
                    {feat.body}
                  </p>
                </div>
                
                {/* Visual marker inside card */}
                <div className="flex justify-between items-center border-t-2 border-slate-300 pt-4 font-bold text-[10px] text-slate-400">
                  <span>SPEC_REF // 0{idx + 1}</span>
                  <span>SYSTEM APPROVED</span>
                </div>
              </article>
            ))}
          </div>

        </section>

        {/* Linter Sandbox Interactive Playground */}
        <section id="playground" className="border-b-4 border-[#1C1C1C] bg-[#FAF8F5] p-6 sm:p-12 relative z-10">
          
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Linter Left info */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold text-[#C85C42] uppercase tracking-wider">CHAPTER 02 // STRETCH TESTS</span>
              <h2 className="text-3xl font-black uppercase leading-none text-[#1C1C1C]">
                PRE-VERIFY DRIFT IN THE SANDBOX.
              </h2>
              <p className="text-xs sm:text-sm font-sans font-semibold text-slate-600 leading-relaxed">
                Toggle between standard pristine files and a malformed drift-infected environment configuration. Run the forge local simulator and watch how AST evaluation detects leakage instantly.
              </p>

              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider block text-slate-500">Select Code Environment:</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => { setLinterFile('main.fg'); setLintErrors([]) }}
                    className={`px-4 py-2 border-2 border-[#1C1C1C] font-bold text-xs uppercase ${
                      linterFile === 'main.fg' ? 'bg-[#E8EFE8] text-emerald-800' : 'bg-white text-slate-600 hover:bg-[#FAF8F5]'
                    }`}
                  >
                    main.fg (Clean AST)
                  </button>
                  <button
                    onClick={() => { setLinterFile('main_drift.fg'); setLintErrors([]) }}
                    className={`px-4 py-2 border-2 border-[#1C1C1C] font-bold text-xs uppercase ${
                      linterFile === 'main_drift.fg' ? 'bg-red-50 text-red-800' : 'bg-white text-slate-600 hover:bg-[#FAF8F5]'
                    }`}
                  >
                    main_drift.fg (Drift Leak)
                  </button>
                </div>
              </div>
            </div>

            {/* Linter Interactive Console Right */}
            <div className="lg:col-span-7">
              <div className="border-4 border-[#1C1C1C] bg-white rounded-xl shadow-[8px_8px_0px_#1C1C1C] overflow-hidden">
                
                <div className="bg-[#1C1C1C] p-3 text-white flex justify-between items-center font-bold text-xs">
                  <span>SANDBOX COMPILER SIMULATOR // {linterFile}</span>
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                </div>

                <div className="p-4 bg-slate-900 text-emerald-400 font-mono text-xs min-h-[160px] flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-slate-500">// Simulated system-level AST contents:</span>
                    {linterFile === 'main.fg' ? (
                      <div className="text-slate-300">
                        <span className="text-emerald-500">const</span> target = forge.target(<span className="text-amber-300">'wasm'</span>)<br />
                        <span className="text-emerald-500">const</span> db = forge.service(<span className="text-amber-300">'postgres'</span>)<br />
                        db.lock_environment(<span className="text-emerald-500">true</span>)
                      </div>
                    ) : (
                      <div className="text-slate-300">
                        <span className="text-emerald-500">const</span> target = forge.target(<span className="text-amber-300">'wasm'</span>)<br />
                        <span className="text-emerald-500">const</span> db = forge.service(<span className="text-amber-300">'postgres'</span>)<br />
                        db.lock_environment(<span className="text-red-400">false</span>) <span className="text-slate-500">// context leak</span><br />
                        process.env.DB_PASS_RAW = <span className="text-red-400">'unsafe_secret'</span>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-slate-800 pt-3 mt-4 space-y-2">
                    <span className="text-slate-500 block">Console output:</span>
                    {isLinting ? (
                      <span className="text-amber-300 animate-pulse">Running secure AST verification checks...</span>
                    ) : lintErrors.length > 0 ? (
                      <div className="space-y-1">
                        {lintErrors.map((err, idx) => (
                          <div key={idx} className={err.startsWith('✖') ? 'text-red-400 font-bold' : err.startsWith('⚠') ? 'text-amber-400' : 'text-emerald-400'}>
                            {err}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <span className="text-slate-600">Click compile button below to execute diagnostics.</span>
                    )}
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border-t-4 border-[#1C1C1C] flex justify-end">
                  <button
                    onClick={runSimulation}
                    disabled={isLinting}
                    className="px-6 py-2.5 border-3 border-[#1C1C1C] bg-[#1C1C1C] text-white font-black text-xs uppercase tracking-tight hover:bg-slate-800 active:translate-y-0.5 disabled:opacity-50"
                  >
                    {isLinting ? 'Running...' : 'Execute Diagnostics'}
                  </button>
                </div>

              </div>
            </div>

          </div>

        </section>

        {/* Editorial-Style Social Proof */}
        <section id="verdicts" className="p-6 sm:p-12 bg-white relative z-10">
          
          <div className="mb-12 pb-8 border-b-2 border-[#1C1C1C] flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#C85C42] uppercase tracking-wider">CHAPTER 03 // REPORTS</span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
                CRITICAL REVIEWS IN THE WILD.
              </h2>
            </div>
            
            {/* Playful graphic stamp of verification */}
            <div className="border-2 border-dashed border-red-400 rounded-full px-4 py-2 font-black text-xs text-red-500 tracking-widest uppercase transform rotate-[-4deg] self-start md:self-end">
              FORGE CERTIFIED DR-OK
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <figure 
                key={idx} 
                className="border-3 border-[#1C1C1C] bg-[#FAF8F5] p-6 rounded-xl shadow-[4px_4px_0px_#1C1C1C] flex flex-col justify-between space-y-8"
              >
                <div className="space-y-4">
                  {/* Rating or Stamp indicator */}
                  <div className="flex justify-between items-center">
                    <span className="text-[#C85C42] font-black text-lg">★★★★★</span>
                    <span className="px-2 py-0.5 border border-[#1C1C1C] bg-white rounded text-[9px] font-bold text-slate-500">{test.tag}</span>
                  </div>
                  
                  <blockquote className="text-xs sm:text-sm font-sans font-medium text-slate-700 leading-relaxed italic">
                    “{test.quote}”
                  </blockquote>
                </div>

                <figcaption className="border-t border-[#1C1C1C] pt-4 flex flex-col space-y-1">
                  <cite className="not-italic font-black text-sm text-[#1C1C1C]">{test.author}</cite>
                  <span className="text-[10px] text-slate-400">{test.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>

        </section>

        {/* CTA Stamp section */}
        <section className="bg-[#FAF8F5] border-t-4 border-[#1C1C1C] p-8 sm:p-14 text-center space-y-6 relative z-10">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight leading-none text-[#1C1C1C]">
              HARDEN YOUR RELEASES TODAY.
            </h2>
            <p className="text-xs sm:text-sm font-sans font-semibold text-slate-600 leading-relaxed">
              Unlock total determinism for your deployment pipelines. Sign up for Forge Enterprise or boot up a local developer sandbox in 3 seconds.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 max-w-md mx-auto">
            <a 
              href="#playground" 
              className="px-6 py-3.5 border-3 border-[#1C1C1C] bg-[#C85C42] text-white font-black text-sm uppercase tracking-tight hover:bg-[#B34F37] shadow-[4px_4px_0px_#1C1C1C] active:translate-y-1 active:shadow-[1px_1px_0px_#1C1C1C]"
            >
              SPAWN NEW SANDBOX
            </a>
            <a 
              href="#blueprint" 
              className="px-6 py-3.5 border-3 border-[#1C1C1C] bg-white text-[#1C1C1C] font-black text-sm uppercase tracking-tight hover:bg-slate-100 shadow-[4px_4px_0px_#1C1C1C] active:translate-y-1 active:shadow-[1px_1px_0px_#1C1C1C]"
            >
              TALK TO OPERATOR
            </a>
          </div>
        </section>

        {/* High-End Book-style Footer */}
        <footer className="border-t-4 border-[#1C1C1C] bg-[#1C1C1C] text-white p-6 sm:px-12 py-10 relative z-10 text-[10px] font-mono flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span className="font-extrabold uppercase text-sm tracking-widest text-[#FAF8F5]">FORGE SYSTEM INDEX</span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-slate-400">DESIGN SYSTEM // WARM BRUTALIST V2</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-slate-400">
            <span>© 2026 FORGE TOOLING SYSTEMS AG.</span>
            <a href="#" className="hover:text-[#C85C42] transition-colors">SECURITY-BLUEPRINTS</a>
            <a href="#" className="hover:text-[#C85C42] transition-colors">COMPILER-LICENSE</a>
          </div>
        </footer>

      </div>
    </main>
  )
}
