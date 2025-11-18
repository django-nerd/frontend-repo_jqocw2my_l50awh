import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background gradient and grain */}
      <div className="absolute inset-0 bg-[#0b0d12]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_600px_at_10%_-10%,rgba(124,58,237,0.25),transparent),radial-gradient(800px_500px_at_90%_-10%,rgba(34,211,238,0.22),transparent)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.25] mix-blend-soft-light" style={{backgroundImage:'url(https://grainy-gradients.vercel.app/noise.svg)'}} />

      {/* Spline 3D scene */}
      <div className="relative w-full h-[70vh] md:h-[80vh]">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
          <div className="pointer-events-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight bg-gradient-to-b from-white to-slate-300 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(124,58,237,0.35)]">
              CHJK Studios
            </h1>
            <p className="mt-4 md:mt-6 text-slate-300/90 text-base md:text-lg max-w-xl">
              A collective of developers crafting bold web experiences and immersive Minecraft worlds. Futuristic, interactive, and unapologetically dark.
            </p>
            <div className="mt-6 md:mt-8 flex flex-wrap gap-3">
              <a href="#work" className="inline-flex items-center rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-3 text-slate-900 font-semibold shadow-[0_10px_40px_rgba(56,189,248,0.35)] hover:brightness-110 transition">See our work</a>
              <a href="#contact" className="inline-flex items-center rounded-xl border border-white/15 px-5 py-3 text-slate-200 hover:bg-white/5 transition">Start a project</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
