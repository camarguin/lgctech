"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { FiMail } from "react-icons/fi";

export default function Navigation() {
  const { t } = useLanguage();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const navItems = [
    { label: t.nav.home, href: "#" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.work, href: "#projects" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.testimonials, href: "#testimonials" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-[#0B1E3F]/80 backdrop-blur-md z-50 border-b border-zinc-200 dark:border-[#0B1E3F]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/LGCLogo.svg"
            alt="LGC Logo"
            width={40}
            height={40}
          />
        </Link>

        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <LanguageSwitcher />
          <Link
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            className="group relative px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium overflow-hidden border-2 border-[#2E5090] text-[#2E5090] dark:border-[#F5F6FA] dark:text-[#F5F6FA] shadow-md hover:shadow-[0_8px_20px_rgba(46,80,144,0.25)] dark:hover:shadow-[0_8px_20px_rgba(245,246,250,0.1)] transition-all duration-300 cursor-pointer flex items-center gap-1 sm:gap-2"
          >
            <div className="absolute inset-0 bg-[#2E5090]/5 dark:bg-[#F5F6FA]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-1 sm:gap-2">
              <span className="hidden sm:inline">{t.nav.contact}</span>
              <span className="sm:hidden">Contact</span>
              <FiMail className='text-base' />
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
