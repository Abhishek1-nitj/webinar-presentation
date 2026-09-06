import { motion } from 'framer-motion';

const points = [
  {
    title: 'No live practice or notes needed',
    text: 'Recordings, datasets, and all webinar files will be shared (BUT only with participants who stay till the end). One random surprise attendance.',
  },
  {
    title: 'No need to worry about formulas',
    text: 'Formulas are the easy part. Resources will be shared for formula practice.',
  },
  {
    title: 'Focus on the full Excel structure',
    text: 'In the masterclass, just learn the complete structure of how Excel solves data-related business problems.',
  },
];

const SlideMasterclassFocus = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-6xl w-full space-y-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="text-center"
      >
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight font-bold text-white">
          3 Important Instructions Before We Start
        </h2>
      </motion.div>

      <motion.div
        className="grid gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        {points.map(({ title, text }) => (
          <motion.div
            key={title}
            className="rounded-[2.5rem] border border-white/10 bg-white/5 p-7 text-left space-y-3"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <p className="text-premium-gold text-2xl md:text-3xl font-display">{title}</p>
            <p className="text-white/85 text-xl md:text-2xl leading-relaxed">{text}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default SlideMasterclassFocus;
