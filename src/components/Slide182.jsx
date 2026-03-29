import { FadeInBlock, PlatformLogoBadge, RemoteJobSlideShell } from './RemoteJobSlidesShared';

import indeedLogo from '../../WFH Logos/Indeed_logo.svg';
import instahyreLogo from '../../WFH Logos/lnstahyreogo_200_200.webp';
import linkedinLogo from '../../WFH Logos/LinkedIn-Logo.wine.svg';
import naukriLogo from '../../WFH Logos/Naukri-vector-logo.jpg';
import remoteOkLogo from '../../WFH Logos/remote oklogo-square.webp';
import remotiveLogo from '../../WFH Logos/remotive-logo.png';
import workingNomadsLogo from '../../WFH Logos/Working-Nomads-job-platform-image.jpg';
import zipRecruiterLogo from '../../WFH Logos/ZipRecruiter_logo_black_text.svg.png';
import flexJobsLogo from '../../WFH Logos/flexjobs-logo.webp';

const lanes = [
  {
    label: 'Highest Success Rate',
    title: 'Instahyre',
    accent: 'text-emerald-200',
    tone: 'border-emerald-200/20 bg-emerald-300/10',
    logos: [{ name: 'Instahyre', src: instahyreLogo }],
    detail: 'Highly realistic for mid-to-senior Indian corporate hiring because matching is tighter and spam is heavily reduced.',
  },
  {
    label: 'Moderate Success Rate',
    title: 'Working Nomads, Remotive, FlexJobs, Naukri',
    accent: 'text-premium-gold',
    tone: 'border-premium-gold/25 bg-premium-gold/10',
    logos: [
      { name: 'Working Nomads', src: workingNomadsLogo },
      { name: 'Remotive', src: remotiveLogo },
      { name: 'FlexJobs', src: flexJobsLogo },
      { name: 'Naukri', src: naukriLogo },
    ],
    detail: 'Works when you move fast, filter carefully, and understand remote contracting, EOR setups, and role-location restrictions.',
  },
  {
    label: 'Low Success Rate',
    title: 'LinkedIn, Indeed, ZipRecruiter, Remote OK',
    accent: 'text-orange-200',
    tone: 'border-orange-200/20 bg-orange-300/10',
    logos: [
      { name: 'LinkedIn', src: linkedinLogo },
      { name: 'Indeed', src: indeedLogo },
      { name: 'ZipRecruiter', src: zipRecruiterLogo },
      { name: 'Remote OK', src: remoteOkLogo },
    ],
    detail: 'Massive global competition and scam noise make these useful, but only with disciplined outbound strategy and strong filtering.',
  },
  {
    label: '',
    title: 'Seek Australia',
    accent: 'text-rose-200',
    tone: 'border-rose-200/20 bg-rose-300/10',
    logos: [],
    detail: '',
  },
];

const Slide182 = () => (
  <RemoteJobSlideShell
    eyebrow="Hiring Reality"
    title="The Reality Check"
    accent="emerald"
  >
    <div className="grid grid-cols-1 gap-6">
      <FadeInBlock className="space-y-4">
        {lanes.map((lane, index) => (
          <div
            key={`${lane.title}-${index}`}
            className={`rounded-[2rem] border ${lane.tone} p-5 md:p-6 shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl`}
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                {lane.label ? (
                  <>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/45">
                      Level {index + 1}
                    </div>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{lane.label}</h3>
                  </>
                ) : null}
              </div>
              <div className={`text-lg md:text-xl font-semibold ${lane.accent}`}>
                {lane.title}
              </div>
            </div>
            {lane.logos.length ? (
              <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
                {lane.logos.map(logo => (
                  <PlatformLogoBadge key={logo.name} logo={logo.src} name={logo.name} compact />
                ))}
              </div>
            ) : null}
            {lane.detail ? (
              <p className="mt-4 max-w-4xl text-sm md:text-base leading-relaxed text-white/72">
                {lane.detail}
              </p>
            ) : null}
          </div>
        ))}
      </FadeInBlock>
    </div>
  </RemoteJobSlideShell>
);

export default Slide182;
