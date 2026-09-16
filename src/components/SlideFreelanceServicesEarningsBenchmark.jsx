import { motion } from 'framer-motion';

const freelanceServices = [
  {
    tool: 'Excel + AI',
    fee: '₹7,500 – ₹20,000',
    deliverables: 'MIS Trackers, Formula Fixing, Data Cleanup',
  },
  {
    tool: 'Excel Dashboard / Reporting',
    fee: '₹10,000 – ₹30,000',
    deliverables: 'Automated KPI & Management Dashboards',
  },
  {
    tool: 'Power Query Automation',
    fee: '₹12,000 – ₹30,000',
    deliverables: 'Folder Automation & File Consolidation',
  },
  {
    tool: 'Power Pivot / Advanced Excel BI',
    fee: '₹15,000 – ₹35,000',
    deliverables: 'Multi-Table Data Modeling & DAX Measures',
  },
  {
    tool: 'Power BI Dashboard',
    fee: '₹15,000 – ₹40,000',
    deliverables: 'Interactive Executive & Sales KPI Dashboards',
  },
  {
    tool: 'Advanced Power BI',
    fee: '₹30,000 – ₹70,000',
    deliverables: 'Multi-Page BI, Star Schema, RLS & Service',
  },
  {
    tool: 'SQL Analytics',
    fee: '₹10,000 – ₹30,000',
    deliverables: 'Business Query Writing & Reporting Datasets',
  },
  {
    tool: 'SQL + Power BI',
    fee: '₹20,000 – ₹50,000',
    deliverables: 'Live Database-Connected BI Dashboards',
  },
  {
    tool: 'Python Data Analysis',
    fee: '₹12,000 – ₹35,000',
    deliverables: 'Pandas Cleaning, Insights & Visualizations',
  },
  {
    tool: 'Python Automation',
    fee: '₹20,000 – ₹50,000',
    deliverables: 'Workflow Scripts, File Processing & Scraping',
  },
  {
    tool: 'End-to-End Analytics Solution',
    fee: '₹40,000 – ₹1,00,000',
    deliverables: 'Full Pipeline: SQL → Model → Power BI → Python',
  },
];

const SlideFreelanceServicesEarningsBenchmark = () => {
  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-5 sm:py-6 relative overflow-hidden bg-[#090A0D]">
      {/* Subtle Executive Matte Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(255,255,255,0.025),transparent_70%)] pointer-events-none" />

      {/* Clean Minimalist Header */}
      <div className="relative z-10 w-full max-w-6xl mx-auto pb-3 border-b border-zinc-800/80 shrink-0">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Freelancing
          </h2>
        </motion.div>
      </div>

      {/* Main Table: Pricing Centered, Big & Highlighted */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex-1 min-h-0 py-2.5 flex flex-col justify-center">
        <div className="w-full rounded-2xl border border-zinc-800/90 bg-zinc-900/60 backdrop-blur-md overflow-hidden shadow-xl flex flex-col max-h-full">
          
          {/* Table Header Row */}
          <div className="grid grid-cols-12 gap-3 px-5 py-3 border-b border-zinc-800 bg-black/40 text-[11px] font-mono font-bold tracking-widest text-zinc-400 uppercase shrink-0">
            <div className="col-span-4 sm:col-span-4">Service / Tool</div>
            <div className="col-span-4 sm:col-span-4 text-center text-amber-300">
              Project Earning Potential
            </div>
            <div className="col-span-4 sm:col-span-4 text-right">Sample Scope</div>
          </div>

          {/* Table Body Rows (All 11 fit cleanly without scrolling) */}
          <div className="flex-1 min-h-0 divide-y divide-zinc-800/60 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700">
            {freelanceServices.map((service, idx) => (
              <motion.div
                key={service.tool}
                initial={{ opacity: 0, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: idx * 0.015 }}
                className="grid grid-cols-12 gap-3 px-5 py-2 sm:py-2.5 items-center hover:bg-zinc-800/30 transition-colors group"
              >
                {/* Column 1: Tool / Service */}
                <div className="col-span-4 sm:col-span-4 pr-2">
                  <span className="font-display text-xs sm:text-sm font-bold text-zinc-200 group-hover:text-white transition-colors">
                    {service.tool}
                  </span>
                </div>

                {/* Column 2: Project Pricing (THE HERO: Centered, Big, Bold, Highlighted) */}
                <div className="col-span-4 sm:col-span-4 text-center">
                  <span className="font-mono text-xs sm:text-sm md:text-base font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 tracking-wide inline-block px-3 py-0.5 rounded-lg bg-amber-500/[0.08] border border-amber-400/30 shadow-sm">
                    {service.fee}
                  </span>
                </div>

                {/* Column 3: Compact Deliverables on Right */}
                <div className="col-span-4 sm:col-span-4 text-right pl-2">
                  <span className="text-[11px] sm:text-xs text-zinc-400 font-normal leading-snug group-hover:text-zinc-300 transition-colors">
                    {service.deliverables}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SlideFreelanceServicesEarningsBenchmark;
