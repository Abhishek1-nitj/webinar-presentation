import { motion } from 'framer-motion';

import product5 from '../../Product /5 image.png';
import product6 from '../../Product /6. image.png';
import product7 from '../../Product /7 image.png';

const productImages = [
  { src: product5, alt: 'Product 5' },
  { src: product6, alt: 'Product 6' },
  { src: product7, alt: 'Product 7' },
];

const SlideProductSet3 = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-2 md:px-4 lg:px-6 pb-28 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 w-full max-w-[1400px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center"
      >
        {productImages.map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            className="w-full h-[36vh] md:h-[70vh] object-contain"
            loading="lazy"
          />
        ))}
      </motion.div>
    </div>
    <div className="absolute bottom-6 left-1/2 w-[min(520px,90%)] -translate-x-1/2 rounded-[2rem] border border-emerald-200/25 bg-emerald-950/40 px-6 py-4 text-center space-y-1 shadow-[0_20px_45px_rgba(16,185,129,0.18)] backdrop-blur">
      <p className="text-lg text-white/70 font-display">
        Actual Value: ₹
        <span className="font-bold text-red-500 text-4xl line-through decoration-[3px]">
          25,000
        </span>
      </p>
      <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200/80">
        85% Discount
      </p>
      <p className="text-3xl font-display font-semibold text-emerald-200">
        Special Webinar Price: ₹
        <span className="text-4xl font-bold text-emerald-100 drop-shadow-[0_0_12px_rgba(16,185,129,0.6)]">
          3000
        </span>{' '}
        only
      </p>
    </div>
  </section>
);

export default SlideProductSet3;
