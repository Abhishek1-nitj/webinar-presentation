import { motion } from 'framer-motion';

// --- Official & Accurate Logos ---

// 1. Official Microsoft Excel (Fluent Design with 3x3 Grid + Front Tile 'X') + Minimal AI
const ExcelAiLogo = () => (
  <div className="flex items-center gap-2 shrink-0">
    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#107C41] relative flex items-center justify-center shadow-md overflow-hidden border border-emerald-500/30">
      <svg className="w-full h-full p-1" viewBox="0 0 48 48" fill="none">
        {/* Sheet Grid */}
        <rect x="14" y="6" width="28" height="36" rx="3" fill="#107C41" />
        <rect x="22" y="11" width="8" height="5" rx="1" fill="#21A366" />
        <rect x="32" y="11" width="8" height="5" rx="1" fill="#21A366" />
        <rect x="22" y="18" width="8" height="5" rx="1" fill="#21A366" />
        <rect x="32" y="18" width="8" height="5" rx="1" fill="#21A366" />
        <rect x="22" y="25" width="8" height="5" rx="1" fill="#21A366" />
        <rect x="32" y="25" width="8" height="5" rx="1" fill="#21A366" />
        <rect x="22" y="32" width="8" height="5" rx="1" fill="#21A366" />
        <rect x="32" y="32" width="8" height="5" rx="1" fill="#21A366" />
        {/* Front X Tile */}
        <rect x="6" y="10" width="18" height="28" rx="2.5" fill="#0C592E" />
        <path
          d="M10.5 17.5l4 6.5-4 6.5h2.5l2.7-4.6 2.7 4.6h2.5l-4-6.5 4-6.5h-2.5l-2.7 4.6-2.7-4.6h-2.5z"
          fill="#FFFFFF"
        />
      </svg>
    </div>
    <span className="text-zinc-600 text-xs font-light">+</span>
    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center shadow-md">
      <svg className="w-4 h-4 text-zinc-100" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3L14.2 8.8L20 11L14.2 13.2L12 19L9.8 13.2L4 11L9.8 8.8L12 3Z"
          fill="currentColor"
        />
        <circle cx="18" cy="6" r="1" fill="#A1A1AA" />
      </svg>
    </div>
  </div>
);

// 2. Official Microsoft Power BI (3 Ascending Bars)
const PowerBiLogo = () => (
  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#18181B] border border-amber-400/40 flex items-center justify-center shadow-md shrink-0">
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
      <rect x="5" y="12" width="3.2" height="8" rx="1" fill="#F2C811" />
      <rect x="10.4" y="8" width="3.2" height="12" rx="1" fill="#E8B007" />
      <rect x="15.8" y="4" width="3.2" height="16" rx="1" fill="#D39600" />
    </svg>
  </div>
);

// 3. SQL Data Analysis
const SqlDataIcon = () => (
  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-zinc-900 border border-zinc-700/80 flex items-center justify-center shadow-md shrink-0">
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="5" rx="7" ry="2.2" fill="#38BDF8" />
      <path d="M19 5v5c0 1.2-3.13 2.2-7 2.2s-7-1-7-2.2V5" stroke="#38BDF8" strokeWidth="1.5" />
      <path d="M19 10v5c0 1.2-3.13 2.2-7 2.2s-7-1-7-2.2v-5" stroke="#38BDF8" strokeWidth="1.5" />
      <ellipse cx="12" cy="10" rx="7" ry="2.2" fill="#0284C7" fillOpacity="0.3" />
      <ellipse cx="12" cy="15" rx="7" ry="2.2" fill="#0369A1" fillOpacity="0.5" />
    </svg>
  </div>
);

