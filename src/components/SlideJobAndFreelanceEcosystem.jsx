import { motion } from 'framer-motion';

const jobPoints = [
  'ATS-Friendly Resume Building',
  'Technical Interview Clearance',
  'Top Job Portals & WFH Platforms',
  '1-on-1 Personalized Guidance',
];

const freelancePoints = [
  'Global Platform Mastery (Upwork, Fiverr, Toptal, PeoplePerHour)',
  'High-Converting Profile & Portfolio Setup',
  'Winning Proposals & Bidding Strategy',
  'End-to-End Client Lifecycle & Deal Closing',
];

const SlideJobAndFreelanceEcosystem = () => (
  <section className="slide-section h-screen w-full flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 relative overflow-hidden">
    {/* Background Lighting */}
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-[#0B0D12] to-subtle-gray" />
    <div className="absolute -top-28 left-[12%] h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
    <div className="absolute -bottom-28 right-[12%] h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />

    <div className="relative z-10 w-full max-w-6xl">
      {/* Two Tiles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {/* Tile 1: Job Preparation */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-cyan-500/25 bg-gradient-to-b from-[#0E1524]/90 via-[#0A0F19]/85 to-[#070A10]/95 p-6 sm:p-8 md:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl flex flex-col justify-between"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-3.5 pb-5 border-b border-cyan-500/20">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/35 bg-cyan-500/15 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                <svg className="w-6 h-6 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
                Job Preparation
              </h2>
            </div>

            <div className="space-y-3.5">
              {jobPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3.5 rounded-2xl border border-white/5 bg-white/[0.025] px-4 py-3.5 hover:border-cyan-500/35 hover:bg-cyan-500/[0.04] transition-all duration-300"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/15">
                    <svg className="w-4 h-4 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-base sm:text-lg font-semibold text-white/95">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tile 2: Freelancing Mastery */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-emerald-500/25 bg-gradient-to-b from-[#0F1E17]/90 via-[#0A1610]/85 to-[#070E0B]/95 p-6 sm:p-8 md:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl flex flex-col justify-between"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-3.5 pb-5 border-b border-emerald-500/20">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-500/35 bg-emerald-500/15 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                <svg className="w-6 h-6 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
                Freelancing Mastery
              </h2>
            </div>

            <div className="space-y-3.5">
              {freelancePoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3.5 rounded-2xl border border-white/5 bg-white/[0.025] px-4 py-3.5 hover:border-emerald-500/35 hover:bg-emerald-500/[0.04] transition-all duration-300"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/15">
                    <svg className="w-4 h-4 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-base sm:text-lg font-semibold text-white/95">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SlideJobAndFreelanceEcosystem;
