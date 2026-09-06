import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    icon: '💼',
    title: 'Business Problem',
    desc: 'Understand the real-world challenge & business outcome first',
    glowColor: 'from-amber-500/20 to-yellow-500/5',
    borderColor: 'border-amber-500/30',
  },
  {
    number: '02',
    icon: '⚡',
    title: 'Excel Syntax',
    desc: 'Learn the exact formulas & functions needed to solve it',
    glowColor: 'from-emerald-500/20 to-teal-500/5',
    borderColor: 'border-emerald-500/30',
  },
  {
    number: '03',
    icon: '🎯',
    title: 'Practice',
    desc: 'Reinforce concepts with hands-on, industry-grade datasets',
    glowColor: 'from-blue-500/20 to-cyan-500/5',
    borderColor: 'border-blue-500/30',
  },
];

const SlideBestWayToLearnFormulas = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-4 sm:px-8 md:px-14 py-12 relative overflow-hidden">
    {/* Ambient Glows */}
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-[#0B0D12] to-subtle-gray" />
    <div className="absolute -top-32 right-[-10%] h-96 w-96 rounded-full bg-premium-gold/15 blur-[130px] pointer-events-none" />
    <div className="absolute -bottom-32 left-[-10%] h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />

    <div className="relative z-10 w-full max-w-6xl mx-auto space-y-10 md:space-y-14 text-center">
      
      {/* Question Section */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-3 max-w-4xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-premium-gold/40 bg-premium-gold/10 text-premium-gold text-xs sm:text-sm font-bold uppercase tracking-[0.3em]">
          <span>💡 Core Question</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          What is the best way to learn the fundamentals and all the formulas?
        </h2>
      </motion.div>

      {/* Answer Flow Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-6"
      >
        <div className="inline-block text-xs uppercase tracking-[0.35em] text-white/50 font-semibold">
          ✨ The 3-Step Solution Framework
        </div>

        {/* 3 Step Cards Flow with Arrows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center relative">
          {steps.map((step, idx) => (
            <div key={step.title} className="relative flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 + idx * 0.15 }}
                className={`w-full rounded-3xl border ${step.borderColor} bg-gradient-to-b ${step.glowColor} p-6 sm:p-8 backdrop-blur-xl shadow-2xl flex flex-col items-center text-center space-y-4 hover:scale-[1.02] transition-transform duration-300`}
              >
                {/* Step badge & icon */}
                <div className="flex items-center justify-between w-full">
                  <span className="text-xs font-mono font-bold tracking-widest text-premium-gold/80 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10">
                    STEP {step.number}
                  </span>
                  <span className="text-2xl sm:text-3xl">{step.icon}</span>
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>

              {/* Connecting Arrow for Desktop (between cards) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-4 lg:-right-5 top-1/2 -translate-y-1/2 z-20 h-9 w-9 rounded-full bg-premium-black border border-premium-gold/50 items-center justify-center text-premium-gold text-sm font-bold shadow-[0_0_15px_rgba(218,165,32,0.4)]">
                  ➔
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  </section>
);

export default SlideBestWayToLearnFormulas;
