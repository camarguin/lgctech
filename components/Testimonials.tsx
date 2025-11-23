"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaStar } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { TESTIMONIALS } from "@/constants";

export default function Testimonials() {
  const { t } = useLanguage();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const testimonials = TESTIMONIALS;

  return (
    <section id="testimonials" className="py-20 px-6 bg-zinc-50">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <p className="text-sm text-zinc-600 mb-2 font-medium uppercase tracking-widest">
            {t.testimonials.section}
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-linear-to-r from-[#0B1E3F] via-[#2E5090] to-[#0B1E3F] bg-clip-text text-transparent mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            {t.testimonials.description}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              custom={index}
              className="border-2 border-[#2E5090] rounded-lg p-6 shadow-md hover:shadow-[0_10px_25px_rgba(46,80,144,0.2)] hover:border-[#0B1E3F] transition-all bg-white cursor-pointer"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="text-yellow-400 text-sm"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-sm text-zinc-700 mb-6 leading-relaxed line-clamp-4">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-3">
                <div className="text-3xl">👤</div>
                <div>
                  <h4 className="font-semibold text-black">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-zinc-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
