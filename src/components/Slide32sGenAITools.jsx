import { motion } from 'framer-motion';
import { assetPath } from '../utils/assetPath';

const columns = [
  {
    title: 'Generative AI Assistants',
    tools: [
      { label: 'ChatGPT', logo: assetPath('Gen AI Tools/ChatGPT (OpenAI).png') },
      { label: 'Google Gemini', logo: assetPath('Gen AI Tools/Google Gemini.webp') },
      { label: 'Claude', logo: assetPath('Gen AI Tools/Claude (Anthropic).png') },
      { label: 'Perplexity', logo: assetPath('Gen AI Tools/perplexity.webp') },
      { label: 'DeepSeek', logo: assetPath('Gen AI Tools/Deepseek-.svg.png') },
      { label: 'Microsoft Copilot', logo: assetPath('AI Tools/microsoft-copilot.png') },
      { label: 'Meta AI', logo: assetPath('AI Tools/meta-ai.svg') },
    ],
  },
  {
    title: 'Specialized AI Tools for Data',
    tools: [
      { label: 'Julius AI', logo: assetPath('images/ai-tools/Julius AI.webp') },
      { label: 'Quadratic', logo: assetPath('images/ai-tools/Quadratic The AI Spreadsheet.webp') },
      { label: 'Bricks AI', logo: assetPath('images/ai-tools/Bricks AI.jpeg') },
      { label: 'DataSquirrel.ai', logo: assetPath('images/ai-tools/datasquirrel-ai.webp') },
      { label: 'Shortcut AI', logo: assetPath('images/ai-tools/Shortcut AI.svg') },
      { label: 'Akkio', logo: assetPath('AI Tools/akkio.png') },
      { label: 'Rows AI', logo: assetPath('AI Tools/rows-ai.svg') },
    ],
  },
  {
    title: 'AI Coding & Automation Tools',
    tools: [
      { label: 'Claude Code', logo: assetPath('AI Tools/claude-code.svg') },
      {
        label: 'VS Code + Codex',
        logos: [assetPath('AI Tools/visual-studio-code.svg'), assetPath('AI Tools/codex-openai.svg')],
      },
      { label: 'Google Antigravity', logo: assetPath('AI Tools/google-antigravity.png') },
      { label: 'Cursor', logo: assetPath('AI Tools/cursor.svg') },
      { label: 'Windsurf', logo: assetPath('AI Tools/windsurf.svg') },
      { label: 'GitHub Copilot', logo: assetPath('AI Tools/github-copilot.svg') },
      { label: 'Replit Agent', logo: assetPath('AI Tools/replit-agent.svg') },
    ],
  },
];

const Slide32sGenAITools = ({ highlightColumn = null } = {}) => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-5 md:px-8 lg:px-12 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-[92rem] w-full space-y-5">
      <motion.h2
        className="font-display text-3xl md:text-4xl lg:text-5xl text-center leading-tight"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        Master these 3 Catrgories of AI Tools
      </motion.h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
        {columns.map((column, columnIndex) => {
          const isHighlighted = highlightColumn === columnIndex;
          const isMuted = highlightColumn !== null && !isHighlighted;
          return (
          <div
            key={column.title}
            className={`space-y-3 transition-opacity ${isMuted ? 'opacity-35 grayscale' : ''}`}
          >
            <motion.h3
              className={`font-display text-xl md:text-2xl lg:text-3xl text-center leading-tight min-h-[4.5rem] flex items-center justify-center ${
                isHighlighted ? 'text-premium-gold' : 'text-white'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {column.title}
            </motion.h3>
            <motion.div
              className="grid grid-cols-1 gap-2.5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            >
              {column.tools.map((tool) => {
                const logos = tool.logos || [tool.logo];
                return (
                  <motion.div
                    key={tool.label}
                    className={`min-h-[4.25rem] rounded-3xl border px-3 py-2 flex items-center gap-3 ${
                      isHighlighted
                        ? 'border-premium-gold/70 bg-premium-gold/15 shadow-[0_18px_60px_rgba(255,215,0,0.22)]'
                        : 'border-white/10 bg-white/5'
                    }`}
                    variants={{
                      hidden: { opacity: 0, y: 40 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                  >
                    <div className="w-11 h-11 shrink-0 rounded-2xl bg-white flex items-center justify-center gap-1 overflow-hidden p-2">
                      {logos.map((logo) => (
                        <img
                          key={logo}
                          src={logo}
                          alt={tool.label}
                          className={`${logos.length > 1 ? 'w-1/2' : 'w-full'} h-full object-contain`}
                          loading="lazy"
                        />
                      ))}
                    </div>
                    <p className="text-premium-gold text-base md:text-lg lg:text-xl font-display leading-tight">{tool.label}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Slide32sGenAITools;
