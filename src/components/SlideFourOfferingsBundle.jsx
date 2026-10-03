import { motion } from 'framer-motion';
import { assetPath } from '../utils/assetPath';

const SlideFourOfferingsBundle = () => {
  const offerings = [
    {
      number: '01',
      title: 'Basic to Advanced Excel',
      subtitle: 'Complete Core & Modern Spreadsheets',
      badge: 'Foundation',
      badgeColor: 'border-emerald-500/30 bg-emerald-500/15 text-emerald-300',
      border: 'border-emerald-500/30 hover:border-emerald-400/60',
      glow: 'shadow-[0_0_25px_rgba(16,185,129,0.12)]',
      icon: (
        <img
          src={assetPath('images/logos/excel-logo.png')}
          alt="Excel"
          className="w-7 h-7 object-contain drop-shadow-md"
        />
      ),
      items: [
        '150+ Most Important Formulas & Functions',
        'Advanced XLOOKUP, INDEX+MATCH, FILTER, UNIQUE',
        'Power Query Automated Data Cleaning (ETL)',
        'C-Suite Interactive Visual Dashboards',
      ],
      valEstimate: '₹6,000',
    },
    {
      number: '02',
      title: 'Excel + AI Integration',
      subtitle: '10x Speed & Smart Analysis Tools',
      badge: 'AI Multiplier',
      badgeColor: 'border-amber-500/30 bg-amber-500/15 text-amber-300',
      border: 'border-amber-500/30 hover:border-amber-400/60',
      glow: 'shadow-[0_0_25px_rgba(245,158,11,0.12)]',
      icon: (
        <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-base">
          ⚡
        </div>
      ),
      items: [
        'Famous AI Copilots: ChatGPT, Google Gemini, Claude',
        'Specialized Data AI: Julius AI, Akkio, Brixx AI',
        'Instant Statistical Analysis & Auto-Cleaning',
        'Turn Complex Logic into Instant Prompts',
      ],
      valEstimate: '₹6,000',
    },
    {
      number: '03',
      title: 'Workflow Automation',
      subtitle: 'Autonomous Pipelines & Zero Manual Work',
      badge: 'Peak Tier',
      badgeColor: 'border-sky-500/30 bg-sky-500/15 text-sky-300',
      border: 'border-sky-500/30 hover:border-sky-400/60',
      glow: 'shadow-[0_0_25px_rgba(56,189,248,0.12)]',
      icon: (
        <div className="w-7 h-7 rounded-lg bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-base">
          🤖
        </div>
      ),
      items: [
        'Google AntiGravity Next-Gen Agentic IDE',
        'VS Code + Codeium for Python & Scripting',
        'Claude Co-Work for 24/7 Data Reporting',
        'Hands-off Multi-File Automated Pipelines',
      ],
      valEstimate: '₹7,000',
    },
    {
      number: '04',
      title: 'Job Roadmap + Freelancing',
      subtitle: 'End-to-End Monetization & Career Launch',
      badge: 'Placement & Income',
      badgeColor: 'border-purple-500/30 bg-purple-500/15 text-purple-300',
      border: 'border-purple-500/30 hover:border-purple-400/60',
      glow: 'shadow-[0_0_25px_rgba(168,85,247,0.12)]',
      icon: (
        <div className="w-7 h-7 rounded-lg bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-base">
          💼
        </div>
      ),
      items: [
        'ATS-Friendly Resume Scoring 90%+',
        'Real-Life Portfolio Business Projects',
        'Live Technical Excel Interview Prep',
        'Upwork & Global Freelancing Client Roadmap',
      ],
      valEstimate: '₹6,000',
    },
  ];

  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-5 relative overflow-hidden bg-[#090A0D]">
      {/* Radiant Background Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(245,158,11,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-amber-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-emerald-500/[0.04] rounded-full blur-[140px] pointer-events-none" />

      {/* Header Bar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex items-center justify-between pb-2 sm:pb-2.5 border-b border-zinc-800/80 shrink-0">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <div className="h-2.5 w-2.5 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.6)]" />
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
            Complete Career Transformation Package
          </h2>
          <span className="hidden sm:inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700">
            4 Core Pillars
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30">
            ALL-IN-ONE ECOSYSTEM
          </span>
        </motion.div>
      </div>

      {/* Main Content: 4 Offerings Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 min-h-0 py-2 sm:py-3 flex flex-col justify-between gap-3 sm:gap-3.5">
        
        {/* 4 Offering Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 flex-1 min-h-0 items-stretch">
          {offerings.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + idx * 0.08 }}
              className={`rounded-2xl border bg-zinc-900/60 p-3.5 sm:p-4 flex flex-col justify-between transition-all duration-300 ${item.border} ${item.glow} group hover:bg-zinc-900/90`}
            >
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <span className="text-xs font-mono font-bold text-zinc-400">
                      #{item.number}
                    </span>
                  </div>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="font-display text-sm sm:text-base font-bold text-white mb-0.5 leading-snug">
                  {item.title}
                </h3>
                <span className="text-[11px] text-zinc-400 block mb-3 font-medium">
                  {item.subtitle}
                </span>

                {/* Items List */}
                <div className="space-y-1.5 text-xs text-zinc-300">
                  {item.items.map((it) => (
                    <div key={it} className="flex items-start gap-1.5">
                      <span className="text-amber-400 font-bold text-xs mt-0.5">✓</span>
                      <span className="leading-snug text-zinc-300 text-[11px] sm:text-xs">{it}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Individual Value Tag */}
              <div className="mt-3 pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[11px]">
                <span className="text-zinc-500">Stand-alone Value:</span>
                <span className="font-mono font-bold text-zinc-400 line-through">
                  {item.valEstimate}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Massive Value Banner (Around ₹25,000 Total Price) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-2xl border-2 border-amber-500/40 bg-gradient-to-r from-amber-950/40 via-[#16120B] to-zinc-950/95 p-3.5 sm:p-4.5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl relative overflow-hidden shrink-0"
        >
          <div className="absolute top-0 right-0 w-36 h-full bg-gradient-to-l from-amber-500/10 to-transparent pointer-events-none" />

          <div className="flex items-center gap-3 text-left">
            <div className="w-11 h-11 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-2xl shadow-[0_0_20px_rgba(245,158,11,0.4)] shrink-0">
              💎
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">
                  TOTAL VALUE BUNDLE
                </span>
                <span className="text-xs text-zinc-400 font-medium hidden sm:inline">
                  Excel + AI + Automation + Job & Freelance
                </span>
              </div>
              <h4 className="font-display text-base sm:text-lg font-bold text-white mt-0.5">
                Total Real-World Program Value
              </h4>
            </div>
          </div>

          <div className="flex items-baseline gap-2 shrink-0">
            <span className="text-xs text-zinc-400 uppercase font-mono font-semibold">Total Price:</span>
            <div className="text-right">
              <span className="font-display text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 drop-shadow-[0_4px_20px_rgba(245,158,11,0.4)]">
                ₹25,000
              </span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Footer Nav Bar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex items-center justify-between pt-2 sm:pt-2.5 border-t border-zinc-800/80 shrink-0 text-zinc-400 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-amber-400 font-bold">4 Offerings:</span>
          <span>1. Excel Mastery</span>
          <span className="text-zinc-600">•</span>
          <span>2. Excel + AI</span>
          <span className="text-zinc-600">•</span>
          <span>3. Workflow Automation</span>
          <span className="text-zinc-600">•</span>
          <span>4. Job & Freelance</span>
        </div>
        <div className="hidden sm:block font-mono text-[11px] text-zinc-500">
          Everything You Need In One Complete Bundle &rarr;
        </div>
      </div>
    </section>
  );
};

export default SlideFourOfferingsBundle;
