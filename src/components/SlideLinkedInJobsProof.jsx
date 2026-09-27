import { motion } from 'framer-motion';
import { assetPath } from '../utils/assetPath';

const jobSlidePairs = [
  {
    slideId: 1,
    jobs: [
      {
        id: 1,
        src: assetPath('images/linkedin-jobs/job1.png'),
        alt: 'LinkedIn Data Job Posting 1',
      },
      {
        id: 2,
        src: assetPath('images/linkedin-jobs/job2.png'),
        alt: 'LinkedIn Data Job Posting 2',
      },
    ],
  },
  {
    slideId: 2,
    jobs: [
      {
        id: 3,
        src: assetPath('images/linkedin-jobs/job3.png'),
        alt: 'LinkedIn Data Job Posting 3',
      },
      {
        id: 4,
        src: assetPath('images/linkedin-jobs/job4.png'),
        alt: 'LinkedIn Data Job Posting 4',
      },
    ],
  },
];

const SlideLinkedInJobsProof = () => {
  return (
    <>
      {jobSlidePairs.map((pair) => (
        <section
          key={pair.slideId}
          className="slide-section h-screen max-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 py-4 relative overflow-hidden bg-[#090A0D]"
        >
          {/* Background Lighting */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(14,165,233,0.06),transparent_70%)] pointer-events-none" />
          <div className="absolute -top-28 left-1/4 w-80 h-80 bg-sky-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute -bottom-28 right-1/4 w-80 h-80 bg-emerald-500/[0.04] rounded-full blur-[140px] pointer-events-none" />

          {/* Main Container */}
          <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-between my-auto space-y-4 sm:space-y-5">
            
            {/* Top Header - Single Clean Line */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="font-display text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[2.25rem] font-black tracking-tight leading-tight whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-teal-200 to-amber-300">
                Plenty of Data Jobs Available in the Market
              </h2>
            </motion.div>

            {/* 2 Portrait Uncropped Screenshots Side-by-Side */}
            <div className="w-full grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center justify-center">
              {pair.jobs.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.96, y: 15 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative flex items-center justify-center rounded-2xl border border-zinc-800/90 bg-zinc-950/90 p-2 sm:p-2.5 backdrop-blur-xl shadow-2xl overflow-hidden hover:border-sky-400/50 transition-all duration-300"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="block max-h-[74vh] md:max-h-[76vh] w-auto max-w-full object-contain rounded-xl"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>

          </div>
        </section>
      ))}
    </>
  );
};

export default SlideLinkedInJobsProof;
