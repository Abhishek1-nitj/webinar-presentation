import { motion } from 'framer-motion';

// --- Authentic & Minimalist Brand / Domain Logos ---

// 1. Official Microsoft Excel + AI Spark Badge
const ExcelAiLogo = () => (
  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#107C41] relative flex items-center justify-center shadow-md border border-emerald-500/30 overflow-hidden shrink-0">
    <svg className="w-full h-full p-0.5" viewBox="0 0 48 48" fill="none">
      <rect x="14" y="6" width="28" height="36" rx="3" fill="#107C41" />
      <rect x="22" y="11" width="8" height="5" rx="1" fill="#21A366" />
      <rect x="32" y="11" width="8" height="5" rx="1" fill="#21A366" />
      <rect x="22" y="18" width="8" height="5" rx="1" fill="#21A366" />
      <rect x="32" y="18" width="8" height="5" rx="1" fill="#21A366" />
      <rect x="22" y="25" width="8" height="5" rx="1" fill="#21A366" />
      <rect x="32" y="25" width="8" height="5" rx="1" fill="#21A366" />
      <rect x="22" y="32" width="8" height="5" rx="1" fill="#21A366" />
      <rect x="32" y="32" width="8" height="5" rx="1" fill="#21A366" />
      <rect x="6" y="10" width="18" height="28" rx="2.5" fill="#0C592E" />
      <path
        d="M10.5 17.5l4 6.5-4 6.5h2.5l2.7-4.6 2.7 4.6h2.5l-4-6.5 4-6.5h-2.5l-2.7 4.6-2.7-4.6h-2.5z"
        fill="#FFFFFF"
      />
    </svg>
    <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-amber-400 rounded-full flex items-center justify-center ring-1 ring-zinc-950">
      <svg className="w-1.5 h-1.5 text-zinc-950" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L14 8L20 10L14 12L12 18L10 12L4 10L10 8L12 2Z" />
      </svg>
    </div>
  </div>
);

// 2. Official Microsoft Power Query (ETL Pipeline / Transformation)
const PowerQueryLogo = () => (
  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#006651] border border-teal-400/40 flex items-center justify-center shadow-md shrink-0 overflow-hidden">
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="7" height="16" rx="1.2" fill="#A3E6CD" opacity="0.9" />
      <path d="M5 8h3M5 12h3M5 16h3" stroke="#004D3C" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M12 9l2.5 3L12 15" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="16" y="4" width="5" height="16" rx="1.2" fill="#34D399" />
      <path d="M17.5 7h2M17.5 10h2M17.5 13h2M17.5 16h2" stroke="#004D3C" strokeWidth="1" strokeLinecap="round" />
    </svg>
  </div>
);

// 3. Official Microsoft Power Pivot (3D Relational Data Cube)
const PowerPivotLogo = () => (
  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#0C592E] border border-emerald-400/40 flex items-center justify-center shadow-md shrink-0 overflow-hidden">
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
      <path d="M12 3l7 3.5-7 3.5-7-3.5L12 3z" fill="#34D399" />
      <path d="M5 6.5v8l7 4v-8.5L5 6.5z" fill="#107C41" />
      <path d="M19 6.5v8l-7 4v-8.5l7-3.5z" fill="#095C3E" />
      <path d="M12 10v8.5M8.5 4.75l7 8.5M15.5 4.75l-7 8.5" stroke="#A7F3D0" strokeWidth="0.8" opacity="0.6" />
    </svg>
  </div>
);

// 4. Official Microsoft Power BI (3 Ascending Bars)
const PowerBiLogo = () => (
  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#18181B] border border-amber-400/40 flex items-center justify-center shadow-md shrink-0">
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
      <rect x="5" y="12" width="3.2" height="8" rx="0.8" fill="#F2C811" />
      <rect x="10.4" y="8" width="3.2" height="12" rx="0.8" fill="#E8B007" />
      <rect x="15.8" y="4" width="3.2" height="16" rx="0.8" fill="#D39600" />
    </svg>
  </div>
);

