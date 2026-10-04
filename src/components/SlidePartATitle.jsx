import { motion } from 'framer-motion';

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
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center text-center my-auto space-y-8">
        {/* Main Hero Headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex items-center justify-center"
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white space-y-2">
            <span className="block">Ghar Baithe Data Ka Kaam:</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 drop-shadow-[0_4px_30px_rgba(245,158,11,0.35)]">
              Ek Real Market
            </span>
          </h1>
        </motion.div>

        {/* Horizon Divider Line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full max-w-md h-[2px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"
        />
      </div>
    </section>
  );
};

export default SlidePartATitle;
