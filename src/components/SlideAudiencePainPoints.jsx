import { motion } from 'framer-motion';

const SlideAudiencePainPoints = () => {
  const painPoints = [
    {
      badge: 'Roadblock #1',
      title: 'Outdated Local Coaching',
      solutionTag: 'No Corporate Depth',
      icon: (
        <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
    {
      badge: 'Roadblock #2',
      title: 'Shallow YouTube Tutorials',
      solutionTag: 'Surface-Level Only',
      icon: (
        <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      badge: 'Roadblock #3',
      title: 'No Roadmap & Hand-Holding',
      solutionTag: 'Scattered & Confusing',
      icon: (
        <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
    },
    {
      badge: 'Roadblock #4',
      title: 'Years in Govt. Exam Prep',
      solutionTag: 'Exam Gap Pressure',
      icon: (
        <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      badge: 'Roadblock #5',
      title: 'Long Career Break (2–10 Yrs)',
      solutionTag: 'Employment Gap Fear',
      icon: (
        <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      ),
    },
    {
      badge: 'Roadblock #6',
      title: 'Stuck in Dead-End Jobs',
      solutionTag: 'Stagnant Low Salary',
      icon: (
        <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
        </svg>
      ),
    },
  ];

  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-12 py-6 relative overflow-hidden bg-[#090A0D]">
      {/* Matte Background Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(239,68,68,0.03),transparent_70%)] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center space-y-6 sm:space-y-8 md:space-y-10 my-auto">
        {/* Main Clean Headline */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Why Most People Get Stuck
          </h2>
        </motion.div>

        {/* 6 Clean, Impactful Roadblock Cards (3 cols x 2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 md:gap-5 w-full">
        {painPoints.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 * index }}
            className="flex flex-col justify-between rounded-2xl border border-zinc-800/90 bg-zinc-900/50 p-5 sm:p-6 backdrop-blur-md shadow-xl hover:border-zinc-700/80 transition-all group"
          >
            <div className="space-y-3">
              {/* Header row: Icon & Badge */}
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-zinc-800/80 border border-zinc-700/60 group-hover:border-red-500/40 transition-colors">
                  {item.icon}
                </div>
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-400 bg-zinc-800/60 px-2.5 py-0.5 rounded-md border border-zinc-700/40">
                  {item.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-lg sm:text-xl md:text-2xl font-extrabold text-white tracking-tight leading-snug pt-1">
                {item.title}
              </h3>
            </div>

            {/* Bottom Red Warning Tag */}
            <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between">
              <span className="text-xs sm:text-sm font-mono font-semibold text-red-400 flex items-center gap-1.5">
                <span className="text-red-500 text-sm">✕</span> {item.solutionTag}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default SlideAudiencePainPoints;