// 5. Relational SQL Database
const SqlLogo = () => (
  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-zinc-900 border border-sky-500/40 flex items-center justify-center shadow-md shrink-0">
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="5" rx="7" ry="2.2" fill="#38BDF8" />
      <path d="M19 5v5c0 1.2-3.13 2.2-7 2.2s-7-1-7-2.2V5" stroke="#38BDF8" strokeWidth="1.4" />
      <path d="M19 10v5c0 1.2-3.13 2.2-7 2.2s-7-1-7-2.2v-5" stroke="#38BDF8" strokeWidth="1.4" />
      <ellipse cx="12" cy="10" rx="7" ry="2.2" fill="#0284C7" fillOpacity="0.3" />
      <ellipse cx="12" cy="15" rx="7" ry="2.2" fill="#0369A1" fillOpacity="0.5" />
    </svg>
  </div>
);

// 6. Official Python
const PythonLogo = () => (
  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center shadow-md shrink-0">
    <svg className="w-3.5 h-3.5" viewBox="0 0 128 128" fill="none">
      <path
        d="M63.5 13c-27.2 0-25.5 11.8-25.5 11.8l.03 12.2h26v3.7H27.5C10.8 40.7 11 58.7 11 58.7s-.2 10.6 6.8 17.5c6.8 6.7 15.8 7 15.8 7v-10.7s-.9-12.7 12.5-12.7h23.8s11.5.2 11.5-11.2V24.5S83 13 63.5 13zm-13.8 7.3a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4z"
        fill="#387EB8"
      />
      <path
        d="M64.5 115c27.2 0 25.5-11.8 25.5-11.8l-.03-12.2h-26v-3.7h36.5c16.7 0 16.5-18 16.5-18s.2-10.6-6.8-17.5c-6.8-6.7-15.8-7-15.8-7v10.7s.9 12.7-12.5 12.7H58s-11.5-.2-11.5 11.2v23.4S45 115 64.5 115zm13.8-7.3a4.2 4.2 0 1 1 0-8.4 4.2 4.2 0 0 1 0 8.4z"
        fill="#FFD43B"
      />
    </svg>
  </div>
);

// --- Custom Sleek Icons for Job Pillar ---

const ResumeIcon = () => (
  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-blue-950/60 border border-blue-400/40 flex items-center justify-center shadow-md shrink-0">
    <svg className="w-3 h-3 text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  </div>
);

const JobPlatformsIcon = () => (
  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-blue-950/60 border border-blue-400/40 flex items-center justify-center shadow-md shrink-0">
    <svg className="w-3 h-3 text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  </div>
);

const ProjectsPortfolioIcon = () => (
  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-blue-950/60 border border-blue-400/40 flex items-center justify-center shadow-md shrink-0">
    <svg className="w-3 h-3 text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      <line x1="12" y1="11" x2="12" y2="17" />
      <line x1="9" y1="14" x2="15" y2="14" />
    </svg>
  </div>
);

const TechnicalInterviewIcon = () => (
  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-blue-950/60 border border-blue-400/40 flex items-center justify-center shadow-md shrink-0">
    <svg className="w-3 h-3 text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" />
    </svg>
  </div>
);

// --- Custom Sleek Icons for Freelancing Pillar ---

const FreelancePlatformsIcon = () => (
  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-purple-950/60 border border-purple-400/40 flex items-center justify-center shadow-md shrink-0">
    <svg className="w-3 h-3 text-purple-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  </div>
);

const ProfileIcon = () => (
  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-purple-950/60 border border-purple-400/40 flex items-center justify-center shadow-md shrink-0">
    <svg className="w-3 h-3 text-purple-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  </div>
);

const FreelanceProjectsIcon = () => (
  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-purple-950/60 border border-purple-400/40 flex items-center justify-center shadow-md shrink-0">
    <svg className="w-3 h-3 text-purple-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
    </svg>
  </div>
);

const PortfolioIcon = () => (
  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-purple-950/60 border border-purple-400/40 flex items-center justify-center shadow-md shrink-0">
    <svg className="w-3 h-3 text-purple-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  </div>
);

