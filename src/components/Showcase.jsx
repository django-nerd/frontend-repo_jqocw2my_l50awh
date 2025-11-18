import { Code2, Server, Globe, Gamepad2 } from 'lucide-react'

const items = [
  {
    icon: Code2,
    title: 'Web Experiences',
    desc: 'Next-gen sites with smooth motion, dark aesthetic and high performance.',
  },
  {
    icon: Server,
    title: 'Backend & APIs',
    desc: 'Reliable services, analytics and integrations that scale with your vision.',
  },
  {
    icon: Gamepad2,
    title: 'Minecraft Servers',
    desc: 'Custom plugins, economies, and worlds engineered for communities.',
  },
  {
    icon: Globe,
    title: 'Deployment',
    desc: 'From staging to production, we ship end-to-end with monitoring.',
  },
]

export default function Showcase() {
  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(600px_400px_at_80%_20%,rgba(124,58,237,0.1),transparent),radial-gradient(500px_300px_at_10%_60%,rgba(34,211,238,0.08),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">What we build</h2>
        <p className="mt-3 text-slate-300/80 max-w-2xl">Polished UI, performant code, and infrastructure that stays up. Our focus is modern, experimental and dark.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({icon:Icon, title, desc}) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur transition hover:border-violet-500/30">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-violet-500/10 to-cyan-400/10" />
              <Icon className="relative text-violet-300/90" />
              <h3 className="relative mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="relative mt-2 text-sm text-slate-300/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
