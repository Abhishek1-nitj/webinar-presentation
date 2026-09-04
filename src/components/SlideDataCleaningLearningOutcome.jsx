import { motion } from 'framer-motion';

const outcomes = [
  {
    title: 'Understand Data Cleaning',
    text: 'What data cleaning means and why it is required.',
  },
  {
    title: 'Traditional Excel Approach',
    text: 'How data cleaning is normally done using formulas or a smart combination of formulas.',
  },
  {
    title: 'Gen AI Formula Approach',
    text: 'How to generate the right cleaning formula by writing a clear prompt in RCIO format.',
  },
  {
    title: 'Automation Approach',
    text: 'How repetitive cleaning steps can be automated once the logic is clear.',
  },
];

const SlideDataCleaningLearningOutcome = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-12 lg:px-16 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-6xl w-full space-y-10 text-center">
      <motion.h2
        className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight text-premium-gold"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        Learning Outcome
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={{ visible: { transition: { staggerChildren: 0.13 } } }}
      >
        {outcomes.map(({ title, text }, index) => (
          <motion.div
            key={title}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-7 space-y-3 shadow-[0_24px_70px_rgba(0,0,0,0.35)]"
            variants={{
              hidden: { opacity: 0, y: 35 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            <p className="text-premium-gold text-sm uppercase tracking-[0.35em]">0{index + 1}</p>
            <h3 className="font-display text-2xl md:text-3xl text-white">{title}</h3>
            <p className="text-white/82 text-lg md:text-xl leading-relaxed">{text}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default SlideDataCleaningLearningOutcome;
