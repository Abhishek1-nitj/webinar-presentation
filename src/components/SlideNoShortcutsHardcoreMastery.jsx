import { motion } from 'framer-motion';

const SlideNoShortcutsHardcoreMastery = () => {
  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-8 relative overflow-hidden bg-[#090A0D]">
      {/* Intense Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(239,68,68,0.04),transparent_70%)] pointer-events-none" />
      <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-rose-500/[0.04] blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-amber-500/[0.04] blur-[160px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center my-auto space-y-8 sm:space-y-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-2.5"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-rose-500/40 bg-rose-500/10 text-rose-300 text-xs font-semibold tracking-wider uppercase">
            <span>⚠️</span>
            <span>A Brutal Reality Check</span>
          </div>
          <h2 className="font-display text-xl sm:text-2xl md:text-4xl lg:text-[42px] font-black text-white tracking-tight leading-tight whitespace-nowrap">
            The “Sarkari Job” Illusion vs.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400">
              Market Reality
            </span>
          </h2>
        </motion.div>

        {/* Two Contrasting Worlds Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
          
          {/* Left Card: The Fragile "Sarkari" & Freebie Mindset */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex flex-col justify-between rounded-3xl border border-rose-500/35 bg-gradient-to-b from-rose-950/25 via-[#120B0F]/90 to-zinc-950/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl min-h-[300px] sm:min-h-[340px]"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3.5 border-b border-rose-500/20">
                <div className="flex items-center gap-2.5">
                  <span className="p-2.5 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-400 font-bold text-base">
                    ✕
                  </span>
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-rose-400/80 font-bold block">
                      The Trap
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-black text-white tracking-tight">
                      The “Safe & Lazy” Mindset
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-rose-400 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
                  Fragile
                </span>
              </div>

              {/* Clean Punchy Pointers */}
              <div className="space-y-3 pt-1">
                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-rose-500/10 border border-rose-500/20">
                  <span className="text-rose-400 font-bold text-base shrink-0">✕</span>
                  <span className="font-display text-sm sm:text-base font-bold text-rose-200">
                    Waiting for a Handout
                  </span>
                </div>

                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-rose-500/10 border border-rose-500/20">
                  <span className="text-rose-400 font-bold text-base shrink-0">✕</span>
                  <span className="font-display text-sm sm:text-base font-bold text-rose-200">
                    The “Kam Mehnat” Illusion
                  </span>
                </div>

                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-rose-500/10 border border-rose-500/20">
                  <span className="text-rose-400 font-bold text-base shrink-0">✕</span>
                  <span className="font-display text-sm sm:text-base font-bold text-rose-200">
                    Capital is Brutal
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3.5 border-t border-rose-500/20">
              <div className="px-3.5 py-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-center">
                <span className="text-xs font-mono font-bold text-rose-300 tracking-wide uppercase">
                  🚫 Do Not Join If You Are Looking for Shortcuts
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Card: The Elite Standard: "Ragad Ke Practice" */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="flex flex-col justify-between rounded-3xl border border-amber-500/40 bg-gradient-to-b from-amber-500/15 via-[#13110E]/90 to-zinc-950/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-amber-950/30 min-h-[300px] sm:min-h-[340px]"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3.5 border-b border-amber-500/20">
                <div className="flex items-center gap-2.5">
                  <span className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300 font-bold text-base">
                    ⚡
                  </span>
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-amber-400/80 font-bold block">
                      The Standard
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-black text-white tracking-tight">
                      “Ragad Ke Practice” & Mastery
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-amber-300 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                  Elite
                </span>
              </div>

              {/* Clean Punchy Pointers */}
              <div className="space-y-3 pt-1">
                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-amber-500/10 border border-amber-500/25">
                  <span className="text-amber-400 font-bold text-base shrink-0">✓</span>
                  <span className="font-display text-sm sm:text-base font-bold text-amber-200">
                    Hardcore Practical Reps
                  </span>
                </div>

                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-amber-500/10 border border-amber-500/25">
                  <span className="text-amber-400 font-bold text-base shrink-0">✓</span>
                  <span className="font-display text-sm sm:text-base font-bold text-amber-200">
                    Complete Tool Autonomy
                  </span>
                </div>

                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-amber-500/10 border border-amber-500/25">
                  <span className="text-amber-400 font-bold text-base shrink-0">✓</span>
                  <span className="font-display text-sm sm:text-base font-bold text-amber-200">
                    Market Authority
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3.5 border-t border-amber-500/20">
              <div className="px-3.5 py-2.5 rounded-xl bg-amber-500/15 border border-amber-500/40 text-center">
                <span className="text-xs font-mono font-bold text-amber-300 tracking-wide uppercase">
                  🔥 Only For Those Ready To Grind & Master It
                </span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default SlideNoShortcutsHardcoreMastery;
