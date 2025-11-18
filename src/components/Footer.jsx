export default function Footer() {
  return (
    <footer id="contact" className="relative py-16">
      <div className="absolute inset-0 bg-[radial-gradient(600px_400px_at_50%_10%,rgba(124,58,237,0.1),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-8 items-end">
          <div>
            <h3 className="text-2xl font-bold text-white">Let’s build something bold</h3>
            <p className="mt-2 text-slate-300/85">Tell us about your website or your next server. We’ll get back within 24h.</p>
          </div>
          <div>
            <form className="grid sm:grid-cols-2 gap-3">
              <input className="rounded-lg bg-slate-900/70 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-violet-500/50" placeholder="Your email" />
              <input className="rounded-lg bg-slate-900/70 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-violet-500/50" placeholder="Project type" />
              <textarea rows="3" className="sm:col-span-2 rounded-lg bg-slate-900/70 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-violet-500/50" placeholder="Describe your idea" />
              <button type="button" className="sm:col-span-2 inline-flex justify-center rounded-lg bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-3 text-slate-900 font-semibold shadow-[0_10px_40px_rgba(56,189,248,0.35)] hover:brightness-110 transition">
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 flex items-center justify-between text-sm text-slate-400/80">
          <span>© {new Date().getFullYear()} CHJK Studios</span>
          <span>Dark. Experimental. Interactive.</span>
        </div>
      </div>
    </footer>
  )
}
