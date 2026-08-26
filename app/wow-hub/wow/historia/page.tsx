export default function Historia() {
  return (
    <div>
      <div className="mb-4">
        <p className="text-xs font-black uppercase tracking-widest text-wow-purple mb-2">
          WOW GENERAL
        </p>
        <h2 className="text-3xl font-black mb-2">📽️ Nuestra Historia</h2>
        <p className="text-wow-muted">
          El origen y evolución del Way of Working en Despegar.
        </p>
      </div>

      {/* VIDEO PLAYER */}
      <div className="bg-wow-ink rounded-lg aspect-video max-w-2xl mb-12 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-wow-purple-deep to-wow-purple opacity-80" />
        <button className="relative z-10 w-20 h-20 bg-wow-gold rounded-full flex items-center justify-center hover:scale-110 transition">
          <span className="text-2xl ml-1">▶</span>
        </button>
        <div className="absolute bottom-4 left-4 text-white font-semibold text-sm z-10">
          Introducción al WoW · 8 min
        </div>
      </div>

      {/* TIMELINE */}
      <div className="mb-12">
        <h3 className="text-xl font-bold mb-6 text-wow-ink">Evolución 2024 - 2026</h3>
        <div className="space-y-6">
          {[
            { year: '2024', title: 'Primer Piloto', desc: 'Iniciamos el framework con Growth y Flights' },
            { year: '2025', title: 'Adopción Gradual', desc: 'Todos los tribes se unen al WoW' },
            { year: '2026', title: 'Consolidación', desc: 'WoW es nuestra forma de trabajar' },
          ].map((item) => (
            <div key={item.year} className="flex gap-6 items-start">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-wow-purple" />
                <div className="w-0.5 h-12 bg-wow-line" />
              </div>
              <div>
                <div className="font-black text-wow-purple">{item.year}</div>
                <div className="font-bold text-wow-ink">{item.title}</div>
                <div className="text-sm text-wow-muted">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3 CARDS: TRY, LEARN, REPEAT */}
      <div className="grid grid-cols-3 gap-6">
        {[
          { title: 'TRY', desc: 'Experimenta nuevas ideas constantemente' },
          { title: 'LEARN', desc: 'Aprende de los resultados y fracasos' },
          { title: 'REPEAT', desc: 'Repite el ciclo mejorando cada vez' },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-gradient-to-br from-wow-purple-deep to-wow-purple rounded-lg p-8 text-white min-h-48 flex flex-col justify-end"
          >
            <div className="text-3xl font-black mb-3">{item.title}</div>
            <p className="text-white/80">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
