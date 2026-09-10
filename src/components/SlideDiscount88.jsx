import { motion } from 'framer-motion';

const SlideDiscount88 = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-4 sm:px-8 md:px-12 relative overflow-hidden bg-premium-black">
    {/* Atmospheric Ambient Lighting */}
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-[#0B0D12] to-subtle-gray" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.2),transparent_55%)]" />
    <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-emerald-500/15 blur-[160px] pointer-events-none" />
    <div className="absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-teal-500/15 blur-[160px] pointer-events-none" />

    <div className="relative z-10 text-center space-y-6 sm:space-y-8 max-w-5xl mx-auto">
      {/* Top Scarcity Pill Badge: Only first 30 Students */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-center"
      >
        <div className="inline-flex items-center gap-3.5 rounded-full border border-amber-400/60 bg-gradient-to-r from-amber-500/25 via-yellow-500/20 to-amber-500/25 px-8 sm:px-12 py-3 sm:py-4 shadow-[0_0_40px_rgba(245,158,11,0.45)] backdrop-blur-md">
          <span className="h-3 w-3 rounded-full bg-amber-400 animate-ping" />
          <span className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-[0.18em] text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-100 drop-shadow-[0_2px_12px_rgba(245,158,11,0.5)]">
            Only 30 Students
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-4 sm:space-y-6"
      >
        <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-green-400 drop-shadow-[0_0_45px_rgba(52,211,153,0.5)] leading-tight">
          Discount of 88%
        </h2>
        <div className="inline-block rounded-full border border-emerald-400/30 bg-emerald-500/10 px-6 sm:px-8 py-2 sm:py-2.5 backdrop-blur-md">
          <span className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-emerald-300">
            (22,101 off)
          </span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default SlideDiscount88;
