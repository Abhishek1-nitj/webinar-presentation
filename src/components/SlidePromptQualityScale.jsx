import { motion } from 'framer-motion';

const points = [
  {
    label: 'Vague Prompt',
    response: 'Vague Response',
    tone: 'from-red-500/20 to-red-900/10 border-red-400/40 text-red-300',
  },
  {
    label: 'Average Prompt',
    response: 'Average Response',
    tone: 'from-yellow-500/20 to-yellow-900/10 border-yellow-400/40 text-yellow-300',
  },
  {
    label: 'Fine Detailed Prompt',
    response: 'Fine Detailed Response',
    tone: 'from-emerald-500/20 to-emerald-900/10 border-emerald-400/40 text-emerald-300',
  },
];

const SlidePromptQualityScale = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-12 lg:px-16 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-7xl w-full space-y-10 text-center">
      <motion.h2
        className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        Your AI Output Is Only as Good as Your Prompt
      </motion.h2>

      <motion.div
        className="relative pt-12"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute left-[8%] right-[8%] top-[5.4rem] h-2 rounded-full bg-gradient-to-r from-red-500 via-yellow-400 to-emerald-400" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map(({ label, response, tone }) => (
            <div key={label} className={`relative rounded-[2rem] border bg-gradient-to-br ${tone} p-6 space-y-4`}>
              <div className="mx-auto h-9 w-9 rounded-full border-4 border-premium-black bg-current shadow-[0_0_30px_currentColor]" />
              <p className="font-display text-2xl md:text-3xl text-white">{label}</p>
              <p className="text-4xl text-premium-gold">→</p>
              <p className="font-display text-2xl md:text-3xl text-white">{response}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default SlidePromptQualityScale;
