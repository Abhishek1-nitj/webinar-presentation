import { useState } from 'react';
import { motion } from 'framer-motion';

import logoMindmajix from '../assets/course_logos/mindmajix.png';
import logoSimplilearn from '../assets/course_logos/simplilearn.png';
import logoEdureka from '../assets/course_logos/edureka.png';
import logoActe from '../assets/course_logos/acte.png';
import logoKoenig from '../assets/course_logos/koenig.png';
import logoNobleprog from '../assets/course_logos/nobleprog.png';
import logoPraxiaskill from '../assets/course_logos/praxiaskill.png';
import logoCoachx from '../assets/course_logos/coachx.png';
import logoPhillos from '../assets/course_logos/phillos.png';
import logoExcellogics from '../assets/course_logos/excellogics.png';
import logoNiit from '../assets/course_logos/niit.png';
import logoBesant from '../assets/course_logos/besant.png';
import logoProleed from '../assets/course_logos/proleed.png';
import logoLearnovita from '../assets/course_logos/learnovita.png';
import logoDatamites from '../assets/course_logos/datamites.png';
import logoAnalytixlabs from '../assets/course_logos/analytixlabs.png';
import logoCompufield from '../assets/course_logos/compufield.png';

const courseCategories = [
  {
    id: 'excel',
    name: 'Advanced Excel + AI',
    badge: '6 Providers',
    color: 'from-emerald-400/20 to-teal-500/10 border-emerald-400/30 text-emerald-300',
    tagColor: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/20',
    courses: [
      {
        provider: 'NIIT',
        tool: 'Advanced Excel Applied Program',
        price: '₹9,999',
        link: 'https://www.niit.ai/india/course/advanced-excel-applied-program?utm_source=chatgpt.com',
        logo: logoNiit,
      },
      {
        provider: 'Excellogics',
        tool: 'Advanced Excel + AI & Copilot',
        price: '₹12,000',
        link: 'https://excellogics.co/courses/advanced-excel-power-query-with-microsoft-copilot.html?utm_source=chatgpt.com',
        logo: logoExcellogics,
      },
      {
        provider: 'Phillos',
        tool: 'Excel & Data Analysis Training',
        price: '₹13,500',
        link: 'https://www.phillos.in/excel-course-in-bangalore.html?utm_source=chatgpt.com',
        logo: logoPhillos,
      },
      {
        provider: 'Praxia Skill',
        tool: 'AI Integrated Advanced Excel',
        price: '₹15,000',
        link: 'https://www.praxiaskill.com/course/ai-integrated-advanced-accounting-advanced-excel?utm_source=chatgpt.com',
        logo: logoPraxiaskill,
      },
      {
        provider: 'CoachX',
        tool: 'Excel with AI & Automation',
        price: '₹15,000',
        link: 'https://coachx.live/course/excel-with-ai?utm_source=chatgpt.com',
        logo: logoCoachx,
      },
      {
        provider: 'Koenig Solutions',
        tool: 'Advanced MS Excel Certification',
        price: '₹50,000',
        link: 'https://www.koenig-solutions.com/advanced-microsoft-excel-certification?utm_source=chatgpt.com',
        logo: logoKoenig,
      },
    ],
  },
  {
    id: 'powerquery',
    name: 'Power Query',
    badge: '1 Provider',
    color: 'from-cyan-400/20 to-sky-500/10 border-cyan-400/30 text-cyan-300',
    tagColor: 'bg-cyan-400/10 text-cyan-300 border-cyan-400/20',
    courses: [
      {
        provider: 'Compufield',
        tool: 'Power Query in Excel',
        price: '₹17,500',
        link: 'https://compufield.com/power-query-in-excel.html?utm_source=chatgpt.com',
        logo: logoCompufield,
      },
    ],
  },
  {
    id: 'powerbi',
    name: 'Power BI',
    badge: '6 Providers',
    color: 'from-amber-400/20 to-yellow-500/10 border-amber-400/30 text-amber-300',
    tagColor: 'bg-amber-400/10 text-amber-300 border-amber-400/20',
    courses: [
      {
        provider: 'Mindmajix',
        tool: 'Power BI Training',
        price: '₹8,000',
        link: 'https://www.careers360.com/courses-certifications/mindmajix-technologies-power-bi-training-in-chennai-course?utm_source=chatgpt.com',
        logo: logoMindmajix,
      },
      {
        provider: 'Koenig Solutions',
        tool: 'Power BI Data Analyst',
        price: '₹9,990',
        link: 'https://www.koenig-solutions.com/power-bi-data-analyst-course?utm_source=chatgpt.com',
        logo: logoKoenig,
      },
      {
        provider: 'Simplilearn',
        tool: 'Power BI Certification',
        price: '₹14,999',
        link: 'https://www.simplilearn.com/in/power-bi-certification-course?utm_source=chatgpt.com',
        logo: logoSimplilearn,
      },
      {
        provider: 'ACTE',
        tool: 'Power BI Training',
        price: '₹16,500',
        link: 'https://www.acte.in/power-bi-training-in-bangalore?utm_source=chatgpt.com',
        logo: logoActe,
      },
      {
        provider: 'Edureka',
        tool: 'Power BI Certification Course',
        price: '₹17,999',
        link: 'https://www.careers360.com/courses-certifications/edureka-microsoft-power-bi-training-course?utm_source=chatgpt.com',
        logo: logoEdureka,
      },
      {
        provider: 'NobleProg',
        tool: 'Power BI Basic to Advanced',
        price: '₹1,68,661',
        link: 'https://www.nobleprog.in/cc/powerbibastoadv?utm_source=chatgpt.com',
        logo: logoNobleprog,
      },
    ],
  },
  {
    id: 'sql',
    name: 'SQL Databases',
    badge: '5 Providers',
    color: 'from-blue-400/20 to-indigo-500/10 border-blue-400/30 text-blue-300',
    tagColor: 'bg-blue-400/10 text-blue-300 border-blue-400/20',
    courses: [
      {
        provider: 'DataMites',
        tool: 'Database SQL & MongoDB',
        price: '₹13,900',
        link: 'https://lms.datamites.com/home/course/database-sql-and-mongodb/12?utm_source=chatgpt.com',
        logo: logoDatamites,
      },
      {
        provider: 'Simplilearn',
        tool: 'SQL Certification Training',
        price: '₹15,000',
        link: 'https://www.simplilearn.com/in/sql-certification-course?source=GhPreviewCTAText&utm_source=chatgpt.com',
        logo: logoSimplilearn,
      },
      {
        provider: 'Learnovita',
        tool: 'SQL Training Program',
        price: '₹18,500',
        link: 'https://www.learnovita.com/sql-training-in-bangalore?utm_source=chatgpt.com',
        logo: logoLearnovita,
      },
      {
        provider: 'Besant Technologies',
        tool: 'PostgreSQL Online Training',
        price: '₹30,000',
        link: 'https://www.besanttechnologies.com/postgresql-online-training?utm_source=chatgpt.com',
        logo: logoBesant,
      },
      {
        provider: 'Proleed Academy',
        tool: 'SQL Training Course',
        price: '₹35,000',
        link: 'https://proleed.academy/sql-training-course.php?utm_source=chatgpt.com',
        logo: logoProleed,
      },
    ],
  },
  {
    id: 'python',
    name: 'Python for Data Science',
    badge: '3 Providers',
    color: 'from-violet-400/20 to-purple-500/10 border-violet-400/30 text-violet-300',
    tagColor: 'bg-violet-400/10 text-violet-300 border-violet-400/20',
    courses: [
      {
        provider: 'AnalytixLabs',
        tool: 'Data Science Using Python',
        price: '₹30,000',
        link: 'https://www.analytixlabs.co.in/data-science-using-python/?utm_source=chatgpt.com',
        logo: logoAnalytixlabs,
      },
      {
        provider: 'Besant Technologies',
        tool: 'Python for Data Science',
        price: '₹35,000',
        link: 'https://www.besanttechnologies.com/python-for-data-science-training?utm_source=chatgpt.com',
        logo: logoBesant,
      },
      {
        provider: 'DataMites',
        tool: 'Python Machine Learning',
        price: '₹44,000',
        link: 'https://datamites.com/python-training/machine-learning-with-python/?utm_source=chatgpt.com',
        logo: logoDatamites,
      },
    ],
  },
];

