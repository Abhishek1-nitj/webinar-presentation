import { motion } from 'framer-motion';

const pillars = [
  {
    title: 'Pillar 1',
    name: 'Domain Clarity & Precision',
    subtitle: 'What you say',
    points: [
      'Right terminology',
      'Precise words',
      'Domain-specific vocabulary',
      'Relevant details and constraints',
    ],
    takeaway: 'Better domain understanding → Better instructions to AI',
  },
  {
    title: 'Pillar 2',
    name: 'Prompt Structure',
    subtitle: 'How you say it',
    points: [
      'Role — Who should AI act as?',
      'Context — What is the situation?',
      'Input — What data should it use?',
      'Output — How should the answer be presented?',
    ],
    takeaway: 'Better structure → Better reasoning & better output',
  },
];

const SlidePromptTwoPillars = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-12 lg:px-16 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-7xl w-full space-y-8">
      <motion.h2
        className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-center"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        A Great Prompt Stands on Two Pillars
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-7"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={{ visible: { transition: { staggerChildren: 0.14 } } }}
      >
        {pillars.map(({ title, name, subtitle, points, takeaway }) => (
          <motion.div
            key={name}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-7 space-y-5 shadow-[0_25px_70px_rgba(0,0,0,0.35)]"
            variants={{
              hidden: { opacity: 0, y: 35 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            <div className="space-y-2">
              <p className="text-premium-gold text-sm uppercase tracking-[0.45em]">{title}</p>
              <h3 className="font-display text-3xl md:text-4xl text-white leading-tight">{name}</h3>
              <p className="text-xl md:text-2xl text-white/75">{subtitle}</p>
            </div>

            <ul className="space-y-2.5 text-lg md:text-xl text-white/88 leading-snug">
              {points.map(point => (
                <li key={point} className="flex gap-3">
                  <span className="text-premium-gold">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="rounded-2xl border border-premium-gold/30 bg-premium-gold/10 px-5 py-4">
              <p className="font-display text-xl md:text-2xl text-premium-gold leading-tight">{takeaway}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default SlidePromptTwoPillars;
