import { motion } from 'framer-motion';
import { useCallback, useState } from 'react';

const points = [
  'Questions & Answers',
  'The way I address my Students',
];

const SlideGuidelines = () => {
  const [targetSlide, setTargetSlide] = useState('');

  const handleJump = useCallback(
    event => {
      event.preventDefault();
      const slideNumber = parseInt(targetSlide, 10);
      if (Number.isNaN(slideNumber) || slideNumber < 1) return;
      const sections = document.querySelectorAll('.slide-section');
      const target = sections[slideNumber - 1];
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTargetSlide('');
      }
    },
    [targetSlide],
  );

  return (
    <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
      <div className="absolute inset-y-8 left-0 w-1/2 bg-gradient-to-r from-yellow-500/20 to-transparent blur-[160px] opacity-40 pointer-events-none" />
      <div className="absolute inset-y-12 right-0 w-1/3 bg-gradient-to-l from-yellow-400/30 to-transparent blur-[180px] opacity-50 pointer-events-none" />
      <div className="relative z-10 max-w-4xl w-full space-y-10">
        <motion.h1
          className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-center"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Guidelines for the Masterclass
        </motion.h1>
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {points.map(item => (
            <div
              key={item}
              className="relative rounded-[2rem] border border-white/10 bg-gradient-to-r from-premium-gold/15 via-white/5 to-transparent px-6 py-5 shadow-[0_25px_60px_rgba(0,0,0,0.4)] backdrop-blur-xl"
            >
              <p className="text-2xl text-white font-semibold">{item}</p>
            </div>
          ))}
        </motion.div>

        <form
          onSubmit={handleJump}
          className="flex flex-col md:flex-row items-center gap-4 rounded-[2rem] border border-white/10 bg-white/5 px-6 py-4 backdrop-blur"
        >
          <label htmlFor="slideJump" className="text-xs uppercase tracking-[0.5em] text-text-muted">
            Jump to Slide
          </label>
          <input
            id="slideJump"
            type="number"
            min="1"
            placeholder="Enter slide number"
            value={targetSlide}
            onChange={event => setTargetSlide(event.target.value)}
            className="w-full md:w-48 rounded-2xl border border-white/20 bg-transparent px-4 py-2 text-center text-lg font-semibold focus:border-premium-gold focus:outline-none"
          />
          <p className="text-xs text-text-muted/80 text-center md:text-left">
            Press Enter and we’ll scroll there instantly.
          </p>
        </form>
      </div>
    </section>
  );
};

export default SlideGuidelines;
