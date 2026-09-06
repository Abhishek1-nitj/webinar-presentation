import { motion } from 'framer-motion';

const SlideAttendanceRecordingAccess = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-[#0E0F12] to-subtle-gray" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(218,165,32,0.2),transparent_50%)]" />
    <div className="absolute -top-28 right-[-8%] h-72 w-72 rounded-full bg-premium-gold/15 blur-3xl" />
    <div className="absolute -bottom-24 left-[-5%] h-72 w-72 rounded-full bg-white/5 blur-3xl" />

    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 25 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 text-center max-w-5xl mx-auto space-y-6"
    >
      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white leading-tight">
        Attendance for the <span className="text-premium-gold drop-shadow-[0_0_35px_rgba(218,165,32,0.4)]">Recording Access</span>
      </h2>
    </motion.div>
  </section>
);

export default SlideAttendanceRecordingAccess;
