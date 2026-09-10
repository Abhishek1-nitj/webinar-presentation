import { motion } from 'framer-motion';

const formulaCategories = [
  {
    number: '01',
    name: 'Basic + Mathematical',
    count: 22,
    badgeColor: 'border-amber-400/40 bg-amber-500/10 text-amber-300',
    items: [
      { id: 1, name: 'SUM' },
      { id: 2, name: 'AVERAGE' },
      { id: 3, name: 'MIN' },
      { id: 4, name: 'MAX' },
      { id: 5, name: 'COUNT' },
      { id: 6, name: 'COUNTA' },
      { id: 7, name: 'COUNTBLANK' },
      { id: 8, name: 'PRODUCT' },
      { id: 9, name: 'SUBTOTAL' },
      { id: 10, name: 'AGGREGATE' },
      { id: 11, name: 'ROUND' },
      { id: 12, name: 'ROUNDUP' },
      { id: 13, name: 'ROUNDDOWN' },
      { id: 14, name: 'MROUND' },
      { id: 15, name: 'CEILING' },
      { id: 16, name: 'FLOOR' },
      { id: 17, name: 'INT' },
      { id: 18, name: 'TRUNC' },
      { id: 19, name: 'ABS' },
      { id: 20, name: 'MOD' },
      { id: 21, name: 'SQRT' },
      { id: 22, name: 'POWER' },
    ],
  },
  {
    number: '02',
    name: 'Logical Functions',
    count: 9,
    badgeColor: 'border-rose-400/40 bg-rose-500/10 text-rose-300',
    items: [
      { id: 23, name: 'IF' },
      { id: 24, name: 'IFS' },
      { id: 25, name: 'AND' },
      { id: 26, name: 'OR' },
      { id: 27, name: 'NOT' },
      { id: 28, name: 'XOR' },
      { id: 29, name: 'SWITCH' },
      { id: 30, name: 'IFERROR' },
      { id: 31, name: 'IFNA' },
    ],
  },
  {
    number: '03',
    name: 'Conditional Calculation',
    count: 8,
    badgeColor: 'border-orange-400/40 bg-orange-500/10 text-orange-300',
    items: [
      { id: 32, name: 'SUMIF' },
      { id: 33, name: 'SUMIFS' },
      { id: 34, name: 'COUNTIF' },
      { id: 35, name: 'COUNTIFS' },
      { id: 36, name: 'AVERAGEIF' },
      { id: 37, name: 'AVERAGEIFS' },
      { id: 38, name: 'MAXIFS' },
      { id: 39, name: 'MINIFS' },
    ],
  },
  {
    number: '04',
    name: 'Lookup & Reference',
    count: 16,
    badgeColor: 'border-emerald-400/40 bg-emerald-500/10 text-emerald-300',
    items: [
      { id: 40, name: 'XLOOKUP' },
      { id: 41, name: 'VLOOKUP' },
      { id: 42, name: 'HLOOKUP' },
      { id: 43, name: 'LOOKUP' },
      { id: 44, name: 'INDEX' },
      { id: 45, name: 'MATCH' },
      { id: 46, name: 'XMATCH' },
      { id: 47, name: 'OFFSET' },
      { id: 48, name: 'INDIRECT' },
      { id: 49, name: 'ADDRESS' },
      { id: 50, name: 'ROW' },
      { id: 51, name: 'ROWS' },
      { id: 52, name: 'COLUMN' },
      { id: 53, name: 'COLUMNS' },
      { id: 54, name: 'CHOOSE' },
      { id: 55, name: 'CHOOSECOLS' },
    ],
  },
  {
    number: '05',
    name: 'Text Functions',
    count: 25,
    badgeColor: 'border-cyan-400/40 bg-cyan-500/10 text-cyan-300',
    items: [
      { id: 56, name: 'LEFT' },
      { id: 57, name: 'RIGHT' },
      { id: 58, name: 'MID' },
      { id: 59, name: 'LEN' },
      { id: 60, name: 'TRIM' },
      { id: 61, name: 'CLEAN' },
      { id: 62, name: 'UPPER' },
      { id: 63, name: 'LOWER' },
      { id: 64, name: 'PROPER' },
      { id: 65, name: 'CONCAT' },
      { id: 66, name: 'CONCATENATE' },
      { id: 67, name: 'TEXTJOIN' },
      { id: 68, name: 'TEXTSPLIT' },
      { id: 69, name: 'TEXTBEFORE' },
      { id: 70, name: 'TEXTAFTER' },
      { id: 71, name: 'FIND' },
      { id: 72, name: 'SEARCH' },
      { id: 73, name: 'REPLACE' },
      { id: 74, name: 'SUBSTITUTE' },
      { id: 75, name: 'EXACT' },
      { id: 76, name: 'VALUE' },
      { id: 77, name: 'TEXT' },
      { id: 78, name: 'CHAR' },
      { id: 79, name: 'CODE' },
      { id: 80, name: 'REPT' },
    ],
  },
  {
    number: '06',
    name: 'Date & Time',
    count: 21,
    badgeColor: 'border-blue-400/40 bg-blue-500/10 text-blue-300',
    items: [
      { id: 81, name: 'TODAY' },
      { id: 82, name: 'NOW' },
      { id: 83, name: 'DATE' },
      { id: 84, name: 'TIME' },
      { id: 85, name: 'YEAR' },
      { id: 86, name: 'MONTH' },
      { id: 87, name: 'DAY' },
      { id: 88, name: 'HOUR' },
      { id: 89, name: 'MINUTE' },
      { id: 90, name: 'SECOND' },
      { id: 91, name: 'WEEKDAY' },
      { id: 92, name: 'WEEKNUM' },
      { id: 93, name: 'ISOWEEKNUM' },
      { id: 94, name: 'EDATE' },
      { id: 95, name: 'EOMONTH' },
      { id: 96, name: 'DATEDIF' },
      { id: 97, name: 'DAYS' },
      { id: 98, name: 'NETWORKDAYS' },
      { id: 99, name: 'NETWORKDAYS.INTL' },
      { id: 100, name: 'WORKDAY' },
      { id: 101, name: 'WORKDAY.INTL' },
    ],
  },
  {
    number: '07',
    name: 'Dynamic Array / Modern Excel',
    count: 15,
    badgeColor: 'border-violet-400/40 bg-violet-500/10 text-violet-300',
    items: [
      { id: 102, name: 'FILTER' },
      { id: 103, name: 'SORT' },
      { id: 104, name: 'SORTBY' },
      { id: 105, name: 'UNIQUE' },
      { id: 106, name: 'SEQUENCE' },
      { id: 107, name: 'RANDARRAY' },
      { id: 108, name: 'TAKE' },
      { id: 109, name: 'DROP' },
      { id: 110, name: 'EXPAND' },
      { id: 111, name: 'TOCOL' },
      { id: 112, name: 'TOROW' },
      { id: 113, name: 'WRAPROWS' },
      { id: 114, name: 'WRAPCOLS' },
      { id: 115, name: 'VSTACK' },
      { id: 116, name: 'HSTACK' },
    ],
  },
  {
    number: '08',
    name: 'Information & Validation',
    count: 11,
    badgeColor: 'border-slate-400/40 bg-slate-500/10 text-slate-300',
    items: [
      { id: 117, name: 'ISBLANK' },
      { id: 118, name: 'ISNUMBER' },
      { id: 119, name: 'ISTEXT' },
      { id: 120, name: 'ISLOGICAL' },
      { id: 121, name: 'ISERROR' },
      { id: 122, name: 'ISERR' },
      { id: 123, name: 'ISNA' },
      { id: 124, name: 'ISEVEN' },
      { id: 125, name: 'ISODD' },
      { id: 126, name: 'ISFORMULA' },
      { id: 127, name: 'TYPE' },
    ],
  },
  {
    number: '09',
    name: 'Statistical Functions',
    count: 13,
    badgeColor: 'border-teal-400/40 bg-teal-500/10 text-teal-300',
    items: [
      { id: 128, name: 'MEDIAN' },
      { id: 129, name: 'MODE.SNGL' },
      { id: 130, name: 'LARGE' },
      { id: 131, name: 'SMALL' },
      { id: 132, name: 'RANK.EQ' },
      { id: 133, name: 'RANK.AVG' },
      { id: 134, name: 'PERCENTILE.INC' },
      { id: 135, name: 'QUARTILE.INC' },
      { id: 136, name: 'STDEV.S' },
      { id: 137, name: 'STDEV.P' },
      { id: 138, name: 'VAR.S' },
      { id: 139, name: 'VAR.P' },
      { id: 140, name: 'CORREL' },
    ],
  },
  {
    number: '10',
    name: 'Financial Functions',
    count: 10,
    badgeColor: 'border-yellow-400/40 bg-yellow-500/10 text-yellow-300',
    items: [
      { id: 141, name: 'PMT' },
      { id: 142, name: 'PV' },
      { id: 143, name: 'FV' },
      { id: 144, name: 'NPV' },
      { id: 145, name: 'XNPV' },
      { id: 146, name: 'IRR' },
      { id: 147, name: 'XIRR' },
      { id: 148, name: 'RATE' },
      { id: 149, name: 'NPER' },
      { id: 150, name: 'IPMT' },
    ],
  },
];

