import { motion } from 'framer-motion';

const sections = [
  {
    title: 'AI Hype',
    tone: 'text-red-300 border-red-400/40 bg-red-500/10',
    points: [
      'You will fall behind if you do not learn AI.',
      'AI will take your jobs.',
      'AI can do everything. Just learn AI and you will be fine.',
      'Most demos happen in a controlled environment.',
    ],
  },
  {
    title: 'Real Corporate Work',
    tone: 'text-orange-300 border-orange-400/40 bg-orange-500/10',
    points: [
      'Real corporate work breaks in messy ways.',
      'AI will keep you in the loop without solving the core issue.',
      'Tokens will get exhausted and your problem will remain.',
    ],
  },
  {
    title: 'What Actually Works',
    tone: 'text-emerald-300 border-emerald-400/40 bg-emerald-500/10',
    points: [
      'Before AI tools, build strong fundamentals.',
      'When systems fail, domain experts solve them.',
      'Fundamentals + AI tools >>>> Just AI tools.',
      'Human in the loop.',
    ],
  },
  {
    title: 'How to Spot AI Jokers?',
    tone: 'text-premium-gold border-premium-gold/50 bg-premium-gold/10',
    points: ['First, develop fundamentals, then use AI tools.'],
  },
];

const SlideAIHypeReality = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-12 lg:px-16 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-7xl w-full space-y-6">
      <motion.h2
        className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-center"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        AI Hype vs Real Work
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        {sections.map(({ title, tone, points }) => (
          <motion.div
            key={title}
            className={`rounded-[2rem] border p-5 space-y-4 ${tone}`}
            variants={{
              hidden: { opacity: 0, y: 35 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            <h3 className="font-display text-2xl md:text-3xl">{title}</h3>
            <ul className="space-y-2.5 text-white/88 text-lg md:text-xl leading-snug">
              {points.map(point => (
                <li key={point} className="flex gap-3">
                  <span className="text-premium-gold">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default SlideAIHypeReality;
