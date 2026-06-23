import { motion } from 'framer-motion';
import { assetPath } from '../utils/assetPath';

const Slide52 = () => (
    <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
        <div className="relative z-10 max-w-6xl w-full space-y-8"><motion.h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
                👉 “Data Ka Power: Ek Real Corporate Example”
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-center text-xl md:text-2xl text-text-muted leading-relaxed"
            >
                “Zomato / Blinkit ke paas bahut zyada data hota hai. Par data hone ka matlab yeh nahi hota ki answer turant pata ho.”
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-10 flex items-center justify-center">
                    <img src={assetPath('images/logos/zomato.png')} alt="Zomato" className="h-40 object-contain" />
                </div>
                <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-10 flex items-center justify-center">
                    <img src={assetPath('images/logos/blinkit.png')} alt="Blinkit" className="h-40 object-contain" />
                </div>
            </motion.div>
        </div>
    </section>
);

export default Slide52;
