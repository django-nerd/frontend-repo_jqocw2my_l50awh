import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Servers from './components/Servers'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0c11] text-slate-200">
      <Navbar />

      {/* Hero with Spline */}
      <Hero />

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Sections */}
      <Showcase />
      <Servers />
      <Footer />
    </div>
  )
}

export default App