const PricingIcon = () => (
  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-purple-950/60 border border-purple-400/40 flex items-center justify-center shadow-md shrink-0">
    <svg className="w-3 h-3 text-purple-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  </div>
);

const ClientReachOutIcon = () => (
  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-purple-950/60 border border-purple-400/40 flex items-center justify-center shadow-md shrink-0">
    <svg className="w-3 h-3 text-purple-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  </div>
);

const SlideSkillJobFreelancing = () => {
  // 1. Full Tool Mastery Items (6 items)
  const toolItems = [
    { name: 'Excel + AI', logo: <ExcelAiLogo />, tag: 'Spreadsheet Automation' },
    { name: 'Power Query', logo: <PowerQueryLogo />, tag: 'ETL & Data Cleaning' },
    { name: 'Power Pivot', logo: <PowerPivotLogo />, tag: 'Data Modeling & DAX' },
    { name: 'Power BI', logo: <PowerBiLogo />, tag: 'Interactive Dashboards' },
    { name: 'SQL', logo: <SqlLogo />, tag: 'Relational Database Queries' },
    { name: 'Python', logo: <PythonLogo />, tag: 'Automation & Analytics' },
  ];

  // 2. Job Items (4 items)
  const jobItems = [
    { name: 'ATS Friendly Resume', icon: <ResumeIcon />, tag: 'Targeted Keywords & Format' },
    { name: 'Job Platforms', icon: <JobPlatformsIcon />, tag: 'LinkedIn, Naukri & Portals' },
    { name: 'Projects & Portfolio', icon: <ProjectsPortfolioIcon />, tag: 'Live Business Case Studies' },
    { name: 'Technical Interview', icon: <TechnicalInterviewIcon />, tag: 'Mock Prep & Live Problem Solving' },
  ];

  // 3. Freelancing Items (6 items)
  const freelanceItems = [
    { name: 'Platforms', icon: <FreelancePlatformsIcon />, tag: 'Upwork, Fiverr & Global' },
    { name: 'Profile', icon: <ProfileIcon />, tag: 'High-Converting Bio & Setup' },
    { name: 'Projects', icon: <FreelanceProjectsIcon />, tag: 'Ready Client Deliverables' },
    { name: 'Portfolio', icon: <PortfolioIcon />, tag: 'Proof of Work & Samples' },
    { name: 'Pricing', icon: <PricingIcon />, tag: 'Hourly vs Fixed Contracts' },
    { name: 'Client Reach Out', icon: <ClientReachOutIcon />, tag: 'Cold Outreach & Proposals' },
  ];

  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col justify-between px-3 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-3.5 relative overflow-hidden bg-[#090A0D]">
      {/* Subtle Executive Matte Vignette & Ambient Radial Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_5%,rgba(255,255,255,0.03),transparent_75%)] pointer-events-none" />
      <div className="absolute top-10 left-1/4 w-96 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-96 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1360px] mx-auto flex flex-col justify-between h-full">
        
        {/* ========================================================================= */}
        {/* ⭐ TOP HIGHLIGHT HERO: ₹2,499 ➔ 3 MONTHS JOURNEY ➔ ₹50,000 / MO (20X ROI) */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full relative pt-1 pb-2 sm:pb-2.5"
        >
          <div className="w-full rounded-2xl bg-gradient-to-r from-emerald-950/60 via-zinc-900/95 to-emerald-950/60 border-2 border-emerald-400/40 p-3 sm:p-3.5 md:px-7 shadow-[0_16px_50px_rgba(16,185,129,0.22)] backdrop-blur-xl flex flex-wrap items-center justify-between gap-3 sm:gap-4 relative overflow-hidden ring-1 ring-emerald-500/20">
            {/* Top Glowing Laser Accent */}
            <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />

            {/* 1. You Pay Today: ₹2,499 */}
            <div className="flex items-center gap-3 sm:gap-3.5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center shrink-0 shadow-md">
                <span className="text-xl sm:text-2xl">💳</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-emerald-300 font-semibold leading-none">
                  You Pay Today
                </span>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-200 to-teal-200 tracking-tight leading-none drop-shadow-[0_4px_20px_rgba(52,211,153,0.45)]">
                    ₹2,499
                  </span>
                  <span className="text-xs sm:text-sm text-zinc-400 font-medium">
                    (One-time)
                  </span>
                </div>
              </div>
            </div>

            {/* 2. Transformation Journey Arrow: 3 Months with 20X ROI on top */}
            <div className="flex flex-col items-center flex-1 justify-center min-w-[200px] px-2">
              {/* 20X ROI Floating Above 3 Months */}
              <div className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/50 shadow-[0_0_16px_rgba(16,185,129,0.3)] mb-1">
                <span className="font-display text-xs sm:text-[13px] font-black text-emerald-300 tracking-wider">
                  20X ROI
                </span>
              </div>

              {/* Progress Line + 3 Months Journey Capsule */}
              <div className="w-full flex items-center gap-2 sm:gap-3">
                <div className="hidden sm:block h-[1.5px] flex-1 bg-gradient-to-r from-emerald-500/60 via-zinc-600 to-zinc-400" />
                
                <div className="flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-zinc-850 border border-zinc-700 shadow-[inset_0_1px_4px_rgba(0,0,0,0.6)] shrink-0">
                  <svg className="w-3.5 h-3.5 text-amber-400 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-display text-xs sm:text-sm font-black text-white tracking-wider uppercase">
                    3 Months Journey
                  </span>
                  <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.6} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>

                <div className="hidden sm:block h-[1.5px] flex-1 bg-gradient-to-r from-zinc-400 via-zinc-600 to-emerald-500/60" />
              </div>
            </div>

            {/* 3. Target Income: ₹50,000 / month */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center shrink-0 shadow-md">
                <span className="text-xl sm:text-2xl">🎯</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold leading-none">
                  Target Income
                </span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-none drop-shadow-[0_4px_25px_rgba(255,255,255,0.3)]">
                    ₹50,000
                  </span>
                  <span className="text-sm sm:text-base text-emerald-300 font-bold">
                    /month
                  </span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Section Title Equation: Full Tool Mastery ➔ Job + Freelancing */}
        <div className="w-full flex flex-nowrap items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 whitespace-nowrap py-1">
          
          {/* 1. Full Tool Mastery */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex-shrink-0"
          >
            <span className="font-display text-[clamp(1rem,2vw,1.9rem)] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-zinc-300 whitespace-nowrap">
              Full Tool Mastery
            </span>
          </motion.div>

          {/* Minimalist Executive Arrow: ➔ */}
          <div className="flex items-center justify-center flex-shrink-0">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.4}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>

          {/* 2. Job */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex-shrink-0"
          >
            <span className="font-display text-[clamp(1rem,2vw,1.9rem)] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-zinc-300 whitespace-nowrap">
              Job
            </span>
          </motion.div>

          {/* Plus: + */}
          <div className="flex items-center justify-center flex-shrink-0">
            <span className="font-display text-[clamp(0.9rem,1.8vw,1.6rem)] font-light text-zinc-500 whitespace-nowrap">
              +
            </span>
          </div>

          {/* 3. Freelancing */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <span className="font-display text-[clamp(1rem,2vw,1.9rem)] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-zinc-300 whitespace-nowrap">
              Freelancing
            </span>
          </motion.div>

        </div>

        {/* 3-Column Pillars Layout */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3 lg:gap-4 items-stretch my-auto">

          {/* ================= PILLAR 1: FULL TOOL MASTERY ================= */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col rounded-2xl bg-gradient-to-b from-[#11161B]/90 via-[#0D1015]/80 to-[#0A0D11]/90 border border-emerald-500/25 p-3 sm:p-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500/10 via-emerald-400 to-teal-500/10" />

            {/* Column Header */}
            <div className="flex items-center justify-between pb-2 mb-1.5 border-b border-zinc-800/80">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-mono text-[10px] font-bold">
                  01
                </span>
                <h4 className="font-display text-sm sm:text-[15px] font-bold text-white tracking-tight">
                  Full Tool Mastery
                </h4>
              </div>
              <span className="text-[9.5px] font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300/90 border border-emerald-500/20">
                6 Core Tools
              </span>
            </div>

            {/* Tools List */}
            <div className="flex flex-col gap-1.5 flex-grow justify-between">
              {toolItems.map((tool, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-xl bg-zinc-900/60 border border-zinc-800/60 hover:bg-zinc-850/80 hover:border-emerald-500/30 transition-all duration-200"
                >
                  {tool.logo}
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs sm:text-[12.5px] font-semibold text-white tracking-tight leading-tight truncate">
                      {tool.name}
                    </span>
                    <span className="text-[10px] text-zinc-400 font-normal leading-tight truncate">
                      {tool.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ================= PILLAR 2: JOB ================= */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col rounded-2xl bg-gradient-to-b from-[#101420]/90 via-[#0D1018]/80 to-[#0A0D14]/90 border border-blue-500/25 p-3 sm:p-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500/10 via-blue-400 to-indigo-500/10" />

            {/* Column Header */}
            <div className="flex items-center justify-between pb-2 mb-1.5 border-b border-zinc-800/80">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-md bg-blue-500/15 border border-blue-500/30 text-blue-400 flex items-center justify-center font-mono text-[10px] font-bold">
                  02
                </span>
                <h4 className="font-display text-sm sm:text-[15px] font-bold text-white tracking-tight">
                  Job
                </h4>
              </div>
              <span className="text-[9.5px] font-medium px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-300/90 border border-blue-500/20">
                Career Track
              </span>
            </div>

            {/* Job Items List */}
            <div className="flex flex-col gap-2 flex-grow justify-between">
              {jobItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 px-2.5 py-1.5 sm:py-2 rounded-xl bg-zinc-900/60 border border-zinc-800/60 hover:bg-zinc-850/80 hover:border-blue-500/30 transition-all duration-200"
                >
                  {item.icon}
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs sm:text-[12.5px] font-semibold text-white tracking-tight leading-tight truncate">
                      {item.name}
                    </span>
                    <span className="text-[10px] text-zinc-400 font-normal leading-tight truncate">
                      {item.tag}
                    </span>
                  </div>
                </div>
              ))}

              {/* Placement Guarantee & Support Tagline */}
              <div className="px-2.5 py-1.5 rounded-xl bg-blue-950/25 border border-blue-500/20 flex items-center justify-center text-center">
                <span className="text-[10px] sm:text-[10.5px] font-medium text-blue-300">
                  Target: Full-time corporate roles & career transition
                </span>
              </div>
            </div>
          </motion.div>

          {/* ================= PILLAR 3: FREELANCING ================= */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-col rounded-2xl bg-gradient-to-b from-[#181122]/90 via-[#120D1A]/80 to-[#0C0A12]/90 border border-purple-500/25 p-3 sm:p-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500/10 via-purple-400 to-fuchsia-500/10" />

            {/* Column Header */}
            <div className="flex items-center justify-between pb-2 mb-1.5 border-b border-zinc-800/80">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-md bg-purple-500/15 border border-purple-500/30 text-purple-400 flex items-center justify-center font-mono text-[10px] font-bold">
                  03
                </span>
                <h4 className="font-display text-sm sm:text-[15px] font-bold text-white tracking-tight">
                  Freelancing
                </h4>
              </div>
              <span className="text-[9.5px] font-medium px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300/90 border border-purple-500/20">
                Monetization
              </span>
            </div>

            {/* Freelance Items List */}
            <div className="flex flex-col gap-1.5 flex-grow justify-between">
              {freelanceItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-xl bg-zinc-900/60 border border-zinc-800/60 hover:bg-zinc-850/80 hover:border-purple-500/30 transition-all duration-200"
                >
                  {item.icon}
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs sm:text-[12.5px] font-semibold text-white tracking-tight leading-tight truncate">
                      {item.name}
                    </span>
                    <span className="text-[10px] text-zinc-400 font-normal leading-tight truncate">
                      {item.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default SlideSkillJobFreelancing;
