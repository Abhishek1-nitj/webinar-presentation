import { motion } from 'framer-motion';

import handshakeImg from '../../untitled folder/442-4422660_free-handshake-logo-png-handshake-silhouette-transparent-png.png';

const boxClass =
  'flex items-center justify-center rounded-[2rem] border border-white/15 bg-white/5 px-10 py-8 text-3xl md:text-4xl font-semibold tracking-wide shadow-[0_25px_60px_rgba(0,0,0,0.4)] backdrop-blur';

const Slide50Handshake = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 w-full max-w-5xl space-y-10">
      <motion.div
        className="flex items-center justify-center gap-3 text-4xl md:text-5xl font-semibold"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-emerald-400 text-3xl">✔︎</span>
        <h2 className="font-display tracking-[0.2em]">ATS</h2>
      </motion.div>
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={`${boxClass} text-premium-gold/80`}>Job Description</div>
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shadow-[0_35px_90px_rgba(0,0,0,0.45)] overflow-visible">
          <img src={handshakeImg} alt="Handshake" className="w-full h-full object-contain" />
        </div>
        <div className={`${boxClass} text-premium-gold/80`}>Experience Section</div>
      </motion.div>
    </div>
  </section>
);

export default Slide50Handshake;
