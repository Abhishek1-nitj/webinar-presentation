import { FadeInBlock, RemoteJobSlideShell } from './RemoteJobSlidesShared';

import indeedLogo from '../assets/wfh-logos-clean/Indeed_logo.svg';
import instahyreLogo from '../assets/wfh-logos-clean/lnstahyreogo_200_200-removebg-preview.png';
import linkedinLogo from '../assets/wfh-logos-clean/LinkedIn-Logo.wine.svg';
import naukriLogo from '../assets/wfh-logos-clean/Naukri-vector-logo-removebg-preview.png';
import remoteOkLogo from '../assets/wfh-logos-clean/remote_oklogo-square-removebg-preview.png';
import remotiveLogo from '../assets/wfh-logos-clean/remotive-logo-removebg-preview.png';
import workingNomadsLogo from '../assets/wfh-logos-clean/Working-Nomads-job-platform-image-removebg-preview.png';
import flexJobsLogo from '../assets/wfh-logos-clean/flexjobs-logo.webp';

const groups = [
  {
    label: 'India-Friendly & Free',
    gridClassName: 'grid-cols-2 gap-x-8 gap-y-7',
    logos: [
      { name: 'LinkedIn', src: linkedinLogo, className: 'h-[5.5rem] max-w-[320px]', slotClassName: 'min-h-[108px] px-4 py-3' },
      { name: 'Indeed', src: indeedLogo, className: 'h-9 max-w-[150px]', slotClassName: 'min-h-[108px] px-4 py-3' },
      { name: 'Naukri', src: naukriLogo, className: 'h-28 max-w-[400px]', slotClassName: 'min-h-[132px] px-4 py-3' },
      { name: 'Instahyre', src: instahyreLogo, className: 'h-28 max-w-[400px]', slotClassName: 'min-h-[132px] px-4 py-3' },
    ],
  },
  {
    label: 'Global Remote & Free',
    gridClassName: 'grid-cols-1 gap-y-4',
    logos: [
      { name: 'Working Nomads', src: workingNomadsLogo, className: 'h-40 max-w-[620px]', slotClassName: 'min-h-[180px] px-5 py-3' },
      { name: 'Remote OK', src: remoteOkLogo, className: 'h-20 max-w-[320px]', slotClassName: 'min-h-[100px] px-5 py-3' },
    ],
  },
  {
    label: 'Freemium / Paid',
    gridClassName: 'grid-cols-1 gap-y-7',
    logos: [
      { name: 'FlexJobs', src: flexJobsLogo, paid: true, className: 'h-12 max-w-[200px]', slotClassName: 'min-h-[108px] px-4 py-3' },
      { name: 'Remotive', src: remotiveLogo, paid: true, className: 'h-[4.5rem] max-w-[280px]', slotClassName: 'min-h-[108px] px-4 py-3' },
    ],
  },
];

const FlowLogo = ({ src, name, paid = false, className = '', slotClassName = '' }) => (
  <div className={`relative flex items-center justify-center rounded-[1.35rem] border border-white/[0.04] bg-white/[0.015] ${slotClassName}`}>
    <img
      src={src}
      alt={name}
      loading="lazy"
      className={`w-auto object-contain opacity-92 grayscale brightness-0 invert contrast-200 drop-shadow-[0_0_22px_rgba(255,255,255,0.12)] ${className}`}
    />
    {paid ? (
      <div className="absolute right-2 top-2 flex h-4 w-4 items-center justify-center rounded-full border border-premium-gold/35 bg-premium-gold/12 text-[9px] text-premium-gold">
        $
      </div>
    ) : null}
  </div>
);

const Slide181 = () => (
  <RemoteJobSlideShell
    eyebrow="Work from Home Platforms"
  >
    <FadeInBlock className="relative rounded-[2rem] border border-white/8 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_52%),linear-gradient(90deg,#0b0f14_0%,#121821_50%,#0b0f14_100%)] px-6 py-7 md:px-10 md:py-8 shadow-[0_28px_70px_rgba(0,0,0,0.30)]">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.08fr_0.78fr] gap-7 lg:gap-10 items-start">
        {groups.map((group, index) => (
          <div key={group.label} className="relative self-start">
            {index < groups.length - 1 ? (
              <div className="absolute right-[-1.2rem] top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block" />
            ) : null}
            <div className="text-[11px] font-medium uppercase tracking-[0.42em] text-premium-gold">
              {group.label}
            </div>
            <div className="mt-3 h-px w-full bg-gradient-to-r from-transparent via-white/18 to-transparent" />
            <div className={`mt-6 grid ${group.gridClassName}`}>
              {group.logos.map(logo => (
                <FlowLogo
                  key={logo.name}
                  src={logo.src}
                  name={logo.name}
                  paid={logo.paid}
                  className={logo.className}
                  slotClassName={logo.slotClassName}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="relative mt-8">
        <div className="h-px w-full bg-gradient-to-r from-emerald-300/45 via-white/22 to-premium-gold/45" />
      </div>
    </FadeInBlock>
  </RemoteJobSlideShell>
);

export default Slide181;
