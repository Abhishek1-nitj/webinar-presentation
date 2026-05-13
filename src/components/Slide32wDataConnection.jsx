import { motion } from 'framer-motion';
import dataConnectionImage from '../../Data Connection/2image.png';

const Slide32wDataConnection = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-5xl w-full space-y-8 text-center">
      <motion.h2
        className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        Data Connection/Data Modeling
      </motion.h2>
      <motion.div
        className="rounded-[2rem] border border-white/10 bg-white/5 p-4 md:p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={dataConnectionImage}
          alt="Data Connection/Data Modeling"
          className="w-full max-h-[65vh] object-contain"
          loading="lazy"
        />
      </motion.div>
    </div>
  </section>
);

export default Slide32wDataConnection;
