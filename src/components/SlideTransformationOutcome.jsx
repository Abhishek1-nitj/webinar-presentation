import { motion } from 'framer-motion';

const SlideTransformationOutcome = () => {
  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-8 relative overflow-hidden bg-[#090A0D]">
      {/* Matte Background Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(16,185,129,0.035),transparent_70%)] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center space-y-8 sm:space-y-12 md:space-y-14 my-auto">
        
        {/* Top Header */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Where You Can Be in 3 to 6 Months
          </h2>
        </motion.div>

        {/* Main Income Transformation Hero Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full"
        >
          <div className="rounded-3xl border border-zinc-800/90 bg-gradient-to-b from-zinc-900/90 via-[#0D0F14] to-zinc-900/70 p-6 sm:p-8 md:p-10 backdrop-blur-xl shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
              
              {/* Left: Starting Point Today */}
              <div className="text-center md:text-left space-y-1 flex-1">
                <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                  Starting Point Today
                </span>
                <div className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-zinc-400 tracking-tight">
                  ₹0
                </div>
                <p className="text-xs sm:text-sm text-zinc-500 font-medium">
                  or Low / Stagnant Salary
                </p>
              </div>

              {/* Center: Dedicated Work */}
              <div className="flex flex-col items-center justify-center shrink-0 px-6 py-3 rounded-2xl bg-zinc-800/70 border border-zinc-700/60 shadow-lg">
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-zinc-400 font-bold">
                  Dedicated Work
                </span>
                <div className="font-display text-lg sm:text-xl font-black text-amber-400">
                  3 to 6 Months
                </div>
                <svg className="w-6 h-6 text-zinc-400 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              {/* Right: Minimum 50,000 per month */}
              <div className="text-center md:text-right space-y-1 flex-1">
                <div className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-200 to-teal-200 tracking-tight drop-shadow-[0_4px_30px_rgba(16,185,129,0.35)]">
                  Min. ₹50,000
                </div>
                <p className="text-xs sm:text-sm text-emerald-400 font-medium">
                  per month
                </p>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Big Impact Statement: "Just give me 3 months" */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="pt-2 sm:pt-4"
        >
          <div className="inline-block px-8 sm:px-12 py-4 sm:py-6 rounded-3xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-md shadow-2xl">
            <h3 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-normal leading-[1.25] pb-2.5 px-2 inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-100 drop-shadow-[0_4px_35px_rgba(245,158,11,0.4)]">
              “Just give me 3 months”
            </h3>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SlideTransformationOutcome;
