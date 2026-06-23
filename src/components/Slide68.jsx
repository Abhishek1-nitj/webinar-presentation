import { motion } from 'framer-motion';
import { assetPath } from '../utils/assetPath';

const planning = [
    'Project planning ke liye',
    'Timelines aur milestones track karne ke liye',
    'Resources manage karne ke liye',
    'As planning tool',
];

const analysis = [
    'Hazaaron rows ka data analyze karne ke liye',
    'Operational issues nikalne ke liye',
    'Weekly aur monthly reports banane ke liye',
    'As a data analysis tool',
];

const decision = [
    'Team performance track karne ke liye',
    'KPIs analyse karne ke liye',
    'Budgets aur costs dekhne ke liye',
    'As a decision making tool',
];

const buckets = [
    { title: 'Planning Tool', items: planning },
    { title: 'Data Analysis Tool', items: analysis },
    { title: 'Decision Making Tool', items: decision },
];

const Slide68 = () => (
    <section className="slide-section min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
        <div className="relative z-10 max-w-6xl w-full space-y-8"><motion.div
                className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
                    👉 “Excel ka Real Corporate Use”
                </h2>
                <img
                    src={assetPath('images/logos/excel-logo.png')}
                    alt="Excel logo"
                    className="w-24 h-24 object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-6 md:grid-cols-3"
            >
                {buckets.map((bucket) => (
                    <div key={bucket.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-3">
                        <h3 className="font-display text-2xl text-white">{bucket.title}</h3>
                        <ul className="space-y-2 text-text-muted text-lg">
                            {bucket.items.map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                    <span className="text-premium-gold">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </motion.div>
        </div>
    </section>
);

export default Slide68;
