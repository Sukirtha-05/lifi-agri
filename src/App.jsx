export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-green-950 text-white overflow-x-hidden">
      <section className="px-6 py-20 md:py-28 text-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.15),transparent_40%)]"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="inline-block px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-300 text-sm mb-6">
            Smart Farming • Li‑Fi Technology • Sustainable Agriculture
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Solar Powered
            <span className="block text-green-400">
              Li‑Fi Smart Agriculture
            </span>
            System
          </h1>

          <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            EMI‑Free crop monitoring using Li‑Fi communication for secure,
            energy‑efficient, and intelligent farming.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <button className="bg-green-500 hover:bg-green-600 transition-all duration-300 px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl shadow-green-500/30">
              Request Demo
            </button>

            <button className="border border-slate-500 hover:border-green-400 hover:bg-green-500/10 transition-all duration-300 px-8 py-4 rounded-2xl text-lg font-semibold">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <section className="px-6 pb-10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ['10m', 'Node Coverage'],
            ['Low', 'Power Usage'],
            ['24/7', 'Monitoring'],
            ['EMI‑Free', 'Communication'],
          ].map(([value, label]) => (
            <div
              key={label}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 text-center shadow-xl"
            >
              <h3 className="text-3xl font-bold text-green-400 mb-2">{value}</h3>
              <p className="text-slate-300">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-red-500/10 border border-red-400/20 rounded-3xl p-8 shadow-xl backdrop-blur-lg">
            <h2 className="text-4xl font-bold text-red-400 mb-5">Problem</h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Traditional agriculture monitoring systems using RF and Wi‑Fi
              suffer from electromagnetic interference, poor connectivity in
              rural areas, and high power consumption.
            </p>
          </div>

          <div className="bg-green-500/10 border border-green-400/20 rounded-3xl p-8 shadow-xl backdrop-blur-lg">
            <h2 className="text-4xl font-bold text-green-400 mb-5">
              Our Solution
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Our Li‑Fi based smart agriculture system uses LED light for
              communication, providing secure, EMI‑free, low‑power crop
              monitoring with future‑ready solar integration.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            Key Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '📡',
                title: 'Li‑Fi Communication',
                desc: 'Uses visible light communication instead of radio waves for faster and interference‑free data transfer.',
              },
              {
                icon: '🌱',
                title: 'Smart Sensors',
                desc: 'Monitors soil moisture, temperature, and pH levels in real time.',
              },
              {
                icon: '☀️',
                title: 'Solar Ready',
                desc: 'Designed for low power consumption and future solar‑powered operation.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:scale-105 transition-all duration-300 shadow-2xl backdrop-blur-lg"
              >
                <div className="text-5xl mb-5">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-green-300">
                  {item.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-white/10 rounded-[40px] p-10 shadow-2xl backdrop-blur-xl">
          <h2 className="text-5xl font-bold text-center mb-14">
            Why Choose Our System?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-lg">
            {[
              'EMI‑Free Communication',
              'Improved Security',
              'Low Power Consumption',
              'Scalable Multi‑Node Design',
              'Suitable for Rural Areas',
              'Real‑Time Crop Monitoring',
            ].map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl"
              >
                <div className="text-2xl">✅</div>
                <div className="text-slate-200">{benefit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 text-center">
        <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-[40px] p-12 shadow-2xl backdrop-blur-xl">
          <h2 className="text-5xl font-bold mb-8 text-green-300">
            Get in Touch
          </h2>

          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Interested in smart and sustainable farming solutions?
            Let’s transform agriculture with Li‑Fi technology.
          </p>

          <div className="space-y-4 text-lg text-slate-200">
            <p>📧 smartlifiagri@gmail.com</p>
            <p>📞 +91 7603897900</p>
            <p>📍 Coimbatore, Tamil Nadu</p>
          </div>
        </div>
      </section>

      <footer className="text-center py-8 border-t border-white/10 text-slate-400">
        © 2026 Li‑Fi Smart Agriculture System • Sustainable Farming Through Innovation
      </footer>
    </div>
  );
}

