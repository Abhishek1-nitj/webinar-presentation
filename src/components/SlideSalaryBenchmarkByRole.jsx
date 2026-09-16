import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const salaryData = [
  {
    id: 'mis',
    family: 'MIS / Operations / Reporting',
    stackRaw: 'Core Excel, Advanced Formulas, Power Query, Basic AI',
    monthlyRange: '₹25,000 – ₹60,000 / mo',
    roles: [
      { title: 'MIS Executive', salary: '₹3.2 – ₹3.8 LPA' },
      { title: 'Senior MIS Executive', salary: '₹5.8 – ₹7.2 LPA' },
      { title: 'MIS Analyst', salary: '₹4.5 – ₹5.5 LPA' },
      { title: 'Reporting Executive', salary: '₹3.0 – ₹3.6 LPA' },
      { title: 'Reporting Analyst', salary: '₹4.8 – ₹6.0 LPA' },
      { title: 'Operations Executive', salary: '₹3.0 – ₹3.5 LPA' },
      { title: 'Operations Analyst', salary: '₹4.5 – ₹5.8 LPA' },
      { title: 'Business Operations Associate', salary: '₹4.2 – ₹5.2 LPA' },
      { title: 'Commercial / Billing MIS Executive', salary: '₹3.5 – ₹4.5 LPA' },
    ],
  },
  {
    id: 'powerbi',
    family: 'Business Intelligence / Power BI',
    stackRaw: 'Excel, Power Query, Data Modeling, DAX, Power BI Desktop & Service',
    monthlyRange: '₹40,000 – ₹1,30,000 / mo',
    roles: [
      { title: 'Junior Power BI Developer', salary: '₹4.8 – ₹6.2 LPA' },
      { title: 'Power BI Developer', salary: '₹8.0 – ₹10.5 LPA' },
      { title: 'Senior Power BI Developer', salary: '₹12.5 – ₹15.5 LPA' },
      { title: 'Power BI Analyst', salary: '₹6.5 – ₹8.5 LPA' },
      { title: 'Business Intelligence Analyst (BI Analyst)', salary: '₹8.5 – ₹11.5 LPA' },
      { title: 'Dashboard Specialist / Visualization Analyst', salary: '₹7.2 – ₹9.5 LPA' },
    ],
  },
  {
    id: 'analytics',
    family: 'Data Analytics (Excel + BI + SQL)',
    stackRaw: 'Excel, Power BI, Advanced SQL',
    monthlyRange: '₹50,000 – ₹1,50,000 / mo',
    roles: [
      { title: 'Data Analyst (P75 Market Strong)', salary: '₹7.5 – ₹9.8 LPA' },
      { title: 'Business Data Analyst', salary: '₹8.0 – ₹10.5 LPA' },
      { title: 'Financial Data Analyst', salary: '₹7.8 – ₹10.2 LPA' },
      { title: 'Commercial Analytics Executive', salary: '₹5.5 – ₹7.2 LPA' },
      { title: 'Lead Data Analyst', salary: '₹13.0 – ₹16.5 LPA' },
      { title: 'SQL & Reporting Specialist', salary: '₹6.8 – ₹8.8 LPA' },
    ],
  },
  {
    id: 'python',
    family: 'Advanced Analytics & Automation',
    stackRaw: 'Python, Advanced SQL, BI Integration',
    monthlyRange: '₹70,000 – ₹1,80,000 / mo',
    roles: [
      { title: 'Data & Automation Analyst', salary: '₹11.0 – ₹14.5 LPA' },
      { title: 'Senior Data Analyst (Python Track)', salary: '₹15.5 – ₹19.5 LPA' },
      { title: 'Decision Analytics Associate', salary: '₹8.5 – ₹12.0 LPA' },
      { title: 'Business Analytics Consultant', salary: '₹14.0 – ₹18.5 LPA' },
    ],
  },
];

