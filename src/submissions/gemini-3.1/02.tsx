
export default function ForgeVariant2() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
          <span className="text-xl font-semibold text-slate-900">Forge</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-blue-600 transition-colors">Product</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Customers</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Pricing</a>
        </nav>
        <button className="text-sm font-medium bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-slate-800 transition-colors">
          Sign In
        </button>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 font-semibold text-xs rounded-full mb-6">
            Forge 2.0 is now live
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
            The modern toolkit for <span className="text-blue-600">crafting software.</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            Streamline your development workflow with our integrated suite of tools. Build, test, and deploy with unprecedented ease and reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3.5 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
              Get Started for Free
            </button>
            <button className="px-8 py-3.5 bg-white text-slate-700 font-medium rounded-full hover:bg-slate-100 transition-colors border border-slate-200 shadow-sm">
              View Documentation
            </button>
          </div>
        </div>
        <div className="hidden md:block relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-3xl transform rotate-3 scale-105"></div>
          <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-slate-100 h-96 flex flex-col">
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="flex-1 rounded-xl bg-slate-50 border border-slate-100 p-4 font-mono text-sm text-slate-500">
              <p className="text-blue-500">$ forge init my-project</p>
              <p className="mt-2 text-slate-400">Initializing workspace...</p>
              <p className="text-green-500 mt-1">✓ Dependencies installed</p>
              <p className="text-green-500 mt-1">✓ Configuration generated</p>
              <p className="text-blue-500 mt-4">$ forge start</p>
              <p className="mt-2 text-slate-400">Server running on localhost:3000</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Everything you need to build better</h2>
            <p className="text-slate-600">We've obsessed over every detail of the developer experience so you can focus on writing great code.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Intelligent Autocomplete', desc: 'Context-aware suggestions that learn from your codebase as you type.' },
              { title: 'Seamless Integration', desc: 'Connects effortlessly with your favorite version control and CI/CD providers.' },
              { title: 'Real-time Collaboration', desc: 'Code together with your team in real-time, no matter where they are.' }
            ].map((feature, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 text-blue-600 font-bold">
                  {i + 1}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">Loved by developers worldwide</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { quote: "Forge has completely transformed how our engineering team operates. It's elegant, fast, and incredibly reliable.", author: "David Chen", role: "VP of Engineering" },
            { quote: "The best developer tool I've used in the last decade. It replaced three different tools in our stack.", author: "Amanda Smith", role: "Frontend Architect" },
            { quote: "Setup took less than five minutes, and the performance gains were immediate. Highly recommended.", author: "James Wilson", role: "Indie Hacker" }
          ].map((testimonial, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map(star => (
                  <svg key={star} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 mb-8">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{testimonial.author}</div>
                  <div className="text-slate-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-sm"></div>
            </div>
            <span className="font-semibold text-slate-900">Forge</span>
          </div>
          <p className="text-slate-500 text-sm">© 2026 Forge. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-900 transition-colors">Twitter</a>
            <a href="#" className="hover:text-slate-900 transition-colors">GitHub</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Discord</a>
          </div>
        </div>
      </footer>
    </div>
  );
}