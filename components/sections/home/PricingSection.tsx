"use client";

import { motion } from "framer-motion";
import { Check, Zap, Plane, Ship, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

// Định nghĩa các gói cước
const packages = [
  {
    name: "Economy Saver",
    subtitle: "Gửi hàng tiết kiệm",
    price: "Liên hệ",
    unit: "",
    desc: "Phù hợp cho hàng nặng (>21kg), hàng cồng kềnh, không cần gấp.",
    features: [
      "Thời gian: 7 - 10 ngày",
      "Đi các nước: Mỹ, Úc, Canada",
      "Door-to-Door (Giao tận nhà)",
      "Bảo hiểm hàng hóa cơ bản",
      "Tracking Online",
    ],
    icon: <Ship className="w-6 h-6" />,
    popular: false,
    color: "bg-slate-50",
    btnColor: "bg-slate-800 text-white hover:bg-slate-900",
    delay: 0.1,
  },
  {
    name: "Fast Express",
    subtitle: "Chuyển phát nhanh",
    price: "Liên hệ",
    unit: "",
    desc: "Dịch vụ phổ biến nhất. Cân bằng hoàn hảo giữa tốc độ và chi phí.",
    features: [
      "Thời gian: 3 - 5 ngày",
      "Bay thẳng (Direct Flight)",
      "Ưu tiên thông quan FDA",
      "Miễn phí đóng gói thùng xốp",
      "SMS cập nhật lộ trình",
      "Hỗ trợ hút chân không",
    ],
    icon: <Plane className="w-6 h-6" />,
    popular: true, // Gói Best Seller
    color: "bg-white border-brand-500 shadow-2xl scale-105 z-10", // Nổi bật hơn
    btnColor:
      "bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-500/30",
    delay: 0.2,
  },
  {
    name: "Special Care",
    subtitle: "Hàng khó / Thực phẩm",
    price: "Liên hệ",
    unit: "",
    desc: "Dành riêng cho Mắm, Yến sào, Thuốc tây, Mỹ phẩm, Hàng giá trị cao.",
    features: [
      "Bao thuế nhập khẩu (DDP)",
      "Xử lý nhãn mác chuyên nghiệp",
      "Cam kết đền bù 100%",
      "Giao hàng hẹn giờ",
      "Hỗ trợ giấy tờ kiểm dịch",
    ],
    icon: <ShieldCheck className="w-6 h-6" />,
    popular: false,
    color: "bg-slate-50",
    btnColor: "bg-accent-500 text-white hover:bg-accent-600",
    delay: 0.3,
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-24 bg-slate-50 relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-brand-200 rounded-full blur-3xl mix-blend-multiply animate-blob"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent-200 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto  px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-accent-600 font-bold uppercase tracking-wider text-sm mb-2">
            Bảng giá tham khảo
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Chi phí minh bạch, <br />{" "}
            <span className="text-brand-600">Không phát sinh ẩn</span>
          </h3>
          <p className="text-slate-600 text-lg">
            Giá cước thực tế có thể thay đổi tùy theo phụ phí nhiên liệu hàng
            tháng và phân loại hàng hóa cụ thể.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: pkg.delay, duration: 0.5 }}
              className={cn(
                "rounded-2xl p-8 relative transition-all duration-300 border",
                pkg.popular
                  ? "bg-white border-brand-200 shadow-2xl lg:-mt-4 lg:mb-4" // Hiệu ứng nổi khối cho gói giữa
                  : "bg-white border-slate-200 hover:border-brand-300 hover:shadow-xl",
              )}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-accent-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md whitespace-nowrap">
                  Được chọn nhiều nhất
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div
                  className={cn(
                    "p-3 rounded-lg bg-slate-100 text-brand-600",
                    pkg.popular && "bg-brand-50 text-brand-700",
                  )}
                >
                  {pkg.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">
                    {pkg.name}
                  </h4>
                  <p className="text-sm text-slate-500">{pkg.subtitle}</p>
                </div>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-extrabold text-slate-900">
                  {pkg.price}
                </span>
                <span className="text-slate-500 font-medium ml-1">
                  {pkg.unit}
                </span>
              </div>

              <p className="text-slate-600 text-sm mb-8 min-h-[40px]">
                {pkg.desc}
              </p>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-slate-700"
                  >
                    <Check
                      className={cn(
                        "w-5 h-5 flex-shrink-0",
                        pkg.popular ? "text-brand-600" : "text-slate-400",
                      )}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={cn(
                  "w-full py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 group",
                  pkg.btnColor,
                )}
              >
                {pkg.price === "Liên hệ" ? "Nhận báo giá ngay" : "Chọn gói này"}
                <Zap className="w-4 h-4 group-hover:fill-current" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Note thêm bên dưới */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm">
            * Lưu ý: Giá trên chỉ mang tính chất tham khảo cho hàng thông thường
            đi Mỹ. <br className="hidden md:block" />
            Đối với hàng thực phẩm, mỹ phẩm hoặc hàng cồng kềnh, vui lòng liên
            hệ Hotline để có giá chính xác nhất.
          </p>
        </div>
      </div>
    </section>
  );
}
