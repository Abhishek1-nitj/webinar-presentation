import { motion } from 'framer-motion';

// --- Authentic & High-Definition Official Brand Logos ---

// 1. Microsoft Power Query (Automated ETL & Data Prep)
const PowerQueryLogo = () => (
  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#006651] border border-teal-400/40 flex items-center justify-center shadow-[0_8px_30px_rgba(0,102,81,0.4)] shrink-0 overflow-hidden">
    <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="7" height="16" rx="1.5" fill="#A3E6CD" opacity="0.9" />
      <path d="M5 8h3M5 12h3M5 16h3" stroke="#004D3C" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M12 9l2.5 3L12 15" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="16" y="4" width="5" height="16" rx="1.5" fill="#34D399" />
      <path d="M17.5 7h2M17.5 10h2M17.5 13h2M17.5 16h2" stroke="#004D3C" strokeWidth="1" strokeLinecap="round" />
    </svg>
  </div>
);

// 2. Microsoft Power BI (Enterprise Visual Dashboards)
const PowerBiLogo = () => (
  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#18181B] border border-amber-400/40 flex items-center justify-center shadow-[0_8px_30px_rgba(245,158,11,0.3)] shrink-0">
    <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 24 24" fill="none">
      <rect x="5" y="12" width="3.2" height="8" rx="1" fill="#F2C811" />
      <rect x="10.4" y="8" width="3.2" height="12" rx="1" fill="#E8B007" />
      <rect x="15.8" y="4" width="3.2" height="16" rx="1" fill="#D39600" />
    </svg>
  </div>
);

// 3. SQL Relational Database Engine
const SqlLogo = () => (
  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-zinc-900 border border-sky-400/40 flex items-center justify-center shadow-[0_8px_30px_rgba(56,189,248,0.3)] shrink-0">
    <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="5" rx="7" ry="2.2" fill="#38BDF8" />
      <path d="M19 5v5c0 1.2-3.13 2.2-7 2.2s-7-1-7-2.2V5" stroke="#38BDF8" strokeWidth="1.5" />
      <path d="M19 10v5c0 1.2-3.13 2.2-7 2.2s-7-1-7-2.2v-5" stroke="#38BDF8" strokeWidth="1.5" />
      <ellipse cx="12" cy="10" rx="7" ry="2.2" fill="#0284C7" fillOpacity="0.3" />
      <ellipse cx="12" cy="15" rx="7" ry="2.2" fill="#0369A1" fillOpacity="0.5" />
    </svg>
  </div>
);

// 4. Official Python Programming & Automation
const PythonLogo = () => (
  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-zinc-900 border border-blue-400/40 flex items-center justify-center shadow-[0_8px_30px_rgba(56,126,184,0.3)] shrink-0">
    <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 128 128" fill="none">
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

const SlideAccessHighEndTools = () => {
  const tools = [
    {
      name: 'Power Query',
      tagline: 'Automated ETL & Data Prep',
      description: 'Clean, reshape & combine millions of rows with 0 manual steps',
      logo: <PowerQueryLogo />,
      accentBorder: 'border-teal-500/40 hover:border-teal-400',
      gradient: 'from-teal-950/40 via-zinc-900/90 to-zinc-950/95',
      badge: 'Data Cleaning',
      badgeColor: 'border-teal-500/30 bg-teal-500/15 text-teal-300',
    },
    {
      name: 'Power BI',
      tagline: 'Enterprise Visual Dashboards',
      description: 'Interactive executive reporting & modern data storytelling',
      logo: <PowerBiLogo />,
      accentBorder: 'border-amber-500/40 hover:border-amber-400',
      gradient: 'from-amber-950/40 via-zinc-900/90 to-zinc-950/95',
      badge: 'Dashboards',
      badgeColor: 'border-amber-500/30 bg-amber-500/15 text-amber-300',
    },
    {
      name: 'SQL',
      tagline: 'Relational Database Queries',
      description: 'Query enterprise production databases with speed & scale',
      logo: <SqlLogo />,
      accentBorder: 'border-sky-500/40 hover:border-sky-400',
      gradient: 'from-sky-950/40 via-zinc-900/90 to-zinc-950/95',
      badge: 'Databases',
      badgeColor: 'border-sky-500/30 bg-sky-500/15 text-sky-300',
    },
    {
      name: 'Python',
      tagline: 'Automation & Analytics Scripts',
      description: 'Automate repetitive workflows, pandas dataframes & smart scripts',
      logo: <PythonLogo />,
      accentBorder: 'border-blue-500/40 hover:border-blue-400',
      gradient: 'from-blue-950/40 via-zinc-900/90 to-zinc-950/95',
      badge: 'Automation',
      badgeColor: 'border-blue-500/30 bg-blue-500/15 text-blue-300',
    },
  ];

  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 py-6 relative overflow-hidden bg-[#07080B]">
      {/* Cinematic Ambient Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(16,185,129,0.06),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/[0.06] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/[0.06] rounded-full blur-[180px] pointer-events-none" />

      {/* Modern Studio Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center my-auto space-y-6 sm:space-y-8">
        
        {/* Top Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center w-full"
        >
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight whitespace-nowrap">
            Access to Other{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 drop-shadow-[0_4px_30px_rgba(16,185,129,0.4)]">
              High-End Tools
            </span>
          </h1>
        </motion.div>

        {/* 4 Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 w-full">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`flex flex-col items-center text-center rounded-3xl border ${tool.accentBorder} bg-gradient-to-b ${tool.gradient} p-5 sm:p-6 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:scale-[1.03] group relative overflow-hidden`}
            >
              {/* Top Laser Accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

              {/* Logo */}
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {tool.logo}
              </div>

              {/* Tool Badge */}
              <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border mb-2 ${tool.badgeColor}`}>
                {tool.badge}
              </span>

              {/* Tool Name */}
              <h3 className="font-display text-xl sm:text-2xl font-black text-white tracking-tight mb-1">
                {tool.name}
              </h3>

              {/* Tagline */}
              <p className="text-xs sm:text-sm font-semibold text-zinc-300 mb-2">
                {tool.tagline}
              </p>

              {/* Description */}
              <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed font-normal">
                {tool.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SlideAccessHighEndTools;
