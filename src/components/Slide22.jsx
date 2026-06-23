import { motion } from 'framer-motion';
import { assetPath } from '../utils/assetPath';

const mbaImages = [
    assetPath('images/mba/MBA1.png'),
    assetPath('images/mba/MBA2.png'),
    assetPath('images/mba/IMG_20251221_130915.jpg'),
    assetPath('images/mba/SONU7135.jpg'),
];

const mbaTiles = [
    { src: mbaImages[0], className: 'col-span-12 md:col-span-7 row-span-2' },
    { src: mbaImages[1], className: 'col-span-12 md:col-span-5 row-span-1' },
    { src: mbaImages[2], className: 'col-span-6 md:col-span-5 row-span-1' },
    { src: mbaImages[3], className: 'col-span-6 md:col-span-7 row-span-1' },
];

const Slide22 = () => {
    return (
        <section className="slide-section min-h-screen w-full flex items-center justify-center px-6 md:px-10 lg:px-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-bl from-premium-black via-premium-black to-subtle-gray" />

            <div className="relative z-10 max-w-6xl w-full space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-center"
                >
                    <div className="space-y-4">
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight">
                            Mera Education — MBA
                        </h2>
                        <p className="text-lg md:text-xl text-text-muted max-w-2xl leading-relaxed">
                            Post Graduation ne business lens diya — strategy, numbers, aur clarity.
                        </p>
                    </div>
                    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/20 p-2 md:p-3">
                        <img
                            src={assetPath('images/mba/SONU7135.jpg')}
                            alt="MBA portrait"
                            className="w-full max-h-[240px] md:max-h-[260px] lg:max-h-[280px] object-contain"
                            loading="lazy"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-4xl border border-white/10 bg-white/5 p-4 md:p-6 lg:p-8"
                >
                    <div className="grid grid-cols-12 auto-rows-[110px] md:auto-rows-[140px] lg:auto-rows-[160px] gap-3 md:gap-4">
                        {mbaTiles.map((tile) => (
                            <div
                                key={tile.src}
                                className={`relative overflow-hidden rounded-3xl border border-white/10 bg-black/20 p-2 md:p-3 ${tile.className}`}
                            >
                                <img
                                    src={tile.src}
                                    alt="MBA journey"
                                    className="h-full w-full object-contain"
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

export default Slide22;