const SlideSalaryBenchmarkByRole = () => {
  const [activeFamilyIndex, setActiveFamilyIndex] = useState(0);

  const currentFamily = salaryData[activeFamilyIndex];

  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-6 relative overflow-hidden bg-[#090A0D]">
      {/* Subtle Executive Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(255,255,255,0.025),transparent_70%)] pointer-events-none" />

      {/* Clean Minimal Header */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex items-center justify-between pb-3 border-b border-zinc-800/80 shrink-0">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Corporate Job Roles
          </h2>
        </motion.div>
      </div>

      {/* Main 2-Column Executive Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 min-h-0 py-4 flex flex-col md:flex-row gap-5 items-stretch">
        
        {/* ================= COLUMN 1: Family Navigator (Left Side, Clean & Uncluttered) ================= */}
        <div className="w-full md:w-80 lg:w-96 shrink-0 flex flex-col gap-3 justify-center">
          {salaryData.map((item, index) => {
            const isSelected = activeFamilyIndex === index;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveFamilyIndex(index)}
                className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 group relative overflow-hidden cursor-pointer flex items-center justify-between ${
                  isSelected
                    ? 'bg-zinc-800/90 border-zinc-500 shadow-md text-white ring-1 ring-white/10'
                    : 'bg-zinc-900/50 border-zinc-800/80 hover:bg-zinc-800/60 hover:border-zinc-700 text-zinc-400'
                }`}
              >
                {/* Active Minimal Accent Bar */}
                {isSelected && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-400" />
                )}

                <div className="min-w-0 pr-2">
                  <h3
                    className={`font-display text-sm sm:text-base font-bold transition-colors ${
                      isSelected ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'
                    }`}
                  >
                    {item.family}
                  </h3>
                </div>

                <div className="shrink-0 flex items-center">
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-amber-400 translate-x-0.5' : 'text-zinc-600 group-hover:text-zinc-400'
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            );
          })}
        </div>

        {/* ================= COLUMN 2: Corporate Roles & Salaries (Expansive Full View) ================= */}
        <div className="flex-1 min-w-0 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFamily.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="h-full max-h-[480px] flex flex-col justify-between rounded-2xl bg-zinc-900/60 border border-zinc-800/90 p-5 sm:p-6 shadow-xl backdrop-blur-md relative overflow-hidden"
            >
              {/* Header Bar: Family Name + Required Skills + BIG HIGHLIGHTED MONTHLY SALARY */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3.5 border-b border-zinc-800 shrink-0">
                <div className="space-y-1">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-wide">
                    {currentFamily.family}
                  </h3>
                  {/* Subtle, Clean Required Skills */}
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                    <span className="font-semibold text-zinc-500 uppercase tracking-wider text-[10px]">
                      Required Skills:
                    </span>
                    <span className="font-medium text-zinc-300">
                      {currentFamily.stackRaw}
                    </span>
                  </div>
                </div>

                {/* BIG HERO MONTHLY SALARY HIGHLIGHT */}
                <div className="shrink-0">
                  <div className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-amber-500/[0.14] via-yellow-500/[0.08] to-amber-500/[0.14] border border-amber-400/40 shadow-[0_4px_25px_rgba(245,158,11,0.22)] flex flex-col sm:items-end">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-amber-300/80 font-bold">
                      Realistic Monthly Salary
                    </span>
                    <span className="font-mono text-xl sm:text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 drop-shadow-[0_2px_12px_rgba(245,158,11,0.4)]">
                      {currentFamily.monthlyRange}
                    </span>
                  </div>
                </div>
              </div>

              {/* Roles & Salary 2-Column Grid (Clean, Premium, High Legibility) */}
              <div className="flex-1 min-h-0 my-3 grid grid-cols-1 md:grid-cols-2 gap-2.5 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-zinc-700 content-start">
                {currentFamily.roles.map((role, idx) => (
                  <motion.div
                    key={role.title}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15, delay: idx * 0.015 }}
                    className="flex items-center justify-between gap-2.5 py-2.5 px-3.5 rounded-xl bg-black/40 hover:bg-zinc-800/40 border border-zinc-800/80 hover:border-zinc-700 transition-all group"
                  >
                    <span className="text-xs sm:text-sm font-medium text-zinc-200 group-hover:text-white truncate">
                      {role.title}
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-bold px-2.5 py-1 rounded-md border border-zinc-700/60 bg-zinc-800 text-zinc-100 whitespace-nowrap shadow-sm shrink-0">
                      {role.salary}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default SlideSalaryBenchmarkByRole;
