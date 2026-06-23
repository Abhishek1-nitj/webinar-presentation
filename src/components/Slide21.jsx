import { motion } from 'framer-motion';
import { assetPath } from '../utils/assetPath';

const collegeImages = [
    assetPath('images/college/College1.jpg'),
    assetPath('images/college/College2.jpg'),
    assetPath('images/college/College3.jpg'),
];

const Slide21 = () => {
    return (
        <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />

            <div className="relative z-10 max-w-6xl w-full space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-4"
                >
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
                        Mera Education
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-[3rem] border border-white/10 bg-white/5 p-8 space-y-10"
                >
                    <div className="space-y-3 text-center">
                        <p className="text-sm uppercase tracking-[0.4em] text-text-muted/60">Engineering Journey</p>
                        <h3 className="font-display text-3xl md:text-4xl text-white">NIT Jalandhar</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {collegeImages.map((src) => (
                            <div key={src} className="rounded-[2.5rem] border border-white/10 bg-white/5 overflow-hidden">
                                <img
                                    src={src}
                                    alt="NIT Jalandhar memories"
                                    className="w-full h-72 object-cover"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Slide21;
