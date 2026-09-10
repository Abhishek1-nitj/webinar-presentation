import { motion } from 'framer-motion';

// Crisp Official Vector Brand Logos
const PythonLogo = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 128 128" fill="none">
    <path
      d="M63.5 13c-27.2 0-25.5 11.8-25.5 11.8l.03 12.2h26v3.7H27.5C10.8 40.7 11 58.7 11 58.7s-.2 10.6 6.8 17.5c6.8 6.7 15.8 7 15.8 7v-10.7s-.9-12.7 12.5-12.7h23.8s11.5.2 11.5-11.2V24.5S83 13 63.5 13zm-13.8 7.3a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4z"
      fill="url(#py-blue)"
    />
    <path
      d="M64.5 115c27.2 0 25.5-11.8 25.5-11.8l-.03-12.2h-26v-3.7h36.5c16.7 0 16.5-18 16.5-18s.2-10.6-6.8-17.5c-6.8-6.7-15.8-7-15.8-7v10.7s.9 12.7-12.5 12.7H58s-11.5-.2-11.5 11.2v23.4S45 115 64.5 115zm13.8-7.3a4.2 4.2 0 1 1 0-8.4 4.2 4.2 0 0 1 0 8.4z"
      fill="url(#py-yellow)"
    />
    <defs>
      <linearGradient id="py-blue" x1="11" y1="13" x2="83" y2="85" gradientUnits="userSpaceOnUse">
        <stop stopColor="#387EB8" />
        <stop offset="1" stopColor="#366994" />
      </linearGradient>
      <linearGradient id="py-yellow" x1="45" y1="43" x2="117" y2="115" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFE873" />
        <stop offset="1" stopColor="#FFD43B" />
      </linearGradient>
    </defs>
  </svg>
);

const SqlLogo = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
    <ellipse cx="12" cy="5" rx="9" ry="3" fill="#336791" />
    <path d="M21 5v6c0 1.66-4.03 3-9 3s-9-1.34-9-3V5" stroke="#4B8BBE" strokeWidth="1.5" />
    <path d="M21 11v6c0 1.66-4.03 3-9 3s-9-1.34-9-3v-6" stroke="#4B8BBE" strokeWidth="1.5" />
    <ellipse cx="12" cy="11" rx="9" ry="3" fill="#295477" fillOpacity="0.4" />
    <ellipse cx="12" cy="17" rx="9" ry="3" fill="#1F425F" fillOpacity="0.6" />
  </svg>
);

const PowerQueryLogo = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="3" width="20" height="18" rx="3.5" fill="#0E7A53" />
    <path d="M6 8h12M6 12h12M6 16h12" stroke="#A3E6CD" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="5" y="6.5" width="4" height="11" rx="1.5" fill="#095C3E" fillOpacity="0.8" />
    <path d="M14 6.5v11" stroke="#A3E6CD" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const PowerBiLogo = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="4" fill="#18181B" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
    <rect x="6" y="13" width="3" height="6" rx="1" fill="#F2C811" />
    <rect x="10.5" y="9" width="3" height="10" rx="1" fill="#E8B007" />
    <rect x="15" y="5" width="3" height="14" rx="1" fill="#D39600" />
  </svg>
);

const ExcelAiLogo = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="3" width="14" height="18" rx="2.5" fill="#107C41" />
    <path d="M6 8.5l6 7M12 8.5l-6 7" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <g transform="translate(13, 2)">
      <path
        d="M5 0L6.2 3.8L10 5L6.2 6.2L5 10L3.8 6.2L0 5L3.8 3.8L5 0Z"
        fill="#FDE047"
      />
    </g>
  </svg>
);

