import { motion } from 'framer-motion';

const SlideMiddleClassVulnerabilities = () => {
  const struggles = [
    {
      number: '01',
      icon: '🛡️',
      title: 'No Safety Net (Zero Plan B)',
      accent: 'from-amber-500/15 via-zinc-900/60 to-zinc-950/80',
      border: 'border-amber-500/30 hover:border-amber-400/60',
    },
    {
      number: '02',
      icon: '⏳',
      title: 'Watching Everyone Move Ahead',
      accent: 'from-rose-500/15 via-zinc-900/60 to-zinc-950/80',
      border: 'border-rose-500/30 hover:border-rose-400/60',
    },
    {
      number: '03',
      icon: '🎓',
      title: 'Tier-2 & Tier-3 Degree Guilt',
      accent: 'from-sky-500/15 via-zinc-900/60 to-zinc-950/80',
      border: 'border-sky-500/30 hover:border-sky-400/60',
    },
    {
      number: '04',
      icon: '🗣️',
      title: 'The English & Corporate Fear',
      accent: 'from-emerald-500/15 via-zinc-900/60 to-zinc-950/80',
      border: 'border-emerald-500/30 hover:border-emerald-400/60',
    },
  ];

  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col justify-between px-4 sm:px-6 md:px-10 lg:px-14 py-6 sm:py-8 relative overflow-hidden bg-[#090A0D]">
      {/* Warm Empathy Ambient Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(245,158,11,0.04),transparent_70%)] pointer-events-none" />
      <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-amber-500/[0.04] blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-sky-500/[0.03] blur-[160px] pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center"
      >
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black text-white tracking-tight leading-tight whitespace-nowrap">
          I Know Exactly{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400">
            What You Are Going Through
          </span>
        </h2>
      </motion.div>

      {/* 4 Clean Bold Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-7xl mx-auto my-auto">
        {struggles.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 * index }}
            className={`flex flex-col justify-between h-[210px] sm:h-[240px] md:h-[260px] rounded-3xl border ${item.border} bg-gradient-to-b ${item.accent} bg-[#0D0F14]/90 p-6 sm:p-7 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:scale-[1.02] group`}
          >
            {/* Header: Icon + Number */}
            <div className="flex items-center justify-between">
              <span className="text-2xl sm:text-3xl p-3 rounded-2xl bg-zinc-800/80 border border-zinc-700/60 shadow-inner group-hover:scale-105 transition-transform">
                {item.icon}
              </span>
              <span className="font-mono text-sm font-bold text-zinc-500">
                {item.number}
              </span>
            </div>

            {/* Title */}
            <div className="mt-auto">
              <h3 className="font-display text-lg sm:text-xl md:text-[22px] font-bold text-white tracking-tight leading-snug">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Reassurance Banner - Prominent & Large */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="relative z-10 w-full max-w-5xl mx-auto text-center"
      >
        <div className="flex items-center justify-center gap-3.5 px-6 sm:px-10 py-4 sm:py-5 rounded-3xl bg-zinc-900/90 border border-amber-500/40 shadow-2xl backdrop-blur-xl">
          <span className="text-xl sm:text-2xl md:text-3xl shrink-0">🤝</span>
          <p className="font-display text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-zinc-100 tracking-tight leading-snug">
            “Yeh saare darr aur insecurities main aapke dil se nikal dunga. <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 font-bold">You don’t need fluent English or privilege — just one high-income hardcore skill.”</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default SlideMiddleClassVulnerabilities;
