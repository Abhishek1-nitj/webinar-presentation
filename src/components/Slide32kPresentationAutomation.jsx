import { motion } from 'framer-motion';

const steps = [
  { step: '1. Data Collection', tools: 'CSV, Website, PDF, Images, HTML, Other excel files' },
  {
    step: '2. Data Cleaning',
    tools:
      'TRIM, CLEAN, LEFT, RIGHT, MID, FIND UPPER, LOWER, PROPER, TEXTBEFORE, TEXT AFTER, TEXTJOIN',
  },
  {
    step: '3. Data Connection/Data Modeling',
    tools: 'XLOOKUP, VLOOKUP, INDEX + MATCH, XMATCH, FILTER, CHOOSECOLS, VSTACK, HSTACK',
  },
  {
    step: '4. Data Analysis',
    tools: 'SUM, AVERAGE, COUNT, SUMIF, COUNTIF, AVERAGEIF, SUMIFS, COUNTIFS, IF, IFS, AND, OR',
  },
  {
    step: '5. Data Insights',
    tools: 'PivotTables, SORT, SORTBY, RANK, UNIQUE, FILTER, PERCENTILE, MEDIAN',
  },
  { step: '6. Data Presentation', tools: 'Dashboards and PPTs' },
  {
    step: '7. Automation',
    tools: 'VBA Macros, Power Query Refresh, Office Scripts, LET, LAMBDA',
  },
];

const Slide32kPresentationAutomation = () => (
  <section className="slide-section min-h-screen w/full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-6xl w/full space-y-6">
      <motion.h2
        className="font-display text-3xl md:text-4xl text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        Excel Workflow Map
      </motion.h2>

      <motion.div
        className="rounded-[2.5rem] border border-white/10 bg-white/5 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="grid grid-cols-2 bg-premium-black/70 text-premium-gold uppercase text-xs tracking-[0.4em]">
          <div className="px-4 py-3 border-r border-white/10">Step</div>
          <div className="px-4 py-3">Key Excel formulas / tools used</div>
        </div>
        {steps.map(({ step, tools }, index) => {
          const isHighlighted = step.startsWith('6');
          return (
            <div
              key={step}
              className={`grid grid-cols-1 md:grid-cols-2 border-t text-base md:text-lg ${
                isHighlighted
                  ? 'bg-gradient-to-r from-premium-gold/40 via-premium-gold/30 to-transparent border-premium-gold/40'
                  : 'bg-transparent border-white/10'
              }`}
            >
              <div
                className={`px-4 py-4 font-semibold ${
                  isHighlighted ? 'text-premium-gold' : 'text-white/50'
                }`}
              >
                {step}
              </div>
              <div
                className={`px-4 py-4 leading-relaxed ${
                  isHighlighted ? 'text-white' : 'text-white/40'
                }`}
              >
                {tools}
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default Slide32kPresentationAutomation;
