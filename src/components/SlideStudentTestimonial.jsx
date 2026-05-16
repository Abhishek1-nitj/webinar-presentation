import { motion } from 'framer-motion';

const testimonialImages = [
  {
    src: new URL('../../Testimonal/msg/Screenshot 2026-04-09 at 9.03.48 AM.png', import.meta.url).href,
    alt: 'Student testimonial 1',
  },
  {
    src: new URL('../../Testimonal/msg/Screenshot_2026-04-02-22-02-32-522_com.whatsapp.w4b.jpg', import.meta.url).href,
    alt: 'Student testimonial 2',
  },
  {
    src: new URL('../../Testimonal/msg/WhatsApp Image 2026-03-29 at 23.29.33.jpeg', import.meta.url).href,
    alt: 'Student testimonial 3',
  },
  {
    src: new URL('../../Testimonal/msg/WhatsApp Image 2026-03-30 at 13.43.34.jpeg', import.meta.url).href,
    alt: 'Student testimonial 4',
  },
  {
    src: new URL('../../Testimonal/msg/WhatsApp Image 2026-04-14 at 17.58.44 (1).jpeg', import.meta.url).href,
    alt: 'Student testimonial 5',
  },
];

const SlideStudentTestimonial = () => (
  <>
    {testimonialImages.map(image => (
      <section
        key={image.src}
        className="slide-section h-screen w-full flex items-center justify-center px-4 md:px-8 lg:px-12 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-[#0E0F12] to-subtle-gray" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(156,217,107,0.18),transparent_38%)]" />
        <div className="absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-premium-gold/10 blur-3xl" />

        <div className="relative z-10 flex h-full w-full max-w-5xl flex-col items-center justify-center py-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 text-center md:mb-6"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white">
              Hear from our Students....
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex w-auto max-w-full justify-center rounded-[1.75rem] border border-white/10 bg-white/6 p-3 md:p-4 shadow-2xl backdrop-blur-sm"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="block max-h-[calc(100vh-11rem)] max-w-full rounded-[1.2rem] border border-white/10 object-contain"
            />
          </motion.div>
        </div>
      </section>
    ))}

    <section className="slide-section h-screen w-full flex items-center justify-center px-4 md:px-8 lg:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-[#0E0F12] to-subtle-gray" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(156,217,107,0.18),transparent_38%)]" />
      <div className="absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-premium-gold/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center"
      >
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-white">
          Hear from our Students....
        </h2>
      </motion.div>
    </section>
  </>
);

export default SlideStudentTestimonial;
