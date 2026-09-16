import { motion } from 'framer-motion';

const rescueImage = new URL(
  '../assets/71f1b090-1ebd-4739-a703-371c9a2e0a05.png',
  import.meta.url
).href;

const SlideRescueOpportunityImage = () => (
  <section className="slide-section h-screen max-h-screen w-full flex items-center justify-center px-4 sm:px-8 md:px-12 relative overflow-hidden bg-[#090A0D]">
    {/* Atmospheric Warm Amber Lighting Matching Sunset */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#090A0D] via-[#0E1017] to-[#090A0D]" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.08),transparent_65%)]" />
    <div className="absolute -top-28 right-1/4 h-96 w-96 rounded-full bg-amber-500/10 blur-[160px] pointer-events-none" />
    <div className="absolute -bottom-28 left-1/4 h-96 w-96 rounded-full bg-orange-500/10 blur-[160px] pointer-events-none" />

    <div className="relative z-10 w-full flex items-center justify-center">
      <motion.img
        src={rescueImage}
        alt="Opportunity and Rescue"
        className="mx-auto max-h-[88vh] w-auto max-w-[94vw] rounded-2xl sm:rounded-3xl border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.9)] object-contain backdrop-blur"
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  </section>
);

export default SlideRescueOpportunityImage;
