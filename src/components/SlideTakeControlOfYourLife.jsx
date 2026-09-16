import { motion } from 'framer-motion';

const SlideTakeControlOfYourLife = () => {
  const objections = [
    {
      number: '01',
      excuse: '“I don’t have time right now...”',
      truthTitle: 'Time is Never Found — It is Made',
      accent: 'from-amber-500/15 via-zinc-900/60 to-zinc-950/80',
      border: 'border-amber-500/30 hover:border-amber-400/60',
      extraTag: null,
      icon: (
        <svg className="w-6 h-6 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      number: '02',
      excuse: '“I am confused, what if I fail?”',
      truthTitle: 'You Don’t Walk This Alone',
      accent: 'from-sky-500/15 via-zinc-900/60 to-zinc-950/80',
      border: 'border-sky-500/30 hover:border-sky-400/60',
      extraTag: null,
      icon: (
        <svg className="w-6 h-6 text-sky-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
    },
    {
      number: '03',
      excuse: '“I have zero tech background...”',
      truthTitle: 'Starts at Absolute Level 0',
      extraTag: '100% Beginner Friendly',
      accent: 'from-emerald-500/15 via-zinc-900/60 to-zinc-950/80',
      border: 'border-emerald-500/30 hover:border-emerald-400/60',
      icon: (
        <svg className="w-6 h-6 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      number: '04',
      excuse: '“I’ll start next month / batch...”',
      truthTitle: '“Someday” Always Means “Never”',
      accent: 'from-yellow-500/15 via-zinc-900/60 to-zinc-950/80',
      border: 'border-yellow-500/30 hover:border-yellow-400/60',
      extraTag: null,
      icon: (
        <svg className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-8 relative overflow-hidden bg-[#090A0D]">
      {/* Dynamic Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(245,158,11,0.04),transparent_70%)] pointer-events-none" />
      <div className="absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-amber-500/[0.04] blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-emerald-500/[0.03] blur-[160px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center my-auto space-y-8 sm:space-y-12 md:space-y-14">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-2"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Take Control of Your Life — <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400">Right Now</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-300 font-medium tracking-wide">
            “Perfect time kabhi nahi aayega.”
          </p>
        </motion.div>

        {/* 4 Clean Hero Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
          {objections.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 * index }}
              className={`flex flex-col justify-between min-h-[220px] sm:min-h-[250px] rounded-3xl border ${item.border} bg-gradient-to-b ${item.accent} bg-[#0D0F14]/90 p-6 sm:p-7 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:scale-[1.02] group`}
            >
              {/* Header: Icon + Number */}
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-zinc-800/80 border border-zinc-700/60 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <span className="font-mono text-sm font-bold text-zinc-500">
                  {item.number}
                </span>
              </div>

              {/* The Excuse + Truth Title */}
              <div className="space-y-2 mt-4">
                <span className="text-xs font-mono uppercase tracking-wider text-rose-400/90 font-semibold block">
                  {item.excuse}
                </span>
                <h3 className="font-display text-lg sm:text-xl md:text-[22px] font-bold text-white tracking-tight leading-snug">
                  {item.truthTitle}
                </h3>
                {item.extraTag && (
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300">
                      <span>✓</span> {item.extraTag}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SlideTakeControlOfYourLife;
