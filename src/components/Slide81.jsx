import { motion } from 'framer-motion';

const prescriptions = [
    'Kitne riders chahiye',
    'Kis area mein',
    'Kis time pe',
];

const Slide81 = () => (
    <section className="slide-section min-h-screen w/full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-premium-black via-premium-black to-subtle-gray" />
        <div className="relative z-10 max-w-5xl w/full space-y-8"><motion.h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
                👉 STEP 7 : Prescription: Ab Kya Karna Chahiye?
            </motion.h2>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-4 text-xl text-text-muted leading-relaxed"
            >
                <p>“System suggest karta hai:</p>
                <ul className="space-y-2 text-lg">
                    {prescriptions.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                            <span className="text-premium-gold">•</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <p>“Yahan decision automate hota hai.”</p>
                <p>Say honestly: “Yeh sabse aage ka level hai.”</p>
            </motion.div>
        </div>
        <div className="absolute bottom-6 left-1/2 w-[min(520px,90%)] -translate-x-1/2 rounded-[2rem] border border-premium-gold/40 bg-premium-gold/10 px-6 py-4 text-center space-y-1 shadow-[0_20px_50px_rgba(255,215,0,0.2)]">
            <p className="text-lg text-white/70">
                Actual Value: ₹<span className="font-bold text-red-500 text-3xl line-through">5,000</span>
            </p>
            <p className="text-3xl font-bold text-premium-gold">Special Webinar Price: ₹2500 only</p>
        </div>
    </section>
);

export default Slide81;
