import { motion } from 'framer-motion';

const benchmarkImage = new URL(
  '../assets/126f5413-e7c3-4e64-b446-789b10af21e8.png',
  import.meta.url
).href;

const SlidePricingBenchmarkImage = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-4 sm:px-8 md:px-12 relative overflow-hidden bg-premium-black">
    {/* Atmospheric Background Lighting */}
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-[#0B0D12] to-subtle-gray" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08),transparent_60%)]" />
    <div className="absolute -top-28 left-1/4 h-80 w-80 rounded-full bg-emerald-500/10 blur-[140px] pointer-events-none" />
    <div className="absolute -bottom-28 right-1/4 h-80 w-80 rounded-full bg-amber-500/10 blur-[140px] pointer-events-none" />

    <div className="relative z-10 w-full flex items-center justify-center">
      <motion.img
        src={benchmarkImage}
        alt="Pricing Benchmark Breakdown"
        className="mx-auto max-h-[86vh] w-auto max-w-[92vw] rounded-[2rem] border border-white/15 shadow-[0_25px_70px_rgba(0,0,0,0.85)] object-contain backdrop-blur"
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  </section>
);

export default SlidePricingBenchmarkImage;
