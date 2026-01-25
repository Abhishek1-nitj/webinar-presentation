import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Target clients',
    detail: 'shortlist solvable problems',
  },
  {
    title: 'Reach out',
    detail: 'platform bid / LinkedIn DM / email',
  },
  {
    title: 'Familiarization/Screening Call',
    detail: null,
  },
  {
    title: 'Follow up',
    detail: 'polite, value-driven',
  },
  {
    title: 'Convert',
    detail: 'call → confirmation → project',
  },
];

const SlideOutboundProcessHighlight2 = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-16 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <motion.div
      className="relative z-10 max-w-5xl w-full space-y-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-center">Outbound Process</h2>
      <div className="flex flex-col gap-3 max-w-4xl mx-auto text-sm md:text-base text-white/85">
        {steps.map((step, index) => {
          const isHighlight = index === 1;
          return (
            <div
              key={step.title}
              className={`rounded-3xl border px-5 py-4 flex flex-col md:flex-row md:items-center gap-2 md:gap-5 ${
                isHighlight
                  ? 'bg-premium-gold/10 border-premium-gold/50 shadow-[0_20px_50px_rgba(255,215,0,0.2)]'
                  : 'bg-white/5 border-white/10 shadow-none'
              }`}
            >
              <div className="text-premium-gold text-base tracking-[0.3em]">{index + 1}</div>
              <div className="space-y-1">
                <p className="font-semibold text-white text-base md:text-lg">{step.title}</p>
                {step.detail ? (
                  <p className="text-white/70 text-sm md:text-base">→ {step.detail}</p>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  </section>
);

export default SlideOutboundProcessHighlight2;
