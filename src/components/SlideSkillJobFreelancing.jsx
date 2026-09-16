import { motion } from 'framer-motion';

const SlideSkillJobFreelancing = () => {
  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-14 relative overflow-hidden bg-[#090A0D]">
      {/* Subtle Executive Matte Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(255,255,255,0.03),transparent_75%)] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[96vw] mx-auto flex flex-col items-center justify-center my-auto">
        
        {/* Strictly Single-Line Unified Executive Equation: Full Tool Mastery ➔ Job + Freelancing */}
        <div className="w-full flex flex-nowrap items-center justify-center gap-2.5 sm:gap-4 md:gap-6 lg:gap-8 whitespace-nowrap">
          
          {/* 1. Full Tool Mastery */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex-shrink-0"
          >
            <span className="font-display text-[clamp(1.4rem,3.4vw,4.5rem)] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-zinc-300 drop-shadow-[0_8px_30px_rgba(0,0,0,0.8)] whitespace-nowrap">
              Full Tool Mastery
            </span>
          </motion.div>

          {/* Minimalist Executive Arrow: ➔ */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center flex-shrink-0 px-0.5 sm:px-1"
          >
            <svg
              className="w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9 lg:w-11 lg:h-11 xl:w-12 xl:h-12 text-zinc-400 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.4}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </motion.div>

          {/* 2. Job */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex-shrink-0"
          >
            <span className="font-display text-[clamp(1.4rem,3.4vw,4.5rem)] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-zinc-300 drop-shadow-[0_8px_30px_rgba(0,0,0,0.8)] whitespace-nowrap">
              Job
            </span>
          </motion.div>

          {/* Subtle Plus: + */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center flex-shrink-0 px-0.5 sm:px-1"
          >
            <span className="font-display text-[clamp(1.2rem,3vw,3.75rem)] font-light text-zinc-500 whitespace-nowrap">
              +
            </span>
          </motion.div>

          {/* 3. Freelancing */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex-shrink-0"
          >
            <span className="font-display text-[clamp(1.4rem,3.4vw,4.5rem)] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-zinc-300 drop-shadow-[0_8px_30px_rgba(0,0,0,0.8)] whitespace-nowrap">
              Freelancing
            </span>
          </motion.div>

        </div>

        {/* Minimalist Horizon Divider Line */}
        <div className="mt-8 sm:mt-12 w-48 sm:w-64 md:w-80 h-[1px] bg-gradient-to-r from-transparent via-zinc-700/60 to-transparent" />

      </div>
    </section>
  );
};

export default SlideSkillJobFreelancing;
