import { motion } from 'framer-motion';

const SlideWhat50kReallyMeans = () => {
  const cards = [
    {
      number: '01',
      title: 'Peace of Mind for Parents',
      accentGlow: 'from-amber-500/20 via-amber-500/5 to-transparent',
      borderColor: 'border-amber-500/30 hover:border-amber-400/60',
      iconBg: 'bg-amber-500/10 border-amber-500/30 text-amber-300',
      lineGlow: 'from-amber-400 to-transparent',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Funding Sibling’s Future',
      accentGlow: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
      borderColor: 'border-emerald-500/30 hover:border-emerald-400/60',
      iconBg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300',
      lineGlow: 'from-emerald-400 to-transparent',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'End of Everyday Anxiety',
      accentGlow: 'from-sky-500/20 via-sky-500/5 to-transparent',
      borderColor: 'border-sky-500/30 hover:border-sky-400/60',
      iconBg: 'bg-sky-500/10 border-sky-500/30 text-sky-300',
      lineGlow: 'from-sky-400 to-transparent',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Unshakeable Self-Worth',
      accentGlow: 'from-yellow-500/20 via-yellow-500/5 to-transparent',
      borderColor: 'border-yellow-500/30 hover:border-yellow-400/60',
      iconBg: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-300',
      lineGlow: 'from-yellow-400 to-transparent',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-8 relative overflow-hidden bg-[#090A0D]">
      {/* Ambient Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(245,158,11,0.05),transparent_70%)] pointer-events-none" />
      <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-amber-500/[0.04] blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-emerald-500/[0.03] blur-[160px] pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center my-auto space-y-10 sm:space-y-14 md:space-y-16">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-2"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            What <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400">₹50,000 / Month</span> Really Means
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-zinc-400 font-medium tracking-wide">
            In Indian Middle Class family
          </p>
        </motion.div>

        {/* 4 Bold Hero Pillar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
          {cards.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 * index }}
              className={`group relative flex flex-col justify-between h-[210px] sm:h-[240px] md:h-[260px] rounded-3xl border ${item.borderColor} bg-gradient-to-b ${item.accentGlow} bg-[#0D0F14]/90 p-6 sm:p-7 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:scale-[1.02]`}
            >
              {/* Top Row: Icon + Step Number */}
              <div className="flex items-center justify-between">
                <div className={`p-3 rounded-2xl border ${item.iconBg} shadow-inner transition-transform group-hover:scale-105`}>
                  {item.icon}
                </div>
                <span className="font-mono text-sm font-bold text-zinc-600 group-hover:text-zinc-400 transition-colors">
                  {item.number}
                </span>
              </div>

              {/* Center: Large Punchy Title */}
              <div className="space-y-2">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  {item.title}
                </h3>
                {/* Subtle Accent Glow Indicator */}
                <div className={`h-1 w-10 rounded-full bg-gradient-to-r ${item.lineGlow} opacity-60 group-hover:w-16 group-hover:opacity-100 transition-all duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SlideWhat50kReallyMeans;
