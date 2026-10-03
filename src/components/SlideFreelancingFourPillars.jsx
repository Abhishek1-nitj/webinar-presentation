import { motion } from 'framer-motion';

const SlideFreelancingFourPillars = () => {
  const pillars = [
    {
      badge: 'STEP 1',
      title: 'Platforms',
      icon: (
        <svg className="w-10 h-10 sm:w-11 sm:h-11 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
      badgeColor: 'border-emerald-500/30 bg-emerald-500/15 text-emerald-300',
      gradient: 'from-emerald-950/25 via-[#0C1512] to-zinc-950/95',
      border: 'border-emerald-500/40 hover:border-emerald-400/70',
      glow: 'shadow-[0_0_35px_rgba(16,185,129,0.18)]',
      titleGradient: 'from-emerald-300 via-teal-200 to-green-400',
    },
    {
      badge: 'STEP 2',
      title: 'Profile',
      icon: (
        <svg className="w-10 h-10 sm:w-11 sm:h-11 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      badgeColor: 'border-amber-500/30 bg-amber-500/15 text-amber-300',
      gradient: 'from-amber-950/25 via-[#13110C] to-zinc-950/95',
      border: 'border-amber-500/40 hover:border-amber-400/70',
      glow: 'shadow-[0_0_35px_rgba(245,158,11,0.18)]',
      titleGradient: 'from-amber-300 via-yellow-200 to-amber-500',
    },
    {
      badge: 'STEP 3',
      title: 'Portfolio',
      icon: (
        <svg className="w-10 h-10 sm:w-11 sm:h-11 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      badgeColor: 'border-purple-500/30 bg-purple-500/15 text-purple-300',
      gradient: 'from-purple-950/25 via-[#130E18] to-zinc-950/95',
      border: 'border-purple-500/40 hover:border-purple-400/70',
      glow: 'shadow-[0_0_35px_rgba(168,85,247,0.18)]',
      titleGradient: 'from-purple-300 via-fuchsia-200 to-pink-400',
    },
    {
      badge: 'STEP 4',
      title: 'Process',
      icon: (
        <svg className="w-10 h-10 sm:w-11 sm:h-11 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      badgeColor: 'border-sky-500/30 bg-sky-500/15 text-sky-300',
      gradient: 'from-sky-950/25 via-[#0B131C] to-zinc-950/95',
      border: 'border-sky-500/40 hover:border-sky-400/70',
      glow: 'shadow-[0_0_35px_rgba(56,189,248,0.18)]',
      titleGradient: 'from-sky-300 via-teal-200 to-emerald-400',
    },
  ];

  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 relative overflow-hidden bg-[#090A0D]">
      {/* Radiant Background Lighting & Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(16,185,129,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-emerald-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 w-80 h-80 bg-amber-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/3 translate-x-1/2 w-80 h-80 bg-purple-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-sky-500/[0.04] rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Big Centered Header Title */}
      <div className="relative z-10 w-full max-w-7xl mx-auto text-center shrink-0 pt-2 pb-2">
        <motion.h1
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight"
        >
          <span className="text-white">How to get </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-green-400 drop-shadow-[0_4px_30px_rgba(16,185,129,0.35)]">
            Freelancing Projects?
          </span>
        </motion.h1>
      </div>

      {/* Main 4 Pillars Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 min-h-0 py-4 sm:py-6 flex flex-col justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch w-full">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + idx * 0.08 }}
              className={`rounded-3xl border-2 bg-gradient-to-b ${pillar.gradient} p-6 sm:p-7 flex flex-col justify-between items-center text-center relative overflow-hidden transition-all duration-300 ${pillar.border} ${pillar.glow} group hover:scale-[1.02]`}
            >
              <div className="w-full flex items-center justify-start mb-4">
                <span className={`text-[10px] sm:text-xs font-mono font-extrabold uppercase tracking-widest px-3 py-0.5 rounded-full border ${pillar.badgeColor}`}>
                  {pillar.badge}
                </span>
              </div>

              {/* Centered Large Icon */}
              <div className="my-auto py-4 sm:py-6 flex flex-col items-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-zinc-950/80 border border-zinc-800/80 flex items-center justify-center shadow-xl mb-5 group-hover:border-zinc-700 transition-colors">
                  {pillar.icon}
                </div>

                {/* Pillar Title */}
                <h2 className="font-display text-xl sm:text-2xl font-black text-white leading-tight">
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${pillar.titleGradient}`}>
                    {pillar.title}
                  </span>
                </h2>
              </div>

              <div className="w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent mt-3" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle bottom spacing */}
      <div className="shrink-0 h-4" />
    </section>
  );
};

export default SlideFreelancingFourPillars;
