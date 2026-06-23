import { motion } from 'framer-motion';
import { assetPath } from '../utils/assetPath';

const blinkitImages = [
    {
        src: assetPath('images/work/blinkit/Blinkit1.jpg'),
        className: 'lg:col-span-7 lg:row-span-2',
    },
    {
        src: assetPath('images/work/blinkit/Blinkit2.jpg'),
        className: 'lg:col-span-5 lg:row-span-1',
    },
    {
        src: assetPath('images/work/blinkit/Blinkit3.jpg'),
        className: 'lg:col-span-5 lg:row-span-1',
    },
    {
        src: assetPath('images/work/blinkit/Blinkit4.jpg'),
        className: 'lg:col-span-4 lg:row-span-1',
    },
    {
        src: assetPath('images/work/blinkit/Blinkit5.jpg'),
        className: 'lg:col-span-8 lg:row-span-1',
    },
];

const Slide24 = () => {
    return (
        <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-bl from-premium-black via-premium-black to-subtle-gray" />

            <div className="relative z-10 max-w-6xl w-full space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-2 text-center"
                >
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight">
                        Mera Work Experience
                    </h2>
                    <p className="text-base md:text-lg text-text-muted">
                        Blinkit — Senior Manager · Delhi Expansion Head
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-[3rem] border border-white/10 bg-white/5 p-6 space-y-4"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 auto-rows-[130px] sm:auto-rows-[150px] lg:auto-rows-[160px] gap-4">
                        {blinkitImages.map((image) => (
                            <div
                                key={image.src}
                                className={`relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 ${image.className}`}
                            >
                                <img
                                    src={image.src}
                                    alt="Blinkit expansion"
                                    className="h-full w-full object-cover"
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

export default Slide24;
