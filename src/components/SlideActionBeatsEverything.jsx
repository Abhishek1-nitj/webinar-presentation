import { motion } from 'framer-motion';

const SlideActionBeatsEverything = () => {
  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-8 relative overflow-hidden bg-[#090A0D]">
      {/* Ambient Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(245,158,11,0.04),transparent_70%)] pointer-events-none" />
      <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-rose-500/[0.035] blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-emerald-500/[0.04] blur-[160px] pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center my-auto space-y-8 sm:space-y-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-2.5"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-[44px] font-black text-white tracking-tight leading-tight whitespace-nowrap">
            Action Beats Everything —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400">
              Every Single Time
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-zinc-400 font-medium tracking-wide">
            Right guidance ke saath sirf execution karo — results apne aap aate hain.
          </p>
        </motion.div>

        {/* The Thinker vs The Executor Contrast Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
          
          {/* Left Card: The Overthinker */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex flex-col justify-between rounded-3xl border border-rose-500/35 bg-gradient-to-b from-rose-950/20 via-[#120C10]/90 to-zinc-950/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl min-h-[300px] sm:min-h-[330px]"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3.5 border-b border-rose-500/20">
                <div className="flex items-center gap-2.5">
                  <span className="p-2.5 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-400 font-bold text-base">
                    🧠
                  </span>
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-rose-400/80 font-bold block">
                      The Stagnant Route
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-black text-white tracking-tight">
                      The Overthinker
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-rose-400 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
                  Stuck at ₹0
                </span>
              </div>

              {/* Pointers */}
              <div className="space-y-3 pt-1">
                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-rose-500/10 border border-rose-500/20">
                  <span className="text-rose-400 font-bold text-base shrink-0">✕</span>
                  <span className="font-display text-sm sm:text-base font-bold text-rose-200">
                    Endless Planning & Researching
                  </span>
                </div>

                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-rose-500/10 border border-rose-500/20">
                  <span className="text-rose-400 font-bold text-base shrink-0">✕</span>
                  <span className="font-display text-sm sm:text-base font-bold text-rose-200">
                    Waiting for the “Perfect Time”
                  </span>
                </div>

                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-rose-500/10 border border-rose-500/20">
                  <span className="text-rose-400 font-bold text-base shrink-0">✕</span>
                  <span className="font-display text-sm sm:text-base font-bold text-rose-200">
                    Zero Real Projects Built
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3.5 border-t border-rose-500/20">
              <div className="px-3.5 py-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-center">
                <span className="text-xs font-mono font-bold text-rose-300 tracking-wide uppercase">
                  Outcome: Still Stuck in the Same Place Next Year
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Card: The Action Taker */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="flex flex-col justify-between rounded-3xl border border-emerald-500/40 bg-gradient-to-b from-emerald-500/15 via-[#0C1210]/90 to-zinc-950/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-emerald-950/30 min-h-[300px] sm:min-h-[330px]"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3.5 border-b border-emerald-500/20">
                <div className="flex items-center gap-2.5">
                  <span className="p-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold text-base">
                    🚀
                  </span>
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-emerald-400/80 font-bold block">
                      The High-Growth Route
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-black text-white tracking-tight">
                      The Relentless Executor
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-emerald-300 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                  Min. ₹50,000/mo
                </span>
              </div>

              {/* Pointers */}
              <div className="space-y-3 pt-1">
                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/25">
                  <span className="text-emerald-400 font-bold text-base shrink-0">✓</span>
                  <span className="font-display text-sm sm:text-base font-bold text-emerald-200">
                    Takes the Decision Right Now
                  </span>
                </div>

                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/25">
                  <span className="text-emerald-400 font-bold text-base shrink-0">✓</span>
                  <span className="font-display text-sm sm:text-base font-bold text-emerald-200">
                    Follows 1 Clear Roadmap with Mentorship
                  </span>
                </div>

                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/25">
                  <span className="text-emerald-400 font-bold text-base shrink-0">✓</span>
                  <span className="font-display text-sm sm:text-base font-bold text-emerald-200">
                    Executes Daily & Builds Real Proof-of-Work
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3.5 border-t border-emerald-500/20">
              <div className="px-3.5 py-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-center">
                <span className="text-xs font-mono font-bold text-emerald-300 tracking-wide uppercase">
                  Outcome: In-Demand Skills, High Confidence & Income
                </span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default SlideActionBeatsEverything;
