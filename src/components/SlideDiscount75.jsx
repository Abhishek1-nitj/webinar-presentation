import { motion } from 'framer-motion';

const SlideDiscount75 = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 relative overflow-hidden bg-premium-black">
    {/* Atmospheric Radial Lighting */}
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-[#0B0D12] to-subtle-gray" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15),transparent_60%)]" />
    <div className="absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-red-500/10 blur-[150px] pointer-events-none" />
    <div className="absolute -bottom-32 right-1/3 h-96 w-96 rounded-full bg-emerald-500/15 blur-[160px] pointer-events-none" />

    <div className="relative z-10 w-full max-w-4xl text-center space-y-8 sm:space-y-10">
      
      {/* Crossed-out 1 Lakh Box */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="inline-block"
      >
        <div className="relative inline-block rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.04] px-8 sm:px-12 py-3.5 sm:py-5 backdrop-blur-md shadow-2xl">
          <div className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white/50 tracking-tight">
            1 Lakh
          </div>
          {/* Glowing Red Cross Marks */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="absolute h-1 sm:h-1.5 w-[108%] bg-red-500 -rotate-12 rounded-full shadow-[0_0_16px_rgba(239,68,68,0.85)]" />
            <span className="absolute h-1 sm:h-1.5 w-[108%] bg-red-500 rotate-12 rounded-full shadow-[0_0_16px_rgba(239,68,68,0.85)]" />
          </div>
        </div>
      </motion.div>

      {/* 75% Less Glowing Pill Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-center"
      >
        <div className="inline-flex items-center gap-3 rounded-full border border-emerald-400/40 bg-emerald-500/15 px-6 sm:px-8 py-2 sm:py-3 shadow-[0_0_30px_rgba(16,185,129,0.3)] backdrop-blur-xl">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <span className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide text-emerald-300">
            75% Less
          </span>
        </div>
      </motion.div>

      {/* Massive 25,706 Slashed Value */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 25 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-2"
      >
        <div className="font-display text-6xl sm:text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-100 to-green-400 tracking-tight drop-shadow-[0_10px_60px_rgba(52,211,153,0.55)]">
          25,706
        </div>
      </motion.div>

    </div>
  </section>
);

export default SlideDiscount75;
