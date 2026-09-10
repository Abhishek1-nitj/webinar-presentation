import { motion } from 'framer-motion';

const SlideOnlyFirst30Students = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-4 sm:px-8 md:px-12 relative overflow-hidden bg-premium-black">
    {/* Atmospheric Radial Lighting */}
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-[#0E0F12] to-subtle-gray" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(218,165,32,0.2),transparent_55%)]" />
    <div className="absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-amber-500/15 blur-[160px] pointer-events-none" />
    <div className="absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-yellow-500/10 blur-[150px] pointer-events-none" />

    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 25 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 text-center w-full max-w-5xl mx-auto"
    >
      <h2 className="font-display font-black tracking-tight text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight flex flex-wrap items-center justify-center gap-3 sm:gap-6">
        <span>Only first</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-200 font-extrabold text-[1.15em] drop-shadow-[0_0_50px_rgba(250,204,21,0.85)]">
          30
        </span>
        <span>Students</span>
      </h2>
    </motion.div>
  </section>
);

export default SlideOnlyFirst30Students;
