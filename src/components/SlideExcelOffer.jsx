import { motion } from 'framer-motion';

const productOne = new URL('../../Product /xyzimage.png', import.meta.url).href;
const productTwo = new URL('../../Product /image.png', import.meta.url).href;
const refundLogo = new URL('../../DB logos/image.png', import.meta.url).href;

const SlideExcelOffer = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-[#0E0F12] to-subtle-gray" />
    <div className="absolute -top-32 right-[-10%] h-80 w-80 rounded-full bg-premium-gold/10 blur-3xl" />
    <div className="absolute -bottom-24 left-[-5%] h-72 w-72 rounded-full bg-white/5 blur-3xl" />

    <div className="relative z-10 w-full max-w-6xl space-y-10">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="pointer-events-none absolute left-[39%] top-16 z-20 hidden -translate-x-1/2 md:block"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={refundLogo}
            alt="Refund guarantee"
            className="w-48 lg:w-64 drop-shadow-[0_16px_36px_rgba(0,0,0,0.45)]"
          />
        </motion.div>
        <motion.div
          className="rounded-[2.5rem] border border-white/10 bg-white/5 p-6 md:p-8 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={productOne}
            alt="Complete Excel course"
            className="w-full h-64 md:h-72 object-cover rounded-3xl border border-white/10"
          />
          <div className="mt-6 space-y-2 text-center">
            <div className="text-xl md:text-2xl font-semibold">
              Complete Excel Complete Excel Course
            </div>
            <div className="text-4xl md:text-5xl font-bold text-[#9CD96B]">
              Rs 6,000
            </div>
            <ul className="mt-2 text-sm md:text-base text-white/70 list-disc list-inside">
              <li>Lifetime access</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="rounded-[2.5rem] border border-white/10 bg-white/5 p-6 md:p-8 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={productTwo}
            alt="Latest MS Office 365"
            className="w-full h-64 md:h-72 object-cover rounded-3xl border border-white/10"
          />
          <div className="mt-6 space-y-2 text-center">
            <div className="text-xl md:text-2xl font-semibold">Latest MS Office 365</div>
            <div className="text-4xl md:text-5xl font-bold text-[#F26B3A]">
              Rs 7,000
            </div>
            <ul className="mt-2 text-sm md:text-base text-white/70 list-disc list-inside">
              <li>1 year validity</li>
            </ul>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center gap-4 text-sm md:text-base uppercase tracking-[0.4em] text-white/60">
          <span className="relative inline-block px-6 py-2">
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white/90 bg-white/10 px-4 py-2 rounded-full shadow-[0_0_18px_rgba(255,255,255,0.18)] line-through">
              13,000
            </span>
            <span className="pointer-events-none absolute inset-0">
              <span className="absolute left-0 top-1/2 h-1 w-full bg-red-500 -rotate-12 shadow-[0_0_12px_rgba(239,68,68,0.6)]" />
              <span className="absolute left-0 top-1/2 h-1 w-full bg-red-500 rotate-12 shadow-[0_0_12px_rgba(239,68,68,0.6)]" />
            </span>
          </span>
        </div>
        <div className="rounded-full border border-premium-gold/40 bg-premium-gold/15 px-8 py-4 text-center text-3xl md:text-4xl font-bold text-premium-gold">
          Special Webinar Price Rs 2,000
        </div>
      </motion.div>

    </div>
  </section>
);

export default SlideExcelOffer;
