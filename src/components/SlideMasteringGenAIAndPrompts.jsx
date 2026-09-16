import { motion } from 'framer-motion';

const SlideMasteringGenAIAndPrompts = () => {
  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 relative overflow-hidden bg-[#090A0D]">
      {/* Executive AI Ambient Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(168,85,247,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-cyan-500/[0.06] blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-amber-500/[0.07] blur-[160px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center text-center my-auto px-2">
        
        {/* The Two Big Impact Headlines */}
        <div className="space-y-8 sm:space-y-12 w-full flex flex-col items-center justify-center">
          
          {/* 1. Mastering the Gen AI Tools */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex justify-center"
          >
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-zinc-400 drop-shadow-[0_10px_40px_rgba(0,0,0,0.85)] whitespace-nowrap">
              Mastering the Gen AI Tools
            </h1>
          </motion.div>

          {/* Elegant Connector Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-16 sm:w-28 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
              <div className="h-9 w-9 sm:h-11 sm:w-11 rounded-full border border-amber-400/40 bg-amber-500/15 flex items-center justify-center text-amber-300 font-black text-base sm:text-lg shadow-[0_0_20px_rgba(245,158,11,0.3)] backdrop-blur-md">
                +
              </div>
              <div className="h-px w-16 sm:w-28 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
            </div>
          </motion.div>

          {/* 2. Mastering the Prompts */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex justify-center"
          >
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 drop-shadow-[0_6px_35px_rgba(245,158,11,0.45)] whitespace-nowrap">
              Mastering the Prompts
            </h2>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default SlideMasteringGenAIAndPrompts;
