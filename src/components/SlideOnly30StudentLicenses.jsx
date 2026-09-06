import { motion } from 'framer-motion';

const SlideOnly30StudentLicenses = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-4 sm:px-8 md:px-12 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-[#0E0F12] to-subtle-gray" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(218,165,32,0.22),transparent_55%)]" />
    <div className="absolute -top-28 right-[-8%] h-72 w-72 rounded-full bg-premium-gold/20 blur-3xl" />
    <div className="absolute -bottom-24 left-[-5%] h-72 w-72 rounded-full bg-white/5 blur-3xl" />

    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 25 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 text-center w-full max-w-[96vw] mx-auto"
    >
      <h2 className="font-display font-black tracking-tight text-white whitespace-nowrap text-[clamp(1.75rem,5.5vw,6.5rem)] leading-none inline-flex items-center justify-center gap-3 md:gap-5 flex-nowrap">
        <span>Only</span>
        <span className="text-yellow-400 font-extrabold text-[1.25em] drop-shadow-[0_0_40px_rgba(250,204,21,0.75)] px-1 sm:px-2">
          30
        </span>
        <span>Student Licenses</span>
      </h2>
    </motion.div>
  </section>
);

export default SlideOnly30StudentLicenses;

