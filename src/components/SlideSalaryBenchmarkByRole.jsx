import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Ordered from Top (Highest Level) to Bottom (Foundation Level)
const salaryData = [
  {
    id: 'python',
    tier: '04',
    tierLabel: 'Tier 04 · Advanced',
    family: 'Advanced Analytics & Automation',
    stackRaw: 'Python, Advanced SQL, BI Integration',
    skills: ['Python', 'Advanced SQL', 'BI Integration', 'Automation'],
    monthlyRange: '₹70,000 – ₹1,80,000',
    monthlyUnit: '/ mo',
    // Ordered from Highest (top) to Lowest (bottom)
    roles: [
      { title: 'Senior Data Analyst (Python Track)' },
      { title: 'Business Analytics Consultant' },
      { title: 'Data & Automation Analyst' },
      { title: 'Decision Analytics Associate' },
    ],
  },
  {
    id: 'analytics',
    tier: '03',
    tierLabel: 'Tier 03 · Core Analytics',
    family: 'Data Analytics (Excel + BI + SQL)',
    stackRaw: 'Excel, Power BI, Advanced SQL',
    skills: ['Excel', 'Power BI', 'Advanced SQL', 'Data Modeling'],
    monthlyRange: '₹50,000 – ₹1,50,000',
    monthlyUnit: '/ mo',
    // Ordered from Highest (top) to Lowest (bottom)
    roles: [
      { title: 'Lead Data Analyst' },
      { title: 'Business Data Analyst' },
      { title: 'Financial Data Analyst' },
      { title: 'Data Analyst (P75 Market Strong)' },
      { title: 'SQL & Reporting Specialist' },
      { title: 'Commercial Analytics Executive' },
    ],
  },
  {
    id: 'powerbi',
    tier: '02',
    tierLabel: 'Tier 02 · Visualization',
    family: 'Business Intelligence / Power BI',
    stackRaw: 'Excel, Power Query, Data Modeling, DAX, Power BI Desktop & Service',
    skills: ['Excel', 'Power Query', 'Data Modeling', 'DAX', 'Power BI Desktop & Service'],
    monthlyRange: '₹40,000 – ₹1,30,000',
    monthlyUnit: '/ mo',
    // Ordered from Highest (top) to Lowest (bottom)
    roles: [
      { title: 'Senior Power BI Developer' },
      { title: 'Business Intelligence Analyst (BI Analyst)' },
      { title: 'Power BI Developer' },
      { title: 'Dashboard Specialist / Visualization Analyst' },
      { title: 'Power BI Analyst' },
      { title: 'Junior Power BI Developer' },
    ],
  },
  {
    id: 'mis',
    tier: '01',
    tierLabel: 'Tier 01 · Foundation',
    family: 'MIS / Operations / Reporting',
    stackRaw: 'Core Excel, Advanced Formulas, Power Query, Basic AI',
    skills: ['Core Excel', 'Advanced Formulas', 'Power Query', 'Basic AI'],
    monthlyRange: '₹25,000 – ₹60,000',
    monthlyUnit: '/ mo',
    // Ordered from Highest (top) to Lowest (bottom)
    roles: [
      { title: 'Senior MIS Executive' },
      { title: 'Reporting Analyst' },
      { title: 'Operations Analyst' },
      { title: 'MIS Analyst' },
      { title: 'Business Operations Associate' },
      { title: 'Commercial / Billing MIS Executive' },
      { title: 'MIS Executive' },
      { title: 'Reporting Executive' },
      { title: 'Operations Executive' },
    ],
  },
];

