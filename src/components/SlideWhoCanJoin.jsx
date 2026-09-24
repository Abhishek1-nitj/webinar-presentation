import { motion } from 'framer-motion';

const SlideWhoCanJoin = () => {
  const cards = [
    {
      badge: 'Any Degree',
      title: 'Any Degree or Stream',
      subtitle: 'Graduates, Students & MBAs',
      points: [
        'B.Com, BBA, BA, B.Sc, B.Tech, or MBA',
        'Currently pursuing college or already graduated',
        'No technical branch required (IT, Computer, CS)',
        'Open to both freshers and working graduates',
      ],
      tag: 'Open to All Degrees',
      accent: 'border-emerald-500/40 text-emerald-400',
      icon: (
        <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
    },
    {
      badge: 'Current Job Role',
      title: 'Any Current Job Role',
      subtitle: 'Any Industry or Function',
      points: [
        'Field Sales, Telecalling & Customer Support',
        'HR, People Ops & Administration',
        'Operations, Inventory & Supply Chain',
        'Data Entry & Back-Office seeking career jumps',
      ],
      tag: 'Any Working Professional',
      accent: 'border-amber-500/40 text-amber-400',
      icon: (
        <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      badge: 'Zero Tech Needed',
      title: 'Zero Tech Background',
      subtitle: 'Never Opened Spreadsheets?',
      points: [
        'No IT, computer science, or coding required',
        'Never looked at data sheets before? 100% fine',
        'Starts directly from ground zero (level 0)',
        'Clear step-by-step practical guidance',
      ],
      tag: 'Starts from Ground Level',
      accent: 'border-sky-500/40 text-sky-400',
      icon: (
        <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      badge: 'No Age Barrier',
      title: 'No Age Barrier (18 – 48+)',
      subtitle: '0 to 20+ Years Experience',
      points: [
        '18-year-old college students starting fresh',
        'Working professionals aiming for higher pay',
        'Domain switch & career restart at 35, 40, or 48+',
        'Any stage of your career — you can start today',
      ],
      tag: 'Freshers & Switchers',
      accent: 'border-yellow-500/40 text-yellow-300',
      icon: (
        <svg className="w-5 h-5 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      badge: 'Work From Home',
      title: 'Housewives & Stay-at-Home',
      subtitle: 'Zero Relocation • 100% Remote',
      points: [
        'Homemakers & candidates restarting career',
        'Cannot travel outside or change city? 100% fine',
        'High-paying remote jobs & global freelancing',
        'Flexible hours from home with just a laptop',
      ],
      tag: 'Remote & Freelance Ready',
      accent: 'border-rose-500/40 text-rose-400',
      icon: (
        <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
  ];

  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col justify-between px-3 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-5 relative overflow-hidden bg-[#090A0D]">
      {/* Executive Subtle Matte Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none" />

      {/* Top Header */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center"
      >
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
          Who Can Join This Course?
        </h2>
      </motion.div>

      {/* 5 Core Pillar Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-3 lg:gap-3.5 w-full max-w-[1440px] mx-auto my-auto items-stretch">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 * index }}
            className="flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-3.5 sm:p-4 backdrop-blur-md shadow-xl hover:border-zinc-700/80 transition-colors"
          >
            <div className="space-y-2.5">
              {/* Card Header with Icon & Category */}
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-xl bg-zinc-800/70 border border-zinc-700/50">
                  {card.icon}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 bg-zinc-800/60 px-2 py-0.5 rounded-md border border-zinc-700/40">
                  {card.badge}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="font-display text-sm sm:text-[15px] font-bold text-white tracking-tight leading-snug">
                  {card.title}
                </h3>
                <p className="text-[10.5px] sm:text-[11px] text-zinc-400 font-medium mt-0.5 leading-tight">
                  {card.subtitle}
                </p>
              </div>

              {/* Points */}
              <ul className="space-y-1.5 pt-0.5">
                {card.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-1.5 text-[11px] sm:text-[11.5px] text-zinc-300 leading-snug">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-400 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Tag */}
            <div className="mt-3 pt-2.5 border-t border-zinc-800/60 flex items-center justify-between">
              <span className="text-[10.5px] sm:text-[11px] font-mono font-medium text-emerald-400/90 tracking-wide">
                ✓ {card.tag}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Prominent Prerequisites Hero Banner */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="relative z-10 w-full max-w-4xl mx-auto text-center"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-5 px-5 sm:px-7 py-2.5 sm:py-3 rounded-2xl bg-zinc-900/80 border border-zinc-800/90 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-display text-xs sm:text-sm md:text-base font-black uppercase tracking-wider text-emerald-300">
              Only 2 Prerequisites:
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-5 text-xs sm:text-sm font-semibold text-white">
            <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-zinc-800/80 border border-zinc-700/60">
              <span className="text-sm sm:text-base">🗣️</span>
              <span>Understand Spoken Hindi</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-zinc-800/80 border border-zinc-700/60">
              <span className="text-sm sm:text-base">🌐</span>
              <span>Internet Access</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SlideWhoCanJoin;
