import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const formulaCategories = [
  {
    number: '01',
    shortName: 'Basic + Math',
    name: 'Basic + Mathematical',
    count: 22,
    accentColor: '#F59E0B',
    badgeColor: 'border-amber-400/40 bg-amber-500/10 text-amber-300',
    cardBorder: 'hover:border-amber-500/40 hover:shadow-amber-500/10',
    headerBg: 'from-amber-500/15 via-amber-500/5 to-transparent',
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
    shortName: 'Logical',
    name: 'Logical Functions',
    count: 9,
    accentColor: '#F43F5E',
    badgeColor: 'border-rose-400/40 bg-rose-500/10 text-rose-300',
    cardBorder: 'hover:border-rose-500/40 hover:shadow-rose-500/10',
    headerBg: 'from-rose-500/15 via-rose-500/5 to-transparent',
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
    shortName: 'Conditional',
    name: 'Conditional Calculation',
    count: 8,
    accentColor: '#FB923C',
    badgeColor: 'border-orange-400/40 bg-orange-500/10 text-orange-300',
    cardBorder: 'hover:border-orange-500/40 hover:shadow-orange-500/10',
    headerBg: 'from-orange-500/15 via-orange-500/5 to-transparent',
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
    shortName: 'Lookup',
    name: 'Lookup & Reference',
    count: 16,
    accentColor: '#10B981',
    badgeColor: 'border-emerald-400/40 bg-emerald-500/10 text-emerald-300',
    cardBorder: 'hover:border-emerald-500/40 hover:shadow-emerald-500/10',
    headerBg: 'from-emerald-500/15 via-emerald-500/5 to-transparent',
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
    shortName: 'Text',
    name: 'Text Functions',
    count: 25,
    accentColor: '#06B6D4',
    badgeColor: 'border-cyan-400/40 bg-cyan-500/10 text-cyan-300',
    cardBorder: 'hover:border-cyan-500/40 hover:shadow-cyan-500/10',
    headerBg: 'from-cyan-500/15 via-cyan-500/5 to-transparent',
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
    shortName: 'Date & Time',
    name: 'Date & Time',
    count: 21,
    accentColor: '#3B82F6',
    badgeColor: 'border-blue-400/40 bg-blue-500/10 text-blue-300',
    cardBorder: 'hover:border-blue-500/40 hover:shadow-blue-500/10',
    headerBg: 'from-blue-500/15 via-blue-500/5 to-transparent',
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
    shortName: 'Dynamic Array',
    name: 'Dynamic Array / Modern Excel',
    count: 15,
    accentColor: '#8B5CF6',
    badgeColor: 'border-violet-400/40 bg-violet-500/10 text-violet-300',
    cardBorder: 'hover:border-violet-500/40 hover:shadow-violet-500/10',
    headerBg: 'from-violet-500/15 via-violet-500/5 to-transparent',
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
    shortName: 'Validation',
    name: 'Information & Validation',
    count: 11,
    accentColor: '#94A3B8',
    badgeColor: 'border-slate-400/40 bg-slate-500/10 text-slate-300',
    cardBorder: 'hover:border-slate-500/40 hover:shadow-slate-500/10',
    headerBg: 'from-slate-500/15 via-slate-500/5 to-transparent',
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
    shortName: 'Statistical',
    name: 'Statistical Functions',
    count: 13,
    accentColor: '#14B8A6',
    badgeColor: 'border-teal-400/40 bg-teal-500/10 text-teal-300',
    cardBorder: 'hover:border-teal-500/40 hover:shadow-teal-500/10',
    headerBg: 'from-teal-500/15 via-teal-500/5 to-transparent',
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
    shortName: 'Financial',
    name: 'Financial Functions',
    count: 10,
    accentColor: '#EAB308',
    badgeColor: 'border-yellow-400/40 bg-yellow-500/10 text-yellow-300',
    cardBorder: 'hover:border-yellow-500/40 hover:shadow-yellow-500/10',
    headerBg: 'from-yellow-500/15 via-yellow-500/5 to-transparent',
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

const SlideAll150Formulas = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      const progress = Math.min(100, Math.max(0, (scrollLeft / maxScroll) * 100));
      setScrollProgress(progress);
      
      const cardElements = el.querySelectorAll('.category-card');
      let currentActive = 0;
      cardElements.forEach((card, idx) => {
        const offset = card.offsetLeft - el.offsetLeft - scrollLeft;
        if (offset <= clientWidth * 0.35) {
          currentActive = idx;
        }
      });
      setActiveIndex(currentActive);
    }
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);

    checkScroll();

    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll]);

  const scrollToCategory = (index) => {
    if (scrollRef.current) {
      const cards = scrollRef.current.querySelectorAll('.category-card');
      if (cards[index]) {
        cards[index].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
    }
  };

  return (
    <section className="slide-section h-screen w-full flex flex-col justify-between px-4 sm:px-6 md:px-10 lg:px-12 py-5 relative overflow-hidden bg-[#07080B]">
      {/* Atmospheric Background Lighting */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#07080B] via-[#0B0D13] to-[#12141F] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-10%,rgba(218,165,32,0.09),transparent_65%)] pointer-events-none" />
      <div className="absolute -top-32 right-1/4 h-[25rem] w-[25rem] rounded-full bg-amber-500/[0.06] blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-32 left-1/4 h-[25rem] w-[25rem] rounded-full bg-emerald-500/[0.05] blur-[160px] pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-20 w-full max-w-7xl mx-auto flex items-center justify-center pb-2 border-b border-white/10 shrink-0">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            150 Essential{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400">
              MS Excel Formulas
            </span>
          </h2>
        </motion.div>
      </div>

      {/* Main Sideways Horizontal Scroll Track */}
      <div className="relative z-10 w-full flex-1 flex items-center min-h-0 py-2">
        <div
          ref={scrollRef}
          className="w-full h-full flex flex-row items-stretch gap-5 overflow-x-auto overflow-y-hidden px-2 sm:px-4 py-2 scroll-smooth cursor-grab active:cursor-grabbing scrollbar-thin scrollbar-thumb-amber-500/30 scrollbar-track-white/5"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(245, 158, 11, 0.35) rgba(255, 255, 255, 0.05)',
          }}
        >
          {formulaCategories.map((cat, index) => {
            const isLongList = cat.items.length > 12;
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className={`category-card group relative flex flex-col justify-between shrink-0 rounded-2xl bg-[#0F111A]/90 backdrop-blur-md border border-white/10 transition-all duration-300 ${cat.cardBorder} p-4 sm:p-5 shadow-xl hover:shadow-2xl ${
                  isLongList ? 'w-[310px] sm:w-[350px] md:w-[380px]' : 'w-[260px] sm:w-[290px] md:w-[310px]'
                }`}
              >
                {/* Subtle top glow highlight */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${cat.headerBg}`}
                />

                {/* Card Header */}
                <div className="space-y-2 pb-3 border-b border-white/[0.08] shrink-0">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`font-mono text-xs font-bold px-2.5 py-0.5 rounded-md border ${cat.badgeColor}`}
                    >
                      {cat.number}
                    </span>
                    <span className="text-[11px] font-semibold text-white/50 tracking-wider uppercase bg-white/[0.04] px-2 py-0.5 rounded-full border border-white/5">
                      {cat.count} Functions
                    </span>
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-white tracking-wide leading-tight group-hover:text-amber-200 transition-colors">
                    {cat.name}
                  </h3>
                </div>

                {/* Formulas List Grid (Fluid 2-col or 1-col to fit neatly inside card) */}
                <div
                  className={`flex-1 min-h-0 my-3 overflow-y-auto pr-1 ${
                    isLongList
                      ? 'grid grid-cols-2 gap-x-2.5 gap-y-1.5'
                      : 'grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5'
                  }`}
                >
                  {cat.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-baseline gap-1.5 py-1 px-1.5 rounded-md hover:bg-white/[0.07] transition-all group/item"
                    >
                      <span className="font-mono text-[11px] font-semibold text-white/30 group-hover/item:text-amber-400/80 w-5 text-right shrink-0">
                        {item.id}.
                      </span>
                      <span className="font-mono text-xs font-semibold text-white/90 group-hover/item:text-amber-200 tracking-wide select-all truncate">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Card Footer Indicator */}
                <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-white/35 font-mono shrink-0">
                  <span>Module {cat.number} / 10</span>
                  <span className="group-hover:text-amber-400/70 transition-colors font-sans font-medium">
                    {cat.shortName}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Category Quick-Jump Bar & Progress Bar */}
      <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col gap-2 pt-2 border-t border-white/10 shrink-0">
        {/* Category Pill Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 justify-start md:justify-center">
          {formulaCategories.map((cat, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={cat.number}
                type="button"
                onClick={() => scrollToCategory(idx)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 border ${
                  isActive
                    ? 'bg-amber-400/20 text-amber-300 border-amber-400/40 shadow-sm'
                    : 'bg-white/[0.03] text-white/50 border-white/5 hover:bg-white/[0.08] hover:text-white/80'
                }`}
              >
                <span className="font-mono text-[10px] opacity-70">{cat.number}</span>
                <span>{cat.shortName}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Scroll Progress Bar */}
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 rounded-full transition-all duration-150"
            style={{ width: `${Math.max(8, scrollProgress)}%` }}
          />
        </div>
      </div>
    </section>
  );
};

export default SlideAll150Formulas;
