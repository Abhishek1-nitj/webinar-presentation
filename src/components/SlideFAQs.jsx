import { motion } from 'framer-motion';

const SlideFAQs = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-4 md:px-8 lg:px-12 py-6 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="absolute -top-32 right-[-10%] h-96 w-96 rounded-full bg-premium-gold/10 blur-[120px]" />
    <div className="absolute -bottom-32 left-[-10%] h-96 w-96 rounded-full bg-white/5 blur-[120px]" />

    <div className="relative z-10 w-full max-w-6xl space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="text-center space-y-2"
      >
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight font-extrabold tracking-tight bg-gradient-to-r from-white via-premium-gold to-white bg-clip-text text-transparent">
          Frequently Asked Questions (FAQs)
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-3"
      >
        {[
          "What is the access duration of this course?",
          "How can I clear my doubts if I have any?",
          "How much time does it take to finish this course?",
          "Is placement support available?",
          "Will I get the Certificate?"
        ].map((faq, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * idx + 0.3 }}
            className="flex items-start gap-3 p-3 md:p-4 min-h-[76px] rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm shadow-xl hover:border-premium-gold/30 hover:bg-white/[0.04] transition-all duration-300"
          >
            <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full border border-premium-gold/30 bg-premium-gold/10 text-premium-gold font-semibold text-sm">
              Q
            </div>
            <p className="text-sm md:text-base lg:text-lg leading-snug font-medium text-white/90">
              {faq}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default SlideFAQs;
