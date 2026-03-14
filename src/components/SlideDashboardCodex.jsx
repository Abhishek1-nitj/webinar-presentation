import { motion } from 'framer-motion';

const dashboardImage = new URL(
  '../../Gen AI Tools/1_BnpPe7u0t-e8hHc-qEmgSQ.webp',
  import.meta.url
).href;

const SlideDashboardCodex = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 w-full max-w-5xl text-center space-y-10">
      <motion.h2
        className="font-display text-3xl md:text-4xl lg:text-5xl text-white tracking-wide"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <a
          href="https://sage-gnome-edd0b3.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="underline decoration-premium-gold/70 underline-offset-8 hover:text-premium-gold transition-colors"
        >
          Dashboard Made Using VS Code + Codex
        </a>
      </motion.h2>
      <motion.img
        src={dashboardImage}
        alt="Dashboard made using VS Code + Codex"
        className="mx-auto w-full max-w-4xl rounded-[2rem] border border-white/10 shadow-2xl max-h-[65vh] object-contain"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  </section>
);

export default SlideDashboardCodex;
