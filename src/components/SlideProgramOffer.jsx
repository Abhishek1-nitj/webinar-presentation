import { motion } from 'framer-motion';

const sections = [
  {
    title: null,
    bullets: [
      'Advanced Dashboards Using AI',
      'Projects and Portfolio Making',
      'Detailed Technical Interview Preparation',
    ],
  },
];

const SlideProgramOffer = () => (
  <section className="slide-section min-h-screen w/full flex items-center justify-center px-6 md:px-12 lg:px-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <motion.div
      className="relative z-10 max-w-5xl w/full space-y-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="text-center space-y-3">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl whitespace-nowrap">
          1️⃣ Complete Excel Course (Basic → Advanced → Pro)
        </h2>
      </div>

      <div className="space-y-8">
        {sections.map(({ title, bullets }) => (
          <div
            key={title ?? 'main'}
            className="rounded-[2rem] border border-white/10 bg-white/5 px-6 py-6 shadow-[0_25px_60px_rgba(0,0,0,0.4)] backdrop-blur space-y-3"
          >
            {title ? <h3 className="text-2xl font-semibold text-white">{title}</h3> : null}
            <ul className="list-disc list-inside text-lg text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.45)] space-y-1">
              {bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="rounded-[2rem] border border-premium-gold/40 bg-premium-gold/10 px-6 py-6 text-center space-y-2 shadow-[0_20px_50px_rgba(255,215,0,0.2)]">
        <p className="text-xl text-text-muted">Pricing</p>
        <p className="text-lg text-white/70">
          Actual Value: ₹
          <span className="font-bold text-red-500 text-4xl line-through">5,000</span>
        </p>
        <p className="text-4xl font-bold text-premium-gold">Special Webinar Price: ₹3000 only</p>
      </div>
    </motion.div>
  </section>
);

export default SlideProgramOffer;
