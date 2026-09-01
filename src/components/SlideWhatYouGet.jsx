import { motion } from 'framer-motion';

const items = ['Full Session Recording', 'All Datasets & Practice Files', 'Certificate of Participation'];
const boxBase =
  'bg-gradient-to-br from-[#1B1B1F] via-premium-black to-[#2B2B30] border border-[#2F2F35] rounded-3xl shadow-2xl';

const SlideWhatYouGet = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 w-full max-w-6xl space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="text-center space-y-3"
      >
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
          Stay Till the End &amp; Get 🎁
        </h2>
      </motion.div>

      <div className="flex flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
        >
          {items.map((item, index) => (
            <div key={item} className={`${boxBase} p-8 space-y-4 ${index === 2 ? 'md:col-span-2 md:mx-auto md:w-1/2' : ''}`}>
              <div className="text-premium-gold text-sm uppercase tracking-[0.4em] text-center">
                ✅ {item}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-4xl text-center text-lg md:text-xl leading-relaxed text-white/85"
      >
        <span className="font-bold text-white">No need to practice live.</span>
        <br />
        Focus on learning now — practice later at your own pace.
        <br />
        <span className="mt-6 block text-3xl md:text-4xl font-black text-premium-gold">
          All 3 benefits are available only to participants who stay till the end.
        </span>
      </motion.p>
    </div>
  </section>
);

export default SlideWhatYouGet;
