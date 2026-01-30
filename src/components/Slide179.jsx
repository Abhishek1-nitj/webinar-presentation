import { motion } from 'framer-motion';

import aiIsWrongImage from '../assets/ai-is-wrong-2.png';

const Slide179 = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-premium-black" />
    <motion.img
      src={aiIsWrongImage}
      alt="AI is wrong screenshot"
      className="relative z-10 max-h-[92vh] w-auto max-w-[96vw] object-contain shadow-[0_30px_70px_rgba(0,0,0,0.45)]"
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      loading="lazy"
    />
  </section>
);

export default Slide179;
