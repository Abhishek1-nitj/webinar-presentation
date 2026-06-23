import { motion } from 'framer-motion';
import { assetPath } from '../utils/assetPath';

const friendImages = [
    assetPath('images/personal/friends/friend1.jpg'),
    assetPath('images/personal/friends/friend2.jpg'),
    assetPath('images/personal/friends/friend3.jpg'),
];

const Slide25 = () => {
    return (
        <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
            <div className="absolute inset-y-16 left-1/2 w-[70%] bg-gradient-to-r from-premium-gold/10 to-transparent blur-3xl opacity-30" />

            <div className="relative z-10 max-w-6xl w-full space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center space-y-4"
                >
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">My Friends</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {friendImages.map((src) => (
                        <div
                            key={src}
                            className="relative flex items-center justify-center rounded-[2.5rem] border border-white/10 bg-white/5 aspect-[3/4] p-4"
                        >
                            <img src={src} alt="Friends" className="h-full w-full object-contain" loading="lazy" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Slide25;
