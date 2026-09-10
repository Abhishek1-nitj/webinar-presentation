import { motion } from 'framer-motion';

const SlideSpecialWebinarOffer30Students = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-4 sm:px-8 md:px-12 relative overflow-hidden bg-premium-black">
    {/* Atmospheric Radial & Studio Lighting */}
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-[#0E0F14] to-subtle-gray" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(218,165,32,0.18),transparent_60%)]" />
    <div className="absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-amber-500/15 blur-[160px] pointer-events-none" />
    <div className="absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-yellow-500/10 blur-[150px] pointer-events-none" />

    <div className="relative z-10 w-full max-w-6xl text-center space-y-8 sm:space-y-12 mx-auto">
      {/* Strictly Single-Line Headline: Special Webinar Offer for */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none whitespace-nowrap"
      >
        Special Webinar Offer for
      </motion.h2>

      {/* Massive Glowing Champagne Gold Highlight: 30 Students */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="inline-block"
      >
        <div className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-200 tracking-tight leading-none drop-shadow-[0_4px_50px_rgba(250,204,21,0.6)]">
          30 Students
        </div>
      </motion.div>
    </div>
  </section>
);

export default SlideSpecialWebinarOffer30Students;
