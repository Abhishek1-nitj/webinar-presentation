import { motion } from 'framer-motion';

const SlideCostOfLearningBig = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-4 sm:px-8 md:px-12 relative overflow-hidden bg-[#07080A]">
    {/* Refined Executive Backdrop Lighting */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.14),rgba(255,255,255,0))]" />
    <div className="absolute -top-36 left-1/3 h-96 w-96 rounded-full bg-amber-500/[0.06] blur-[170px] pointer-events-none" />
    <div className="absolute -bottom-36 right-1/3 h-96 w-96 rounded-full bg-blue-500/[0.04] blur-[170px] pointer-events-none" />

    <div className="relative z-10 w-full max-w-6xl text-center space-y-8 sm:space-y-12">
      
      {/* Main Single-Line Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none whitespace-nowrap"
      >
        Cost of Learning Tools <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300">Separately</span>
      </motion.h2>

      {/* Massive Elegant Champagne Gold Figure */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="inline-block"
      >
        <div className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-amber-300 tracking-tight leading-none drop-shadow-[0_4px_45px_rgba(251,191,36,0.3)]">
          1 – 1.3 Lakh
        </div>
      </motion.div>

    </div>
  </section>
);

export default SlideCostOfLearningBig;
