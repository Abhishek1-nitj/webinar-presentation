import { motion } from 'framer-motion';

const offerImage = new URL(
  '../assets/3ec1ee17-3fbd-4e14-89a3-b27733e5d1ca.png',
  import.meta.url
).href;

const SlideOffer2999Image = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-4 sm:px-8 md:px-12 py-6 relative overflow-hidden bg-premium-black">
    {/* Atmospheric Background Lighting */}
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-[#0B0D12] to-subtle-gray" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.12),transparent_60%)]" />
    <div className="absolute -top-28 right-1/4 h-80 w-80 rounded-full bg-amber-500/15 blur-[140px] pointer-events-none" />
    <div className="absolute -bottom-28 left-1/4 h-80 w-80 rounded-full bg-emerald-500/15 blur-[140px] pointer-events-none" />

    <div className="relative z-10 w-full flex flex-col items-center justify-center gap-4 max-w-6xl mx-auto">
      
      {/* Prominent Scarcity Badge: Only first 30 Students */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-center"
      >
        <div className="inline-flex items-center gap-2.5 rounded-full border border-amber-400/50 bg-gradient-to-r from-amber-500/25 via-yellow-500/20 to-amber-500/25 px-6 sm:px-10 py-2 sm:py-3 shadow-[0_0_35px_rgba(245,158,11,0.4)] backdrop-blur-xl">
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400 animate-ping" />
          <span className="font-display text-base sm:text-lg md:text-xl font-black uppercase tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-100">
            Only 30 Students
          </span>
        </div>
      </motion.div>

      {/* Main Image Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="w-full flex justify-center"
      >
        <img
          src={offerImage}
          alt="Master the Complete Data & Career Stack"
          className="mx-auto max-h-[76vh] w-auto max-w-[94vw] rounded-[2rem] border border-white/15 shadow-[0_25px_70px_rgba(0,0,0,0.85)] object-contain backdrop-blur"
        />
      </motion.div>

    </div>
  </section>
);

export default SlideOffer2999Image;
