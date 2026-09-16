import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    icon: '💼',
    stepLabel: 'STEP 01',
    title: 'Understanding the Business Problem',
    accentBg: 'from-amber-500/15 via-amber-500/5 to-transparent',
    borderColor: 'border-amber-500/40 hover:border-amber-400',
    badgeBg: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    iconBg: 'bg-amber-500/20 text-amber-300 shadow-[0_0_25px_rgba(245,158,11,0.25)]',
  },
  {
    number: '02',
    icon: '⚡',
    stepLabel: 'STEP 02',
    title: 'Understanding the Excel Syntax',
    accentBg: 'from-emerald-500/15 via-emerald-500/5 to-transparent',
    borderColor: 'border-emerald-500/40 hover:border-emerald-400',
    badgeBg: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    iconBg: 'bg-emerald-500/20 text-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.25)]',
  },
  {
    number: '03',
    icon: '🎯',
    stepLabel: 'STEP 03',
    title: 'Practice',
    accentBg: 'from-sky-500/15 via-sky-500/5 to-transparent',
    borderColor: 'border-sky-500/40 hover:border-sky-400',
    badgeBg: 'bg-sky-500/15 text-sky-300 border-sky-500/30',
    iconBg: 'bg-sky-500/20 text-sky-300 shadow-[0_0_25px_rgba(14,165,233,0.25)]',
  },
];

const SlideBestWayToLearnFormulas = () => {
  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 relative overflow-hidden bg-[#090A0D]">
      {/* Executive Atmospheric Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(16,185,129,0.06),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 h-80 w-80 rounded-full bg-amber-500/[0.04] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 h-80 w-80 rounded-full bg-emerald-500/[0.06] blur-[150px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center my-auto space-y-10 sm:space-y-14">
        
        {/* Header Section (Single Clean Title) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full flex items-center justify-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            How to Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-green-400">Excel Formulas</span>?
          </h2>
        </motion.div>

        {/* 3 Step Cards Flow */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 items-stretch relative">
          {steps.map((step, idx) => (
            <div key={step.number} className="relative flex flex-col h-full">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 + idx * 0.12 }}
                className={`h-full min-h-[280px] sm:min-h-[320px] rounded-3xl border ${step.borderColor} bg-gradient-to-b ${step.accentBg} bg-[#0D1017]/90 p-6 sm:p-10 backdrop-blur-xl shadow-2xl flex flex-col items-center justify-between text-center relative group transition-all duration-300 hover:scale-[1.02]`}
              >
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between w-full pb-4 border-b border-white/5">
                  <span className={`text-xs font-mono font-bold tracking-widest px-3.5 py-1 rounded-full border ${step.badgeBg}`}>
                    {step.stepLabel}
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-white/30 font-display">
                    {step.number}
                  </span>
                </div>

                {/* Center Icon & Title */}
                <div className="my-auto flex flex-col items-center space-y-5 py-4">
                  <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-3xl flex items-center justify-center text-4xl sm:text-5xl ${step.iconBg} border border-white/10`}>
                    {step.icon}
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
                    {step.title}
                  </h3>
                </div>
              </motion.div>

              {/* Connecting Desktop Arrow */}
              {idx < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-4 lg:-right-5 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-[#0D1017] border border-emerald-500/40 items-center justify-center text-emerald-300 text-base font-bold shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                  ➔
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SlideBestWayToLearnFormulas;
