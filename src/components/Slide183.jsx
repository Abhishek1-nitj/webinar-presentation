import { FadeInBlock, RemoteJobSlideShell } from './RemoteJobSlidesShared';

const salaryBands = [
  {
    level: 'Freshers / Entry-Level',
    years: '0 to 2 years',
    domestic: 'INR 3.5L to 7.5L',
    global: '$4 to $10 per hour',
  },
  {
    level: 'Mid-Level Professionals',
    years: '3 to 8 years',
    domestic: 'INR 8L to 22L',
    global: '$60k to $80k annually',
  },
  {
    level: 'Leadership / Experts',
    years: '8 to 12+ years',
    domestic: 'INR 18L to 75L+',
    global: '$30 to $100 per hour or $90k to $184.5k annually',
  },
];

const Slide183 = () => (
  <RemoteJobSlideShell
    eyebrow="Compensation"
    accent="gold"
  >
    <div className="space-y-6">
      <FadeInBlock className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {salaryBands.map(band => (
          <article
            key={band.level}
            className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/5 p-6 shadow-[0_28px_70px_rgba(0,0,0,0.38)] backdrop-blur-xl"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-premium-gold/70 to-transparent" />
            <h3 className="mt-3 text-2xl font-semibold text-white">{band.level}</h3>
            <p className="mt-1 text-sm text-white/46 uppercase tracking-[0.22em]">{band.years}</p>

            <div className="mt-7 space-y-4">
              <div className="rounded-[1.6rem] border border-white/10 bg-black/25 px-5 py-5">
                <div className="text-xs uppercase tracking-[0.28em] text-white/42">Domestic</div>
                <div className="mt-2 text-3xl font-display text-white">{band.domestic}</div>
              </div>
              <div className="rounded-[1.6rem] border border-white/10 bg-black/25 px-5 py-5">
                <div className="text-xs uppercase tracking-[0.28em] text-white/42">Global</div>
                <div className="mt-2 text-2xl font-display text-premium-gold">{band.global}</div>
              </div>
            </div>

          </article>
        ))}
      </FadeInBlock>
    </div>
  </RemoteJobSlideShell>
);

export default Slide183;
