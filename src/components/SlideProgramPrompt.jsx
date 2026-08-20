import { motion } from 'framer-motion';

const bullets = [
  'One consolidated Excel file with all webinar AI prompts',
  'Ready-to-use for analysis, automation, dashboards & reporting',
];

const SlideProgramPrompt = () => (
  <section className="slide-section min-h-screen w/full flex items-center justify-center px-6 md:px-12 lg:px-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <motion.div
      className="relative z-10 max-w-4xl w/full space-y-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="text-center space-y-3">
        <h2 className="font-display text-4xl md:text-5xl">Excel + AI Mastery Program</h2>
        <p className="text-lg text-text-muted">3️⃣ Excel + AI Prompt Vault</p>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-white/5 px-6 py-6 shadow-[0_25px_60px_rgba(0,0,0,0.4)] backdrop-blur space-y-3">
        <ul className="list-disc list-inside text-lg text-text-muted space-y-2">
          {bullets.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="rounded-[2rem] border border-premium-gold/40 bg-premium-gold/10 px-6 py-6 text-center space-y-2 shadow-[0_20px_50px_rgba(255,215,0,0.2)]">
        <p className="text-xl text-text-muted">Pricing</p>
        <p className="text-lg text-white/70 line-through">Actual Value: ₹5,000</p>
        <p className="text-4xl font-bold text-premium-gold">Special Webinar Price: ₹3000 only</p>
      </div>
    </motion.div>
  </section>
);

export default SlideProgramPrompt;
