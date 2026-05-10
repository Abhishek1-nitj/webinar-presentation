import { motion } from 'framer-motion';

const reasons = ['Overhiring', 'investment in AI', 'Fear-mongering by US companies'];

const Slide52WhyLayoffsTechnical = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="absolute -top-24 left-[8%] h-64 w-64 rounded-full bg-red-400/10 blur-3xl" />
    <div className="absolute -bottom-24 right-[10%] h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

    <motion.div
      className="relative z-10 w-full max-w-5xl rounded-[2.5rem] border border-white/10 bg-white/5 px-10 py-12 shadow-[0_30px_70px_rgba(0,0,0,0.45)] backdrop-blur"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="font-display text-4xl md:text-5xl text-white">Why layoffs are actually happening?</h2>
      <ul className="mt-8 space-y-4 text-2xl text-white/90">
        {reasons.map((reason, index) => (
          <li key={reason} className="flex items-start gap-4">
            <span className="text-premium-gold font-semibold">{index + 1}.</span>
            <span>{reason}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  </section>
);

export default Slide52WhyLayoffsTechnical;
