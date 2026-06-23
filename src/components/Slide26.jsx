import { motion } from 'framer-motion';
import { assetPath } from '../utils/assetPath';

const partyImages = [
    assetPath('images/personal/party/party1.jpg'),
    assetPath('images/personal/party/party2.jpg'),
    assetPath('images/personal/party/party3.jpg'),
    assetPath('images/personal/party/party4.jpg'),
];

const Slide26 = () => {
    return (
        <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-bl from-premium-black via-premium-black to-subtle-gray" />

            <div className="relative z-10 max-w-6xl w-full space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-4"
                >
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
                        Mujhe Party Karna Pasand Hai
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {partyImages.map((src) => (
                        <div key={src} className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                            <img src={src} alt="Party moments" className="h-64 w-full object-cover" loading="lazy" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Slide26;
