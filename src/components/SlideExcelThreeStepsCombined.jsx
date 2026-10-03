import { motion } from 'framer-motion';
import { assetPath } from '../utils/assetPath';

const SlideExcelThreeStepsCombined = ({ highlightStep = null }) => {
  const isStep1Active = highlightStep === 1 || highlightStep === null;
  const isStep2Active = highlightStep === 2 || highlightStep === null;
  const isStep3Active = highlightStep === 3 || highlightStep === null;

  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 relative overflow-hidden bg-[#090A0D]">
      {/* Radiant Background Lighting & Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(245,158,11,0.08),transparent_70%)] pointer-events-none" />
      
      {/* Dynamic Glow Position based on highlighted step */}
      {highlightStep === 1 && (
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-96 h-96 bg-emerald-500/[0.12] rounded-full blur-[160px] pointer-events-none" />
      )}
      {highlightStep === 2 && (
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/[0.12] rounded-full blur-[160px] pointer-events-none" />
      )}
      {highlightStep === 3 && (
        <div className="absolute top-1/3 right-1/4 translate-x-1/2 w-96 h-96 bg-sky-500/[0.12] rounded-full blur-[160px] pointer-events-none" />
      )}
      {highlightStep === null && (
        <>
          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-emerald-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 bg-amber-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-sky-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
        </>
      )}

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Big Centered Header Title & Subtitle Below */}
      <div className="relative z-10 w-full max-w-7xl mx-auto text-center shrink-0 pt-1 pb-2">
        <motion.h1
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight"
        >
          Excel Se Paise Kaise Kamaye?
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-1 sm:mt-2 font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 drop-shadow-[0_2px_20px_rgba(245,158,11,0.35)]"
        >
          3 Step Process
        </motion.h2>
      </div>

      {/* Main 3-Column Combined Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 min-h-0 py-3 sm:py-5 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch w-full">
          
          {/* ================= STEP 1: Basic to Advanced ================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
              isStep1Active
                ? 'bg-gradient-to-b from-emerald-950/25 via-[#0C1512] to-zinc-950/95 border-2 border-emerald-500/50 shadow-[0_0_40px_rgba(16,185,129,0.25)] ring-2 ring-emerald-400/80 scale-[1.02] z-20'
                : 'bg-[#121316]/70 border border-zinc-800/80 opacity-30 grayscale contrast-75 brightness-75 scale-[0.98]'
            }`}
          >
            {isStep1Active && (
              <div className="absolute top-0 right-0 w-28 h-28 bg-emerald-500/5 rounded-bl-full pointer-events-none" />
            )}

            <div>
              {/* Badge & Icon */}
              <div className="flex items-center justify-between mb-5">
                <span className={`text-xs font-mono font-extrabold uppercase tracking-widest px-3 py-1 rounded-full ${
                  isStep1Active
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/40'
                    : 'bg-zinc-800 text-zinc-400 border border-zinc-700/60'
                }`}>
                  STEP 1
                </span>
                <img
                  src={assetPath('images/logos/excel-logo.png')}
                  alt="Excel"
                  className={`w-10 h-10 object-contain transition-all ${
                    isStep1Active
                      ? 'drop-shadow-[0_0_15px_rgba(16,185,129,0.6)]'
                      : 'grayscale opacity-30'
                  }`}
                />
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl sm:text-3xl font-black mb-6 leading-tight">
                {isStep1Active ? (
                  <>
                    <span className="text-white">Learn Excel: </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-green-400">
                      Basic to Advanced
                    </span>
                  </>
                ) : (
                  <span className="text-zinc-400">Learn Excel: Basic to Advanced</span>
                )}
              </h3>
            </div>

            {/* Bottom 7 Step Framework Highlight Card */}
            <div className={`p-4 rounded-2xl border text-center flex items-center justify-center gap-4 transition-all ${
              isStep1Active
                ? 'bg-emerald-950/40 border-emerald-500/30'
                : 'bg-zinc-900/60 border-zinc-800/60'
            }`}>
              <span className={`font-display text-4xl sm:text-5xl font-black ${
                isStep1Active ? 'text-emerald-300' : 'text-zinc-400'
              }`}>
                7 Step
              </span>
              <div className="text-left leading-tight">
                <span className={`text-base sm:text-lg font-extrabold block ${
                  isStep1Active ? 'text-white' : 'text-zinc-400'
                }`}>
                  Framework
                </span>
              </div>
            </div>
          </motion.div>

          {/* ================= STEP 2: Excel + AI ================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
              isStep2Active
                ? 'bg-gradient-to-b from-amber-950/25 via-[#13110C] to-zinc-950/95 border-2 border-amber-500/50 shadow-[0_0_40px_rgba(245,158,11,0.25)] ring-2 ring-amber-400/80 scale-[1.02] z-20'
                : 'bg-[#121316]/70 border border-zinc-800/80 opacity-30 grayscale contrast-75 brightness-75 scale-[0.98]'
            }`}
          >
            {isStep2Active && (
              <div className="absolute top-0 right-0 w-28 h-28 bg-amber-500/5 rounded-bl-full pointer-events-none" />
            )}

            <div>
              {/* Badge & Icon */}
              <div className="flex items-center justify-between mb-5">
                <span className={`text-xs font-mono font-extrabold uppercase tracking-widest px-3 py-1 rounded-full ${
                  isStep2Active
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-400/40'
                    : 'bg-zinc-800 text-zinc-400 border border-zinc-700/60'
                }`}>
                  STEP 2
                </span>
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-2xl transition-all ${
                  isStep2Active
                    ? 'bg-amber-500/20 border border-amber-400/40 shadow-[0_0_20px_rgba(245,158,11,0.3)]'
                    : 'bg-zinc-800/80 border border-zinc-700/60 opacity-30'
                }`}>
                  ⚡
                </div>
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl sm:text-3xl font-black mb-6 leading-tight">
                {isStep2Active ? (
                  <>
                    <span className="text-white">Excel + AI: </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500">
                      10x Speed & Smart Analysis
                    </span>
                  </>
                ) : (
                  <span className="text-zinc-400">Excel + AI: 10x Speed & Smart Analysis</span>
                )}
              </h3>
            </div>

            {/* Bottom 10x Highlight Card */}
            <div className={`p-4 rounded-2xl border text-center flex items-center justify-center gap-4 transition-all ${
              isStep2Active
                ? 'bg-amber-950/40 border-amber-500/30'
                : 'bg-zinc-900/60 border-zinc-800/60'
            }`}>
              <span className={`font-display text-4xl sm:text-5xl font-black ${
                isStep2Active ? 'text-amber-300' : 'text-zinc-400'
              }`}>
                10x
              </span>
              <div className="text-left leading-tight">
                <span className={`text-xs sm:text-sm font-bold block ${
                  isStep2Active ? 'text-white' : 'text-zinc-400'
                }`}>
                  Output Speed
                </span>
                <span className={`text-xs sm:text-sm font-semibold block ${
                  isStep2Active ? 'text-amber-400' : 'text-zinc-500'
                }`}>
                  In 1/10th Time
                </span>
              </div>
            </div>
          </motion.div>

          {/* ================= STEP 3: Workflow Automation ================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
              isStep3Active
                ? 'bg-gradient-to-b from-sky-950/25 via-[#0B131C] to-zinc-950/95 border-2 border-sky-500/50 shadow-[0_0_40px_rgba(56,189,248,0.25)] ring-2 ring-sky-400/80 scale-[1.02] z-20'
                : 'bg-[#121316]/70 border border-zinc-800/80 opacity-30 grayscale contrast-75 brightness-75 scale-[0.98]'
            }`}
          >
            {isStep3Active && (
              <div className="absolute top-0 right-0 w-28 h-28 bg-sky-500/5 rounded-bl-full pointer-events-none" />
            )}

            <div>
              {/* Badge & Icon */}
              <div className="flex items-center justify-between mb-5">
                <span className={`text-xs font-mono font-extrabold uppercase tracking-widest px-3 py-1 rounded-full ${
                  isStep3Active
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-400/40'
                    : 'bg-zinc-800 text-zinc-400 border border-zinc-700/60'
                }`}>
                  STEP 3
                </span>
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-2xl transition-all ${
                  isStep3Active
                    ? 'bg-sky-500/20 border border-sky-400/40 shadow-[0_0_20px_rgba(56,189,248,0.3)]'
                    : 'bg-zinc-800/80 border border-zinc-700/60 opacity-30'
                }`}>
                  🤖
                </div>
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl sm:text-3xl font-black mb-6 leading-tight">
                {isStep3Active ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-teal-200 to-emerald-400">
                    Workflow Automation
                  </span>
                ) : (
                  <span className="text-zinc-400">Workflow Automation</span>
                )}
              </h3>
            </div>

            {/* Bottom 100% Highlight Card */}
            <div className={`p-4 rounded-2xl border text-center flex items-center justify-center gap-4 transition-all ${
              isStep3Active
                ? 'bg-sky-950/40 border-sky-500/30'
                : 'bg-zinc-900/60 border-zinc-800/60'
            }`}>
              <span className={`font-display text-4xl sm:text-5xl font-black ${
                isStep3Active ? 'text-sky-300' : 'text-zinc-400'
              }`}>
                100%
              </span>
              <div className="text-left leading-tight">
                <span className={`text-xs sm:text-sm font-bold block ${
                  isStep3Active ? 'text-white' : 'text-zinc-400'
                }`}>
                  Hands-Off
                </span>
                <span className={`text-xs sm:text-sm font-semibold block ${
                  isStep3Active ? 'text-sky-400' : 'text-zinc-500'
                }`}>
                  Automation Power
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SlideExcelThreeStepsCombined;
