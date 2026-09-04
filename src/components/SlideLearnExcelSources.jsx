import { motion } from 'framer-motion';

const SlideLearnExcelSources = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-3 sm:px-6 md:px-8 relative overflow-hidden">
    {/* Ambient Glows */}
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-[#0B0D12] to-subtle-gray" />
    <div className="absolute -top-32 right-[-10%] h-96 w-96 rounded-full bg-premium-gold/10 blur-[130px] pointer-events-none" />
    <div className="absolute -bottom-32 left-[-10%] h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />

    <div className="relative z-10 w-full max-w-[95vw] text-center px-1">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-7 md:space-y-10 flex flex-col items-center justify-center"
      >
        <h2 className="font-display font-extrabold tracking-tight text-white leading-tight whitespace-nowrap text-[clamp(1.05rem,2.62vw,3.15rem)]">
          Learn Fundamentals: <span className="text-premium-gold">Basic to Advanced Excel</span> in a Structured Manner
        </h2>

        <div className="flex items-center justify-center">
          <div className="flex h-13 w-13 sm:h-15 sm:w-15 items-center justify-center rounded-full border border-premium-gold/40 bg-premium-gold/15 shadow-[0_0_25px_rgba(212,175,55,0.25)] text-2xl font-bold text-premium-gold">
            +
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white/95 leading-snug">
            All AI Tools
          </h3>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-white/70">
            (Gen AI, Specialized AI Tools, Automation Tools)
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default SlideLearnExcelSources;
