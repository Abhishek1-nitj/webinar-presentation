import { motion } from 'framer-motion';

const features = [
  'Excel Basics -> Intermediate -> Advanced -> Pro',
  'Detailed, industry-level assignments with complete solutions for practice',
  'Most advanced AI + Excel tools and workflows',
  'In-depth technical interview preparation',
  '80+ industry-level, ready-made Excel projects',
  'Latest Microsoft Office 365 official license',
  'Entire Recoridng of the Masterclass',
  'Master Prompt Doc',
];

const SlideCompleteAdvancedExcelAI = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="absolute -top-28 right-[-8%] h-72 w-72 rounded-full bg-premium-gold/10 blur-3xl" />
    <div className="absolute -bottom-24 left-[-5%] h-72 w-72 rounded-full bg-white/5 blur-3xl" />

    <div className="relative z-10 w-full max-w-5xl space-y-8">
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-center"
      >
        Complete Advanced Excel + AI Package
      </motion.h2>

      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto w-full max-w-4xl space-y-4 text-left text-lg md:text-xl text-white/85"
      >
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-premium-gold" />
            <span>{feature}</span>
          </li>
        ))}
      </motion.ul>

    </div>
  </section>
);

export default SlideCompleteAdvancedExcelAI;
