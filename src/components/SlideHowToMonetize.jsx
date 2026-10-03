import { motion } from 'framer-motion';

const SlideHowToMonetize = () => {
  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 relative overflow-hidden bg-[#090A0D]">
      {/* Background Lighting & Radial Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(245,158,11,0.09),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-96 h-96 bg-amber-500/[0.06] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 w-96 h-96 bg-emerald-500/[0.06] rounded-full blur-[160px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Main Content Area: Centered Title Hero */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex-1 flex flex-col items-center justify-center text-center my-auto py-8">
        {/* Main Headline (Hinglish) */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white tracking-tight leading-[1.15]"
        >
          Achha Paisa Kamane Ke Liye Excel{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 drop-shadow-[0_4px_35px_rgba(245,158,11,0.4)]">
            Kis Level Tak
          </span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-green-400 drop-shadow-[0_4px_35px_rgba(16,185,129,0.4)]">
            Aana Chahiye?
          </span>
        </motion.h1>

        {/* Subtle Horizontal Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="w-40 sm:w-60 h-[3px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent mt-8 sm:mt-10"
        />
      </div>
    </section>
  );
};

export default SlideHowToMonetize;
