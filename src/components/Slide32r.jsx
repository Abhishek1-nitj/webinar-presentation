import { motion } from 'framer-motion';
import { assetPath } from '../utils/assetPath';

const tools = [
  {
    name: 'ChatGPT',
    image: assetPath('images/ai-tools/ChatGPT (OpenAI).png'),
    useWhen: 'Excel formulas, VBA, cleaning logic, SQL/Python drafts',
    avoidWhen: 'Don’t trust blindly; verify edge cases; no sensitive data',
  },
  {
    name: 'Google Gemini',
    image: assetPath('images/ai-tools/Google Gemini.webp'),
    useWhen: 'Google ecosystem tasks, quick drafts/summaries',
    avoidWhen: 'Advanced Excel/VBA accuracy can be inconsistent',
  },
  {
    name: 'Claude',
    image: assetPath('images/ai-tools/Claude (Anthropic).png'),
    useWhen: 'Long, complex problem-solving + structured plans',
    avoidWhen: 'Still validate outputs; avoid sensitive data',
  },
  {
    name: 'Microsoft Copilot',
    image: assetPath('images/ai-tools/Microsoft Copilot.png'),
    useWhen: 'Inside Excel/M365: quick insights, pivots, summaries',
    avoidWhen: 'Weak for messy cleaning + heavy automation',
  },
  {
    name: 'VS Code + Codex',
    image: assetPath('images/ai-tools/Visual Studio Code + Codex Extension.svg.png'),
    useWhen: 'Serious automation: scripts, pipelines, version control',
    avoidWhen: 'Overkill for small tasks; needs coding comfort',
  },
];

const Slide32r = () => (
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

export default Slide32r;
