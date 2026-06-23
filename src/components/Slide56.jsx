import { motion } from 'framer-motion';
import { assetPath } from '../utils/assetPath';

const Slide56 = () => (
    <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
        <div className="relative z-10 max-w-6xl w-full space-y-8"><motion.p className="text-center text-2xl text-text-muted"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
                “Jin areas mein:
                <br />
                – lunch orders consistently high the
                <br />
                – wahi Cloud Kitchen sabse zyada perform kar raha tha”
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[3rem] border border-white/10 bg-white/5 p-8 flex items-center justify-center"
            >
                <img src={assetPath('images/logos/lunchtime/lunch.jpg')} alt="Lunch data" className="w-full max-w-3xl rounded-[2rem] object-cover" />
            </motion.div>
        </div>
    </section>
);

export default Slide56;
