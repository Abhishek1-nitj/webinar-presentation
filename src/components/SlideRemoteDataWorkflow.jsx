import { motion } from 'framer-motion';

const SlideRemoteDataWorkflow = () => {
  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 py-6 relative overflow-hidden bg-[#090A0D]">
      {/* Radiant Background Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_10%,rgba(16,185,129,0.06),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-emerald-500/[0.05] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-amber-500/[0.05] rounded-full blur-[140px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center my-auto space-y-8 sm:space-y-10">
        
        {/* Top Header - Single Clean Line */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[2.5rem] font-black text-white tracking-tight leading-tight whitespace-nowrap">
            Data Ka Kaam:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-400">
              Computer Pe Shuru, Computer Pe Khatam
            </span>
          </h2>
        </motion.div>

        {/* 3-Step Flow Pipeline */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 relative">
          
          {/* Step 1: Input */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="group relative rounded-3xl border border-sky-500/30 bg-gradient-to-b from-sky-950/30 via-[#0C121A] to-zinc-950/90 p-6 sm:p-8 backdrop-blur-xl shadow-xl flex flex-col justify-center hover:border-sky-400/60 transition-all duration-300 space-y-4 min-h-[260px]"
          >
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-black tracking-widest uppercase">
                STEP 01
              </span>
              <span className="text-2xl">📥</span>
            </div>

            <div>
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-400">
                INPUT
              </h3>
              <p className="font-display text-2xl sm:text-3xl font-black text-white mt-1">
                Data Files
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-zinc-800/80">
              <div className="flex items-center gap-2.5 text-zinc-300 text-sm font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span>Excel spreadsheets (.xlsx, .csv)</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-300 text-sm font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span>Cloud SQL databases & APIs</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-300 text-sm font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span>Raw operational data dumps</span>
              </div>
            </div>
          </motion.div>

          {/* Step 2: Tools (Processing) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="group relative rounded-3xl border-2 border-amber-500/40 bg-gradient-to-b from-amber-950/30 via-[#161208] to-zinc-950/90 p-6 sm:p-8 backdrop-blur-xl shadow-[0_15px_50px_rgba(245,158,11,0.15)] flex flex-col justify-center hover:border-amber-400 transition-all duration-300 scale-[1.02] space-y-4 min-h-[260px]"
          >
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-black tracking-widest uppercase">
                STEP 02 · ENGINE
              </span>
              <span className="text-2xl">💻</span>
            </div>

            <div>
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-400">
                TOOLS
              </h3>
              <p className="font-display text-2xl sm:text-3xl font-black text-white mt-1">
                Sab Laptop Pe
              </p>
            </div>

            <div className="pt-2 border-t border-zinc-800/80">
              <div className="p-3.5 rounded-2xl bg-zinc-900/90 border border-emerald-500/30 flex items-center justify-between gap-3 shadow-md">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 font-black text-sm">
                    X
                  </span>
                  <div>
                    <span className="text-sm font-bold text-white block">Excel + AI</span>
                    <span className="text-[11px] text-zinc-400 font-medium">Analysis & Automations</span>
                  </div>
                </div>
                <span className="text-amber-400 text-lg">⚡</span>
              </div>
            </div>
          </motion.div>

          {/* Step 3: Output */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="group relative rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-emerald-950/30 via-[#0A1612] to-zinc-950/90 p-6 sm:p-8 backdrop-blur-xl shadow-xl flex flex-col justify-center hover:border-emerald-400/60 transition-all duration-300 space-y-4 min-h-[260px]"
          >
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-black tracking-widest uppercase">
                STEP 03
              </span>
              <span className="text-2xl">🚀</span>
            </div>

            <div>
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-400">
                OUTPUT
              </h3>
              <p className="font-display text-2xl sm:text-3xl font-black text-white mt-1">
                Report & Dashboard
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-zinc-800/80">
              <div className="flex items-center gap-2.5 text-zinc-300 text-sm font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Email attachment ya Cloud Link</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-300 text-sm font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Interactive web dashboard</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-300 text-sm font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Automated scheduled refresh</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default SlideRemoteDataWorkflow;
