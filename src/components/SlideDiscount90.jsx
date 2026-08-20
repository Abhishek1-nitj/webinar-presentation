import { motion } from 'framer-motion';

const SlideDiscount90 = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-6 md:px-10 lg:px-16 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-[#0E0F12] to-subtle-gray" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(156,217,107,0.18),transparent_42%)]" />

    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 text-center"
    >
      <h2 className="font-display text-5xl md:text-7xl lg:text-[6.5rem] font-bold tracking-tight text-[#9CD96B] drop-shadow-[0_0_28px_rgba(156,217,107,0.28)]">
        Discount 85%
      </h2>
    </motion.div>
  </section>
);

export default SlideDiscount90;
