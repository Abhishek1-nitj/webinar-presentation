import { motion } from 'framer-motion';

import image1 from '../assets/ai-wrong-01.png';
import image2 from '../assets/ai-wrong-02.png';
import image3 from '../assets/ai-wrong-03.png';
import image4 from '../assets/ai-wrong-04.png';
import image5 from '../assets/ai-wrong-05.png';
import image6 from '../assets/ai-wrong-06.png';

const images = [image1, image2, image3, image4, image5, image6];

const Slide180 = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-premium-black" />
    <motion.div
      className="relative z-10 grid w-[min(1200px,94vw)] grid-cols-3 gap-5"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {images.map((src, index) => (
        <div
          key={src}
          className="rounded-2xl bg-white/5 p-2 shadow-[0_20px_45px_rgba(0,0,0,0.35)]"
        >
          <img
            src={src}
            alt={`AI screenshot ${index + 1}`}
            className="h-40 w-full object-contain md:h-48 lg:h-56"
            loading="lazy"
          />
        </div>
      ))}
    </motion.div>
  </section>
);

export default Slide180;
