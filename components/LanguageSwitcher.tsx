"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-1 sm:gap-2">
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-1 cursor-pointer shadow-sm ${
          language === "en"
            ? "bg-[#2E5090] text-[#F5F6FA] shadow-md hover:shadow-[0_6px_15px_rgba(46,80,144,0.25)]"
            : "bg-zinc-200 dark:bg-[#0B1E3F]/50 text-zinc-700 dark:text-[#F5F6FA] hover:bg-zinc-300 dark:hover:bg-[#2E5090] border border-zinc-300 dark:border-[#2E5090]/30"
        }`}
      >
        <span className="hidden sm:inline">🇨🇦</span> EN
      </button>
      <button
        onClick={() => setLanguage("pt-br")}
        className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-1 cursor-pointer shadow-sm ${
          language === "pt-br"
            ? "bg-[#2E5090] text-[#F5F6FA] shadow-md hover:shadow-[0_6px_15px_rgba(46,80,144,0.25)]"
            : "bg-zinc-200 dark:bg-[#0B1E3F]/50 text-zinc-700 dark:text-[#F5F6FA] hover:bg-zinc-300 dark:hover:bg-[#2E5090] border border-zinc-300 dark:border-[#2E5090]/30"
        }`}
      >
        <span className="hidden sm:inline">🇧🇷</span> PT
      </button>
    </div>
  );
}
