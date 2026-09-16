import { motion } from 'framer-motion';

import logoPraxiaskill from '../assets/course_logos/praxiaskill.png';
import logoCompufield from '../assets/course_logos/compufield.png';
import logoEdureka from '../assets/course_logos/edureka.png';
import logoBesant from '../assets/course_logos/besant.png';
import logoDatamites from '../assets/course_logos/datamites.png';

const benchmarkCourses = [
  {
    id: 'excel-ai',
    tool: 'Advanced Excel + AI',
    provider: 'Praxia Skill',
    course: 'AI Integrated Advanced Excel',
    price: '₹15,000',
    link: 'https://www.praxiaskill.com/course/ai-integrated-advanced-accounting-advanced-excel?utm_source=chatgpt.com',
    logo: logoPraxiaskill,
    accentBorder: 'border-emerald-500/30 hover:border-emerald-400/70',
    accentBadge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
    accentGlow: 'hover:shadow-[0_12px_36px_rgba(16,185,129,0.18)]',
  },
  {
    id: 'power-query',
    tool: 'Power Query',
    provider: 'Compufield',
    course: 'Power Query in Excel',
    price: '₹17,500',
    link: 'https://compufield.com/power-query-in-excel.html?utm_source=chatgpt.com',
    logo: logoCompufield,
    accentBorder: 'border-teal-500/30 hover:border-teal-400/70',
    accentBadge: 'bg-teal-500/10 text-teal-300 border-teal-500/30',
    accentGlow: 'hover:shadow-[0_12px_36px_rgba(20,184,166,0.18)]',
  },
  {
    id: 'power-bi',
    tool: 'Power BI',
    provider: 'Edureka',
    course: 'Power BI Certification Course',
    price: '₹17,999',
    link: 'https://www.careers360.com/courses-certifications/edureka-microsoft-power-bi-training-course?utm_source=chatgpt.com',
    logo: logoEdureka,
    accentBorder: 'border-amber-500/30 hover:border-amber-400/70',
    accentBadge: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    accentGlow: 'hover:shadow-[0_12px_36px_rgba(245,158,11,0.18)]',
  },
  {
    id: 'sql',
    tool: 'SQL Databases',
    provider: 'Besant Technologies',
    course: 'PostgreSQL Online Training',
    price: '₹30,000',
    link: 'https://www.besanttechnologies.com/postgresql-online-training?utm_source=chatgpt.com',
    logo: logoBesant,
    accentBorder: 'border-cyan-500/30 hover:border-cyan-400/70',
    accentBadge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
    accentGlow: 'hover:shadow-[0_12px_36px_rgba(6,182,212,0.18)]',
  },
  {
    id: 'python',
    tool: 'Python for Data Science',
    provider: 'DataMites',
    course: 'Python Machine Learning',
    price: '₹44,000',
    link: 'https://datamites.com/python-training/machine-learning-with-python/?utm_source=chatgpt.com',
    logo: logoDatamites,
    accentBorder: 'border-violet-500/30 hover:border-violet-400/70',
    accentBadge: 'bg-violet-500/10 text-violet-300 border-violet-500/30',
    accentGlow: 'hover:shadow-[0_12px_36px_rgba(139,92,246,0.18)]',
  },
];

const SlideAllCoursePrices = () => {
  return (
    <section className="slide-section h-screen max-h-screen w-full flex flex-col justify-center px-4 sm:px-6 md:px-10 lg:px-14 py-4 sm:py-6 relative overflow-hidden bg-[#07080B]">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#07080B] via-[#090C12] to-[#0D1017] pointer-events-none" />
      <div className="absolute -top-36 right-1/4 h-80 w-80 rounded-full bg-amber-500/[0.04] blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-36 left-1/4 h-80 w-80 rounded-full bg-blue-500/[0.04] blur-[160px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto my-auto flex flex-col gap-5 sm:gap-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-1.5"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Where to Learn{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400">
              Each Tool?
            </span>
          </h2>
        </motion.div>

        {/* 5-Column Interactive Cards Grid (1 Course per Tool, Click anywhere on box to open) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 items-stretch">
          {benchmarkCourses.map((item, idx) => (
            <motion.a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`group flex flex-col justify-between p-4 sm:p-5 rounded-2xl border ${item.accentBorder} bg-gradient-to-b from-[#11141C]/90 via-[#0E1017]/95 to-[#0A0C10] ${item.accentGlow} backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 shadow-lg cursor-pointer`}
            >
              {/* Top: Stack Badge + External Arrow */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`inline-block text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-md border tracking-wide ${item.accentBadge}`}>
                    {item.tool}
                  </span>
                  <div className="p-1 rounded-md text-zinc-500 group-hover:text-amber-300 transition-colors">
                    <svg className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>

                {/* Provider Logo + Name */}
                <div className="flex items-center gap-3 my-2">
                  <div className="h-11 w-11 shrink-0 rounded-xl bg-white p-1.5 border border-white/20 flex items-center justify-center overflow-hidden shadow-sm group-hover:scale-105 transition-transform">
                    <img
                      src={item.logo}
                      alt=""
                      aria-hidden="true"
                      className="h-full w-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-white text-sm sm:text-base tracking-tight truncate group-hover:text-amber-300 transition-colors">
                      {item.provider}
                    </h4>
                  </div>
                </div>

                {/* Course Title */}
                <p className="text-xs text-zinc-400 font-medium line-clamp-2 mt-2 leading-snug">
                  {item.course}
                </p>
              </div>

              {/* Bottom: Price Box */}
              <div className="mt-5 pt-3 border-t border-zinc-800/80">
                <div className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-semibold">
                  Course Fee
                </div>
                <div className="font-mono text-xl sm:text-2xl font-black text-white group-hover:text-amber-300 transition-colors">
                  {item.price}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom Total Benchmark Summary - Big & Impactful */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex items-center justify-center pt-1 sm:pt-2"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 px-6 sm:px-8 py-3 sm:py-3.5 rounded-2xl bg-gradient-to-r from-white/[0.03] via-amber-500/[0.08] to-white/[0.03] border border-amber-400/30 shadow-[0_10px_35px_rgba(245,158,11,0.15)] backdrop-blur-xl">
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold text-zinc-200 tracking-tight">
              Total to learn all 5 tools separately:
            </span>
            <span className="font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 drop-shadow-[0_4px_20px_rgba(245,158,11,0.4)]">
              ₹1,24,499
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SlideAllCoursePrices;
