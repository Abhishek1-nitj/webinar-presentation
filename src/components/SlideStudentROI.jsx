import { motion } from 'framer-motion';

const SlideStudentROI = () => {
  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 relative overflow-hidden bg-[#090A0D]">
      {/* Executive Atmospheric Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(16,185,129,0.06),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/10 h-72 w-72 rounded-full bg-amber-500/[0.04] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 h-80 w-80 rounded-full bg-emerald-500/[0.07] blur-[150px] pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center my-auto space-y-6 sm:space-y-8 md:space-y-10">
        
        {/* Top Header (Single Clean Line) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full flex items-center justify-center"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.2rem] font-black text-white tracking-tight whitespace-nowrap">
            Invest <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">₹2,500 Once</span> Today, Earn <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-green-400">20X Every Month</span>.
          </h2>
        </motion.div>

        {/* Hero ROI Comparison Grid - Clean, Bold, Minimal Text */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-11 gap-4 sm:gap-6 items-center">
          
          {/* Card 1: Today's Investment (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 rounded-3xl border border-zinc-800/90 bg-gradient-to-b from-zinc-900/80 to-zinc-950/90 p-6 sm:p-10 backdrop-blur-xl shadow-2xl relative flex flex-col items-center justify-center text-center h-full min-h-[260px] sm:min-h-[300px]"
          >
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
              One-Time Investment
            </span>

            <div className="my-6 sm:my-8">
              <span className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-black text-white tracking-tight leading-none drop-shadow-[0_4px_25px_rgba(255,255,255,0.2)]">
                ₹2,500
              </span>
            </div>

            <span className="text-xs sm:text-sm text-zinc-400 font-medium tracking-wide">
              Pay Once • Lifetime Skills & Mentorship
            </span>
          </motion.div>

          {/* Center Multiplier Catalyst (1 col / bridge) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1 flex flex-col items-center justify-center py-2 lg:py-0"
          >
            <div className="relative flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-2xl bg-gradient-to-b from-emerald-500/20 via-emerald-500/10 to-teal-500/20 border border-emerald-400/40 shadow-[0_0_35px_rgba(16,185,129,0.35)] backdrop-blur-md">
              <span className="font-display text-3xl sm:text-4xl font-black text-emerald-300 tracking-tight">
                20X
              </span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-200 mt-1 whitespace-nowrap">
                Multiplier
              </span>
              <div className="mt-1.5 hidden lg:flex flex-col items-center text-emerald-400">
                <svg className="w-5 h-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Card 2: After 3 Months Potential (5 cols - LOUD & PROMINENT) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 rounded-3xl border-2 border-emerald-500/40 bg-gradient-to-b from-emerald-950/40 via-[#0B1512] to-zinc-950/90 p-6 sm:p-10 backdrop-blur-xl shadow-[0_15px_60px_rgba(16,185,129,0.25)] relative flex flex-col items-center justify-center text-center h-full min-h-[260px] sm:min-h-[300px] overflow-hidden"
          >
            {/* Top Accent glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 shadow-[0_0_15px_rgba(16,185,129,0.25)]">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase">
                After 3 Months
              </span>
            </div>

            <div className="my-6 sm:my-8">
              <div className="flex items-baseline justify-center flex-wrap gap-2">
                <span className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-100 to-green-400 tracking-tight leading-none drop-shadow-[0_10px_40px_rgba(16,185,129,0.55)]">
                  ₹50,000
                </span>
                <span className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-300">
                  / mo
                </span>
              </div>
            </div>

            <span className="text-xs sm:text-sm text-emerald-300 font-semibold tracking-wide flex items-center gap-1.5">
              <span>⚡</span> Recover 100% course fee in your first 2 days
            </span>
          </motion.div>

        </div>

        {/* Bottom Prominent Reality Check Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-8 px-6 sm:px-8 py-3 rounded-2xl bg-zinc-900/80 border border-emerald-500/30 backdrop-blur-md shadow-xl">
            <span className="text-amber-400 font-bold text-sm sm:text-base flex items-center gap-1.5">
              <span>⚡</span> Investment: <span className="text-white font-black">₹2,500 (Today)</span>
            </span>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <span className="text-sky-400 font-bold text-sm sm:text-base flex items-center gap-1.5">
              <span>⏱️</span> Mastery Timeline: <span className="text-white font-black">3 Months</span>
            </span>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <span className="text-emerald-400 font-bold text-sm sm:text-base flex items-center gap-1.5">
              <span>🚀</span> Monthly Earning: <span className="text-white font-black">₹50,000 / mo (20X Return)</span>
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SlideStudentROI;
