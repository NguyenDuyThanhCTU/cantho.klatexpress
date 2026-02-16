"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Phone,
  Facebook,
  Send,
  Truck,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Icon Zalo tự vẽ (Vì thư viện không có sẵn)

const socialLinks = [
  {
    name: "Chat Zalo",
    icon: (
      <img
        className="p-2"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/60px-Icon_of_Zalo.svg.png"
      />
    ), // Zalo Icon
    color: "bg-white text-blue-600 border-blue-100",
    href: "https://zalo.me/0777697056", // Thay số điện thoại của bạn
    labelColor: "text-blue-600 bg-blue-50",
  },
  {
    name: "Messenger",
    icon: <Facebook className="w-5 h-5" />,
    color: "bg-blue-600 text-white",
    href: "https://m.me/guihangquoctemientay",
    labelColor: "text-blue-600 bg-blue-50",
  },
  {
    name: "WhatsApp",
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/WhatsApp_logo-color-vertical.svg/60px-WhatsApp_logo-color-vertical.svg.png"
        className="p-2"
      />
    ),
    color: "bg-green-500 text-white",
    href: "https://wa.me/0777697056",
    labelColor: "text-green-600 bg-green-50",
  },
  {
    name: "Gọi Hotline",
    icon: <Phone className="w-5 h-5" />,
    color: "bg-red-500 text-white",
    href: "tel:0777 697 056",
    labelColor: "text-red-600 bg-red-50",
  },
];

export default function FloatButton() {
  const [isOpen, setIsOpen] = useState(false);

  // Hiệu ứng nút mở rộng
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
        {/* DANH SÁCH CÁC KÊNH LIÊN HỆ (Khi bấm mở) */}
        <AnimatePresence>
          {isOpen && (
            <div className="flex flex-col gap-3 items-end mb-2">
              {socialLinks.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.8 }}
                  transition={{ delay: index * 0.05, type: "spring" }}
                  className="flex items-center gap-3 group"
                >
                  {/* Tooltip Label */}
                  <span
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none bg-white border border-slate-100",
                      item.labelColor,
                    )}
                  >
                    {item.name}
                  </span>

                  {/* Icon Button */}
                  <div
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 border-2 border-white",
                      item.color,
                    )}
                  >
                    {item.icon}
                  </div>
                </motion.a>
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* NHÓM NÚT CHÍNH */}
        <div className="">
          {/* 1. NÚT GỬI HÀNG NGAY (Luôn hiển thị - Primary CTA) */}
          {/* Chỉ hiện chữ trên Desktop, Mobile hiện icon */}

          {/* 2. NÚT TOGGLE MENU LIÊN HỆ */}
          <motion.button
            onClick={toggleOpen}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={cn(
              "w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-colors duration-300 relative border-2 border-white",
              isOpen ? "bg-slate-800 text-white" : "bg-brand-600 text-white",
            )}
          >
            {/* Hiệu ứng sóng lan tỏa khi chưa mở */}
            {!isOpen && (
              <span className="absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75 animate-ping"></span>
            )}

            <div className="relative z-10">
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <MessageCircle className="w-7 h-7" />
              )}
            </div>
          </motion.button>
        </div>
      </div>
      <div className="fixed bottom-6 left-6 z-50 flex flex-col items-end gap-4">
        <Link href="tel:0777697056">
          <motion.a
            //   href="#pricing" // Cuộn đến bảng giá hoặc trang booking
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="h-14 px-6 rounded-full bg-gradient-to-r from-accent-500 to-orange-600 text-white font-bold shadow-lg shadow-orange-500/40 flex items-center gap-2 animate-bounce-slow"
          >
            <Truck className="w-5 h-5" />
            <span className="hidden md:inline">Gửi Hàng Ngay</span>
          </motion.a>
        </Link>
      </div>
    </>
  );
}
