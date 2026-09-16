import { motion } from 'framer-motion';

const SlideHungerAndRightGuidance = () => {
  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col justify-center items-center px-6 sm:px-10 md:px-16 lg:px-24 py-8 sm:py-12 relative overflow-hidden bg-[#090A0D]">
      {/* Dramatic Ambient Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_45%,rgba(245,158,11,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[550px] rounded-full bg-amber-500/[0.05] blur-[180px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-emerald-500/[0.03] blur-[160px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center my-auto space-y-8 sm:space-y-12">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-[62px] font-black text-white tracking-tight leading-[1.15]">
            Tum Mein Aag Hai.{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-500 mt-2 sm:mt-3">
              Tumhein Bas Sahi Guidance Chahiye.
            </span>
          </h2>
        </motion.div>

        {/* Big High-Impact Mentor Statement Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="w-full max-w-4xl mx-auto rounded-3xl border border-amber-500/35 bg-gradient-to-b from-amber-500/10 via-zinc-900/80 to-zinc-950/90 p-7 sm:p-10 md:p-12 backdrop-blur-2xl shadow-[0_20px_70px_rgba(0,0,0,0.8)] relative overflow-hidden group"
        >
          {/* Subtle decorative quote accent */}
          <div className="absolute top-4 left-6 text-6xl text-amber-500/10 font-serif select-none pointer-events-none">
            “
          </div>
          <div className="absolute bottom-2 right-8 text-6xl text-amber-500/10 font-serif select-none pointer-events-none">
            ”
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center space-y-5 sm:space-y-6">
            <span className="text-4xl sm:text-5xl">🤝</span>
            
            <p className="font-display text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-extrabold text-white tracking-tight leading-relaxed sm:leading-snug">
              “Mujhe sirf <span className="text-zinc-300 font-normal">serious</span> aur <span className="text-zinc-300 font-normal">mehanti</span> students chahiye.{' '}
              <span className="block mt-3 sm:mt-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-400 font-black">
                Aap mehnat aur bharosa laao, sahi guidance main dunga — and we will change your life.”
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SlideHungerAndRightGuidance;
