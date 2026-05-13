import { motion } from 'framer-motion';

const Slide32sPromptingIntro = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-6 md:px-10 lg:px-16 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-5xl w-full space-y-8 text-center">
      <motion.h2
        className="font-display text-4xl md:text-5xl lg:text-6xl text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        Why Prompting is so importnat?
      </motion.h2>

      <motion.div
        className="rounded-[2rem] border border-white/10 bg-white/5 px-6 py-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="font-display text-2xl md:text-3xl text-premium-gold">How LLMs work?</p>
      </motion.div>
    </div>
  </section>
);

export default Slide32sPromptingIntro;
