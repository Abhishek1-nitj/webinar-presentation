import { motion } from 'framer-motion';

const SlideWhatYouNeedToLearnJobReady = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-4 sm:px-8 md:px-12 relative overflow-hidden bg-[#07080A]">
    {/* Atmospheric Ambient Lighting */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.12),rgba(255,255,255,0))]" />
    <div className="absolute -top-36 left-1/3 h-96 w-96 rounded-full bg-amber-500/[0.08] blur-[170px] pointer-events-none" />
    <div className="absolute -bottom-36 right-1/3 h-96 w-96 rounded-full bg-blue-500/[0.06] blur-[170px] pointer-events-none" />

    <div className="relative z-10 w-full max-w-6xl text-center space-y-6 sm:space-y-10 mx-auto">
      
      {/* Strictly Single-Line Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none whitespace-nowrap"
      >
        What all you need to learn to become <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300">Job Ready</span>
      </motion.h2>

      {/* Big Radiant Question Mark */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="inline-block"
      >
        <div className="font-display text-8xl sm:text-9xl md:text-[12rem] lg:text-[14rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-yellow-300 to-amber-500 tracking-tight leading-none drop-shadow-[0_10px_60px_rgba(251,191,36,0.5)]">
          ?
        </div>
      </motion.div>

    </div>
  </section>
);

export default SlideWhatYouNeedToLearnJobReady;
