"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Trang chủ", href: "#hero" },
  { name: "Dịch vụ", href: "#services" },
  { name: "Quy trình", href: "#process" },
  { name: "Bảng giá", href: "#calculator" }, // Có thể dẫn sang trang riêng sau này
  { name: "Kho nhận hàng", href: "#locations" },
  { name: "Liên hệ", href: "#footer" }, // Scroll xuống footer
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Xử lý sự kiện cuộn trang để đổi màu Header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hàm xử lý cuộn mượt (Smooth Scroll) thủ công nếu cần thiết
  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Đóng menu mobile nếu đang mở

    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 80; // Trừ đi chiều cao header để không bị che nội dung
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      <header
        className={cn(
          " fixed  top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          isScrolled
            ? "bg-white/80 backdrop-blur-md py-3 shadow-sm border-slate-200/50"
            : "bg-transparent py-5",
        )}
      >
        <div className="container  px-4 mx-auto md:px-6 flex items-center justify-between">
          {/* LOGO */}
          <Link
            href="/"
            className="group flex items-center gap-2"
            onClick={(e) => handleScrollToSection(e, "#hero")}
          >
            <div>
              <img
                className="w-32"
                alt="logo"
                src="https://klatexpress.com/upload/Logo.png"
              />
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollToSection(e, item.href)}
                className={cn(
                  "text-sm font-semibold hover:text-accent-500 transition-colors relative group",
                  isScrolled
                    ? "text-slate-600"
                    : "text-slate-200 hover:text-white",
                )}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* DESKTOP ACTIONS */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="#hero">
              <button
                className={cn(
                  "flex items-center gap-2 font-bold transition-colors",
                  isScrolled ? "text-slate-900" : "text-white",
                )}
              >
                <Search className="w-5 h-5" />
                <span className="text-sm">Tra cứu</span>
              </button>
            </Link>

            <a
              href="tel:0777 697 056"
              className="h-10 px-6 rounded-full bg-accent-600 hover:bg-accent-700 text-white font-bold flex items-center gap-2 shadow-lg shadow-accent-500/30 transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span>0777 697 056</span>
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              isScrolled
                ? "text-slate-900 hover:bg-slate-100"
                : "text-white hover:bg-white/10",
            )}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* MOBILE MENU DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6 text-center">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScrollToSection(e, item.href)}
                  className="text-xl font-bold text-slate-900 hover:text-brand-600 py-2 border-b border-slate-100"
                >
                  {item.name}
                </a>
              ))}

              <div className="flex flex-col gap-4 mt-4">
                <button
                  onClick={(e: any) => handleScrollToSection(e, "#hero")}
                  className="w-full h-12 rounded-xl bg-slate-100 font-bold text-slate-700 flex items-center justify-center gap-2"
                >
                  <Search className="w-5 h-5" /> Tra cứu vận đơn
                </button>
                <a
                  href="tel:0777 697 056"
                  className="w-full h-12 rounded-xl bg-accent-600 text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-accent-500/30"
                >
                  <Phone className="w-5 h-5" /> Gọi Hotline ngay
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