const SlideSalaryBenchmarkByRole = () => {
  // Default to 'mis' (the foundation tier at the bottom of the ladder)
  const [activeFamilyId, setActiveFamilyId] = useState('mis');

  const currentFamily = salaryData.find(item => item.id === activeFamilyId) || salaryData[3];

  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col justify-between px-4 sm:px-8 md:px-12 lg:px-14 py-5 relative overflow-hidden bg-[#090A0D]">
      {/* Background Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(245,158,11,0.03),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-amber-500/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-emerald-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

      {/* Header Bar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex items-center justify-between pb-3 border-b border-zinc-800/80 shrink-0">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <div className="h-2.5 w-2.5 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.6)]" />
          <h2 className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight">
            Corporate Job Roles
          </h2>
          <span className="hidden sm:inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700">
            Career Progression Ladder
          </span>
        </motion.div>
      </div>

      {/* Main 3-Column Layout: Left Ladder | Middle Big Salary | Right Roles */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 min-h-0 py-3 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
        
        {/* ================= COLUMN 1 (4 cols): Category Progression Ladder ================= */}
        <div className="lg:col-span-4 flex flex-col justify-between gap-2.5">
          <div className="flex items-center justify-between px-1 pb-1">
            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-1.5">
              <span>Career Ladder</span>
              <span className="text-amber-400">▲</span>
            </span>
            <span className="text-[10px] text-zinc-500 font-medium">Top = Highest Level</span>
          </div>

          <div className="flex-1 flex flex-col justify-between gap-2.5">
            {salaryData.map((item) => {
              const isSelected = activeFamilyId === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveFamilyId(item.id)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-200 group relative overflow-hidden cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-gradient-to-r from-amber-500/15 via-zinc-800/90 to-zinc-900/90 border-amber-400/80 shadow-[0_4px_20px_rgba(245,158,11,0.15)] text-white ring-1 ring-amber-400/30'
                      : 'bg-zinc-900/60 border-zinc-800 hover:bg-zinc-850 hover:border-zinc-700 text-zinc-400'
                  }`}
                >
                  {/* Left Active Indicator */}
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-amber-300 via-amber-400 to-yellow-500" />
                  )}

                  <div className="min-w-0 pr-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded ${
                          isSelected
                            ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40'
                            : 'bg-zinc-800 text-zinc-500'
                        }`}
                      >
                        {item.tier}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider text-zinc-500">
                        {item.id === 'mis' ? 'Foundation' : item.id === 'python' ? 'Peak Tier' : 'Growth Tier'}
                      </span>
                    </div>

                    <h3
                      className={`font-display text-sm sm:text-base font-bold transition-colors leading-snug ${
                        isSelected ? 'text-white' : 'text-zinc-300 group-hover:text-white'
                      }`}
                    >
                      {item.family}
                    </h3>
                  </div>

                  <div className="shrink-0 flex items-center">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-amber-400 text-black font-bold shadow-[0_0_12px_rgba(251,191,36,0.6)]'
                          : 'bg-zinc-800/80 text-zinc-500 group-hover:text-zinc-300'
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= COLUMN 2 (4 cols): BIG Realistic Monthly Salary in the Middle ================= */}
        <div className="lg:col-span-4 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFamily.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="h-full rounded-2xl bg-gradient-to-b from-zinc-900/90 via-[#0E121A] to-zinc-950 border border-amber-500/30 p-4 sm:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center text-center relative overflow-hidden backdrop-blur-xl"
            >
              {/* Subtle Glowing Center Background */}
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-48 h-48 bg-amber-500/10 rounded-full blur-[70px] pointer-events-none" />
              <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-48 h-48 bg-emerald-500/10 rounded-full blur-[70px] pointer-events-none" />

              {/* Tag / Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 mb-4 shadow-sm">
                <span className="text-sm">💼</span>
                <span className="text-xs font-mono font-bold tracking-widest text-amber-300 uppercase">
                  Monthly Salary
                </span>
              </div>

              {/* Large Monthly Salary Display (Guaranteed One Line) */}
              <div className="w-full my-auto py-3 flex items-center justify-center">
                <div className="font-mono text-2xl sm:text-3xl lg:text-[1.8rem] xl:text-[2.2rem] 2xl:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 tracking-tight drop-shadow-[0_2px_20px_rgba(245,158,11,0.4)] whitespace-nowrap">
                  {currentFamily.monthlyRange}
                </div>
              </div>

              {/* Category Info Highlight */}
              <div className="mt-auto pt-5 border-t border-white/10 w-full flex items-center justify-between text-xs text-zinc-400">
                <span className="text-zinc-500">Selected Track:</span>
                <span className="font-bold text-zinc-200 truncate max-w-[200px]">
                  {currentFamily.family}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ================= COLUMN 3 (4 cols): Required Skills + Role Titles Only ================= */}
        <div className="lg:col-span-4 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFamily.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="h-full rounded-2xl bg-zinc-900/70 border border-zinc-800 p-5 sm:p-6 shadow-xl backdrop-blur-md flex flex-col justify-between overflow-hidden"
            >
              {/* TOP: Required Skills */}
              <div className="pb-3 border-b border-zinc-800 shrink-0">
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300">
                    ⚡ Required Skills:
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {currentFamily.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium px-2.5 py-1 rounded-lg bg-zinc-800/90 text-zinc-200 border border-zinc-700/80 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* BOTTOM: Roles List (Higher Levels on Top, Lowest Level at Bottom) */}
              <div className="flex-1 min-h-0 pt-3 flex flex-col">
                <div className="flex items-center justify-between pb-2 text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                  <span>Job Roles (Hierarchy)</span>
                  <span className="text-zinc-400">▲ Senior to Junior ▼</span>
                </div>

                <div className="flex-1 min-h-0 overflow-y-auto space-y-1.5 pr-1 scrollbar-thin scrollbar-thumb-zinc-700">
                  {currentFamily.roles.map((role, idx) => (
                    <motion.div
                      key={role.title}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.15, delay: idx * 0.02 }}
                      className="py-2 px-3 rounded-lg bg-black/40 hover:bg-zinc-800/60 border border-zinc-800/70 hover:border-zinc-700 transition-all flex items-center gap-2.5 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400/60 group-hover:bg-amber-400 shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-zinc-200 group-hover:text-white leading-tight">
                        {role.title}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default SlideSalaryBenchmarkByRole;
