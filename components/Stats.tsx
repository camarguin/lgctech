"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Stats() {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ threshold: 0.3 });
  const [counts, setCounts] = useState<number[]>([0, 0, 0]);

  const stats = t.stats.items;
  const sectionText = { section: t.stats.section, title: t.stats.title, description: t.stats.description };

  useEffect(() => {
    if (!inView) return;

    const intervals = stats.map((stat, index) => {
      let current = 0;
      const increment = stat.number / 40;
      return setInterval(() => {
        current += increment;
        if (current >= stat.number) {
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = stat.number;
            return newCounts;
          });
          clearInterval(intervals[index]);
        } else {
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(current);
            return newCounts;
          });
        }
      }, 30);
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, [inView, stats]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      ref={ref}
      className="w-full bg-white py-20 px-6 relative overflow-hidden"
    >
      {/* No floating background elements */}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#2E5090] font-semibold text-sm tracking-widest mb-4">
            {sectionText.section}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1E3F] mb-4">
            {sectionText.title}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {sectionText.description}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:border-[#2E5090] transition-all duration-300 w-full sm:w-64"
            >
              {/* Counter */}
              <div>
                <div className="text-5xl md:text-6xl font-bold text-[#2E5090] mb-2 font-mono">
                  {counts[index]}
                  <span className="text-4xl md:text-5xl">{stat.suffix}</span>
                </div>
                <p className="text-gray-700 font-semibold text-lg">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="h-1 bg-linear-to-r from-[#2E5090] to-blue-400 rounded-full mt-16 max-w-xs mx-auto"
        ></motion.div>
      </div>
    </section>
  );
}
