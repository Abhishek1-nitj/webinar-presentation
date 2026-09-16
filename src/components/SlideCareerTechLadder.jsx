import { motion } from 'framer-motion';

// --- Accurate, Minimalist Official Brand Logos ---

// 1. Official Microsoft Excel (Fluent Design with 3x3 sheet grid + front X tile)
const ExcelLogo = () => (
  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#107C41] relative flex items-center justify-center shadow-lg border border-emerald-500/30 overflow-hidden shrink-0">
    <svg className="w-full h-full p-1" viewBox="0 0 48 48" fill="none">
      {/* Background Sheet with Grid Lines */}
      <rect x="14" y="6" width="28" height="36" rx="3" fill="#107C41" />
      {/* Grid Cells */}
      <rect x="22" y="11" width="8" height="5" rx="1" fill="#21A366" />
      <rect x="32" y="11" width="8" height="5" rx="1" fill="#21A366" />
      <rect x="22" y="18" width="8" height="5" rx="1" fill="#21A366" />
      <rect x="32" y="18" width="8" height="5" rx="1" fill="#21A366" />
      <rect x="22" y="25" width="8" height="5" rx="1" fill="#21A366" />
      <rect x="32" y="25" width="8" height="5" rx="1" fill="#21A366" />
      <rect x="22" y="32" width="8" height="5" rx="1" fill="#21A366" />
      <rect x="32" y="32" width="8" height="5" rx="1" fill="#21A366" />
      {/* Front Green Tile with X */}
      <rect x="6" y="10" width="18" height="28" rx="2.5" fill="#0C592E" />
      <path
        d="M10.5 17.5l4 6.5-4 6.5h2.5l2.7-4.6 2.7 4.6h2.5l-4-6.5 4-6.5h-2.5l-2.7 4.6-2.7-4.6h-2.5z"
        fill="#FFFFFF"
      />
    </svg>
  </div>
);

// 2. Minimalist AI Logo (Clean, elegant, non-childish)
const AiLogo = () => (
  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-zinc-900 border border-zinc-700/80 flex items-center justify-center shadow-lg shrink-0">
    <svg className="w-7 h-7 text-zinc-100" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3L14.2 8.8L20 11L14.2 13.2L12 19L9.8 13.2L4 11L9.8 8.8L12 3Z"
        fill="currentColor"
      />
      <circle cx="18" cy="6" r="1.5" fill="#A1A1AA" />
    </svg>
  </div>
);

// 3. Official Microsoft Power Query (ETL pipeline / Dataflow transform)
const PowerQueryLogo = () => (
  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#006651] border border-teal-400/40 flex items-center justify-center shadow-lg shrink-0 overflow-hidden">
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
      {/* Raw Source Table */}
      <rect x="3" y="4" width="7" height="16" rx="1.5" fill="#A3E6CD" opacity="0.9" />
      <path d="M5 8h3M5 12h3M5 16h3" stroke="#004D3C" strokeWidth="1.2" strokeLinecap="round" />
      {/* Transform Arrow */}
      <path d="M12 9l2.5 3L12 15" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Output Clean Table */}
      <rect x="16" y="4" width="5" height="16" rx="1.5" fill="#34D399" />
      <path d="M17.5 7h2M17.5 10h2M17.5 13h2M17.5 16h2" stroke="#004D3C" strokeWidth="1" strokeLinecap="round" />
    </svg>
  </div>
);

// 4. Official Microsoft Power Pivot (3D Relational Data Model Cube)
const PowerPivotLogo = () => (
  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#0C592E] border border-emerald-400/40 flex items-center justify-center shadow-lg shrink-0 overflow-hidden">
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
      {/* Top Face */}
      <path d="M12 3l7 3.5-7 3.5-7-3.5L12 3z" fill="#34D399" />
      {/* Left Face */}
      <path d="M5 6.5v8l7 4v-8.5L5 6.5z" fill="#107C41" />
      {/* Right Face */}
      <path d="M19 6.5v8l-7 4v-8.5l7-3.5z" fill="#095C3E" />
      {/* Data Model Relations */}
      <path d="M12 10v8.5M8.5 4.75l7 8.5M15.5 4.75l-7 8.5" stroke="#A7F3D0" strokeWidth="0.8" opacity="0.6" />
    </svg>
  </div>
);

// 5. Official Microsoft Power BI (3 Ascending Bars)
const PowerBiLogo = () => (
  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#18181B] border border-amber-400/40 flex items-center justify-center shadow-lg shrink-0">
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
      <rect x="5" y="12" width="3.2" height="8" rx="1" fill="#F2C811" />
      <rect x="10.4" y="8" width="3.2" height="12" rx="1" fill="#E8B007" />
      <rect x="15.8" y="4" width="3.2" height="16" rx="1" fill="#D39600" />
    </svg>
  </div>
);

