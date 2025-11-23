"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setMessage("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setMessage("Failed to send message. Please try again.");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
      setMessage("An error occurred. Please try again later.");
      setTimeout(() => setStatus("idle"), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="py-20 px-6" ref={ref}>
      <div className="max-w-2xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <p className="text-sm text-zinc-600 dark:text-[#F5F6FA]/70 mb-2 font-medium uppercase tracking-widest">
            {t.contact.section}
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-linear-to-r from-[#0B1E3F] via-[#2E5090] to-[#0B1E3F] dark:from-[#F5F6FA] dark:via-[#2E5090] dark:to-[#F5F6FA] bg-clip-text text-transparent mb-4">
            {t.contact.title}
          </h2>
          <p className="text-lg text-zinc-600 dark:text-[#F5F6FA]/70">
            {t.contact.description}
          </p>
        </motion.div>

        {/* Status Message */}
        {status !== "idle" && (
          <motion.div
            className={`mb-6 p-4 rounded-lg text-center ${
              status === "success"
                ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200"
                : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200"
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {message}
          </motion.div>
        )}

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Name Field */}
          <div>
            <input
              type="text"
              name="name"
              placeholder={t.contact.name}
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 rounded-lg border border-zinc-300 dark:border-[#2E5090] bg-white dark:bg-[#0B1E3F] text-black dark:text-[#F5F6FA] placeholder-zinc-500 dark:placeholder-[#F5F6FA]/50 focus:outline-none focus:border-[#0B1E3F] dark:focus:border-[#F5F6FA] transition-colors"
            />
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              name="email"
              placeholder={t.contact.email}
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 rounded-lg border border-zinc-300 dark:border-[#2E5090] bg-white dark:bg-[#0B1E3F] text-black dark:text-[#F5F6FA] placeholder-zinc-500 dark:placeholder-[#F5F6FA]/50 focus:outline-none focus:border-[#0B1E3F] dark:focus:border-[#F5F6FA] transition-colors"
            />
          </div>

          {/* Message Field */}
          <div>
            <textarea
              name="message"
              placeholder={t.contact.message}
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 rounded-lg border border-zinc-300 dark:border-[#2E5090] bg-white dark:bg-[#0B1E3F] text-black dark:text-[#F5F6FA] placeholder-zinc-500 dark:placeholder-[#F5F6FA]/50 focus:outline-none focus:border-[#0B1E3F] dark:focus:border-[#F5F6FA] transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
            className="group relative px-8 py-3 rounded-full font-medium overflow-hidden border-2 border-[#2E5090] text-[#2E5090] dark:border-[#F5F6FA] dark:text-[#F5F6FA] shadow-md hover:shadow-[0_10px_30px_rgba(46,80,144,0.3)] dark:hover:shadow-[0_10px_30px_rgba(245,246,250,0.1)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {/* Hover background */}
            <div className="absolute inset-0 bg-[#2E5090]/5 dark:bg-[#F5F6FA]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">
              {isLoading ? "Sending..." : t.contact.submit}
            </span>
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
