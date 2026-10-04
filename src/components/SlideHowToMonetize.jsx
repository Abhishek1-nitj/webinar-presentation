import { motion } from 'framer-motion';
import { assetPath } from '../utils/assetPath';

const SlideHowToMonetize = () => {
  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 py-8 relative overflow-hidden bg-[#07080B]">
      {/* Cinematic Atmospheric Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(16,185,129,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[32rem] h-[32rem] bg-emerald-500/[0.07] rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 translate-x-1/2 w-[32rem] h-[32rem] bg-amber-500/[0.07] rounded-full blur-[170px] pointer-events-none" />

      {/* Delicate Modern Studio Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      {/* Central Core Canvas */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center space-y-8 sm:space-y-10 my-auto">
        
        {/* Top Badge: The Big Question */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-amber-400/40 bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-amber-500/15 px-5 sm:px-7 py-2 shadow-[0_0_30px_rgba(245,158,11,0.25)] backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-ping" />
            <span className="font-display text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-amber-200">
              The Real Question
            </span>
          </div>
        </motion.div>

        {/* Main Headline with Clean 2-Line Structure */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 sm:space-y-6 max-w-5xl"
        >
          {/* Line 1: Achha Paisa Kamane Ke Liye */}
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 drop-shadow-[0_2px_25px_rgba(245,158,11,0.4)]">
              Achha Paisa Kamane Ke Liye
            </span>
          </h2>

          {/* Line 2: Excel Kis Level Tak Aana Chahiye? */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] font-black text-white tracking-tight leading-[1.1]">
            <span className="inline-flex items-center gap-3 sm:gap-4 align-middle">
              <img
                src={assetPath('images/logos/excel-logo.png')}
                alt="Excel"
                className="w-9 h-9 sm:w-13 sm:h-13 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain drop-shadow-[0_0_25px_rgba(16,185,129,0.7)] shrink-0 inline-block -mt-1 sm:-mt-2"
              />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-green-400 drop-shadow-[0_4px_35px_rgba(16,185,129,0.45)]">
                Excel
              </span>
            </span>{' '}
            <span className="text-white">
              Kis Level Tak
            </span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-teal-100 to-emerald-300 drop-shadow-[0_4px_30px_rgba(52,211,153,0.35)]">
              Aana Chahiye?
            </span>
          </h1>
        </motion.div>

        {/* Understated Executive Glow Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="w-48 sm:w-72 h-[2px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"
        />

        {/* 3 Teaser Options Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl pt-2"
        >
          <div className="px-5 py-2.5 rounded-2xl bg-zinc-900/70 border border-zinc-800 text-zinc-400 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-lg">
            <span className="text-emerald-400 mr-2 font-mono">01</span> Basic Formulas?
          </div>
          <div className="px-5 py-2.5 rounded-2xl bg-zinc-900/70 border border-zinc-800 text-zinc-400 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-lg">
            <span className="text-amber-400 mr-2 font-mono">02</span> Advanced Dashboards?
          </div>
          <div className="px-5 py-2.5 rounded-2xl bg-zinc-900/70 border border-zinc-800 text-zinc-400 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-lg">
            <span className="text-sky-400 mr-2 font-mono">03</span> AI & Automation?
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SlideHowToMonetize;
