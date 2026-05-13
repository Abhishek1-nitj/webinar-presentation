import { motion } from 'framer-motion';

const workflowSteps = [
  {
    label: 'Data Collection',
    tools: 'CSV, Website, PDF, Images, HTML, Other Excel files',
  },
  {
    label: 'Data Cleaning',
    tools: 'TRIM, CLEAN, LEFT, RIGHT, MID, FIND, UPPER, LOWER, PROPER, TEXTBEFORE, TEXTAFTER, TEXTJOIN',
  },
  {
    label: 'Data Connection/Data Modeling',
    tools: 'XLOOKUP, VLOOKUP, INDEX + MATCH, XMATCH, FILTER, CHOOSECOLS, VSTACK, HSTACK',
  },
  {
    label: 'Data Analysis',
    tools: 'SUM, AVERAGE, COUNT, SUMIF, COUNTIF, AVERAGEIF, SUMIFS, COUNTIFS, IF, IFS, AND, OR',
  },
  {
    label: 'Data Insights',
    tools: 'PivotTables, SORT, SORTBY, RANK, UNIQUE, FILTER, PERCENTILE, MEDIAN',
  },
  {
    label: 'Data Presentation',
    tools: 'Dashboards and PPTs',
  },
  {
    label: 'Automation',
    tools: 'VBA Macros, Power Query Refresh, Office Scripts, LET, LAMBDA',
  },
];

const Slide32j = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-6xl w-full space-y-8">
      <motion.h2
        className="font-display text-3xl md:text-4xl lg:text-5xl text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        All steps are covered in Depth
      </motion.h2>

      <motion.div
        className="rounded-[1.5rem] border border-white/10 bg-white/5 backdrop-blur-lg overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 text-left text-xs md:text-sm uppercase tracking-wide text-white/70 bg-white/5 px-5 md:px-8 py-3">
          <span>Step</span>
          <span>Key Excel formulas / tools used</span>
        </div>

        {workflowSteps.map(({ label, tools }) => (
          <div
            key={label}
            className="grid grid-cols-1 md:grid-cols-2 gap-3 border-t border-white/10 px-5 md:px-8 py-4"
          >
            <div className="space-y-1">
              <p className="text-xl md:text-2xl font-display text-white">{label}</p>
            </div>
            <p className="text-white/80 text-base md:text-lg leading-relaxed">{tools}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Slide32j;
