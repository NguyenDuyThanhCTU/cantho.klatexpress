"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Phone, Truck, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

// Danh sách kho hàng
const locations = [
  {
    city: "TP. Hồ Chí Minh",
    address: "45/10 Cao Lỗ, Phường 04, Quận 8",
    phone: "0777 697 056",
    mapLink: "https://maps.google.com/?q=45/10+Cao+Lỗ+Quận+8",
    highlight: true,
    delay: 0.2,
  },
  {
    city: "Cần Thơ (Trụ Sở Chính)",
    address: "Số 38/42, Đ. Mậu Thân, P. An Hòa, Q. Ninh Kiều",
    phone: "0777 697 056",
    mapLink: "https://maps.app.goo.gl/kksjYHeujTY6T7Ni6",
    highlight: false, // Kho chính nổi bật hơn
    delay: 0.1,
  },
  {
    city: "Tiền Giang",
    address: "459 Đinh Bộ Lĩnh, Phường 08, TP. Mỹ Tho",
    phone: "0777 697 056",
    mapLink: "https://maps.google.com/?q=459+Đinh+Bộ+Lĩnh+Mỹ+Tho",
    highlight: false,
    delay: 0.3,
  },
  {
    city: "Bến Tre",
    address: "566B Ca Văn Thỉnh, P. Phú Khương, TP. Bến Tre",
    phone: "0777 697 056",
    mapLink: "https://maps.google.com/?q=566B+Ca+Văn+Thỉnh+Bến+Tre",
    highlight: false,
    delay: 0.4,
  },
  {
    city: "Long An",
    address: "Đường Hoàng Hoa Thám, Phường 2, TP. Tân An",
    phone: "0777 697 056",
    mapLink: "https://maps.google.com/?q=Hoàng+Hoa+Thám+Tân+An+Long+An",
    highlight: false,
    delay: 0.5,
  },
];

export default function LocationSection() {
  return (
    <section id="locations" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Map Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('/images/map-pattern.svg')] bg-center bg-no-repeat bg-contain pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-sm font-bold uppercase tracking-wider mb-4 border border-brand-100">
            <MapPin className="w-4 h-4" /> Mạng lưới phủ sóng
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Hệ thống kho nhận hàng <br />
            <span className="text-brand-600">Khắp Miền Tây & Sài Gòn</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Quý khách có thể mang hàng đến trực tiếp các điểm giao dịch dưới đây
            hoặc sử dụng dịch vụ lấy hàng tại nhà.
          </p>
        </div>

        {/* Feature Banner: Free Pickup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-accent-500 to-orange-600 rounded-2xl p-8 mb-16 text-white shadow-xl shadow-orange-200 relative overflow-hidden"
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
                  Đặc biệt hỗ trợ khu vực Miền Tây (Cần Thơ, Tiền Giang, Bến
                  Tre...). <br />
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

        {/* Grid Locations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: loc.delay }}
              className={cn(
                "p-6 rounded-2xl border transition-all duration-300 group hover:-translate-y-1",
                loc.highlight
                  ? "bg-brand-900 text-white border-brand-800 shadow-xl shadow-brand-900/20"
                  : "bg-white text-slate-900 border-slate-100 hover:border-brand-200 hover:shadow-lg",
              )}
            >
              <div className="flex items-center justify-between mb-4">
                <h3
                  className={cn(
                    "text-xl font-bold",
                    loc.highlight ? "text-white" : "text-brand-700",
                  )}
                >
                  {loc.city}
                </h3>
                {loc.highlight && (
                  <span className="text-[10px] font-bold bg-white/20 text-white px-2 py-1 rounded uppercase">
                    Trụ sở
                  </span>
                )}
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin
                    className={cn(
                      "w-5 h-5 flex-shrink-0 mt-0.5",
                      loc.highlight ? "text-brand-300" : "text-slate-400",
                    )}
                  />
                  <p
                    className={cn(
                      "text-sm font-medium leading-relaxed",
                      loc.highlight ? "text-brand-100" : "text-slate-600",
                    )}
                  >
                    {loc.address}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone
                    className={cn(
                      "w-5 h-5 flex-shrink-0",
                      loc.highlight ? "text-brand-300" : "text-slate-400",
                    )}
                  />
                  <a
                    href={`tel:${loc.phone}`}
                    className="text-sm font-bold hover:underline"
                  >
                    {loc.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Clock
                    className={cn(
                      "w-5 h-5 flex-shrink-0",
                      loc.highlight ? "text-brand-300" : "text-slate-400",
                    )}
                  />
                  <p
                    className={cn(
                      "text-sm",
                      loc.highlight ? "text-brand-100" : "text-slate-500",
                    )}
                  >
                    08:00 - 17:30 (Thứ 2 - Thứ 7)
                  </p>
                </div>
              </div>

              <a
                href={loc.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center justify-center gap-2 w-full py-3 rounded-lg font-bold text-sm transition-all",
                  loc.highlight
                    ? "bg-white/10 hover:bg-white/20 text-white"
                    : "bg-slate-50 hover:bg-brand-50 hover:text-brand-600 text-slate-600",
                )}
              >
                <Navigation className="w-4 h-4" />
                Chỉ đường (Google Maps)
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
