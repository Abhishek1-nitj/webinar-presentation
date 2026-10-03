import { motion } from 'framer-motion';

const SlideFreelancingEarningsMath = () => {
  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 relative overflow-hidden bg-[#07080B]">
      {/* Radiant Background Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_35%,rgba(16,185,129,0.09),transparent_75%)] pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/[0.06] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-500/[0.05] rounded-full blur-[160px] pointer-events-none" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Header: Title in ONE SINGLE LINE */}
      <div className="relative z-10 w-full max-w-7xl mx-auto text-center shrink-0 pt-2 pb-2">
        <motion.h1
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight whitespace-nowrap"
        >
          Freelance Projects:{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-green-400 drop-shadow-[0_4px_30px_rgba(16,185,129,0.35)]">
            The ₹50,000 Formula
          </span>
        </motion.h1>
      </div>

      {/* Main Calculation Stage */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex-1 min-h-0 py-4 sm:py-6 flex flex-col justify-center">
        
        {/* Big Math Equation Box */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-3xl border-2 border-emerald-500/40 bg-gradient-to-b from-emerald-950/20 via-[#0B120F] to-zinc-950/95 p-6 sm:p-10 shadow-[0_0_50px_rgba(16,185,129,0.15)] relative overflow-hidden backdrop-blur-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6 items-center text-center">
            
            {/* Factor 1: 5 Projects */}
            <div className="md:col-span-2 p-6 sm:p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex flex-col justify-center items-center">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-2">
                Volume
              </span>
              <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white">
                5 Projects
              </span>
              <span className="text-xs text-zinc-400 mt-2 font-medium">
                Just 1–2 projects per week
              </span>
            </div>

            {/* Operator: Multiplied by */}
            <div className="flex flex-col items-center justify-center">
              <span className="font-display text-4xl sm:text-5xl font-black text-emerald-400/80">
                ×
              </span>
            </div>

            {/* Factor 2: ₹10,000 Each */}
            <div className="md:col-span-2 p-6 sm:p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex flex-col justify-center items-center">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-2">
                Average Value
              </span>
              <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-amber-300">
                ₹10,000
              </span>
              <span className="text-xs text-zinc-400 mt-2 font-medium">
                per project ($120 USD)
              </span>
            </div>

          </div>

          {/* Equal Result Hero Banner */}
          <div className="mt-6 sm:mt-8 pt-6 border-t border-zinc-800/80 flex items-center justify-center bg-zinc-950/80 p-6 sm:p-8 rounded-2xl border border-emerald-500/30 text-center">
            <div>
              <span className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-green-400 drop-shadow-[0_4px_30px_rgba(16,185,129,0.55)]">
                ₹50,000
              </span>
              <span className="text-sm sm:text-base text-zinc-400 block font-medium mt-1">
                / month from home (WFH)
              </span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default SlideFreelancingEarningsMath;
