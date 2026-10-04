import { motion } from 'framer-motion';

const SlideDataExpertAffordabilityComparison = () => {
  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 py-6 relative overflow-hidden bg-[#090A0D]">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(245,158,11,0.06),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/3 -left-28 w-96 h-96 bg-red-500/[0.04] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-28 w-96 h-96 bg-emerald-500/[0.05] rounded-full blur-[160px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center my-auto space-y-8 sm:space-y-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-2 sm:space-y-3"
        >
          {/* Overline Context */}
          <p className="font-display text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-zinc-400">
            Har Company Full-Time Data Expert Afford Nahi Kar Sakti
          </p>
          
          {/* Main Title: Permanent Staff vs Hire by Project */}
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            <span className="text-red-400">Permanent Staff</span>{' '}
            <span className="text-zinc-500 font-light">vs</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-green-400">
              Hire by Project
            </span>
          </h2>
        </motion.div>

        {/* 2 Focused Comparison Boxes */}
        <div className="w-full grid grid-cols-1 md:grid-cols-11 gap-6 sm:gap-8 items-center">
          
          {/* Permanent Staff Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-5 rounded-3xl border border-red-500/30 bg-gradient-to-b from-red-950/20 via-[#140C0E] to-zinc-950/95 p-8 sm:p-10 backdrop-blur-xl shadow-2xl flex flex-col items-center justify-center text-center space-y-4 min-h-[240px] sm:min-h-[260px]"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/15 border border-red-500/30 text-red-300 text-xs sm:text-sm font-bold uppercase tracking-wider">
              Permanent Staff
            </div>

            <div className="space-y-1">
              <div className="flex items-baseline justify-center gap-2">
                <span className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-red-200 tracking-tight">
                  ₹50,000
                </span>
                <span className="text-base sm:text-lg font-semibold text-zinc-400">
                  / month
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-500 font-medium">
                Fixed monthly overhead
              </p>
            </div>
          </motion.div>

          {/* Center VS Divider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="md:col-span-1 flex flex-col items-center justify-center my-auto py-2 md:py-0"
          >
            <div className="w-12 h-12 rounded-full border border-amber-400/40 bg-gradient-to-br from-amber-500/20 via-zinc-900 to-emerald-500/20 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.25)] text-amber-300 font-black text-sm">
              VS
            </div>
          </motion.div>

          {/* Hire by Project Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5 rounded-3xl border-2 border-emerald-500/40 bg-gradient-to-b from-emerald-950/25 via-[#0C1612] to-zinc-950/95 p-8 sm:p-10 backdrop-blur-xl shadow-[0_15px_50px_rgba(16,185,129,0.15)] flex flex-col items-center justify-center text-center space-y-4 min-h-[240px] sm:min-h-[260px]"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-bold uppercase tracking-wider">
              Hire by Project
            </div>

            <div className="space-y-1">
              <div className="flex items-baseline justify-center gap-2">
                <span className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-emerald-300 tracking-tight">
                  ₹10,000
                </span>
                <span className="text-base sm:text-lg font-semibold text-zinc-400">
                  / project
                </span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-400/80 font-medium">
                Flexible & affordable for clients
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default SlideDataExpertAffordabilityComparison;
