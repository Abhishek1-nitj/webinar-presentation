import { motion } from 'framer-motion';

const SlideThreeMonthsGrindMentorPromise = () => {
  const pillars = [
    {
      number: '01',
      icon: '⚔️',
      title: 'The Relentless Grind',
      subtitle: 'Your Commitment',
      points: [
        'Complete every single module & dataset',
        'Build production-grade live portfolio projects',
        'Put in your 100% — khoon, paseena aur dedication',
      ],
      accent: 'from-amber-500/15 via-zinc-900/60 to-zinc-950/80',
      border: 'border-amber-500/30 hover:border-amber-400/60',
      tagBg: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
      tag: 'Give It Everything',
    },
    {
      number: '02',
      icon: '🧠',
      title: 'Drain My Brain',
      subtitle: 'My Commitment as Mentor',
      points: [
        'Chus lo poora jitna corporate experience mujhe hai',
        'Live doubt-solving, code reviews & guidance',
        'Steal my battle-tested templates & frameworks',
      ],
      accent: 'from-yellow-500/15 via-zinc-900/60 to-zinc-950/80',
      border: 'border-yellow-500/30 hover:border-yellow-400/60',
      tagBg: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/30',
      tag: '200% Hand-Holding',
    },
    {
      number: '03',
      icon: '🎯',
      title: 'Mocks & Career Engine',
      subtitle: 'The Final Breakthrough',
      points: [
        '1-on-1 rigorous mock technical interviews with me',
        'ATS-proof resume & direct recruiter positioning',
        'Win full-time jobs or high-ticket freelance clients',
      ],
      accent: 'from-emerald-500/15 via-zinc-900/60 to-zinc-950/80',
      border: 'border-emerald-500/30 hover:border-emerald-400/60',
      tagBg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
      tag: 'Job-Ready Outcome',
    },
  ];

  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col justify-between px-4 sm:px-6 md:px-10 lg:px-14 py-5 sm:py-6 relative overflow-hidden bg-[#090A0D]">
      {/* Radiant Atmospheric Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(245,158,11,0.05),transparent_70%)] pointer-events-none" />
      <div className="absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-amber-500/[0.04] blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-32 right-1/3 h-96 w-96 rounded-full bg-emerald-500/[0.04] blur-[160px] pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center space-y-1.5"
      >
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black text-white tracking-tight leading-tight whitespace-nowrap">
          Just 3 Months Ka Grind —{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400">
            Zindagi Sanwar Jayegi
          </span>
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-zinc-300 font-medium tracking-wide">
          “Aisa bhayankar mehnat karo 3 se 6 mahine ki life mein dobara struggle na karna pade.”
        </p>
      </motion.div>

      {/* 3 Power Pillars */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full max-w-6xl mx-auto my-auto">
        {pillars.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 * index }}
            className={`flex flex-col justify-between rounded-3xl border ${item.border} bg-gradient-to-b ${item.accent} bg-[#0D0F14]/90 p-5 sm:p-7 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:scale-[1.02] group`}
          >
            <div className="space-y-4">
              {/* Header Row: Icon + Number */}
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                <div className="flex items-center gap-3">
                  <span className="text-2xl sm:text-3xl">{item.icon}</span>
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-zinc-400 font-semibold block">
                      {item.subtitle}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <span className="font-mono text-xs font-bold text-zinc-600 group-hover:text-zinc-400 transition-colors">
                  {item.number}
                </span>
              </div>

              {/* Clean Points */}
              <div className="space-y-2.5 pt-1">
                {item.points.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5">
                    <span className="text-amber-400 font-bold text-sm shrink-0 mt-0.5">✓</span>
                    <p className="text-xs sm:text-[13px] text-zinc-200 font-normal leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Tag */}
            <div className="mt-5 pt-3 border-t border-zinc-800/80 flex items-center justify-between">
              <span className={`text-[10px] sm:text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${item.tagBg}`}>
                ⚡ {item.tag}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Mentor Ironclad Guarantee Banner */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="relative z-10 w-full max-w-5xl mx-auto text-center"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-zinc-900/90 to-emerald-950/40 border border-emerald-500/40 shadow-2xl backdrop-blur-xl">
          <span className="text-lg sm:text-xl">🤝</span>
          <p className="font-display text-xs sm:text-sm md:text-[15px] font-medium text-zinc-200 tracking-tight">
            <strong className="text-emerald-300 font-bold">My Personal Promise to These 30 Students:</strong> Main aapko tab tak push aur guide karunga jab tak aapka career settle na ho jaye.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default SlideThreeMonthsGrindMentorPromise;
