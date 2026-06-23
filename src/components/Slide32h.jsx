import { motion } from 'framer-motion';
import { assetPath } from '../utils/assetPath';

const images = [
  { src: assetPath('images/logos/bistro-blinkit.png'), alt: 'Blinkit brand visual' },
  { src: assetPath('images/logos/bistro-zomato.png'), alt: 'Zomato branding' },
  { src: assetPath('images/logos/bistro-screenshot.png'), alt: 'Bistro planning snapshot' },
];

const Slide32h = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-6xl w-full space-y-12">
      <motion.h2
        className="font-display text-4xl md:text-5xl lg:text-6xl text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        Bistro Journey
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        {images.map(({ src, alt }) => (
          <motion.div
            key={src}
            className="rounded-[2.5rem] border border-white/10 bg-white/5 overflow-hidden backdrop-blur-md flex items-center justify-center p-6"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <img src={src} alt={alt} className="w-full h-64 object-contain" loading="lazy" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Slide32h;
