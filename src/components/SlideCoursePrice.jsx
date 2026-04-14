import { motion } from 'framer-motion';

const coursePriceImage = new URL('../../Price/Screenshot 2026-04-12 at 5.14.44\u202fPM.png', import.meta.url).href;

const SlideCoursePrice = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-4 py-6 md:px-8 md:py-8 lg:px-12 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-[#0E0F12] to-subtle-gray" />
    <div className="absolute -top-24 right-[-8%] h-72 w-72 rounded-full bg-premium-gold/10 blur-3xl" />
    <div className="absolute -bottom-24 left-[-8%] h-72 w-72 rounded-full bg-white/5 blur-3xl" />

    <div className="relative z-10 w-full max-w-5xl space-y-4 md:space-y-5">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center font-display text-3xl md:text-4xl lg:text-5xl text-white"
      >
        Course Price
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-4xl rounded-[1.5rem] border border-white/10 bg-white/5 p-2 md:p-3 shadow-2xl"
      >
        <img
          src={coursePriceImage}
          alt="Course price details"
          className="max-h-[72vh] md:max-h-[74vh] w-full rounded-[1.125rem] border border-white/10 object-contain"
        />
      </motion.div>
    </div>
  </section>
);

export default SlideCoursePrice;
