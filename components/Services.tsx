"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPalette, FaMobile, FaWandMagicSparkles } from "react-icons/fa6";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const services = [
    {
      icon: FaPalette,
      title: t.services.webDesign,
      desc: t.services.webDesignDesc,
    },
    {
      icon: FaMobile,
      title: t.services.mobileApp,
      desc: t.services.mobileAppDesc,
    },
    {
      icon: FaWandMagicSparkles,
      title: t.services.uiUx,
      desc: t.services.uiUxDesc,
    },
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <p className="text-sm text-zinc-600 dark:text-[#F5F6FA]/70 mb-2 font-medium uppercase tracking-widest">
            {t.services.section}
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-linear-to-r from-[#0B1E3F] via-[#2E5090] to-[#0B1E3F] dark:from-[#F5F6FA] dark:via-[#2E5090] dark:to-[#F5F6FA] bg-clip-text text-transparent mb-4">
            {t.services.title}
          </h2>
          <p className="text-lg text-zinc-600 dark:text-[#F5F6FA]/70 max-w-2xl mx-auto">
            {t.services.description}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative cursor-pointer"
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              {/* Glow effect background */}
              <div
                className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
                style={{
                  background: "radial-gradient(circle, rgba(46,80,144,0.4) 0%, transparent 70%)",
                }}
              />

              <div className="relative h-full bg-white dark:bg-[#1a2f52] border-2 border-[#2E5090]/20 dark:border-[#F5F6FA]/10 rounded-2xl p-8 shadow-md hover:shadow-[0_15px_35px_rgba(46,80,144,0.2)] dark:hover:shadow-[0_15px_35px_rgba(245,246,250,0.1)] hover:border-[#2E5090]/40 dark:hover:border-[#F5F6FA]/20 transition-all duration-300">
                <div className="text-5xl mb-4 text-[#2E5090] dark:text-[#F5F6FA] group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={50} />
                </div>
                <h3 className="text-xl font-semibold text-black dark:text-[#F5F6FA] mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-[#F5F6FA]/70 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