const toolsData = [
  {
    name: 'Python',
    logo: PythonLogo,
    avg: '₹36,333',
    range: '₹30,000 – ₹44,000',
    progressWidth: '88%',
  },
  {
    name: 'SQL',
    logo: SqlLogo,
    avg: '₹22,480',
    range: '₹13,900 – ₹35,000',
    progressWidth: '58%',
  },
  {
    name: 'Power Query',
    logo: PowerQueryLogo,
    avg: '₹17,500',
    range: '₹17,500 flat',
    progressWidth: '45%',
  },
  {
    name: 'Power BI',
    logo: PowerBiLogo,
    avg: '₹13,498',
    range: '₹8,000 – ₹17,999',
    progressWidth: '35%',
  },
  {
    name: 'Advanced Excel + AI',
    logo: ExcelAiLogo,
    avg: '₹13,100',
    range: '₹9,999 – ₹15,000',
    progressWidth: '34%',
  },
];

const SlideStackCostBenchmark = () => {
  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 relative overflow-hidden bg-[#07080A]">
      {/* Refined Executive Backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.12),rgba(255,255,255,0))]" />
      <div className="absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-amber-500/[0.04] blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-blue-500/[0.04] blur-[160px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto space-y-4 sm:space-y-5 my-auto">
        
        {/* Clean Header */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Cost of Learning Tools <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300">Separately</span>
          </h2>
        </motion.div>

        {/* 2-Column Compact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
          
          {/* Left Hero Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 rounded-2xl sm:rounded-3xl border border-white/[0.1] bg-gradient-to-b from-[#12141A]/90 via-[#0D0E12]/95 to-[#08090C] p-5 sm:p-6 md:p-7 flex flex-col justify-center gap-4 sm:gap-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
          >
            {/* Main Combined Price */}
            <div className="space-y-1 sm:space-y-1.5">
              <div className="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-medium text-white/45 font-mono">
                Average Combined Market Price
              </div>
              <div className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_20px_rgba(255,255,255,0.15)]">
                ₹1,02,911
              </div>
              <div className="text-xs sm:text-sm font-semibold text-amber-200/70 font-mono tracking-wide">
                ≈ ₹1.03 Lakh Out-of-Pocket
              </div>
            </div>

            {/* Shifted Upwards: Premium Max Stack Box */}
            <div className="rounded-xl sm:rounded-2xl border border-white/[0.08] bg-white/[0.025] p-3.5 sm:p-4">
              <div className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                Premium Max Stack
              </div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-white/90 mt-0.5 font-mono">
                ₹1,29,499
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean Tools Breakdown (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-[#0E1015]/80 p-4 sm:p-5 md:p-6 flex flex-col justify-center gap-2.5 sm:gap-3 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
          >
            {/* List of 5 Tools */}
            <div className="space-y-2 sm:space-y-2.5">
              {toolsData.map((item, index) => {
                const LogoComponent = item.logo;
                return (
                  <div
                    key={item.name}
                    className="group rounded-xl sm:rounded-2xl border border-white/[0.04] bg-white/[0.015] hover:bg-white/[0.035] hover:border-white/[0.08] px-3 py-2 sm:py-2.5 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between gap-2.5">
                      {/* Left: Logo & Name */}
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg sm:rounded-xl border border-white/[0.08] bg-[#141720]/80">
                          <LogoComponent />
                        </div>
                        <div className="min-w-0">
                          <div className="font-semibold text-white/90 text-xs sm:text-sm tracking-tight truncate">
                            {item.name}
                          </div>
                          <div className="text-[10px] font-mono text-white/40">
                            Range: {item.range}
                          </div>
                        </div>
                      </div>

                      {/* Right: Average Price */}
                      <div className="text-right shrink-0">
                        <div className="font-display text-sm sm:text-base font-bold text-white font-mono">
                          {item.avg}
                        </div>
                        <div className="text-[9px] font-mono text-amber-300/70">
                          avg. fee
                        </div>
                      </div>
                    </div>

                    {/* Minimalist Micro Bar */}
                    <div className="mt-1.5 h-1 w-full rounded-full bg-white/[0.04] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: item.progressWidth }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.85, delay: 0.15 + index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full bg-gradient-to-r from-amber-400/70 to-amber-200/90"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SlideStackCostBenchmark;
