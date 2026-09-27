import { motion } from 'framer-motion';
import { assetPath } from '../utils/assetPath';

const earningProofs = [
  {
    id: 1,
    src: assetPath('images/online-earnings/earn1.png'),
    alt: 'Online Earning Proof 1',
  },
  {
    id: 5,
    src: assetPath('images/online-earnings/earn5.png'),
    alt: 'Online Earning Proof 2',
  },
  {
    id: 6,
    src: assetPath('images/online-earnings/earn6.png'),
    alt: 'Online Earning Proof 3',
  },
];

const SlideOnlineEarningsSequence = () => {
  return (
    <>
      {earningProofs.map((item, index) => (
        <section
          key={item.id}
          className="slide-section h-screen max-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 py-4 relative overflow-hidden bg-[#090A0D]"
        >
          {/* Ambient Background Lighting */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(245,158,11,0.05),transparent_70%)] pointer-events-none" />
          <div className="absolute -top-28 left-1/4 w-80 h-80 bg-amber-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute -bottom-28 right-1/4 w-80 h-80 bg-emerald-500/[0.04] rounded-full blur-[140px] pointer-events-none" />

          {/* Uncropped Full-Resolution Screenshot Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative z-10 w-full max-w-7xl mx-auto flex items-center justify-center my-auto rounded-2xl border border-zinc-800/90 bg-zinc-950/90 p-2 sm:p-3 backdrop-blur-xl shadow-2xl overflow-hidden"
          >
            <img
              src={item.src}
              alt={`Online Earning Proof ${index + 1}`}
              className="block max-h-[86vh] md:max-h-[88vh] w-auto max-w-full object-contain rounded-xl"
              loading="lazy"
            />
          </motion.div>
        </section>
      ))}
    </>
  );
};

export default SlideOnlineEarningsSequence;
