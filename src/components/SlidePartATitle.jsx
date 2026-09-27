import { motion } from 'framer-motion';

// Official minimal tool badges
const ToolPill = ({ label, icon, colorClass, borderClass }) => (
  <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border ${borderClass} bg-zinc-900/80 backdrop-blur-md shadow-lg transition-transform hover:scale-105`}>
    {icon}
    <span className={`text-xs sm:text-sm font-semibold ${colorClass}`}>{label}</span>
  </div>
);

const SlidePartATitle = () => {
  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 relative overflow-hidden bg-[#090A0D]">
      {/* Background Lighting & Radial Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_45%,rgba(245,158,11,0.09),transparent_70%)] pointer-events-none" />
      <div className="absolute -top-36 left-1/4 h-96 w-96 rounded-full bg-amber-500/[0.08] blur-[170px] pointer-events-none" />
      <div className="absolute -bottom-36 right-1/4 h-96 w-96 rounded-full bg-emerald-500/[0.07] blur-[170px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      {/* Main Content Box */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center text-center my-auto space-y-8 sm:space-y-10">
        
        {/* Main Hero Headline - Exactly One Line */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex items-center justify-center"
        >
          <h1 className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[2.5rem] font-black tracking-tight text-white whitespace-nowrap">
            Ghar Baithe Data Ka Kaam:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 drop-shadow-[0_4px_30px_rgba(245,158,11,0.35)]">
              Ek Real Market
            </span>
          </h1>
        </motion.div>

        {/* Horizon Divider Line */}
        <div className="w-full max-w-md h-[1px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

        {/* Subtitle Tech Stack Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5"
        >
          {/* Excel + AI */}
          <ToolPill
            label="Excel + AI"
            colorClass="text-emerald-400"
            borderClass="border-emerald-500/30 hover:border-emerald-400/60"
            icon={
              <div className="w-5 h-5 rounded bg-[#107C41] flex items-center justify-center text-white text-[11px] font-black">
                X
              </div>
            }
          />

          <span className="text-zinc-600 hidden sm:inline">•</span>

          {/* Power Query */}
          <ToolPill
            label="Power Query"
            colorClass="text-teal-400"
            borderClass="border-teal-500/30 hover:border-teal-400/60"
            icon={
              <div className="w-5 h-5 rounded bg-[#006651] flex items-center justify-center text-teal-200 text-[10px] font-bold">
                PQ
              </div>
            }
          />

          <span className="text-zinc-600 hidden sm:inline">•</span>

          {/* Power BI */}
          <ToolPill
            label="Power BI"
            colorClass="text-amber-400"
            borderClass="border-amber-500/30 hover:border-amber-400/60"
            icon={
              <div className="w-5 h-5 rounded bg-zinc-800 flex items-center justify-center">
                <div className="flex items-end gap-[1.5px] h-3">
                  <div className="w-[3px] h-1.5 bg-amber-400 rounded-sm" />
                  <div className="w-[3px] h-2 bg-amber-300 rounded-sm" />
                  <div className="w-[3px] h-3 bg-amber-200 rounded-sm" />
                </div>
              </div>
            }
          />

          <span className="text-zinc-600 hidden sm:inline">•</span>

          {/* SQL */}
          <ToolPill
            label="SQL"
            colorClass="text-sky-400"
            borderClass="border-sky-500/30 hover:border-sky-400/60"
            icon={
              <div className="w-5 h-5 rounded bg-sky-950 border border-sky-500/40 flex items-center justify-center text-sky-400 text-[10px] font-bold">
                SQL
              </div>
            }
          />

          <span className="text-zinc-600 hidden sm:inline">•</span>

          {/* Python */}
          <ToolPill
            label="Python"
            colorClass="text-yellow-400"
            borderClass="border-yellow-500/30 hover:border-yellow-400/60"
            icon={
              <div className="w-5 h-5 rounded bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-yellow-300">
                Py
              </div>
            }
          />
        </motion.div>

      </div>
    </section>
  );
};

export default SlidePartATitle;
