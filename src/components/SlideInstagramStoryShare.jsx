import { motion } from 'framer-motion';

const instagramShot = new URL(
  '../../Instagram story/Screenshot 2026-03-08 at 5.00.11\u202fPM.png',
  import.meta.url,
).href;

const storySteps = [
  'Story me page mention karo: @excelbhaiya.abhishek',
  'Story ka screenshot + apni email ID WhatsApp karo: 9380659389',
];

const SlideInstagramStoryShare = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-4 md:px-8 lg:px-14 py-10 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-[#0F1116] to-subtle-gray" />
    <div className="absolute -top-28 left-[8%] h-64 w-64 rounded-full bg-premium-gold/10 blur-3xl" />
    <div className="absolute -bottom-24 right-[6%] h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />

    <div className="relative z-10 w-full max-w-7xl space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center space-y-3"
      >
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-premium-gold/80 font-semibold">
          Webinar Bonus Access
        </p>
        <h2 className="font-display text-3xl md:text-5xl leading-tight">
          Recording + PPT Free for Live Attendees
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 rounded-[2rem] border border-white/10 bg-white/5 p-5 md:p-6 backdrop-blur-md"
        >
          <ul className="space-y-3 text-white/80 text-sm md:text-base">
            {storySteps.map(item => (
              <li key={item} className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-5 rounded-2xl border border-premium-gold/35 bg-premium-gold/10 px-4 py-4 space-y-2">
            <p className="text-xs md:text-sm uppercase tracking-[0.24em] text-premium-gold/90">
              Mention this page
            </p>
            <p className="text-2xl md:text-3xl font-bold text-premium-gold">
              @excelbhaiya.abhishek
            </p>
            <a
              href="https://www.instagram.com/excelbhaiya.abhishek?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noreferrer"
              className="inline-block text-sm md:text-base text-white/85 underline underline-offset-4"
            >
              Open Instagram Page
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7"
        >
          <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-2 h-full">
            <img
              src={instagramShot}
              alt="Instagram page screenshot"
              className="w-full h-60 md:h-[360px] object-contain rounded-[1.2rem] bg-black/30"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto w-full max-w-3xl rounded-[1.8rem] border border-emerald-200/25 bg-emerald-950/35 px-5 py-4 text-center shadow-[0_20px_45px_rgba(16,185,129,0.18)] backdrop-blur"
      >
        <p className="text-xs md:text-sm uppercase tracking-[0.24em] text-emerald-100/80 font-semibold">
          WhatsApp Screenshot + Email ID
        </p>
        <p className="text-4xl md:text-5xl font-bold text-emerald-200 tracking-wide">
          9380659389
        </p>
      </motion.div>
    </div>
  </section>
);

export default SlideInstagramStoryShare;
