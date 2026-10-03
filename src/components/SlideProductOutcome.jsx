import { motion } from 'framer-motion';

// Authentic Official Microsoft Excel SVG Logo
const ExcelIcon = () => (
  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#107C41] relative flex items-center justify-center shadow-md border border-emerald-500/30 overflow-hidden shrink-0">
    <svg className="w-full h-full p-1" viewBox="0 0 48 48" fill="none">
      <rect x="14" y="6" width="28" height="36" rx="3" fill="#107C41" />
      <rect x="22" y="11" width="8" height="5" rx="1" fill="#21A366" />
      <rect x="32" y="11" width="8" height="5" rx="1" fill="#21A366" />
      <rect x="22" y="18" width="8" height="5" rx="1" fill="#21A366" />
      <rect x="32" y="18" width="8" height="5" rx="1" fill="#21A366" />
      <rect x="22" y="25" width="8" height="5" rx="1" fill="#21A366" />
      <rect x="32" y="25" width="8" height="5" rx="1" fill="#21A366" />
      <rect x="22" y="32" width="8" height="5" rx="1" fill="#21A366" />
      <rect x="32" y="32" width="8" height="5" rx="1" fill="#21A366" />
      <rect x="6" y="10" width="18" height="28" rx="2.5" fill="#0C592E" />
      <path
        d="M10.5 17.5l4 6.5-4 6.5h2.5l2.7-4.6 2.7 4.6h2.5l-4-6.5 4-6.5h-2.5l-2.7 4.6-2.7-4.6h-2.5z"
        fill="#FFFFFF"
      />
    </svg>
  </div>
);

