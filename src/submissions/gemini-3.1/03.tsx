
export default function ForgeVariant3() {
  return (
    <div className="min-h-screen bg-yellow-400 text-black font-sans selection:bg-black selection:text-yellow-400">
      {/* Header */}
      <header className="border-b-4 border-black p-6 flex justify-between items-center bg-white">
        <div className="text-3xl font-black uppercase tracking-tighter">FORGE.</div>
        <nav className="hidden md:flex gap-8 font-bold uppercase">
          <a href="#" className="hover:underline decoration-4 underline-offset-4">Features</a>
          <a href="#" className="hover:underline decoration-4 underline-offset-4">Testimonials</a>
          <a href="#" className="hover:underline decoration-4 underline-offset-4">Pricing</a>
        </nav>
        <button className="bg-black text-white font-bold uppercase px-6 py-2 border-2 border-black hover:bg-yellow-400 hover:text-black transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          Login
        </button>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-32 px-6 max-w-6xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] mb-8">
          The Dev Tool <br/> <span className="text-white text-shadow-black" style={{ textShadow: '4px 4px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000' }}>With Teeth.</span>
        </h1>
        <p className="text-xl md:text-2xl font-bold max-w-3xl mx-auto mb-12 border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          Stop wrestling with your build pipeline. Forge gives you raw power, infinite scalability, and zero bullshit.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-pink-500 text-black font-black uppercase text-xl px-10 py-5 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
            Start For Free
          </button>
          <button className="bg-white text-black font-black uppercase text-xl px-10 py-5 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
            Read The Docs
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white border-y-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-16 text-center">Why Forge?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Blazing Fast', desc: 'Written in Rust. Compiles your code before you even finish typing it.', color: 'bg-cyan-400' },
              { title: 'Bulletproof', desc: 'Type-safe, memory-safe, and crash-proof. Sleep well at night.', color: 'bg-pink-400' },
              { title: 'Deploy Anywhere', desc: 'One command pushes your code to AWS, Vercel, or your own bare metal.', color: 'bg-green-400' }
            ].map((feature, i) => (
              <div key={i} className={`${feature.color} border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform`}>
                <div className="text-6xl font-black mb-4">0{i + 1}</div>
                <h3 className="text-3xl font-black uppercase mb-4">{feature.title}</h3>
                <p className="text-lg font-bold">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black uppercase mb-16 text-center bg-black text-white inline-block px-8 py-4 transform -rotate-2">Don't Trust Us?</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            { quote: "IT'S SO FAST IT SCARES ME.", author: "ALEX M.", role: "LEAD DEV" },
            { quote: "I DELETED 10,000 LINES OF CONFIG.", author: "SAM K.", role: "DEVOPS" },
            { quote: "FORGE SAVED MY MARRIAGE.", author: "CHRIS P.", role: "FOUNDER" }
          ].map((testimonial, i) => (
            <div key={i} className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
              <p className="text-2xl font-black uppercase mb-8">"{testimonial.quote}"</p>
              <div className="border-t-4 border-black pt-4 mt-auto">
                <div className="font-black text-xl">{testimonial.author}</div>
                <div className="font-bold text-gray-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-5xl font-black uppercase tracking-tighter">FORGE.</div>
          <div className="flex gap-8 font-bold uppercase">
            <a href="#" className="hover:text-yellow-400">Twitter</a>
            <a href="#" className="hover:text-yellow-400">Github</a>
            <a href="#" className="hover:text-yellow-400">Discord</a>
          </div>
          <p className="font-bold">© 2026 FORGE INC.</p>
        </div>
      </footer>
    </div>
  );
}