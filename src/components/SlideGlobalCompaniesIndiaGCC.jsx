import { motion } from 'framer-motion';

const SlideGlobalCompaniesIndiaGCC = () => {
  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 py-6 relative overflow-hidden bg-[#090A0D]">
      {/* Radiant Background Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(16,185,129,0.06),transparent_70%)] pointer-events-none" />
      <div className="absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-amber-500/[0.04] blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-emerald-500/[0.05] blur-[160px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center my-auto space-y-10 sm:space-y-12">
        
        {/* Title Only */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[2.5rem] font-black text-white tracking-tight leading-tight whitespace-nowrap">
            Duniya Ki Badi Companies{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-300">
              Pehle Se India Se Kaam Karwa Rahi Hain
            </span>
          </h2>
        </motion.div>

        {/* 2 Clean Focused Stat Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Card 1: 2,117 Centres */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-3xl border border-sky-500/30 bg-gradient-to-b from-sky-950/25 via-[#0C121A] to-zinc-950/95 p-8 sm:p-12 backdrop-blur-xl shadow-2xl flex flex-col items-center justify-center text-center space-y-3 min-h-[240px] sm:min-h-[260px]"
          >
            <div className="font-display text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-sky-300">
              2,117
            </div>
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white">
              Global Companies ke Centres
            </h3>
          </motion.div>

          {/* Card 2: 23.6 Lakh People */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="rounded-3xl border-2 border-amber-500/40 bg-gradient-to-b from-amber-950/30 via-[#161208] to-zinc-950/95 p-8 sm:p-12 backdrop-blur-xl shadow-[0_15px_60px_rgba(245,158,11,0.18)] flex flex-col items-center justify-center text-center space-y-3 min-h-[240px] sm:min-h-[260px]"
          >
            <div className="font-display text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400">
              23.6 Lakh
            </div>
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white">
              Log Inmein Kaam Karte Hain
            </h3>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default SlideGlobalCompaniesIndiaGCC;
