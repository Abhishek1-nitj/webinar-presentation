import { motion } from 'framer-motion';

const SlideSaurabhStory = () => {
  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24 py-8 sm:py-12 relative overflow-hidden bg-[#090A0D]">
      {/* Warm Ambient Sunset Glow matching previous flood image */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_50%,rgba(245,158,11,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-amber-500/[0.05] blur-[170px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-orange-500/[0.04] blur-[160px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center my-auto space-y-6 sm:space-y-8">
        {/* Main Grand Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-black text-white tracking-tight leading-none drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
            Saurabh’s{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-500">
              Story
            </span>
          </h2>
        </motion.div>

      </div>
    </section>
  );
};

export default SlideSaurabhStory;
