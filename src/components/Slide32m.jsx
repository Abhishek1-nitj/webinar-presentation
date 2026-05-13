import { motion } from 'framer-motion';

const pillars = [
  {
    title: 'R — Role',
    description: 'Tell the AI who it should become. This changes the style, depth, and way of thinking.',
  },
  {
    title: 'I — Input',
    description:
      'List all the information you are giving. Whatever the AI needs to solve the task should be written here clearly.',
  },
  {
    title: 'C — Context',
    description: 'Explain what problem you are trying to solve and why. This helps the AI understand the situation exactly like you.',
  },
  {
    title: 'O — Output',
    description:
      'Tell the AI exactly what you want — format, tone, style, length, everything. This removes guesswork.',
  },
];

const Slide32m = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-5xl w-full space-y-10 text-center">
      <motion.h2
        className="font-display text-5xl md:text-6xl tracking-tight"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        The right way of Prompting RICO
      </motion.h2>
      <motion.div
        className="grid gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        {pillars.map(({ title, description }) => (
          <motion.div
            key={title}
            className="rounded-[2.5rem] border border-white/10 bg-white/5 p-6 text-left space-y-3"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <p className="text-premium-gold text-xl font-display">{title}</p>
            <p className="text-white/85 text-lg leading-relaxed">{description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Slide32m;