// 6. SQL Database Engine
const SqlLogo = () => (
  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-zinc-900 border border-zinc-700/80 flex items-center justify-center shadow-lg shrink-0">
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="5" rx="7" ry="2.2" fill="#38BDF8" />
      <path d="M19 5v5c0 1.2-3.13 2.2-7 2.2s-7-1-7-2.2V5" stroke="#38BDF8" strokeWidth="1.5" />
      <path d="M19 10v5c0 1.2-3.13 2.2-7 2.2s-7-1-7-2.2v-5" stroke="#38BDF8" strokeWidth="1.5" />
      <ellipse cx="12" cy="10" rx="7" ry="2.2" fill="#0284C7" fillOpacity="0.3" />
      <ellipse cx="12" cy="15" rx="7" ry="2.2" fill="#0369A1" fillOpacity="0.5" />
    </svg>
  </div>
);

// 7. Official Python
const PythonLogo = () => (
  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-zinc-900 border border-zinc-700/80 flex items-center justify-center shadow-lg shrink-0">
    <svg className="w-8 h-8" viewBox="0 0 128 128" fill="none">
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

// Minimal Horizontal Connectors
const MinimalArrow = () => (
  <div className="flex items-center justify-center px-1 text-zinc-500">
    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </div>
);

const MinimalPlus = () => (
  <div className="flex items-center justify-center px-1">
    <span className="text-xl sm:text-2xl font-light text-zinc-500">+</span>
  </div>
);

// Vertical Upward Progression Arrow between Layers
const UpwardTransitionArrow = () => (
  <div className="flex items-center justify-center py-0.5 sm:py-1">
    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-400">
      <svg className="w-4 h-4 text-zinc-300 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
      </svg>
    </div>
  </div>
);

const SlideCareerTechLadder = () => {
  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 relative overflow-hidden bg-[#090A0D]">
      {/* Subtle Executive Matte Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(255,255,255,0.025),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto my-auto flex flex-col gap-3 sm:gap-4">
        
        {/* Title with question mark */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            How to really get a job?
          </h2>
        </motion.div>

        {/* 3-Tier Minimalist Premium Stack utilizing the full width & height */}
        <div className="flex flex-col gap-1.5 sm:gap-2 w-full">
          
          {/* ============================================================ */}
          {/* TIER 3: SQL + Python (Advanced Layer) */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-zinc-800/80 bg-zinc-900/60 px-5 py-3.5 sm:px-7 sm:py-4 md:py-5 backdrop-blur-md hover:border-zinc-700 transition-colors shadow-lg"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              
              {/* Layer Badge */}
              <div className="flex items-center gap-3.5 md:w-56 shrink-0">
                <div className="w-10 h-10 rounded-xl bg-zinc-800/90 border border-zinc-700/70 flex items-center justify-center text-sm font-mono font-bold text-zinc-200 shadow-inner">
                  03
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold">Layer 03</div>
                  <div className="text-base sm:text-lg font-bold text-white">Advanced Layer</div>
                </div>
              </div>

              {/* Tools Flow */}
              <div className="flex items-center justify-center flex-wrap gap-4 sm:gap-6 flex-1 py-1">
                
                {/* SQL */}
                <div className="flex items-center gap-3 bg-black/40 border border-zinc-800/90 rounded-xl px-4 py-2 hover:border-zinc-700 transition-colors">
                  <SqlLogo />
                  <div className="text-left">
                    <div className="text-base sm:text-lg font-bold text-white">SQL</div>
                    <div className="text-xs text-zinc-400 font-medium">Relational Data</div>
                  </div>
                </div>

                <MinimalPlus />

                {/* Python */}
                <div className="flex items-center gap-3 bg-black/40 border border-zinc-800/90 rounded-xl px-4 py-2 hover:border-zinc-700 transition-colors">
                  <PythonLogo />
                  <div className="text-left">
                    <div className="text-base sm:text-lg font-bold text-white">Python</div>
                    <div className="text-xs text-zinc-400 font-medium">Automation & Code</div>
                  </div>
                </div>

              </div>

              {/* Status Pill */}
              <div className="hidden md:flex items-center justify-end md:w-48 shrink-0">
                <span className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-zinc-800/80 text-zinc-300 border border-zinc-700/60">
                  Scale & Automation
                </span>
              </div>

            </div>
          </motion.div>

          {/* Upward Arrow from Layer 2 ➔ Layer 3 */}
          <UpwardTransitionArrow />

          {/* ============================================================ */}
          {/* TIER 2: Power Query ➔ Power Pivot ➔ Power BI */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-2xl border border-zinc-800/80 bg-zinc-900/60 px-5 py-3.5 sm:px-7 sm:py-4 md:py-5 backdrop-blur-md hover:border-zinc-700 transition-colors shadow-lg"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              
              {/* Layer Badge */}
              <div className="flex items-center gap-3.5 md:w-56 shrink-0">
                <div className="w-10 h-10 rounded-xl bg-zinc-800/90 border border-zinc-700/70 flex items-center justify-center text-sm font-mono font-bold text-zinc-200 shadow-inner">
                  02
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold">Layer 02</div>
                  <div className="text-base sm:text-lg font-bold text-white">Specialized Software</div>
                </div>
              </div>

              {/* Tools Flow */}
              <div className="flex items-center justify-center flex-wrap gap-2.5 sm:gap-3.5 flex-1 py-1">
                
                {/* Power Query */}
                <div className="flex items-center gap-2.5 bg-black/40 border border-zinc-800/90 rounded-xl px-3 py-2 hover:border-zinc-700 transition-colors">
                  <PowerQueryLogo />
                  <div className="text-left">
                    <div className="text-sm sm:text-base font-bold text-white">Power Query</div>
                    <div className="text-xs text-zinc-400 font-medium">ETL Pipeline</div>
                  </div>
                </div>

                <MinimalArrow />

                {/* Power Pivot */}
                <div className="flex items-center gap-2.5 bg-black/40 border border-zinc-800/90 rounded-xl px-3 py-2 hover:border-zinc-700 transition-colors">
                  <PowerPivotLogo />
                  <div className="text-left">
                    <div className="text-sm sm:text-base font-bold text-white">Power Pivot</div>
                    <div className="text-xs text-zinc-400 font-medium">Data Modeling & DAX</div>
                  </div>
                </div>

                <MinimalArrow />

                {/* Power BI */}
                <div className="flex items-center gap-2.5 bg-black/40 border border-zinc-800/90 rounded-xl px-3 py-2 hover:border-zinc-700 transition-colors">
                  <PowerBiLogo />
                  <div className="text-left">
                    <div className="text-sm sm:text-base font-bold text-white">Power BI</div>
                    <div className="text-xs text-zinc-400 font-medium">Dashboards</div>
                  </div>
                </div>

              </div>

              {/* Status Pill */}
              <div className="hidden md:flex items-center justify-end md:w-48 shrink-0">
                <span className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-zinc-800/80 text-zinc-300 border border-zinc-700/60">
                  BI Pipeline Stack
                </span>
              </div>

            </div>
          </motion.div>

          {/* Upward Arrow from Layer 1 ➔ Layer 2 */}
          <UpwardTransitionArrow />

          {/* ============================================================ */}
          {/* TIER 1: Excel + AI (Gateway to the Industry) */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-zinc-800/80 bg-zinc-900/60 px-5 py-3.5 sm:px-7 sm:py-4 md:py-5 backdrop-blur-md hover:border-zinc-700 transition-colors shadow-lg"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              
              {/* Layer Badge */}
              <div className="flex items-center gap-3.5 md:w-56 shrink-0">
                <div className="w-10 h-10 rounded-xl bg-zinc-800/90 border border-zinc-700/70 flex items-center justify-center text-sm font-mono font-bold text-zinc-200 shadow-inner">
                  01
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold">Layer 01 · Base</div>
                  <div className="text-base sm:text-lg font-bold text-white">Industry Gateway</div>
                </div>
              </div>

              {/* Tools Flow */}
              <div className="flex items-center justify-center flex-wrap gap-4 sm:gap-6 flex-1 py-1">
                
                {/* Excel */}
                <div className="flex items-center gap-3 bg-black/40 border border-zinc-800/90 rounded-xl px-4 py-2 hover:border-zinc-700 transition-colors">
                  <ExcelLogo />
                  <div className="text-left">
                    <div className="text-base sm:text-lg font-bold text-white">Excel</div>
                    <div className="text-xs text-zinc-400 font-medium">Core Foundation</div>
                  </div>
                </div>

                <MinimalPlus />

                {/* AI */}
                <div className="flex items-center gap-3 bg-black/40 border border-zinc-800/90 rounded-xl px-4 py-2 hover:border-zinc-700 transition-colors">
                  <AiLogo />
                  <div className="text-left">
                    <div className="text-base sm:text-lg font-bold text-white">AI</div>
                    <div className="text-xs text-zinc-400 font-medium">Productivity & Prompts</div>
                  </div>
                </div>

              </div>

              {/* Status Pill */}
              <div className="hidden md:flex items-center justify-end md:w-48 shrink-0">
                <span className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-emerald-950/40 text-emerald-300 border border-emerald-800/60">
                  Basic · Mandatory
                </span>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default SlideCareerTechLadder;
