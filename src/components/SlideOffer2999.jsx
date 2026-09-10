import { motion } from 'framer-motion';

const SlideOffer2999 = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 relative overflow-hidden bg-premium-black">
    {/* Atmospheric Radial Backlighting */}
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-[#080B0F] to-subtle-gray" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.18),transparent_65%)]" />
    <div className="absolute -top-36 left-1/3 h-96 w-96 rounded-full bg-red-600/20 blur-[170px] pointer-events-none" />
    <div className="absolute -bottom-36 right-1/3 h-[30rem] w-[30rem] rounded-full bg-emerald-500/20 blur-[180px] pointer-events-none" />

    <div className="relative z-10 w-full max-w-4xl text-center space-y-6 sm:space-y-8">
      
      {/* Top Scarcity Pill Badge: Only first 30 Students */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-center"
      >
        <div className="inline-flex items-center gap-2.5 rounded-full border border-amber-400/50 bg-gradient-to-r from-amber-500/20 via-yellow-500/15 to-amber-500/20 px-6 sm:px-8 py-2 sm:py-2.5 shadow-[0_0_30px_rgba(245,158,11,0.35)] backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-amber-400 animate-ping" />
          <span className="font-display text-sm sm:text-base md:text-lg font-black uppercase tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-100">
            Only 30 Students
          </span>
        </div>
      </motion.div>

      {/* 1. Evil Red Crossed-out 25,706 Big Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -15 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="inline-block"
      >
        <div className="relative inline-block rounded-3xl sm:rounded-[2.5rem] border-2 border-red-600/70 bg-gradient-to-b from-red-950/90 via-[#260306] to-black px-10 sm:px-16 md:px-20 py-4 sm:py-6 shadow-[0_0_70px_rgba(239,68,68,0.65)] backdrop-blur-xl">
          <div className="font-display text-5xl sm:text-6xl md:text-7xl font-black text-red-500 tracking-tight drop-shadow-[0_0_35px_rgba(239,68,68,0.95)]">
            25,706
          </div>
          {/* Intense Neon Red Slash Cross */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="absolute h-2 sm:h-2.5 w-[112%] bg-red-500 -rotate-12 rounded-full shadow-[0_0_25px_rgba(255,0,0,1)] ring-2 ring-red-300/80" />
            <span className="absolute h-2 sm:h-2.5 w-[112%] bg-red-500 rotate-12 rounded-full shadow-[0_0_25px_rgba(255,0,0,1)] ring-2 ring-red-300/80" />
          </div>
        </div>
      </motion.div>

      {/* 2. 88% Discount (22,101 off) Glowing Pill Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-center"
      >
        <div className="inline-flex items-center gap-3 rounded-full border border-emerald-400/40 bg-emerald-500/15 px-6 sm:px-8 py-2 sm:py-3 shadow-[0_0_35px_rgba(16,185,129,0.35)] backdrop-blur-xl">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <span className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide text-emerald-300">
            88% Discount <span className="text-emerald-400/80 font-semibold text-lg sm:text-2xl">(22,101 off)</span>
          </span>
        </div>
      </motion.div>

      {/* 3. Huge Green 2999 Price Hero */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 25 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-2 pt-1"
      >
        <div className="font-display text-8xl sm:text-9xl md:text-[11rem] lg:text-[13rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-200 to-teal-300 tracking-tight leading-none drop-shadow-[0_15px_90px_rgba(52,211,153,0.75)]">
          2999
        </div>
      </motion.div>

    </div>
  </section>
);

export default SlideOffer2999;