const SlideAllCoursePrices = () => {
  const [activeFilter, setActiveFilter] = useState('excel');

  const filteredCategories = courseCategories.filter((cat) => cat.id === activeFilter);

  return (
    <section className="slide-section min-h-screen w-full flex flex-col items-center justify-start px-4 sm:px-8 md:px-12 lg:px-20 py-16 relative overflow-y-auto bg-[#07080B] scroll-smooth">
      {/* Background Lighting */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#07080B] via-[#0A0C12] to-[#12141F] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-10%,rgba(218,165,32,0.08),transparent_65%)] pointer-events-none" />
      <div className="fixed -top-40 right-1/4 h-[30rem] w-[30rem] rounded-full bg-amber-500/[0.05] blur-[180px] pointer-events-none" />
      <div className="fixed -bottom-40 left-1/4 h-[30rem] w-[30rem] rounded-full bg-blue-500/[0.05] blur-[180px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col space-y-8 pb-24">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center pt-4 border-b border-white/10 pb-6"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Where to Learn{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400">
              Each Tool?
            </span>
          </h2>
        </motion.div>

        {/* Quick Filter Tabs (Individual Tools Only) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {courseCategories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-400 to-yellow-300 text-black shadow-[0_0_25px_rgba(251,191,36,0.35)] scale-105'
                    : 'bg-white/[0.04] text-white/70 hover:bg-white/[0.09] hover:text-white border border-white/10'
                }`}
              >
                <span>{cat.name}</span>
                <span
                  className={`text-[11px] font-mono px-2 py-0.5 rounded-md ${
                    isActive ? 'bg-black/20 text-black font-extrabold' : 'bg-white/10 text-white/60'
                  }`}
                >
                  {cat.courses.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Course Directory by Tool */}
        <div className="space-y-10">
          {filteredCategories.map((cat) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {/* Category Title */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-3">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-wide">
                    {cat.name}
                  </h3>
                  <span className={`px-2.5 py-0.5 rounded-full border text-xs font-bold ${cat.color}`}>
                    {cat.badge}
                  </span>
                </div>
              </div>

              {/* Course Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.courses.map((course) => (
                  <div
                    key={course.provider + course.tool}
                    className="group flex flex-col justify-between p-4 sm:p-5 rounded-2xl border border-white/10 bg-white/[0.025] hover:bg-white/[0.06] hover:border-amber-400/40 transition-all duration-200 shadow-md hover:shadow-xl"
                  >
                    {/* Top: Provider Logo & Info */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="h-10 w-10 shrink-0 rounded-xl bg-white p-1.5 border border-white/20 flex items-center justify-center overflow-hidden shadow-sm">
                            <img
                              src={course.logo}
                              alt={course.provider}
                              className="h-full w-full object-contain"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          </div>
                          <div className="min-w-0">
                            <h4 className="font-bold text-white text-base tracking-tight truncate group-hover:text-amber-300 transition-colors">
                              {course.provider}
                            </h4>
                            <span className={`inline-block text-[11px] font-semibold px-2 py-0.5 rounded-md border mt-0.5 ${cat.tagColor}`}>
                              {course.tool}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom: Price & Live Link Button */}
                    <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                      <div>
                        <div className="text-[10px] uppercase font-mono tracking-wider text-white/40">
                          Course Fee
                        </div>
                        <div className="font-mono text-lg sm:text-xl font-extrabold text-white">
                          {course.price}
                        </div>
                      </div>

                      <a
                        href={course.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/15 bg-white/[0.06] hover:bg-amber-400 hover:text-black hover:border-amber-400 text-white/90 text-xs font-semibold transition-all duration-150 group/btn shadow-sm"
                      >
                        <span>View Page</span>
                        <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SlideAllCoursePrices;
