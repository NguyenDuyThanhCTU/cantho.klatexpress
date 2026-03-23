"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Phone, Truck, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LocationSection() {
  return (
    <section id="location" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Map Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('/images/map-pattern.svg')] bg-center bg-no-repeat bg-contain pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-sm font-bold uppercase tracking-wider mb-4 border border-brand-100">
            <MapPin className="w-4 h-4" /> Điểm giao dịch trực tiếp
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Kho nhận hàng <span className="text-brand-600">Tại Cần Thơ</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Quý khách có thể mang hàng đến trực tiếp trụ sở của chúng tôi hoặc
            sử dụng dịch vụ lấy hàng tại nhà khu vực Miền Tây.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-brand-900 text-white rounded-3xl p-8 mb-12 md:p-10 border border-brand-800 shadow-2xl shadow-brand-900/20"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-8 border-b border-brand-800/50 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Cần Thơ
                </h3>
                <span className="text-xs font-bold bg-brand-500 text-white px-3 py-1.5 rounded-full uppercase tracking-wide">
                  Kho Cần Thơ
                </span>
              </div>
              <p className="text-brand-200 text-lg">
                Điểm nhận hàng gửi đi nước ngoài tại Cần Thơ
              </p>
            </div>

            <a
              href="https://maps.app.goo.gl/hq5ys6rq6X1MQnhW9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm transition-all bg-white text-brand-900 hover:bg-brand-50 shadow-lg"
            >
              <Navigation className="w-5 h-5" />
              Chỉ đường qua Google Maps
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-800 rounded-lg shrink-0">
                <MapPin className="w-6 h-6 text-brand-300" />
              </div>
              <div>
                <p className="text-sm text-brand-300 font-medium mb-1 uppercase tracking-wider">
                  Địa chỉ
                </p>
                <p className="text-base font-medium leading-relaxed text-brand-50">
                  Số 38/42, Đ. Mậu Thân, <br />
                  P. An Hòa, Q. Ninh Kiều
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-800 rounded-lg shrink-0">
                <Phone className="w-6 h-6 text-brand-300" />
              </div>
              <div>
                <p className="text-sm text-brand-300 font-medium mb-1 uppercase tracking-wider">
                  Hotline
                </p>
                <a
                  href="tel:0777697056"
                  className="text-xl font-bold hover:text-brand-200 transition-colors"
                >
                  0777 697 056
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-800 rounded-lg shrink-0">
                <Clock className="w-6 h-6 text-brand-300" />
              </div>
              <div>
                <p className="text-sm text-brand-300 font-medium mb-1 uppercase tracking-wider">
                  Giờ làm việc
                </p>
                <p className="text-base font-medium text-brand-50">
                  07:00 - 19:30
                  <br />
                  (Thứ 2 - Chủ Nhật)
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Feature Banner: Free Pickup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-accent-500 to-orange-600 rounded-2xl p-8  text-white shadow-xl shadow-orange-200 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                <Truck className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Miễn phí lấy hàng tận nhà
                </h3>
                <p className="text-orange-50 text-lg opacity-90 max-w-xl">
                  Đặc biệt hỗ trợ khu vực nội ô Cần Thơ và các tỉnh lân cận.{" "}
                  <br />
                  Đội ngũ nhân viên sẽ đến tận nơi cân đo và đóng gói giúp quý
                  khách.
                </p>
              </div>
            </div>
            <button className="whitespace-nowrap px-8 py-4 bg-white text-accent-600 rounded-xl font-bold hover:bg-orange-50 transition-colors shadow-lg flex items-center gap-2 group">
              <Phone className="w-5 h-5" />
              Đặt lịch lấy hàng ngay
            </button>
          </div>
        </motion.div>

        {/* Single Main Location Card */}
      </div>
    </section>
  );
}
