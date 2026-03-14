import { motion } from 'framer-motion';

const Slide32bPortfolioLook = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 w-full max-w-5xl space-y-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-5"
      >
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
          How Does a Portfolio Look like?
        </h2>
        <a
          href="https://delightful-unicorn-f0f695.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-premium-gold/50 bg-premium-gold/10 px-8 py-3 text-lg font-semibold text-premium-gold shadow-[0_20px_50px_rgba(255,215,0,0.2)] transition hover:bg-premium-gold/20"
        >
          Portfolio
        </a>
      </motion.div>
    </div>
  </section>
);

export default Slide32bPortfolioLook;
