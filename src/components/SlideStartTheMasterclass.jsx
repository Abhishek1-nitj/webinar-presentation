import { motion } from 'framer-motion';

const SlideStartTheMasterclass = () => {
  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 relative overflow-hidden bg-[#090A0D]">
      {/* Radiant Atmospheric Backlighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(245,158,11,0.12),transparent_70%)] pointer-events-none" />
      <div className="absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-amber-500/[0.08] blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-32 right-1/3 h-96 w-96 rounded-full bg-emerald-500/[0.06] blur-[160px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center my-auto space-y-6 sm:space-y-8">
        
        {/* Subtle Top Pill */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-amber-400/40 bg-amber-500/10 backdrop-blur-md shadow-[0_0_30px_rgba(245,158,11,0.2)]">
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400 animate-ping" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-amber-300 uppercase">
              The Journey Begins Now
            </span>
          </div>
        </motion.div>

        {/* Big Loud Hero Headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] font-black tracking-tight leading-[1.05] text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-zinc-400 drop-shadow-[0_10px_40px_rgba(0,0,0,0.9)]">
            Let&apos;s Start the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 drop-shadow-[0_4px_30px_rgba(245,158,11,0.5)]">
              Masterclass
            </span>
          </h1>

          {/* Understated Horizon Glow Line */}
          <div className="mt-8 max-w-lg mx-auto h-[1px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
        </motion.div>

      </div>
    </section>
  );
};

export default SlideStartTheMasterclass;
