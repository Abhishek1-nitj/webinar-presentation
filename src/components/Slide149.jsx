import { motion } from 'framer-motion';
import { assetPath } from '../utils/assetPath';

const Slide149 = () => (
  <section className="slide-section min-h-screen w/full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-6xl w/full grid gap-10 lg:grid-cols-2 items-center">
      <div className="space-y-6"><motion.h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
          “Toh aaj aapke paas do bilkul clear  raaste hain:”
        </motion.h2>
        <motion.div className="space-y-4 text-xl text-text-muted" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
          <p>✅ Aap khud figure out kar sakte ho — time aur mistakes ke saath</p>
          <p>✅ Ya aap ek structured system ke saath chal sakte ho — feedback ke saath</p>
        </motion.div>
      </div>
      <motion.div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-6 flex items-center justify-center" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
        <img src={assetPath('images/logos/rnt.avif')} alt="Decision paths" className="w-full h-full object-cover rounded-[2rem]" />
      </motion.div>
    </div>
  </section>
);

export default Slide149;
