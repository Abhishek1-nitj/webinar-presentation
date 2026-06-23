import { motion } from 'framer-motion';

const SlideFinalMagic = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-[#101827] to-subtle-gray" />
    <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,_rgba(255,196,61,0.25),_transparent_42%)]" />
    <div className="absolute -bottom-40 right-[-8%] h-[28rem] w-[28rem] rounded-full bg-premium-gold/10 blur-[140px]" />

    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 max-w-[1700px] text-center"
    >
      <h2 className="font-display text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[1.08] font-extrabold tracking-[-0.03em] text-white">
        <span className="block whitespace-nowrap">Asli magic teacher ke sab kuch kar paane mein nahi hai</span>
        <span className="block whitespace-nowrap text-premium-gold">asli magic tab hai jab students bhi yeh sab kar paayen</span>
      </h2>
    </motion.div>
  </section>
);

export default SlideFinalMagic;
