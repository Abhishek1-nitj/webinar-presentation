import { motion } from 'framer-motion';

const tools = [
  { label: 'ChatGPT', logo: '/Gen AI Tools/ChatGPT (OpenAI).png' },
  { label: 'Google Gemini', logo: '/Gen AI Tools/Google Gemini.webp' },
  { label: 'Claude AI', logo: '/Gen AI Tools/Claude (Anthropic).png' },
  { label: 'Perplexity AI', logo: '/Gen AI Tools/perplexity.webp' },
  { label: 'DeepSeek AI', logo: '/Gen AI Tools/Deepseek-.svg.png' },
];

const specializedTools = [
  { label: 'Julius AI', logo: '/AI Tools/Julius AI.webp' },
  { label: 'Quadratic: The AI Spreadsheet', logo: '/AI Tools/Quadratic The AI Spreadsheet.webp' },
  { label: 'Bricks AI', logo: '/AI Tools/Bricks AI.jpeg' },
  { label: 'DataSquirrel.ai', logo: '/AI Tools/datasquirrel-ai.webp' },
  { label: 'Shortcut AI', logo: '/AI Tools/Shortcut AI.svg' },
];

const Slide32sGenAITools = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-6 md:px-10 lg:px-16 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-6xl w-full space-y-8">
      <motion.h2
        className="font-display text-3xl md:text-4xl lg:text-5xl text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        Top AI tools for Data work
      </motion.h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <motion.h3
            className="font-display text-2xl md:text-3xl lg:text-4xl text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Generative AI Tool
          </motion.h3>
          <motion.div
            className="grid grid-cols-1 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {tools.map((tool) => (
              <motion.div
                key={tool.label}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-5 flex items-center gap-4"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center overflow-hidden">
                  <img
                    src={tool.logo}
                    alt={tool.label}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <p className="text-premium-gold text-xl md:text-2xl font-display">{tool.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="space-y-6">
          <motion.h3
            className="font-display text-2xl md:text-3xl lg:text-4xl text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Specialized AI Tools for Data
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {specializedTools.map((tool) => (
              <motion.div
                key={tool.label}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-5 flex items-center gap-4"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center overflow-hidden">
                  <img
                    src={tool.logo}
                    alt={tool.label}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <p className="text-premium-gold text-xl md:text-2xl font-display">{tool.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default Slide32sGenAITools;
