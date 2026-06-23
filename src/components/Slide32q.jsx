import { motion } from 'framer-motion';
import { assetPath } from '../utils/assetPath';

const tools = [
  { name: 'ChatGPT (OpenAI)', image: assetPath('images/ai-tools/ChatGPT (OpenAI).png') },
  { name: 'Google Gemini', image: assetPath('images/ai-tools/Google Gemini.webp') },
  { name: 'Claude (Anthropic)', image: assetPath('images/ai-tools/Claude (Anthropic).png') },
  { name: 'Microsoft Copilot', image: assetPath('images/ai-tools/Microsoft Copilot.png') },
  { name: 'VS Code + Codex Extension', image: assetPath('images/ai-tools/Visual Studio Code + Codex Extension.svg.png') },
  { name: 'Julius AI', image: assetPath('images/ai-tools/Julius AI.webp') },
  { name: 'Quadratic: The AI Spreadsheet', image: assetPath('images/ai-tools/Quadratic The AI Spreadsheet.webp') },
  { name: 'Bricks AI', image: assetPath('images/ai-tools/Bricks AI.jpeg') },
  { name: 'DataSquirrel.ai', image: assetPath('images/ai-tools/datasquirrel-ai.webp') },
  { name: 'Shortcut AI', image: assetPath('images/ai-tools/Shortcut AI.svg') },
];

const Slide32q = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-5xl w-full space-y-8 text-center">
      <motion.h2
        className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        TOP AI TOOLS FOR DATA WORK
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        {tools.map((tool) => (
          <motion.div
            key={tool.name}
            className="rounded-[2rem] border border-white/10 bg-white/5 px-4 py-3 flex items-center gap-4"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center overflow-hidden">
              <img src={tool.image} alt={tool.name} className="w-full h-full object-contain" loading="lazy" />
            </div>
            <div className="text-left">
              <p className="text-xl md:text-2xl text-white font-display leading-snug">{tool.name}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Slide32q;
