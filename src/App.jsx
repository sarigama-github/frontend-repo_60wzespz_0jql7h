import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  PenTool,
  MessageCircle,
  Rocket,
  Sparkles,
  GraduationCap,
  Users,
  Star,
  Quote,
  ArrowRight,
  CheckCircle,
  Feather,
} from 'lucide-react'

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
      <Sparkles className="h-3.5 w-3.5 text-yellow-300" /> {children}
    </span>
  )
}

function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 p-3 text-white backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-fuchsia-500">
              <Feather className="h-5 w-5 text-white" />
            </div>
            <span className="text-sm font-semibold tracking-wide">Ghosts on X</span>
          </div>
          <div className="hidden gap-6 md:flex">
            <a href="#services" className="text-sm text-white/80 hover:text-white">Services</a>
            <a href="#process" className="text-sm text-white/80 hover:text-white">Process</a>
            <a href="#testimonials" className="text-sm text-white/80 hover:text-white">Testimonials</a>
            <a href="#pricing" className="text-sm text-white/80 hover:text-white">Pricing</a>
          </div>
          <a href="#cta" className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100">
            Book a call <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-900 to-fuchsia-900 pb-24 pt-36 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -right-20 top-20 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-4">
              <Badge>Ghostwriting + Coaching + Real Human Comments</Badge>
            </div>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Become unmissable on X with words that move people
            </h1>
            <p className="mt-5 max-w-xl text-white/80">
              We craft high-converting threads, punchy posts, and authentic engagement that grows your audience and your pipeline — without you living on the timeline.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#cta" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-lg ring-1 ring-black/5 hover:bg-gray-100">
                Start with a free audit <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#testimonials" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10">
                See results
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-white/70">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-7 w-7 rounded-full border-2 border-white/20 bg-white/20" />
                ))}
              </div>
              <span>Trusted by founders, creators, and B2B brands</span>
            </div>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: PenTool, title: 'Ghostwritten Threads', desc: 'Story-driven, insight-packed, platform-native.' },
                  { icon: Rocket, title: 'Growth Systems', desc: 'Hooks, formats, and cadence engineered for reach.' },
                  { icon: MessageCircle, title: 'Real Comments', desc: 'Thoughtful replies from real humans, not bots.' },
                  { icon: GraduationCap, title: '1:1 Coaching', desc: 'On-call guidance, voice extraction, feedback.' },
                ].map((f, idx) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx, duration: 0.4 }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="rounded-xl bg-white/10 p-2">
                        <f.icon className="h-5 w-5 text-cyan-300" />
                      </div>
                      <div>
                        <p className="font-semibold">{f.title}</p>
                        <p className="text-sm text-white/70">{f.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const services = [
    {
      icon: PenTool,
      title: 'Done‑for‑you Ghostwriting',
      desc: 'Threads, posts, and content pillars mapped to your voice and goals. You approve, we publish.',
      points: ['Voice extraction system', 'Editorial calendar', 'A/B tested hooks']
    },
    {
      icon: GraduationCap,
      title: 'Creator Coaching for X',
      desc: 'Private coaching to master formats, positioning, and monetization without the guesswork.',
      points: ['Weekly strategy calls', 'Post teardowns', 'Account positioning']
    },
    {
      icon: MessageCircle,
      title: 'Human Comment Engine',
      desc: 'Authentic conversation from real humans trained on your niche. No bots. No cringe.',
      points: ['Daily engagement', 'Relationship mapping', 'Lead-driving replies']
    }
  ]

  return (
    <section id="services" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need to win on X</h2>
          <p className="mt-3 text-gray-600">Pick one service or bundle them for compounding results.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-fuchsia-200 to-cyan-200 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-80" />
              <div className="mb-4 inline-flex rounded-xl bg-gray-900 p-2 text-white">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              <ul className="mt-4 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-emerald-500" /> {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  const steps = [
    { title: 'Voice Download', desc: 'We map your stories, offers, and beliefs. You talk, we extract.' },
    { title: 'Strategy & Calendar', desc: 'We design pillars, formats, and posting cadence for traction.' },
    { title: 'Creation & Review', desc: 'We write. You approve with comments in a clean workflow.' },
    { title: 'Publish & Engage', desc: 'We post and drive genuine conversation that converts.' },
  ]

  return (
    <section id="process" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">A simple, rigorous process</h2>
          <p className="mt-3 text-gray-600">Clarity first. Consistency always. Creativity on tap.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-3 text-sm font-semibold text-gray-500">0{i + 1}</div>
              <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const testimonials = useMemo(() => [
    {
      name: 'Lina — SaaS Founder',
      text: 'From 2k to 28k followers in 5 months. Pipeline from X is now 40% of revenue. Threads feel like me — just better.',
    },
    {
      name: 'Marcus — Agency Owner',
      text: 'Their comment engine started conversations I could never break into. Three enterprise leads in 30 days.',
    },
    {
      name: 'Asha — Creator',
      text: 'The coaching flipped a switch. I finally understand hooks and structure. Posting is fun again.',
    },
  ], [])

  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 4500)
    return () => clearInterval(t)
  }, [testimonials.length])

  return (
    <section id="testimonials" className="relative overflow-hidden bg-gray-900 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-60" style={{backgroundImage:'radial-gradient(ellipse at top, rgba(168,85,247,.25), transparent 60%), radial-gradient(ellipse at bottom, rgba(34,211,238,.25), transparent 60%)'}} />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Results our clients talk about</h2>
          <p className="mt-3 text-white/80">Real creators. Real outcomes.</p>
        </div>
        <div className="mt-12">
          <div className="relative mx-auto max-w-3xl">
            <div className="flex items-center justify-between">
              <button aria-label="Previous" onClick={() => setIdx((idx - 1 + testimonials.length) % testimonials.length)} className="rounded-full border border-white/20 p-2 text-white/80 hover:bg-white/10">‹</button>
              <div className="w-full px-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                    className="rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur"
                  >
                    <Quote className="h-8 w-8 text-cyan-300" />
                    <p className="mt-4 text-lg leading-relaxed">
                      “{testimonials[idx].text}”
                    </p>
                    <div className="mt-6 flex items-center justify-between">
                      <div className="font-semibold">{testimonials[idx].name}</div>
                      <div className="flex items-center gap-1 text-yellow-300">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              <button aria-label="Next" onClick={() => setIdx((idx + 1) % testimonials.length)} className="rounded-full border border-white/20 p-2 text-white/80 hover:bg-white/10">›</button>
            </div>
            <div className="mt-4 flex justify-center gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setIdx(i)} className={`h-1.5 rounded-full transition-all ${i === idx ? 'w-8 bg-white' : 'w-3 bg-white/40'}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: 1490,
      features: ['8 posts + 1 thread / mo', 'Light engagement', 'Monthly coaching call'],
      highlight: false,
    },
    {
      name: 'Growth',
      price: 2990,
      features: ['16 posts + 2 threads / mo', 'Human comment engine', 'Bi‑weekly coaching'],
      highlight: true,
    },
    {
      name: 'Operator',
      price: 4990,
      features: ['Daily posts + 4 threads / mo', 'Dedicated engager squad', 'Weekly strategy + reports'],
      highlight: false,
    },
  ]

  return (
    <section id="pricing" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Plans built for momentum</h2>
          <p className="mt-3 text-gray-600">Start where you are. Scale what works.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`relative rounded-2xl border p-6 ${t.highlight ? 'border-gray-900 bg-gray-900 text-white' : 'border-gray-200 bg-white text-gray-900'} shadow-sm`}>
              {t.highlight && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-3 py-1 text-xs font-semibold text-white shadow">Most Popular</span>}
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <div className="mt-4 flex items-end gap-1">
                <div className="text-4xl font-bold">${t.price}</div>
                <div className="pb-1 text-sm opacity-70">/ month</div>
              </div>
              <ul className="mt-6 space-y-2 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircle className={`h-4 w-4 ${t.highlight ? 'text-emerald-300' : 'text-emerald-600'}`} /> {f}
                  </li>
                ))}
              </ul>
              <a href="#cta" className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold ${t.highlight ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>
                Book intro call <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-gradient-to-br from-cyan-50 to-fuchsia-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl">Get a free audit of your X presence</h3>
            <p className="mt-3 text-gray-600">We’ll review your profile, positioning, and last 30 posts — and send 3 ready‑to‑publish ideas.</p>
            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-600" /> No obligation, no fluff</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-600" /> Tailored to your offers and goals</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-600" /> Delivered within 72 hours</li>
            </ul>
          </div>
          <div>
            <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-sm font-medium text-gray-700">Name</label>
                  <input required placeholder="Alex Doe" className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900" />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" required placeholder="alex@company.com" className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900" />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-sm font-medium text-gray-700">X handle (optional)</label>
                  <input placeholder="@alex" className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900" />
                </div>
              </div>
              <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800">
                Request my audit <ArrowRight className="h-4 w-4" />
              </button>
              <p className="mt-3 text-center text-xs text-gray-500">We’ll reply by email with next steps.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-900">
            <Feather className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900">Ghosts on X</div>
            <div className="text-xs text-gray-500">Words that work, conversations that convert.</div>
          </div>
        </div>
        <div className="text-xs text-gray-500">© {new Date().getFullYear()} Ghosts on X. All rights reserved.</div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
