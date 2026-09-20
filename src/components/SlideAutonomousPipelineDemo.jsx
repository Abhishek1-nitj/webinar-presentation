import { motion } from 'framer-motion';

const SlideAutonomousPipelineDemo = () => {
  const liveUrl = 'https://autonomous-recovery-pipeline.pages.dev/';

  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 relative overflow-hidden bg-[#090A0D]">
      {/* Radiant Atmospheric Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(16,185,129,0.12),transparent_70%)] pointer-events-none" />
      <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-emerald-500/[0.08] blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-amber-500/[0.08] blur-[160px] pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center my-auto">
        
        {/* Big Hero Text: AI Automation (Hyperlinked) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-6xl"
        >
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block cursor-pointer select-none"
          >
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9rem] font-black tracking-tight leading-[1.05] text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-200 to-teal-400 drop-shadow-[0_15px_45px_rgba(16,185,129,0.35)] group-hover:brightness-110 group-hover:scale-[1.02] transition-all duration-300">
              AI Automation
            </h1>
          </a>

          {/* Understated Glow Horizon Line */}
          <div className="mt-8 max-w-lg mx-auto h-[1px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
        </motion.div>

      </div>
    </section>
  );
};

export default SlideAutonomousPipelineDemo;
