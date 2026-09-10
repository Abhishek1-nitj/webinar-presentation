import { motion } from 'framer-motion';

const SlideThankYou = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-4 sm:px-8 md:px-12 relative overflow-hidden bg-premium-black">
    {/* Atmospheric Studio Glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-[#0B0C10] to-[#12141C]" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(218,165,32,0.18),transparent_65%)]" />
    <div className="absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-amber-500/15 blur-[160px] pointer-events-none" />
    <div className="absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-yellow-500/10 blur-[150px] pointer-events-none" />

    <div className="relative z-10 text-center w-full max-w-5xl mx-auto flex flex-col items-center justify-center space-y-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="inline-block"
      >
        <h1 className="font-display font-black text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 drop-shadow-[0_10px_60px_rgba(245,158,11,0.55)] select-none">
          THANK YOU
        </h1>
      </motion.div>
    </div>
  </section>
);

export default SlideThankYou;
