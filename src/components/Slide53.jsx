import { motion } from 'framer-motion';
import { assetPath } from '../utils/assetPath';

const Slide53 = () => (
    <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-premium-black via-premium-black to-subtle-gray" />
        <div className="relative z-10 max-w-6xl w-full space-y-8"><motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-4 text-center text-xl text-text-muted leading-relaxed"
            >
                <p>“Ek baar jab hum apni Cloud Kitchen (Bistro) open kar rahe the…”</p>
                <p>“Sabse bada sawaal tha: 👉 Kis area mein kitchen open karein?”</p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[3rem] border border-white/10 bg-white/5 p-10 flex items-center justify-center"
            >
                <img src={assetPath('images/logos/bistro/bistro.png')} alt="Bistro" className="w-full max-w-3xl h-72 object-contain" />
            </motion.div>
        </div>
    </section>
);

export default Slide53;
