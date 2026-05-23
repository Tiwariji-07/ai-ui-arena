
export default function ForgeVariant1() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-300 font-mono selection:bg-cyan-500 selection:text-gray-950">
      {/* Header */}
      <nav className="border-b border-gray-800 p-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-cyan-400 tracking-tighter">&gt;_FORGE</div>
        <div className="space-x-6 text-sm">
          <a href="#" className="hover:text-cyan-400 transition-colors">Docs</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Pricing</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Login</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-32 px-6 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
          Build Faster. <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Break Nothing.</span>
        </h1>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          The ultimate developer toolchain for compiling, testing, and deploying next-generation applications with zero configuration.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 bg-cyan-500 text-gray-950 font-bold uppercase tracking-wider hover:bg-cyan-400 transition-colors border border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]">
            Start Building Free
          </button>
          <button className="px-8 py-4 bg-transparent text-cyan-400 font-bold uppercase tracking-wider hover:bg-gray-900 transition-colors border border-cyan-400">
            Read the Docs
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gray-900 border-y border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-16 text-center">Engineered for Performance</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Lightning Fast Builds', desc: 'Utilizing multi-core processing to slash your compile times by up to 80%.' },
              { title: 'Deterministic Testing', desc: 'Flaky tests are a thing of the past with our isolated execution environments.' },
              { title: 'One-Click Deploys', desc: 'Push to production with absolute confidence using automated rollbacks.' }
            ].map((feature, i) => (
              <div key={i} className="p-8 border border-gray-800 bg-gray-950 hover:border-purple-500 transition-colors group">
                <div className="w-12 h-12 bg-gray-900 border border-gray-800 flex items-center justify-center text-purple-500 mb-6 group-hover:scale-110 transition-transform">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-16 text-center">Trusted by Elite Teams</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { quote: "Forge completely revolutionized our CI/CD pipeline. We ship 5x faster now.", author: "Sarah J.", role: "Lead Engineer" },
            { quote: "The zero-config setup is actually zero-config. It just works out of the box.", author: "Mike T.", role: "CTO" },
            { quote: "I can't imagine going back to our old build system. Forge is the future.", author: "Elena R.", role: "Full Stack Dev" }
          ].map((testimonial, i) => (
            <div key={i} className="p-6 border-l-2 border-cyan-500 bg-gray-900/50">
              <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <div className="text-white font-bold">{testimonial.author}</div>
                <div className="text-cyan-500 text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 text-center text-sm text-gray-500">
        <div className="mb-4 text-cyan-400 font-bold text-xl">&gt;_FORGE</div>
        <p>© 2026 Forge Systems Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}