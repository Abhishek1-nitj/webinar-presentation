import { motion } from 'framer-motion';

import product1 from '../../Product /xyzimage.png';

const SlideProductSet1 = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-20 pb-28 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 w-full max-w-5xl flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="w-full flex items-center justify-center"
      >
        <img
          src={product1}
          alt="Advanced Excel job-ready course"
          className="w-full max-w-2xl max-h-[58vh] object-contain"
          loading="lazy"
        />
      </motion.div>
    </div>
    <div className="absolute bottom-4 left-1/2 w-[min(520px,88%)] -translate-x-1/2 rounded-[2rem] border border-emerald-200/25 bg-emerald-950/40 px-6 py-4 text-center space-y-1 shadow-[0_20px_45px_rgba(16,185,129,0.18)] backdrop-blur">
      <p className="text-lg text-white/70 font-display">
        Actual Value: ₹
        <span className="font-bold text-red-500 text-4xl line-through decoration-[3px]">
          20,000
        </span>
      </p>
      <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200/80">
        85% Discount
      </p>
      <p className="text-3xl font-display font-semibold text-emerald-200">
        Special Webinar Price: ₹
        <span className="text-4xl font-bold text-emerald-100 drop-shadow-[0_0_12px_rgba(16,185,129,0.6)]">
          2000
        </span>{' '}
        only
      </p>
    </div>
  </section>
);

export default SlideProductSet1;
