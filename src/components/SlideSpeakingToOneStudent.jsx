import { motion } from 'framer-motion';

const SlideSpeakingToOneStudent = () => {
  const situations = [
    {
      icon: '📍',
      text: 'Ho sakta hai aap kisi small town se ho.',
    },
    {
      icon: '🏛️',
      text: 'Ho sakta hai aapke college ka brand name bada na ho.',
    },
    {
      icon: '🎓',
      text: 'Ho sakta hai campus placement achha na raha ho.',
    },
    {
      icon: '⏳',
      text: 'Ho sakta hai graduation ho gayi hai aur abhi tak clear direction nahi mili.',
    },
    {
      icon: '💼',
      text: 'Ho sakta hai aap already job mein ho but growth nahi dikh rahi.',
    },
  ];

  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col justify-between px-4 sm:px-6 md:px-10 lg:px-14 py-5 sm:py-6 relative overflow-hidden bg-[#090A0D]">
      {/* Ambient Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(245,158,11,0.05),transparent_70%)] pointer-events-none" />
      <div className="absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-amber-500/[0.04] blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-sky-500/[0.03] blur-[160px] pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center space-y-1.5"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold tracking-wider uppercase">
          <span>💬</span>
          <span>A Heart-To-Heart Note</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-black text-white tracking-tight leading-tight whitespace-nowrap">
          Just{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400">
            Trust Me Once.
          </span>
        </h2>
      </motion.div>

      {/* Main 2-Column Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 md:gap-8 w-full max-w-6xl mx-auto my-auto items-center">
        
        {/* Left Column: 5 Realities */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="md:col-span-7 flex flex-col justify-between rounded-3xl border border-zinc-800/90 bg-gradient-to-b from-zinc-900/60 via-zinc-900/40 to-zinc-950/80 p-5 sm:p-6 md:p-7 backdrop-blur-xl shadow-2xl space-y-3 sm:space-y-3.5"
        >
          <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-zinc-400">
              Where You Might Be Standing Today
            </span>
            <span className="text-[11px] font-mono text-amber-400/90 font-semibold">
              The Reality
            </span>
          </div>

          <div className="space-y-2.5 sm:space-y-3">
            {situations.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-2.5 rounded-2xl bg-zinc-950/50 border border-zinc-800/60 transition-all hover:border-zinc-700 hover:bg-zinc-900/50"
              >
                <span className="text-lg sm:text-xl shrink-0">{item.icon}</span>
                <p className="text-xs sm:text-[13px] md:text-sm text-zinc-200 font-medium leading-snug">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: The Inner Voice + The Program Purpose */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="md:col-span-5 flex flex-col justify-between h-full space-y-4"
        >
          {/* Inner Voice Card */}
          <div className="rounded-3xl border border-amber-500/35 bg-gradient-to-b from-amber-500/15 via-zinc-900/70 to-zinc-950/90 p-5 sm:p-6 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <span className="text-xl">💭</span>
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-amber-300 font-bold">
                  Aur Aapke Andar Ek Constant Feeling Hai:
                </span>
              </div>
              <p className="font-display text-base sm:text-lg md:text-xl font-bold text-white tracking-tight leading-snug">
                “Mujhe kuch karna hai.{' '}
                <span className="text-amber-300 block mt-1">
                  Bas mujhe samajh nahi aa raha start kahan se karun.”
                </span>
              </p>
            </div>
          </div>

          {/* The Answer / Purpose Card */}
          <div className="rounded-3xl border border-emerald-500/35 bg-gradient-to-b from-emerald-500/15 via-zinc-900/70 to-zinc-950/90 p-5 sm:p-6 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <span className="text-xl">🎯</span>
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-emerald-300 font-bold">
                  Agar Yeh Aap Ho:
                </span>
              </div>
              <p className="font-display text-sm sm:text-base md:text-lg font-bold text-zinc-100 tracking-tight leading-relaxed">
                Toh yeh program <span className="text-emerald-300 font-extrabold">usi confusion ko remove karne</span> ke liye banaya gaya hai.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SlideSpeakingToOneStudent;
