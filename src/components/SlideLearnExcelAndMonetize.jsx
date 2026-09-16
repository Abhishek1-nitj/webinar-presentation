import { motion } from 'framer-motion';
import { assetPath } from '../utils/assetPath';

const SlideLearnExcelAndMonetize = () => {
  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 relative overflow-hidden bg-[#090A0D]">
      {/* Dynamic Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(16,185,129,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/4 left-10 h-72 w-72 rounded-full bg-emerald-500/[0.05] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 h-80 w-80 rounded-full bg-amber-500/[0.06] blur-[150px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center my-auto space-y-8 sm:space-y-12">
        
        {/* Top Header - Single Clean Line Only */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full flex items-center justify-center"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-black text-white tracking-tight whitespace-nowrap">
            Learn <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-green-400">Excel Complete</span> +{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500">Monetize the Skill</span>
          </h2>
        </motion.div>

        {/* 2 Focused Visual Boxes with Small Monetize Pill in Between */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-11 gap-4 sm:gap-6 items-center">
          
          {/* Box 1: Complete Excel Masterclass (Basic to Advanced) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-zinc-900/90 via-[#0C1512] to-zinc-950/95 p-8 sm:p-12 backdrop-blur-xl shadow-2xl relative flex flex-col items-center justify-center text-center h-full min-h-[300px] sm:min-h-[340px]"
          >
            <img
              src={assetPath('images/logos/excel-logo.png')}
              alt="Excel"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-[0_0_25px_rgba(16,185,129,0.5)] mb-6"
            />

            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-snug mb-4">
              Complete Excel Masterclass
            </h3>

            <span className="inline-block px-5 py-2 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 font-extrabold text-sm sm:text-base tracking-wide uppercase shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              Basic to Advanced
            </span>
          </motion.div>

          {/* Small Box in Between: Monetize */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-1 flex flex-col items-center justify-center py-2 lg:py-0"
          >
            <div className="flex flex-col items-center justify-center px-3.5 py-3 rounded-2xl bg-gradient-to-b from-amber-500/20 via-zinc-900 to-emerald-500/20 border border-amber-400/30 shadow-[0_0_25px_rgba(245,158,11,0.25)] backdrop-blur-md">
              <span className="text-xl sm:text-2xl">💰</span>
              <span className="font-display text-xs sm:text-sm font-black text-amber-300 uppercase tracking-widest mt-1">
                Monetize
              </span>
              <div className="mt-1 text-amber-400 hidden lg:block">
                <svg className="w-4 h-4 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Box 2: Full-Time Job + Freelancing */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 rounded-3xl border-2 border-amber-500/40 bg-gradient-to-b from-amber-950/40 via-[#14110A] to-zinc-950/95 p-6 sm:p-10 backdrop-blur-xl shadow-[0_15px_60px_rgba(245,158,11,0.2)] relative flex flex-col justify-center h-full min-h-[300px] sm:min-h-[340px]"
          >
            <div className="space-y-4 w-full">
              {/* Stream 1: Full-time job */}
              <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                <div className="text-left">
                  <span className="text-sm sm:text-base font-bold uppercase tracking-wider text-zinc-300 block">
                    💼 Full-Time Job
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-display text-2xl sm:text-3xl font-black text-white">
                    ₹50,000
                  </span>
                  <span className="text-xs text-zinc-400 font-semibold ml-1.5">
                    / month
                  </span>
                </div>
              </div>

              {/* Stream 2: Freelancing */}
              <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                <div className="text-left">
                  <span className="text-sm sm:text-base font-bold uppercase tracking-wider text-amber-300 block">
                    🌍 Freelancing
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-display text-2xl sm:text-3xl font-black text-amber-300">
                    ₹50,000
                  </span>
                  <span className="text-xs text-zinc-400 font-semibold ml-1.5">
                    / month
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default SlideLearnExcelAndMonetize;
