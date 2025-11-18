import { Cpu, Shield, Zap } from 'lucide-react'

const features = [
  { icon: Cpu, title: 'Custom Plugins', desc: 'Tailor‑made mechanics: economies, skills, dungeons and more.' },
  { icon: Shield, title: 'Anti‑Cheat & Security', desc: 'Hardening, anti‑xray, anti‑ddos layers and mod review.' },
  { icon: Zap, title: 'Low‑Latency Hosting', desc: 'Optimized JVM flags, paper/purpur, fast IO and backups.' }
]

export default function Servers() {
  return (
    <section id="servers" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(600px_400px_at_20%_20%,rgba(124,58,237,0.08),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">Minecraft infrastructure</h2>
            <p className="mt-4 text-slate-300/85 max-w-xl">We design and operate servers for communities. Focused on performance, community tools and long‑term stability.</p>
            <div className="mt-8 grid gap-4">
              {features.map(({icon:Icon, title, desc}) => (
                <div key={title} className="flex gap-4">
                  <div className="mt-1 h-10 w-10 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center text-slate-900 shadow-lg">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{title}</h3>
                    <p className="text-slate-300/80 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/40 to-cyan-400/40 blur-2xl" />
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
              <img src="https://images.unsplash.com/photo-1683322499436-f4383dd59f5a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTZXJ2ZXJ8ZW58MHwwfHx8MTc2MzQ3MzA3MXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Server" className="h-full w-full object-cover opacity-70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