// 4. SQL Development & Architecture
const SqlDevIcon = () => (
  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-zinc-900 border border-zinc-700/80 flex items-center justify-center shadow-md shrink-0">
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="5" rx="7" ry="2" fill="#818CF8" />
      <path d="M19 5v4c0 1.1-3.13 2-7 2s-7-.9-7-2V5" stroke="#C7D2FE" strokeWidth="1.2" />
      <path d="M19 9v4c0 1.1-3.13 2-7 2s-7-.9-7-2V9" stroke="#C7D2FE" strokeWidth="1.2" />
      <path d="M7 16l-3 2 3 2M17 16l3 2-3 2M13 15l-2 6" stroke="#38BDF8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

const freelanceProjects = [
  {
    id: 'excel-ai',
    tool: 'Microsoft Excel + AI',
    specialization: 'Spreadsheet Modeling & Macros',
    icon: ExcelAiLogo,
    url: 'https://www.upwork.com/hire/microsoft-excel-experts/',
    hourly: '₹1,800 – ₹4,800 / hr',
    projectScope: '₹10,000 – ₹45,000',
  },
  {
    id: 'power-bi',
    tool: 'Microsoft Power BI',
    specialization: 'BI Dashboards & Data Modeling',
    icon: PowerBiLogo,
    url: 'https://www.upwork.com/hire/microsoft-power-bi-freelancers/in/',
    hourly: '₹2,200 – ₹6,500 / hr',
    projectScope: '₹20,000 – ₹85,000',
  },
  {
    id: 'sql-reports',
    tool: 'SQL Data Analysis',
    specialization: 'Querying, Reporting & Metrics',
    icon: SqlDataIcon,
    url: 'https://www.upwork.com/services/data-analysis-reports/get/sql',
    hourly: '₹2,500 – ₹5,500 / hr',
    projectScope: '₹8,000 – ₹35,000',
  },
  {
    id: 'sql-dev',
    tool: 'SQL Development',
    specialization: 'Database Architecture & Backend',
    icon: SqlDevIcon,
    url: 'https://www.upwork.com/hire/sql-programmers/',
    hourly: '₹2,800 – ₹7,500 / hr',
    projectScope: '₹35,000 – ₹1,20,000',
  },
];

const SlideUpworkMarketDemand = () => {
  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-4 relative overflow-hidden bg-[#090A0D]">
      {/* Subtle Executive Matte Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(255,255,255,0.025),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto my-auto flex flex-col gap-5 sm:gap-6">
        
        {/* Minimalist Executive Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Freelancing Projects
          </h2>
        </motion.div>

        {/* 2x2 Clean Minimalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
          {freelanceProjects.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="group block rounded-xl border border-zinc-800/80 bg-zinc-900/50 p-4 sm:p-5 transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-900/80 backdrop-blur-md shadow-lg"
              >
                <div className="flex flex-col gap-4">
                  
                  {/* Top: Tool + Specialization + Arrow */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3.5">
                      <IconComponent />
                      <div>
                        <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-zinc-200 transition-colors">
                          {item.tool}
                        </h3>
                        <p className="text-xs sm:text-sm text-zinc-400 font-medium">
                          {item.specialization}
                        </p>
                      </div>
                    </div>

                    <div className="p-1.5 rounded-lg bg-zinc-800/60 text-zinc-400 group-hover:text-white group-hover:bg-zinc-700 transition-colors shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                  </div>

                  {/* Clean Divider */}
                  <div className="h-[1px] w-full bg-zinc-800/70" />

                  {/* Bottom: Hourly Earning & Project Scope */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-400 font-semibold">
                        Hourly Earning
                      </div>
                      <div className="text-sm sm:text-base font-bold text-zinc-100 mt-0.5">
                        {item.hourly}
                      </div>
                    </div>

                    <div className="border-l border-zinc-800/70 pl-4">
                      <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-400 font-semibold">
                        Project Scope
                      </div>
                      <div className="text-sm sm:text-base font-bold text-zinc-100 mt-0.5">
                        {item.projectScope}
                      </div>
                    </div>
                  </div>

                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Bottom Calculation Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex items-center justify-center pt-1"
        >
          <div className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl border border-emerald-500/40 bg-gradient-to-r from-emerald-950/50 via-emerald-900/30 to-emerald-950/50 backdrop-blur-md shadow-[0_0_25px_rgba(16,185,129,0.18)]">
            <p className="font-display text-base sm:text-lg md:text-xl lg:text-2xl font-black tracking-tight text-white text-center">
              <span className="text-emerald-400">5 Projects</span> of <span className="text-zinc-100">₹10,000 each</span> per month = <span className="text-emerald-300 font-black">₹50,000 per month</span>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SlideUpworkMarketDemand;
