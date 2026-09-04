import { motion } from 'framer-motion';

const SlideExcelNotFormulas = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="absolute -top-32 right-[-10%] h-80 w-80 rounded-full bg-premium-gold/10 blur-3xl" />
    <div className="absolute -bottom-24 left-[-5%] h-72 w-72 rounded-full bg-white/5 blur-3xl" />

    <div className="relative z-10 w-full max-w-4xl text-center space-y-6">
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight text-red-400 flex items-center justify-center gap-4 whitespace-nowrap"
      >
        <span className="inline-flex items-center gap-3">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-red-300/40 bg-red-500/15 shadow-[0_0_20px_rgba(248,113,113,0.35)]">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6 text-red-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6l-12 12" />
            </svg>
          </span>
          Excel ≠. Formulas
        </span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight font-semibold text-emerald-300 flex items-center justify-center gap-4"
      >
        <span className="inline-flex max-w-5xl items-center justify-center gap-3">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-emerald-200/40 bg-emerald-500/15 shadow-[0_0_20px_rgba(16,185,129,0.35)]">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6 text-emerald-200"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          </span>
          Excel = Solving Data Related Business Problems
        </span>
      </motion.p>
    </div>
  </section>
);

export default SlideExcelNotFormulas;
