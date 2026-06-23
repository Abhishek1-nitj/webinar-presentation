import { motion } from 'framer-motion';
import { assetPath } from '../utils/assetPath';

const Slide23 = () => {
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
                        Mera Work Experience
                    </h2>
                    <p className="text-xl md:text-2xl text-text-muted max-w-3xl leading-relaxed">
                        BYJU’S — Director: Operations, scale, aur India’s biggest edtech brand ko ground se grow karna.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-4xl border border-white/10 bg-white/5 p-8 grid lg:grid-cols-[1.1fr,0.9fr] gap-8 items-center"
                >
                    <div className="space-y-4">
                        <p className="text-sm uppercase tracking-[0.4em] text-text-muted/60">BYJU’S — Director</p>
                        <h3 className="font-display text-3xl md:text-4xl text-white">
                            Execution at massive scale
                        </h3>
                        <p className="text-lg md:text-xl text-text-muted leading-relaxed">
                            0 → 1 launches, national teams, aur growth metrics — har cheez data + intuition se run hoti thi.
                            Priority simple thi: har student ko outcome dikhe.
                        </p>
                    </div>
                    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                        <img
                            src={assetPath('images/work/byjus/BYJUS.jpg')}
                            alt="BYJU's journey"
                            className="h-[26rem] w-full object-cover"
                            loading="lazy"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Slide23;
