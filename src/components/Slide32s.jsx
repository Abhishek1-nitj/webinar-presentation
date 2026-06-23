import { motion } from 'framer-motion';
import { assetPath } from '../utils/assetPath';

const tools = [
  {
    name: 'Julius AI',
    image: assetPath('images/ai-tools/Julius AI.webp'),
    useWhen: 'Fast exploratory analysis + quick charts',
    avoidWhen: 'Not fully auditable; verify calculations; careful with uploads',
  },
  {
    name: 'Quadratic',
    image: assetPath('images/ai-tools/Quadratic The AI Spreadsheet.webp'),
    useWhen: 'AI spreadsheet-style quick analysis',
    avoidWhen: 'Excel compatibility/features may not match',
  },
  {
    name: 'Bricks AI',
    image: assetPath('images/ai-tools/Bricks AI.jpeg'),
    useWhen: 'Quick dashboards + reporting visuals',
    avoidWhen: 'Not ideal for deep cleaning/modeling; verify numbers',
  },
  {
    name: 'DataSquirrel.ai',
    image: assetPath('images/ai-tools/datasquirrel-ai.webp'),
    useWhen: 'Speed up data prep + lightweight analysis',
    avoidWhen: 'Check transparency/exports; avoid sensitive uploads',
  },
  {
    name: 'Shortcut AI',
    image: assetPath('images/ai-tools/Shortcut AI.svg'),
    useWhen: 'Turn notes → checklists/SOPs/plans',
    avoidWhen: 'Not for calculations, formulas, or numeric accuracy',
  },
];

const Slide32s = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-6 md:px-10 lg:px-16 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-6xl w-full space-y-6">
      <motion.h2
        className="font-display text-3xl md:text-4xl lg:text-5xl text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        AI Tool Playbook
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        {tools.map((tool) => (
          <motion.div
            key={tool.name}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-4 flex flex-col md:flex-row md:items-center gap-4"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            <div className="flex items-center gap-4 md:w-1/3">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center overflow-hidden">
                <img src={tool.image} alt={tool.name} className="w-full h-full object-contain" loading="lazy" />
              </div>
              <p className="text-white text-xl font-display">{tool.name}</p>
            </div>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div>
                <p className="text-premium-gold text-xs uppercase tracking-[0.4em] mb-1">Use when</p>
                <p className="text-white/90 text-lg leading-snug">{tool.useWhen}</p>
              </div>
              <div>
                <p className="text-premium-gold text-xs uppercase tracking-[0.4em] mb-1">Avoid when</p>
                <p className="text-white/80 text-lg leading-snug">{tool.avoidWhen}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Slide32s;
