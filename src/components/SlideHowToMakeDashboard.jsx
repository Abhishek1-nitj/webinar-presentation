import { motion } from 'framer-motion';

const SlideHowToMakeDashboard = () => {
  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 relative overflow-hidden bg-[#090A0D]">
      {/* Radiant Atmospheric Backlighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)] pointer-events-none" />
      <div className="absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-emerald-500/[0.08] blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-32 right-1/3 h-96 w-96 rounded-full bg-amber-500/[0.06] blur-[160px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center my-auto space-y-6 sm:space-y-8">
        

        {/* Big Loud Hero Headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl"
        >
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] font-black tracking-tight leading-[1.05] text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-zinc-400 drop-shadow-[0_10px_40px_rgba(0,0,0,0.9)]">
            How to make{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-green-400 drop-shadow-[0_4px_35px_rgba(16,185,129,0.5)]">
              Dashboard?
            </span>
          </h1>

          {/* Understated Horizon Glow Line */}
          <div className="mt-8 max-w-md mx-auto h-[1px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
        </motion.div>

      </div>
    </section>
  );
};

export default SlideHowToMakeDashboard;
