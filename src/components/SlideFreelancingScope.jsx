import { motion } from 'framer-motion';

const SlideFreelancingScope = () => {
  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 py-8 relative overflow-hidden bg-[#07080B]">
      {/* Cinematic Ambient Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(16,185,129,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[34rem] h-[34rem] bg-emerald-500/[0.07] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 translate-x-1/2 w-[34rem] h-[34rem] bg-amber-500/[0.07] rounded-full blur-[180px] pointer-events-none" />

      {/* Subtle Studio Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      {/* Central Content Box */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8 my-auto">
        


        {/* Big Hero Headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.5rem] font-black tracking-tight text-white leading-[1.1]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-green-400 drop-shadow-[0_4px_35px_rgba(16,185,129,0.45)]">
              Freelancing
            </span>{' '}
            <span className="text-white">
              Ka Scope
            </span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 drop-shadow-[0_4px_35px_rgba(245,158,11,0.4)]">
              Kitna Hai?
            </span>
          </h1>
        </motion.div>

        {/* Understated Glow Horizon Line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="w-48 sm:w-72 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent mt-4"
        />

      </div>
    </section>
  );
};

export default SlideFreelancingScope;
