import { motion } from 'framer-motion';

import vsCodexLogo from '../../DB logos/Visual Studio Code + Codex Extension.svg.png';
import googleAntiGravityLogo from '../../DB logos/Google Anti-Gravity.jpeg';

const SlideModule22ExcelAI = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="absolute -top-28 right-[-8%] h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
    <div className="absolute -bottom-24 left-[-5%] h-72 w-72 rounded-full bg-white/5 blur-3xl" />

    <div className="relative z-10 w-full max-w-4xl text-center space-y-6">
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight text-white"
      >
        Module 22: Excel + AI
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="text-2xl md:text-3xl lg:text-4xl font-semibold text-cyan-200"
      >
        Use of most Advanced AI tools
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="text-lg md:text-xl lg:text-2xl text-red-400"
      >
        (Visual Studio Code + Codex and Google Anti Gravity are taught nowhere)
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col md:flex-row items-center justify-center gap-6 pt-2"
      >
        <div className="w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden flex items-center justify-center bg-white/5 border border-white/10 shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
          <img
            src={vsCodexLogo}
            alt="Visual Studio Code + Codex Extension logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden flex items-center justify-center bg-white/5 border border-white/10 shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
          <img
            src={googleAntiGravityLogo}
            alt="Google Anti-Gravity logo"
            className="w-full h-full object-contain"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default SlideModule22ExcelAI;
