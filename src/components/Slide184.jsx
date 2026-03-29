import { FadeInBlock, RemoteJobSlideShell } from './RemoteJobSlidesShared';

import indeedLogo from '../assets/wfh-logos-clean/Indeed_logo.svg';
import instahyreLogo from '../assets/wfh-logos-clean/lnstahyreogo_200_200-removebg-preview.png';
import internshalaLogo from '../assets/wfh-logos-clean/Internshala_company_logo.png';
import naukriLogo from '../assets/wfh-logos-clean/Naukri-vector-logo-removebg-preview.png';
import remotiveLogo from '../assets/wfh-logos-clean/remotive-logo-removebg-preview.png';
import flexJobsLogo from '../assets/wfh-logos-clean/flexjobs-logo.webp';

const paths = [
  {
    stage: 'Freshers & Students',
    step: 'Stage 1',
    accent: 'border-premium-gold/28 bg-premium-gold/10 text-premium-gold',
    logoGridClassName: 'grid-cols-1',
    logos: [
      {
        name: 'Internshala',
        src: internshalaLogo,
        className: 'h-12 max-w-[220px]',
        slotClassName: 'min-h-[78px] px-4 py-2',
      },
    ],
  },
  {
    stage: 'Early Career',
    step: 'Stage 2',
    accent: 'border-premium-gold/28 bg-premium-gold/10 text-premium-gold',
    logoGridClassName: 'grid-cols-2',
    logos: [
      {
        name: 'Naukri',
        src: naukriLogo,
        className: 'h-16 max-w-[260px]',
        slotClassName: 'min-h-[78px] px-4 py-2',
      },
      {
        name: 'Indeed',
        src: indeedLogo,
        className: 'h-11 max-w-[180px]',
        slotClassName: 'min-h-[78px] px-4 py-2',
      },
    ],
  },
  {
    stage: 'Mid-Professionals',
    step: 'Stage 3',
    accent: 'border-premium-gold/28 bg-premium-gold/10 text-premium-gold',
    logoGridClassName: 'grid-cols-2',
    logos: [
      {
        name: 'Instahyre',
        src: instahyreLogo,
        className: 'h-16 max-w-[260px]',
        slotClassName: 'min-h-[78px] px-4 py-2',
      },
      {
        name: 'Remotive',
        src: remotiveLogo,
        className: 'h-16 max-w-[260px]',
        slotClassName: 'min-h-[78px] px-4 py-2',
      },
    ],
  },
  {
    stage: 'Highly Experienced Experts',
    step: 'Stage 4',
    accent: 'border-premium-gold/28 bg-premium-gold/10 text-premium-gold',
    logoGridClassName: 'grid-cols-1',
    logos: [
      {
        name: 'FlexJobs',
        src: flexJobsLogo,
        className: 'h-11 max-w-[180px]',
        slotClassName: 'min-h-[78px] px-4 py-2',
      },
    ],
  },
];

const WaterfallLogo = ({ src, name, single = false, className = '', slotClassName = '' }) => (
  <div className={`flex items-center justify-center rounded-[1.2rem] border border-white/[0.04] bg-white/[0.015] ${slotClassName}`}>
    <img
      src={src}
      alt={name}
      loading="lazy"
      className={`w-auto object-contain opacity-92 grayscale brightness-0 invert contrast-200 drop-shadow-[0_0_24px_rgba(255,255,255,0.12)] ${
        single ? 'h-8' : ''
      } ${className}`}
    />
  </div>
);

const Slide184 = () => (
  <RemoteJobSlideShell
    accent="emerald"
    titleClassName="text-[2.35rem] md:text-[3.9rem] lg:text-[4.5rem] tracking-[-0.03em]"
  >
    <div className="relative">
      <div className="absolute left-[18px] top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-white/16 to-transparent md:left-[24px]" />
      <FadeInBlock className="rounded-[2rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_42%),linear-gradient(180deg,#0b1014_0%,#11161d_100%)] px-6 py-7 md:px-8 md:py-8 shadow-[0_28px_70px_rgba(0,0,0,0.30)]">
        <div className="space-y-4">
          {paths.map((path, index) => (
            <FadeInBlock
              key={path.stage}
              delay={index * 0.06}
              className="grid grid-cols-[auto_1fr] gap-4 md:gap-5"
            >
              <div className="relative z-10 flex items-start pt-1">
                <div className={`inline-flex h-9 min-w-9 items-center justify-center rounded-full border px-2 text-[10px] font-semibold uppercase tracking-[0.18em] ${path.accent}`}>
                  {index + 1}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.035] px-4 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.22)]">
                <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[1fr_0.95fr]">
                  <div>
                    <div className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/38">
                      {path.step}
                    </div>
                    <h3 className="mt-2 text-xl md:text-[1.6rem] leading-tight font-semibold text-white">
                      {path.stage}
                    </h3>
                  </div>

                  <div className={`grid min-h-[78px] ${path.logoGridClassName} gap-x-4 gap-y-3`}>
                    {Array.from({ length: 2 }).map((_, slotIndex) => {
                      const logo = path.logos[slotIndex];
                      return logo ? (
                        <WaterfallLogo
                          key={logo.name}
                          src={logo.src}
                          name={logo.name}
                          single={path.logos.length === 1}
                          className={logo.className}
                          slotClassName={logo.slotClassName}
                        />
                      ) : (
                        <div key={`${path.step}-empty-${slotIndex}`} />
                      );
                    })}
                  </div>
                </div>
              </div>
            </FadeInBlock>
          ))}
        </div>
      </FadeInBlock>
    </div>
  </RemoteJobSlideShell>
);

export default Slide184;
