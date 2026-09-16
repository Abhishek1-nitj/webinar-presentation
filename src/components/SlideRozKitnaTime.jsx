import { motion } from 'framer-motion';

const SlideRozKitnaTime = () => {
  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 relative overflow-hidden bg-[#090A0D]">
      {/* Radiant Executive Backlighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(245,158,11,0.12),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-amber-500/[0.08] blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-emerald-500/[0.07] blur-[160px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center my-auto space-y-8 sm:space-y-12 px-2">
        
        {/* Subtle Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-amber-400/40 bg-amber-500/10 backdrop-blur-md shadow-[0_0_25px_rgba(245,158,11,0.2)]">
            <span className="text-base sm:text-lg">⏱️</span>
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-amber-300 uppercase">
              Daily Time Commitment
            </span>
          </div>
        </motion.div>

        {/* Question: Roz Kitna Time Dena Hoga? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
            Roz Kitna Time Dena Hoga?
          </h2>
        </motion.div>

        {/* Elegant Horizon Line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.6 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-24 sm:w-36 h-[2px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"
        />

        {/* Loud, Bright & Bold Answer: Sirf 30 Mins Everyday */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex justify-center"
        >
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[6.25rem] xl:text-[7.25rem] font-black tracking-tight leading-none whitespace-nowrap">
            <span className="text-white drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]">Sirf </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 drop-shadow-[0_8px_40px_rgba(245,158,11,0.55)]">
              30 Mins
            </span>
            <span className="text-white drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]"> Everyday</span>
          </h1>
        </motion.div>

      </div>
    </section>
  );
};

export default SlideRozKitnaTime;
