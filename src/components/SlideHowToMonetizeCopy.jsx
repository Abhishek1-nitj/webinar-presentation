import { motion } from 'framer-motion';

const SlideHowToMonetizeCopy = () => {
  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 relative overflow-hidden bg-[#090A0D]">
      {/* Background Lighting & Radial Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_45%,rgba(245,158,11,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-amber-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-emerald-500/[0.04] rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex-1 flex flex-col items-center justify-center text-center my-auto py-4">
        {/* Primary Headline: How to Monetize? */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none"
        >
          How to{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 drop-shadow-[0_4px_35px_rgba(245,158,11,0.4)]">
            Monetize?
          </span>
        </motion.h1>

        {/* Secondary Headline (Hinglish): Is Skill Se Paise Kaise Kamayein? */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-3 sm:mt-5 font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-zinc-200 tracking-tight"
        >
          Is Skill Se{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-green-400 drop-shadow-[0_4px_25px_rgba(16,185,129,0.3)]">
            Paise Kaise Kamayein?
          </span>
        </motion.h2>

        {/* Subtle Horizontal Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="w-32 sm:w-48 h-[2px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent my-6 sm:my-8"
        />

        {/* 2 Income Paths Preview Cards */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-left"
        >
          {/* Path 1: Corporate Full-Time Job */}
          <div className="p-5 sm:p-6 rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md relative overflow-hidden group hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-full pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                  Path 01
                </span>
                <span className="text-xl">💼</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                Full-Time Corporate Job
              </h3>
            </div>
            <div className="flex items-baseline gap-1.5 pt-4 border-t border-zinc-800 mt-4">
              <span className="text-2xl sm:text-3xl font-black text-amber-300 font-display">
                ₹25,000 – ₹60,000
              </span>
              <span className="text-xs text-zinc-500 font-medium">/ month</span>
            </div>
          </div>

          {/* Path 2: Global Remote & Freelancing */}
          <div className="p-5 sm:p-6 rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md relative overflow-hidden group hover:border-emerald-400/50 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-md border border-emerald-400/20">
                  Path 02
                </span>
                <span className="text-xl">🌍</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                Global Remote & Freelancing
              </h3>
            </div>
            <div className="flex items-baseline gap-1.5 pt-4 border-t border-zinc-800 mt-4">
              <span className="text-2xl sm:text-3xl font-black text-emerald-300 font-display">
                ₹25,000 – ₹85,000+
              </span>
              <span className="text-xs text-zinc-500 font-medium">/ month (WFH)</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SlideHowToMonetizeCopy;
