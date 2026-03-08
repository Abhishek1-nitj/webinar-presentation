import { motion } from 'framer-motion';

const productOne = new URL('../../Product /xyzimage.png', import.meta.url).href;
const productTwo = new URL('../../Product /image.png', import.meta.url).href;
const productThree = new URL('../../Product /image909090.png', import.meta.url).href;

const SlideExcelOfferFinal = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-6 md:px-10 lg:px-16 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-[#0E0F12] to-subtle-gray" />
    <div className="absolute -top-32 right-[-10%] h-80 w-80 rounded-full bg-premium-gold/10 blur-3xl" />
    <div className="absolute -bottom-24 left-[-5%] h-72 w-72 rounded-full bg-white/5 blur-3xl" />

    <div className="relative z-10 w-full max-w-6xl space-y-6">
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          className="rounded-[2.25rem] border border-white/10 bg-white/5 p-5 md:p-6 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={productOne}
            alt="Complete Excel course"
            className="w-full h-48 md:h-56 object-cover rounded-3xl border border-white/10"
          />
          <div className="mt-6 space-y-2 text-center">
            <div className="text-lg md:text-xl font-semibold">Complete Excel Course</div>
            <div className="text-3xl md:text-4xl font-bold text-[#9CD96B]">
              Rs 9,000
            </div>
            <ul className="mt-2 text-xs md:text-sm text-white/70 list-disc list-inside">
              <li>Lifetime access</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="rounded-[2.25rem] border border-white/10 bg-white/5 p-5 md:p-6 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={productTwo}
            alt="Latest MS Office 365"
            className="w-full h-48 md:h-56 object-cover rounded-3xl border border-white/10"
          />
          <div className="mt-6 space-y-2 text-center">
            <div className="text-lg md:text-xl font-semibold">Latest MS Office 365</div>
            <div className="text-3xl md:text-4xl font-bold text-[#F26B3A]">
              Rs 7,000
            </div>
            <ul className="mt-2 text-xs md:text-sm text-white/70 list-disc list-inside">
              <li>1 year validity</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="rounded-[2.25rem] border border-white/10 bg-white/5 p-5 md:p-6 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={productThree}
            alt="Resource bundle"
            className="w-full h-48 md:h-56 object-cover rounded-3xl border border-white/10"
          />
          <div className="mt-6 space-y-2 text-center">
            <div className="text-lg md:text-xl font-semibold">Resource Bundle</div>
            <div className="text-3xl md:text-4xl font-bold text-[#7FD1E8]">
              Rs 5,000
            </div>
            <ul className="mt-2 text-xs md:text-sm text-white/70 list-disc list-inside">
              <li>Lifetime access</li>
            </ul>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="flex flex-col items-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="rounded-full border border-emerald-300/40 bg-emerald-300/10 px-5 py-2 text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-emerald-100">
          Flat 85% Discount
        </div>
        <div className="flex items-center gap-3 text-xs md:text-sm uppercase tracking-[0.35em] text-white/60">
          <span className="relative inline-block px-6 py-2">
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-white/90 bg-white/10 px-4 py-2 rounded-full shadow-[0_0_18px_rgba(255,255,255,0.18)] line-through">
              21,000
            </span>
            <span className="pointer-events-none absolute inset-0">
              <span className="absolute left-0 top-1/2 h-1 w-full bg-red-500 -rotate-12 shadow-[0_0_12px_rgba(239,68,68,0.6)]" />
              <span className="absolute left-0 top-1/2 h-1 w-full bg-red-500 rotate-12 shadow-[0_0_12px_rgba(239,68,68,0.6)]" />
            </span>
          </span>
        </div>
        <div className="rounded-full border border-premium-gold/40 bg-premium-gold/15 px-6 py-3 text-center text-2xl md:text-3xl font-bold text-premium-gold">
          Special Webinar Price Rs 2,999
        </div>
      </motion.div>

    </div>
  </section>
);

export default SlideExcelOfferFinal;
