"use client";

import { motion } from "framer-motion";
import { Search, ArrowRight, Globe, Package } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative pt-32 w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900 text-white"
    >
      {/* Background Abstract: Giả lập bản đồ kết nối toàn cầu */}
      <div className="absolute inset-0 bg-[url('/images/world-map-dots.png')] bg-cover bg-center opacity-20 animate-pulse-slow"></div>

      {/* Gradient Overlay để tăng độ sâu */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900/90 via-brand-800/80 to-slate-900/90"></div>

      <div className="mx-auto container relative z-10 px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content: Text & Value Proposition */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-500 text-sm font-semibold tracking-wide uppercase">
            <Globe className="w-4 h-4" />
            Số 1 Vận chuyển Quốc tế tại Miền Tây
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Gửi trọn{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-yellow-400">
              Niềm Tin
            </span>{" "}
            <br />
            Kết nối <span className="text-brand-400">Năm Châu</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-lg leading-relaxed">
            Giải pháp chuyển phát nhanh từ Cần Thơ & Miền Tây đi Mỹ, Úc, Canada,
            Châu Âu. Nhanh chóng - An toàn - Tiết kiệm tối đa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="tel:0777697056">
              <div className="h-12 px-8 rounded-lg bg-accent-600 hover:bg-accent-700 text-white font-bold transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)] flex items-center justify-center gap-2 group">
                Gửi hàng ngay
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            <Link href="#calculator">
              <button className="h-12 px-8 rounded-lg border border-slate-600 hover:bg-white/5 text-slate-200 font-semibold transition-all">
                Xem bảng giá
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Right Content: Tracking Box (Glassmorphism) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Decorative Blob */}
          <div className="absolute -inset-1 bg-gradient-to-r from-accent-500 to-brand-500 rounded-2xl blur opacity-30"></div>

          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-brand-500/20 text-brand-400">
                <Package className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Tra cứu vận đơn
                </h3>
                <p className="text-sm text-slate-400">
                  Theo dõi hành trình đơn hàng realtime
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Nhập mã vận đơn (VD: AT123456VN)"
                  className="w-full h-14 pl-4 pr-12 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              </div>

              <button className="w-full h-12 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold transition-all shadow-lg shadow-brand-900/50">
                Track / Kiểm tra
              </button>
            </div>

            {/* Quick Stats inside card */}
            <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-xs text-slate-400">Năm KN</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">200+</div>
                <div className="text-xs text-slate-400">Quốc gia</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-xs text-slate-400">Hỗ trợ</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
