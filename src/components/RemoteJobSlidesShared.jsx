import { motion } from 'framer-motion';

const transition = { duration: 0.9, ease: [0.22, 1, 0.36, 1] };

export const RemoteJobSlideShell = ({
  eyebrow,
  title,
  subtitle,
  accent = 'gold',
  titleClassName = '',
  subtitleClassName = '',
  children,
}) => {
  const hasHeaderText = Boolean(title || subtitle);
  const accentGlow =
    accent === 'emerald'
      ? 'from-emerald-400/18 via-emerald-300/8 to-transparent'
      : accent === 'rose'
        ? 'from-rose-400/18 via-rose-300/8 to-transparent'
        : 'from-premium-gold/18 via-premium-gold/8 to-transparent';

  const accentBorder =
    accent === 'emerald'
      ? 'border-emerald-200/20 bg-emerald-300/10 text-emerald-100'
      : accent === 'rose'
        ? 'border-rose-200/20 bg-rose-300/10 text-rose-100'
        : 'border-premium-gold/25 bg-premium-gold/10 text-premium-gold';

  return (
    <section className="slide-section min-h-screen w-full flex items-center justify-center px-6 md:px-10 lg:px-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-[#0e0f12] to-subtle-gray" />
      <div className={`absolute -top-32 left-[-8%] h-80 w-80 rounded-full bg-gradient-to-br ${accentGlow} blur-3xl`} />
      <div className="absolute -bottom-24 right-[-5%] h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute inset-x-10 top-10 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={transition}
          className="mb-8 flex flex-col gap-4"
        >
          {eyebrow ? (
            <div className={`inline-flex w-fit items-center rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] ${accentBorder}`}>
              {eyebrow}
            </div>
          ) : null}
          {hasHeaderText ? (
            <div className="max-w-5xl space-y-3">
              {title ? (
                <h2 className={`font-display text-3xl md:text-5xl lg:text-6xl leading-[1.05] text-white ${titleClassName}`}>
                  {title}
                </h2>
              ) : null}
              {subtitle ? (
                <p className={`max-w-4xl text-sm md:text-lg text-white/64 leading-relaxed ${subtitleClassName}`}>
                  {subtitle}
                </p>
              ) : null}
            </div>
          ) : null}
        </motion.div>

        {children}
      </div>
    </section>
  );
};

export const FadeInBlock = ({ delay = 0, className = '', children }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ ...transition, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const PlatformLogoBadge = ({ logo, name, compact = false }) => (
  <div
    className={`flex items-center justify-center rounded-[1.15rem] border border-white/10 bg-white/90 shadow-[0_10px_28px_rgba(0,0,0,0.18)] ${
      compact ? 'h-14 px-4 py-3' : 'h-16 px-5 py-4'
    }`}
  >
    <img
      src={logo}
      alt={name}
      className={`w-auto object-contain ${compact ? 'max-h-7' : 'max-h-8'}`}
      loading="lazy"
    />
  </div>
);