const SlideProductOutcome = () => {
  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col justify-center px-4 sm:px-8 md:px-10 lg:px-12 py-6 relative overflow-hidden bg-[#090A0D]">
      {/* Subtle Executive Matte Vignette & Ambient Radial Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_15%,rgba(255,255,255,0.03),transparent_75%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-80 bg-emerald-500/[0.07] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-80 bg-amber-500/[0.07] rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto flex flex-col justify-center space-y-6 sm:space-y-8 my-auto">
        
        {/* Section Header: The Complete Excel Career Roadmap */}
        <div className="w-full text-center">
          <motion.h1
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight whitespace-nowrap"
          >
            The Complete{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 drop-shadow-[0_4px_30px_rgba(245,158,11,0.4)]">
              Excel Career Roadmap
            </span>
          </motion.h1>
        </div>

        {/* 2-Pillar Executive Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 items-stretch">

          {/* ================= PILLAR 1: CORE STACK / PRODUCT (3 STEPS) ================= */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col rounded-3xl bg-gradient-to-b from-[#11161B]/95 via-[#0D1015]/90 to-[#0A0D11]/95 border border-emerald-500/30 p-5 sm:p-6 shadow-[0_12px_36px_rgba(0,0,0,0.55)] backdrop-blur-xl relative overflow-hidden group hover:border-emerald-400/50 transition-all duration-300"
          >
            <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-emerald-500/10 via-emerald-400 to-teal-500/10" />

            {/* Column Header */}
            <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-zinc-800/80">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-mono text-xs font-bold">
                  01
                </span>
                <h3 className="font-display text-base sm:text-lg font-bold text-white tracking-tight">
                  Excel & AI Powerhouse
                </h3>
              </div>
              <span className="text-[10px] sm:text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                3 Core Steps
              </span>
            </div>

            {/* Steps List */}
            <div className="flex flex-col gap-3 flex-grow justify-between">
              {/* Step 1 */}
              <div className="flex items-center justify-between gap-4 px-4 py-3.5 rounded-2xl bg-zinc-900/70 border border-zinc-800/70 hover:bg-zinc-850 hover:border-emerald-500/40 transition-all duration-200">
                <div className="flex items-center gap-3.5">
                  <ExcelIcon />
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest block">
                      STEP 1
                    </span>
                    <h4 className="font-display text-sm sm:text-base font-bold text-white leading-tight">
                      Excel Mastery
                    </h4>
                  </div>
                </div>
                <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-xl bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 shrink-0">
                  Basic to Advance Excel
                </span>
              </div>

              {/* Step 2 */}
              <div className="flex items-center justify-between gap-4 px-4 py-3.5 rounded-2xl bg-zinc-900/70 border border-zinc-800/70 hover:bg-zinc-850 hover:border-amber-500/40 transition-all duration-200">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-xl shrink-0 shadow-md">
                    ⚡
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest block">
                      STEP 2
                    </span>
                    <h4 className="font-display text-sm sm:text-base font-bold text-white leading-tight">
                      Excel + AI
                    </h4>
                  </div>
                </div>
                <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-xl bg-amber-500/15 text-amber-300 border border-amber-500/30 shrink-0">
                  10x Speed
                </span>
              </div>

              {/* Step 3 */}
              <div className="flex items-center justify-between gap-4 px-4 py-3.5 rounded-2xl bg-zinc-900/70 border border-zinc-800/70 hover:bg-zinc-850 hover:border-sky-500/40 transition-all duration-200">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-xl shrink-0 shadow-md">
                    🤖
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] font-mono font-bold text-sky-400 uppercase tracking-widest block">
                      STEP 3
                    </span>
                    <h4 className="font-display text-sm sm:text-base font-bold text-white leading-tight">
                      Workflow Automation
                    </h4>
                  </div>
                </div>
                <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-xl bg-sky-500/15 text-sky-300 border border-sky-500/30 shrink-0">
                  100% Hands-Off
                </span>
              </div>
            </div>
          </motion.div>

          {/* ================= PILLAR 2: INCOME / OUTCOME (2 PATHS) ================= */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col rounded-3xl bg-gradient-to-b from-[#181122]/95 via-[#120D1A]/90 to-[#0C0A12]/95 border border-purple-500/30 p-5 sm:p-6 shadow-[0_12px_36px_rgba(0,0,0,0.55)] backdrop-blur-xl relative overflow-hidden group hover:border-purple-400/50 transition-all duration-300"
          >
            <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-purple-500/10 via-purple-400 to-fuchsia-500/10" />

            {/* Column Header */}
            <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-zinc-800/80">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-purple-500/15 border border-purple-500/30 text-purple-400 flex items-center justify-center font-mono text-xs font-bold">
                  02
                </span>
                <h3 className="font-display text-base sm:text-lg font-bold text-white tracking-tight">
                  Income & Monetization
                </h3>
              </div>
              <span className="text-[10px] sm:text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30">
                2 Career Paths
              </span>
            </div>

            {/* Paths List */}
            <div className="flex flex-col gap-3.5 flex-grow justify-center">
              {/* Path 1 */}
              <div className="flex items-center justify-between gap-4 px-4 sm:px-5 py-4 sm:py-5 rounded-2xl bg-zinc-900/70 border border-zinc-800/70 hover:bg-zinc-850 hover:border-amber-500/40 transition-all duration-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-2xl shrink-0 shadow-md">
                    💼
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest block">
                      PATH 01
                    </span>
                    <h4 className="font-display text-base sm:text-lg font-bold text-white leading-tight">
                      Corporate Job
                    </h4>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-display text-lg sm:text-xl font-black text-amber-300 block leading-tight">
                    ₹25k – ₹60k
                  </span>
                  <span className="text-[11px] text-zinc-400 font-medium">/month</span>
                </div>
              </div>

              {/* Path 2 */}
              <div className="flex items-center justify-between gap-4 px-4 sm:px-5 py-4 sm:py-5 rounded-2xl bg-zinc-900/70 border border-zinc-800/70 hover:bg-zinc-850 hover:border-emerald-500/40 transition-all duration-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-2xl shrink-0 shadow-md">
                    🌍
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest block">
                      PATH 02
                    </span>
                    <h4 className="font-display text-base sm:text-lg font-bold text-white leading-tight">
                      Freelancing (WFH)
                    </h4>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-display text-lg sm:text-xl font-black text-emerald-300 block leading-tight">
                    ₹25k – ₹85k+
                  </span>
                  <span className="text-[11px] text-zinc-400 font-medium">/month</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default SlideProductOutcome;
