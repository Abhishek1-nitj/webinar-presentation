import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Skill',
    color: 'border-emerald-500/40 bg-emerald-950/20 text-emerald-300',
    numberBg: 'border-emerald-400/40 bg-emerald-500/10 text-emerald-300',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Platform',
    color: 'border-sky-500/40 bg-sky-950/20 text-sky-300',
    numberBg: 'border-sky-400/40 bg-sky-500/10 text-sky-300',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Profile',
    color: 'border-amber-500/40 bg-amber-950/20 text-amber-300',
    numberBg: 'border-amber-400/40 bg-amber-500/10 text-amber-300',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Portfolio',
    link: 'https://delightful-unicorn-f0f695.netlify.app/',
    color: 'border-purple-500/40 bg-purple-950/20 text-purple-300',
    numberBg: 'border-purple-400/40 bg-purple-500/10 text-purple-300',
    icon: (
      <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Resume',
    color: 'border-rose-500/40 bg-rose-950/20 text-rose-300',
    numberBg: 'border-rose-400/40 bg-rose-500/10 text-rose-300',
    icon: (
      <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Interview',
    color: 'border-cyan-500/40 bg-cyan-950/20 text-cyan-300',
    numberBg: 'border-cyan-400/40 bg-cyan-500/10 text-cyan-300',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: '07',
    title: 'Remote Job',
    color: 'border-amber-400 bg-gradient-to-b from-amber-950/40 via-[#181308] to-zinc-950 shadow-[0_10px_40px_rgba(245,158,11,0.25)] text-amber-300',
    numberBg: 'border-amber-300 bg-amber-400 text-black font-black',
    icon: (
      <svg className="w-6 h-6 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const SlideRemoteDataCareerRoadmap = () => {
  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 py-6 relative overflow-hidden bg-[#090A0D]">
      {/* Background Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(245,158,11,0.06),transparent_70%)] pointer-events-none" />
      <div className="absolute -top-28 left-1/3 w-80 h-80 bg-amber-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-28 right-1/3 w-80 h-80 bg-emerald-500/[0.04] rounded-full blur-[140px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center my-auto space-y-10 sm:space-y-12">
        
        {/* Top Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[2.5rem] font-black text-white tracking-tight leading-tight whitespace-nowrap">
            Remote Data Career{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500">
              Roadmap
            </span>
          </h2>
        </motion.div>

        {/* 7-Step Horizontal Flow Grid */}
        <div className="w-full relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-3.5 sm:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
                className={`relative flex flex-col justify-between items-center text-center p-5 rounded-3xl border ${step.color} bg-[#0D0F14]/90 backdrop-blur-xl shadow-xl transition-all duration-300 hover:scale-[1.04] min-h-[170px] sm:min-h-[185px]`}
              >
                {/* Top: Step Number Badge + Icon */}
                <div className="flex items-center justify-between w-full">
                  <span className={`w-8 h-8 rounded-xl border flex items-center justify-center text-xs font-bold font-mono ${step.numberBg}`}>
                    {step.number}
                  </span>
                  <div className="p-1.5 rounded-xl bg-zinc-900 border border-zinc-800">
                    {step.icon}
                  </div>
                </div>

                {/* Center: Title */}
                <div className="my-auto py-2">
                  {step.link ? (
                    <a
                      href={step.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-base sm:text-lg font-black text-purple-300 hover:text-purple-100 underline decoration-purple-400/80 decoration-2 underline-offset-4 transition-all inline-flex items-center gap-1.5 hover:scale-105"
                    >
                      <span>{step.title}</span>
                      <svg className="w-3.5 h-3.5 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <h3 className="font-display text-base sm:text-lg font-black text-white leading-snug">
                      {step.title}
                    </h3>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SlideRemoteDataCareerRoadmap;