const SlideAll150Formulas = () => (
  <section className="slide-section min-h-screen w-full flex flex-col items-center justify-start px-4 sm:px-8 md:px-14 lg:px-24 py-16 relative overflow-y-auto bg-[#07080B] scroll-smooth">
    {/* Atmospheric Background Lighting */}
    <div className="fixed inset-0 bg-gradient-to-br from-[#07080B] via-[#0B0D13] to-[#12141F] pointer-events-none" />
    <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-10%,rgba(218,165,32,0.08),transparent_65%)] pointer-events-none" />
    <div className="fixed -top-40 right-1/4 h-[30rem] w-[30rem] rounded-full bg-amber-500/[0.05] blur-[180px] pointer-events-none" />
    <div className="fixed -bottom-40 left-1/4 h-[30rem] w-[30rem] rounded-full bg-emerald-500/[0.04] blur-[180px] pointer-events-none" />

    <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col space-y-12 pb-24">
      
      {/* Title & Introduction */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center pt-4 border-b border-white/10 pb-6"
      >
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          150 Essential{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400">
            MS Excel Formulas
          </span>
        </h2>
      </motion.div>

      {/* Clean Category-Wise Scrollable List (No bulky boxes) */}
      <div className="divide-y divide-white/10 space-y-8">
        {formulaCategories.map((cat) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="pt-8 first:pt-0 space-y-4"
          >
            {/* Category Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-2">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-bold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/20">
                  {cat.number}
                </span>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-wide">
                  {cat.name}
                </h3>
              </div>
              <span className="text-xs font-semibold text-white/40 tracking-wider uppercase">
                {cat.count} Functions
              </span>
            </div>

            {/* Clean Numbered List (Fluid multi-column layout without boxes) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-2">
              {cat.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-baseline gap-2.5 py-1.5 px-2 rounded-lg hover:bg-white/[0.05] transition-colors group cursor-default"
                >
                  <span className="font-mono text-xs font-semibold text-amber-400/60 group-hover:text-amber-300 w-7 text-right select-none flex-shrink-0">
                    {item.id}.
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-semibold text-white/90 group-hover:text-amber-200 tracking-wide select-all">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default SlideAll150Formulas;
