import { motion } from 'framer-motion';
import { assetPath } from '../utils/assetPath';

const SlideExcelStep1LearnExcel = () => {
  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-7 relative overflow-hidden bg-[#090A0D]">
      {/* Radiant Background Lighting & Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(16,185,129,0.1),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/[0.07] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/[0.06] rounded-full blur-[160px] pointer-events-none" />

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
      <div className="relative z-10 w-full max-w-7xl mx-auto flex items-center justify-between pb-3 border-b border-zinc-800/80 shrink-0">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.6)]" />
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
            Excel Se Paise Kaise Kamaye?{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">
              STEP 1
            </span>
          </h2>
        </motion.div>
      </div>

      {/* Main Big & Bold Hero Area */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex-1 flex flex-col items-center justify-center text-center my-auto py-6">
        
        {/* Excel Logo Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-8"
        >
          <img
            src={assetPath('images/logos/excel-logo.png')}
            alt="Excel Logo"
            className="w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-[0_0_35px_rgba(16,185,129,0.7)] mx-auto"
          />
        </motion.div>

        {/* Massive Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black text-white tracking-tight leading-none mb-8 sm:mb-12"
        >
          Learn Excel:{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-green-400 drop-shadow-[0_4px_30px_rgba(16,185,129,0.4)]">
            Basic to Advanced
          </span>
        </motion.h1>

        {/* Big Bold 7 Step Framework Highlight Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full max-w-2xl rounded-3xl border-2 border-emerald-500/40 bg-gradient-to-b from-emerald-950/40 via-[#0B1512] to-zinc-950/95 p-6 sm:p-8 backdrop-blur-xl shadow-[0_15px_60px_rgba(16,185,129,0.2)] relative overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center sm:text-left">
            <span className="font-display text-6xl sm:text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-emerald-200 via-emerald-300 to-teal-400 drop-shadow-[0_0_25px_rgba(52,211,153,0.5)]">
              7 Step
            </span>
            <div className="space-y-1">
              <span className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white block leading-tight">
                Framework
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SlideExcelStep1LearnExcel;
