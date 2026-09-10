import { motion } from 'framer-motion';

const SlideModule23InterviewPreparation = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="absolute -top-28 right-[-8%] h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
    <div className="absolute -bottom-24 left-[-5%] h-72 w-72 rounded-full bg-white/5 blur-3xl" />

    <div className="relative z-10 w-full max-w-4xl text-center space-y-8">
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight text-white whitespace-nowrap"
      >
        Interview Preparation
      </motion.h2>

      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto w-full max-w-2xl space-y-4 text-left text-2xl md:text-3xl text-cyan-200"
      >
        <li className="flex items-start gap-3">
          <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
          <span>Job Interveiw</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
          <span>Familiarization call</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
          <span>Toptal Interview</span>
        </li>
      </motion.ul>
    </div>
  </section>
);

export default SlideModule23InterviewPreparation;
