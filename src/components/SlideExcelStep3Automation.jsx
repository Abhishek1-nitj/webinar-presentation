import { motion } from 'framer-motion';

const SlideExcelStep3Automation = () => {
  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 relative overflow-hidden bg-[#090A0D]">
      {/* Radiant Background Lighting & Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_45%,rgba(56,189,248,0.1),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/[0.08] rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/[0.06] rounded-full blur-[170px] pointer-events-none" />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Header Bar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex items-center justify-between pb-3 border-b border-zinc-800/80 shrink-0">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <div className="h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.6)]" />
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
            Excel Se Paise Kaise Kamaye?{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-teal-200">
              STEP 3
            </span>
          </h2>
        </motion.div>
      </div>

      {/* Main Big & Bold Hero Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col items-center justify-center text-center my-auto py-8">
        
        {/* 🤖 Glowing Centerpiece Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12"
        >
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-sky-500/20 border-2 border-sky-400/50 flex items-center justify-center text-5xl sm:text-6xl shadow-[0_0_50px_rgba(56,189,248,0.5)] mx-auto">
            🤖
          </div>
        </motion.div>

        {/* Massive Single-Line Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex items-center justify-center"
        >
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tight leading-none whitespace-nowrap">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-teal-200 to-emerald-400 drop-shadow-[0_4px_35px_rgba(56,189,248,0.45)]">
              Workflow Automation
            </span>
          </h1>
        </motion.div>

      </div>
    </section>
  );
};

export default SlideExcelStep3Automation;
