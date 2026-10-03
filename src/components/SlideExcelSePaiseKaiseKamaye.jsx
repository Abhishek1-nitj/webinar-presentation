import { motion } from 'framer-motion';
import { assetPath } from '../utils/assetPath';

const SlideExcelSePaiseKaiseKamaye = () => {
  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col justify-between px-4 sm:px-8 md:px-12 lg:px-14 py-4 sm:py-5 relative overflow-hidden bg-[#090A0D]">
      {/* Background Lighting & Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(245,158,11,0.06),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-emerald-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-amber-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-sky-500/[0.04] rounded-full blur-[140px] pointer-events-none" />

      {/* Header Bar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex items-center justify-between pb-2.5 sm:pb-3 border-b border-zinc-800/80 shrink-0">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.6)]" />
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
            Excel Se Paise Kaise Kamaye?
          </h2>
          <span className="hidden sm:inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700">
            3-Step Complete Blueprint
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex items-center gap-2"
        >
          <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
            FOUNDATION &rarr; AI &rarr; AUTOMATION
          </span>
        </motion.div>
      </div>

      {/* Main 3-Column Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 min-h-0 py-2 sm:py-3 grid grid-cols-1 lg:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5 items-stretch">
        
        {/* ================= STEP 1: Learn Excel (Basic to Advanced) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-zinc-900/90 via-[#0B1411] to-zinc-950/95 p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden group hover:border-emerald-400/50 transition-all shadow-xl"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full pointer-events-none" />

          {/* Top Badge & Number */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono font-bold tracking-wider px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                STEP 01
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400/80">
                Foundation
              </span>
            </div>

            {/* Title & Excel Logo Header */}
            <div className="flex items-center gap-3 mb-3">
              <img
                src={assetPath('images/logos/excel-logo.png')}
                alt="Excel"
                className="w-10 h-10 object-contain drop-shadow-[0_0_15px_rgba(16,185,129,0.5)] shrink-0"
              />
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-tight">
                  Learn Excel
                </h3>
                <span className="text-xs text-emerald-300 font-semibold">
                  Basic to Advanced Mastery
                </span>
              </div>
            </div>

            {/* Big Highlight Pill */}
            <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/20 mb-3 text-center">
              <span className="text-sm sm:text-base font-extrabold text-white block">
                7 Step Framework
              </span>
            </div>

            {/* Breakdown List */}
            <div className="space-y-1.5 text-xs text-zinc-300">
              <div className="flex items-start gap-2 p-2 rounded-lg bg-zinc-900/50 border border-zinc-800/80">
                <span className="text-emerald-400 font-bold">✓</span>
                <div>
                  <span className="font-bold text-white">Core & Math:</span> SUMIFS, COUNTIFS, AVERAGEIFS, ROUND
                </div>
              </div>
              <div className="flex items-start gap-2 p-2 rounded-lg bg-zinc-900/50 border border-zinc-800/80">
                <span className="text-emerald-400 font-bold">✓</span>
                <div>
                  <span className="font-bold text-white">Advanced Lookups:</span> XLOOKUP, INDEX+MATCH, FILTER, UNIQUE
                </div>
              </div>
              <div className="flex items-start gap-2 p-2 rounded-lg bg-zinc-900/50 border border-zinc-800/80">
                <span className="text-emerald-400 font-bold">✓</span>
                <div>
                  <span className="font-bold text-white">Data Engine:</span> Power Query ETL & Dynamic Array Formulas
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Pillar Outcome */}
          <div className="mt-3 pt-2.5 border-t border-zinc-800/80 flex items-center justify-between text-[11px]">
            <span className="text-zinc-400">Target Outcome:</span>
            <span className="font-bold text-emerald-300">Job-Ready Base Skills</span>
          </div>
        </motion.div>

        {/* ================= STEP 2: Excel + AI ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl border-2 border-amber-500/40 bg-gradient-to-b from-amber-950/20 via-[#13110C] to-zinc-950/95 p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden group hover:border-amber-400/60 transition-all shadow-xl shadow-amber-500/5"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-full pointer-events-none" />

          {/* Top Badge & Number */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono font-bold tracking-wider px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-400/40">
                STEP 02
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400/90">
                AI Multiplier
              </span>
            </div>

            {/* Title Header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-xl shadow-[0_0_15px_rgba(245,158,11,0.3)] shrink-0">
                ⚡
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-tight">
                  Excel + AI
                </h3>
                <span className="text-xs text-amber-300 font-semibold">
                  10x Speed & Smart Analysis
                </span>
              </div>
            </div>

            {/* Group 1: Famous Tools */}
            <div className="mb-2.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold block mb-1.5">
                Famous AI Assistants
              </span>
              <div className="grid grid-cols-3 gap-1.5">
                {/* ChatGPT */}
                <div className="p-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 flex items-center gap-1.5">
                  <img
                    src={assetPath('Gen AI Tools/ChatGPT (OpenAI).png')}
                    alt="ChatGPT"
                    className="w-4 h-4 object-contain shrink-0"
                  />
                  <span className="text-[11px] font-bold text-zinc-200 truncate">ChatGPT</span>
                </div>
                {/* Gemini */}
                <div className="p-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 flex items-center gap-1.5">
                  <img
                    src={assetPath('Gen AI Tools/Google Gemini.webp')}
                    alt="Gemini"
                    className="w-4 h-4 object-contain shrink-0"
                  />
                  <span className="text-[11px] font-bold text-zinc-200 truncate">Gemini</span>
                </div>
                {/* Claude */}
                <div className="p-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 flex items-center gap-1.5">
                  <img
                    src={assetPath('Gen AI Tools/Claude (Anthropic).png')}
                    alt="Claude"
                    className="w-4 h-4 object-contain shrink-0"
                  />
                  <span className="text-[11px] font-bold text-zinc-200 truncate">Claude</span>
                </div>
              </div>
            </div>

            {/* Group 2: Specialized Data AI */}
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold block mb-1.5">
                Specialized Data AI Tools
              </span>
              <div className="grid grid-cols-2 gap-1.5">
                {/* Julius AI */}
                <div className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 flex items-center gap-2">
                  <img
                    src={assetPath('images/ai-tools/Julius AI.webp')}
                    alt="Julius AI"
                    className="w-4 h-4 object-contain shrink-0 rounded"
                  />
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold text-white block truncate">Julius AI</span>
                    <span className="text-[9px] text-zinc-500 block truncate">Auto-Analysis</span>
                  </div>
                </div>

                {/* Akkio */}
                <div className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 flex items-center gap-2">
                  <img
                    src={assetPath('AI Tools/akkio.png')}
                    alt="Akkio"
                    className="w-4 h-4 object-contain shrink-0"
                  />
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold text-white block truncate">Akkio</span>
                    <span className="text-[9px] text-zinc-500 block truncate">Predictive AI</span>
                  </div>
                </div>

                {/* Brixx AI */}
                <div className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 flex items-center gap-2">
                  <img
                    src={assetPath('images/ai-tools/Bricks AI.jpeg')}
                    alt="Brixx AI"
                    className="w-4 h-4 object-contain shrink-0 rounded"
                  />
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold text-white block truncate">Brixx AI</span>
                    <span className="text-[9px] text-zinc-500 block truncate">Visual Reports</span>
                  </div>
                </div>

                {/* Data Squirrel */}
                <div className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 flex items-center gap-2">
                  <img
                    src={assetPath('images/ai-tools/datasquirrel-ai.webp')}
                    alt="Data Squirrel"
                    className="w-4 h-4 object-contain shrink-0 rounded"
                  />
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold text-white block truncate">Data Squirrel</span>
                    <span className="text-[9px] text-zinc-500 block truncate">Instant Charts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Pillar Outcome */}
          <div className="mt-3 pt-2.5 border-t border-zinc-800/80 flex items-center justify-between text-[11px]">
            <span className="text-zinc-400">Target Outcome:</span>
            <span className="font-bold text-amber-300">10x Output in 1/10th Time</span>
          </div>
        </motion.div>

        {/* ================= STEP 3: Workflow Automation ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-2xl border border-sky-500/30 bg-gradient-to-b from-zinc-900/90 via-[#0A121A] to-zinc-950/95 p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden group hover:border-sky-400/50 transition-all shadow-xl"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/5 rounded-bl-full pointer-events-none" />

          {/* Top Badge & Number */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono font-bold tracking-wider px-2.5 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">
                STEP 03
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400/90">
                Peak Tier
              </span>
            </div>

            {/* Title Header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-xl shadow-[0_0_15px_rgba(56,189,248,0.3)] shrink-0">
                🤖
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-tight">
                  Workflow Automation
                </h3>
                <span className="text-xs text-sky-300 font-semibold">
                  Zero Manual Work & Agentic Pipelines
                </span>
              </div>
            </div>

            {/* Automation Tools Stack */}
            <div className="space-y-2 mb-2">
              {/* Tool 1: Google AntiGravity */}
              <div className="p-2.5 rounded-xl bg-zinc-900/80 border border-sky-500/20 flex items-center gap-3">
                <img
                  src={assetPath('AI Tools/google-antigravity.png')}
                  alt="Google AntiGravity"
                  className="w-7 h-7 object-contain rounded shrink-0 drop-shadow-[0_0_8px_rgba(56,189,248,0.3)]"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white truncate">Google AntiGravity</span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-sky-500/15 text-sky-300 border border-sky-500/30">
                      IDE
                    </span>
                  </div>
                  <span className="text-[10px] text-zinc-400 block truncate">
                    Autonomous AI Data Workflows & Pipelines
                  </span>
                </div>
              </div>

              {/* Tool 2: VS Code + Codeium */}
              <div className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center gap-3">
                <img
                  src={assetPath('AI Tools/visual-studio-code.svg')}
                  alt="VS Code + Codeium"
                  className="w-7 h-7 object-contain shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white truncate">VS Code + Codeium</span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                      Code AI
                    </span>
                  </div>
                  <span className="text-[10px] text-zinc-400 block truncate">
                    Formula Scripting & Python Data Prep
                  </span>
                </div>
              </div>

              {/* Tool 3: Claude Co-Work */}
              <div className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center gap-3">
                <img
                  src={assetPath('AI Tools/claude-code.svg')}
                  alt="Claude Co-Work"
                  className="w-7 h-7 object-contain shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white truncate">Claude Co-Work</span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                      Agentic
                    </span>
                  </div>
                  <span className="text-[10px] text-zinc-400 block truncate">
                    Automated Reporting & Smart Teammate
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Pillar Outcome */}
          <div className="mt-3 pt-2.5 border-t border-zinc-800/80 flex items-center justify-between text-[11px]">
            <span className="text-zinc-400">Target Outcome:</span>
            <span className="font-bold text-sky-300">High-Ticket Freelancing & Elite Roles</span>
          </div>
        </motion.div>

      </div>

      {/* Footer Bar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex items-center justify-between pt-2.5 sm:pt-3 border-t border-zinc-800/80 shrink-0 text-zinc-400 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span className="font-medium text-zinc-300">
            Combine in teenon ko to build an unstoppable career
          </span>
        </div>
        <div className="hidden sm:block font-mono text-[11px] text-zinc-500">
          Excel Mastery • AI Tools • Workflow Automation
        </div>
      </div>
    </section>
  );
};

export default SlideExcelSePaiseKaiseKamaye;
