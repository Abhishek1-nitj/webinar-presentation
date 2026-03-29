import { FadeInBlock, RemoteJobSlideShell } from './RemoteJobSlidesShared';

const roleGroups = [
  {
    title: 'Administrative & Entry-Level',
    roles: ['Data Entry Specialist', 'Logistics Coordinator', 'MIS Executive', 'Accounting Administrator'],
  },
  {
    title: 'Analytical & Mid-Level',
    roles: ['Financial Analyst', 'Accounting Analyst', 'Sales Finance Analyst', 'Business Analyst', 'Pricing Analyst'],
  },
  {
    title: 'Strategic & Specialized',
    roles: ['Predictive Modeler', 'Senior Category Manager', 'Excel Consultant', 'Director of MIS & Reporting', 'Catastrophe Pricing Scientist'],
  },
];

const Slide185 = () => (
  <RemoteJobSlideShell
    eyebrow="Job Roles & Designations"
  >
    <div className="space-y-6">
      <FadeInBlock className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {roleGroups.map(group => (
          <article
            key={group.title}
            className="rounded-[2.2rem] border border-white/10 bg-white/5 p-6 shadow-[0_28px_70px_rgba(0,0,0,0.38)] backdrop-blur-xl"
          >
            <h3 className="font-display text-2xl leading-tight text-white">{group.title}</h3>
            <div className="mt-6 space-y-3">
              {group.roles.map(role => (
                <div
                  key={role}
                  className="rounded-[1.35rem] border border-white/10 bg-black/25 px-4 py-3 text-base text-white/74"
                >
                  {role}
                </div>
              ))}
            </div>
          </article>
        ))}
      </FadeInBlock>
    </div>
  </RemoteJobSlideShell>
);

export default Slide185;
