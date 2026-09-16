import { motion } from 'framer-motion';

const SlideLearningTime = () => {
  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 relative overflow-hidden bg-[#090A0D]">
      {/* Subtle Executive Matte Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(255,255,255,0.025),transparent_70%)] pointer-events-none" />

      {/* Main Impact Visual Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8 md:space-y-10 my-auto">
        
        {/* Top: Time to Mastery */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-wider text-zinc-300">
            Time to Mastery
          </h3>
        </motion.div>

        {/* Center Hero: 3–6 Months (Massive, Crisp, Executive Typography) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative inline-block py-1 sm:py-3"
        >
          <div className="font-display text-7xl sm:text-9xl md:text-[10rem] lg:text-[11.5rem] font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-zinc-400 drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]">
            3–6 Months
          </div>

          {/* Understated Executive Horizon Line */}
          <div className="mt-4 sm:mt-6 max-w-md sm:max-w-lg mx-auto h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
        </motion.div>

        {/* Bottom Hero: Full Tool Mastery + Fully Job Ready + Fully Freelancing Ready */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-2 sm:pt-4 w-full"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-md shadow-xl">
            <span className="font-display text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white tracking-tight">
              Full Tool Mastery
            </span>
            <span className="text-zinc-600 font-light text-lg sm:text-xl">+</span>
            <span className="font-display text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white tracking-tight">
              Fully Job Ready
            </span>
            <span className="text-zinc-600 font-light text-lg sm:text-xl">+</span>
            <span className="font-display text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white tracking-tight">
              Fully Freelancing Ready
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SlideLearningTime;
