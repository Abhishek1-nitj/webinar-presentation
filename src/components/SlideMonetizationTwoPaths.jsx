import { motion } from 'framer-motion';

const SlideMonetizationTwoPaths = () => {
  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-5 sm:py-6 relative overflow-hidden bg-[#090A0D]">
      {/* Background Lighting & Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(245,158,11,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-amber-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-emerald-500/[0.04] rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Header Bar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex items-center justify-between pb-2.5 sm:pb-3 border-b border-zinc-800/80 shrink-0">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <div className="h-2.5 w-2.5 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.6)]" />
          <span className="font-display text-xs sm:text-sm font-bold tracking-widest text-zinc-400 uppercase">
            Monetization Pathways
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30">
            2 PROVEN ROUTES TO INCOME
          </span>
        </motion.div>
      </div>

      {/* Main 2-Column Split: JOB vs FREELANCING */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex-1 min-h-0 py-3 sm:py-5 flex flex-col justify-center">
        
        {/* Top Mini Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4 sm:mb-6"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            How to Monetize:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500">
              2 Core Paths
            </span>
          </h2>
        </motion.div>

        {/* 2 Massive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 items-stretch max-w-5xl mx-auto w-full">
          
          {/* ================= PATH 1: JOB ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl border-2 border-amber-500/30 bg-gradient-to-b from-amber-950/25 via-[#13110C] to-zinc-950/95 p-6 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-amber-400/60 transition-all shadow-[0_10px_40px_rgba(245,158,11,0.1)] text-left"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full pointer-events-none" />

            <div>
              {/* Badge & Icon */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-400/30">
                  OPTION 01
                </span>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-2xl shadow-[0_0_20px_rgba(245,158,11,0.25)]">
                  💼
                </div>
              </div>

              {/* Massive Title: JOB */}
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight mb-3">
                Job
              </h1>

              <p className="text-sm sm:text-base text-zinc-300 font-medium mb-6 leading-relaxed">
                Full-Time Corporate Career with predictable monthly salary, career progression, and stability.
              </p>

              {/* Key Features */}
              <div className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <span className="text-amber-400 font-black">✓</span>
                  <span><strong>Roles:</strong> MIS Executive, Reporting Analyst, Operations Associate</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <span className="text-amber-400 font-black">✓</span>
                  <span><strong>Format:</strong> In-Office, Hybrid, or Full Work From Home (WFH)</span>
                </div>
              </div>
            </div>

            {/* Income Range Footer */}
            <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-baseline justify-between">
              <span className="text-xs font-medium text-zinc-400">Monthly Salary:</span>
              <div className="text-right">
                <span className="font-display text-2xl sm:text-3xl font-black text-amber-300">
                  ₹25,000 – ₹60,000+
                </span>
                <span className="text-xs text-zinc-500 block font-medium">/ month</span>
              </div>
            </div>
          </motion.div>

          {/* ================= PATH 2: FREELANCING ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl border-2 border-emerald-500/30 bg-gradient-to-b from-emerald-950/25 via-[#0C1512] to-zinc-950/95 p-6 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-emerald-400/60 transition-all shadow-[0_10px_40px_rgba(16,185,129,0.1)] text-left"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none" />

            <div>
              {/* Badge & Icon */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/30">
                  OPTION 02
                </span>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-2xl shadow-[0_0_20px_rgba(16,185,129,0.25)]">
                  🌍
                </div>
              </div>

              {/* Massive Title: FREELANCING */}
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-3">
                Freelancing
              </h1>

              <p className="text-sm sm:text-base text-zinc-300 font-medium mb-6 leading-relaxed">
                Work with international & domestic clients on flexible dashboards, formulas, and data cleanup gigs.
              </p>

              {/* Key Features */}
              <div className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <span className="text-emerald-400 font-black">✓</span>
                  <span><strong>Platforms:</strong> Upwork, LinkedIn Direct, Fiverr & Referral Projects</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <span className="text-emerald-400 font-black">✓</span>
                  <span><strong>Freedom:</strong> Earn in USD ($), work from home, choose your own hours</span>
                </div>
              </div>
            </div>

            {/* Income Range Footer */}
            <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-baseline justify-between">
              <span className="text-xs font-medium text-zinc-400">Earning Potential:</span>
              <div className="text-right">
                <span className="font-display text-2xl sm:text-3xl font-black text-emerald-300">
                  $300 – $1,000+
                </span>
                <span className="text-xs text-zinc-500 block font-medium">/ month (₹25,000 – ₹85,000+)</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Footer Nav Bar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex items-center justify-between pt-2.5 sm:pt-3 border-t border-zinc-800/80 shrink-0 text-zinc-400 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-amber-400 font-bold">Two Streams:</span>
          <span className="text-white font-semibold">1. Job</span>
          <span className="text-zinc-600">•</span>
          <span className="text-white font-semibold">2. Freelancing</span>
        </div>
        <div className="hidden sm:block font-mono text-[11px] text-zinc-500">
          Next: Deep Dive into the Job Track &rarr;
        </div>
      </div>
    </section>
  );
};

export default SlideMonetizationTwoPaths;
