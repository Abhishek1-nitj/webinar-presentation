import { motion } from 'framer-motion';

const SlideJobGuaranteeCondition = () => {
  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col justify-between px-4 sm:px-6 md:px-10 lg:px-14 py-5 sm:py-6 relative overflow-hidden bg-[#090A0D]">
      {/* Ambient Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(16,185,129,0.04),transparent_70%)] pointer-events-none" />
      <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-amber-500/[0.04] blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-emerald-500/[0.04] blur-[160px] pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center space-y-1.5"
      >
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black text-white tracking-tight leading-tight whitespace-nowrap">
          “Job Ki Guarantee Hai Kya?” —{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-200 to-emerald-400">
            Yes, 100% Guarantee Hai.
          </span>
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-zinc-300 font-medium tracking-wide">
          Lekin sirf ek shart par: <span className="text-amber-300 font-semibold">Jaise jaise main bolta jaunga, waise waise mehnat karni hogi.</span>
        </p>
      </motion.div>

      {/* Two Column Structure: The Condition vs The Guarantee */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 w-full max-w-6xl mx-auto my-auto">
        
        {/* Left Card: The Non-Negotiable Grind (Condition) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="flex flex-col justify-between rounded-3xl border border-amber-500/35 bg-gradient-to-b from-amber-500/15 via-[#13110E]/90 to-zinc-950/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl min-h-[310px] sm:min-h-[350px]"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3.5 border-b border-amber-500/20">
              <div className="flex items-center gap-2.5">
                <span className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300 font-bold text-base">
                  ⚡
                </span>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-amber-400/80 font-bold block">
                    Your Part
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-black text-white tracking-tight">
                    The Non-Negotiable Hard Work
                  </h3>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                Prerequisite
              </span>
            </div>

            {/* Clean Punchy Steps */}
            <div className="space-y-3 pt-1">
              <div className="flex items-center gap-3.5 px-4 py-3.5 rounded-2xl bg-zinc-900/85 border border-zinc-800">
                <span className="text-amber-400 font-bold text-base shrink-0">📌</span>
                <span className="font-display text-sm sm:text-base font-bold text-zinc-100">
                  100% Modules & Practice Complete Karo
                </span>
              </div>

              <div className="flex items-center gap-3.5 px-4 py-3.5 rounded-2xl bg-zinc-900/85 border border-zinc-800">
                <span className="text-amber-400 font-bold text-base shrink-0">📌</span>
                <span className="font-display text-sm sm:text-base font-bold text-zinc-100">
                  Real Production Projects Build Karo
                </span>
              </div>

              <div className="flex items-center gap-3.5 px-4 py-3.5 rounded-2xl bg-zinc-900/85 border border-zinc-800">
                <span className="text-amber-400 font-bold text-base shrink-0">📌</span>
                <span className="font-display text-sm sm:text-base font-bold text-zinc-100">
                  Mock Interviews & Daily Outreach
                </span>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-3.5 border-t border-amber-500/20 text-center">
            <span className="text-xs font-mono font-semibold text-amber-300 tracking-wide uppercase">
              ⚠️ No Magic Pills • Pure Execution Required
            </span>
          </div>
        </motion.div>

        {/* Right Card: The 100% Guarantee (Outcome) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="flex flex-col justify-between rounded-3xl border border-emerald-500/40 bg-gradient-to-b from-emerald-500/15 via-[#0C1210]/90 to-zinc-950/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-emerald-950/30 min-h-[310px] sm:min-h-[350px]"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3.5 border-b border-emerald-500/20">
              <div className="flex items-center gap-2.5">
                <span className="p-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold text-base">
                  🏆
                </span>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-emerald-400/80 font-bold block">
                    The Result
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-black text-white tracking-tight">
                    100% Inevitable Placement
                  </h3>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-300 bg-emerald-500/15 px-3 py-1 rounded-full border border-emerald-500/40">
                100% Guaranteed
              </span>
            </div>

            {/* Clean Punchy Guarantee Points */}
            <div className="space-y-3 pt-1">
              <div className="flex items-center gap-3.5 px-4 py-3.5 rounded-2xl bg-emerald-950/25 border border-emerald-500/25">
                <span className="text-emerald-400 font-bold text-base shrink-0">✓</span>
                <span className="font-display text-sm sm:text-base font-bold text-emerald-200">
                  Zero Chance of Getting Rejected
                </span>
              </div>

              <div className="flex items-center gap-3.5 px-4 py-3.5 rounded-2xl bg-emerald-950/25 border border-emerald-500/25">
                <span className="text-emerald-400 font-bold text-base shrink-0">✓</span>
                <span className="font-display text-sm sm:text-base font-bold text-emerald-200">
                  Target: Minimum ₹50,000 / Month
                </span>
              </div>

              <div className="flex items-center gap-3.5 px-4 py-3.5 rounded-2xl bg-emerald-950/25 border border-emerald-500/25">
                <span className="text-emerald-400 font-bold text-base shrink-0">✓</span>
                <span className="font-display text-sm sm:text-base font-bold text-emerald-200">
                  Mentor Stands With You Until Selected
                </span>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-3.5 border-t border-emerald-500/20 text-center">
            <span className="text-xs font-mono font-semibold text-emerald-300 tracking-wide uppercase">
              🔥 If You Follow The Steps — Success is Guaranteed
            </span>
          </div>
        </motion.div>

      </div>

      {/* Bottom Ironclad Quote Banner */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative z-10 w-full max-w-5xl mx-auto text-center"
      >
        <div className="flex items-center justify-center gap-2.5 px-6 py-2.5 rounded-2xl bg-zinc-900/90 border border-emerald-500/30 shadow-xl backdrop-blur-xl">
          <span className="text-base sm:text-lg">🛡️</span>
          <p className="font-display text-xs sm:text-sm md:text-base font-semibold text-zinc-200 tracking-tight">
            “Koi chance hi nahi hai ki tum upskill karke job na le pao.”
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default SlideJobGuaranteeCondition;
