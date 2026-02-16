"use client";

import { motion } from "framer-motion";
import {
  PlaneTakeoff,
  PackageCheck,
  ShieldCheck,
  HandCoins,
  MapPin,
  Smartphone,
} from "lucide-react";

const features = [
  {
    title: "Bay Thẳng Mỗi Ngày",
    desc: "Kết nối trực tiếp với các hãng bay lớn (EVA, CI, KE...). Hàng đi ngay trong ngày, không gom đơn, không chờ đợi.",
    icon: <PlaneTakeoff className="w-8 h-8" />,
    color: "text-blue-600",
    bg: "bg-blue-50",
    delay: 0.1,
  },
  {
    title: "Đóng Gói Miễn Phí",
    desc: "Hỗ trợ thùng xốp, carton, nhãn mác. Hút chân không thực phẩm miễn phí giúp bảo quản lâu hơn và tiết kiệm thể tích.",
    icon: <PackageCheck className="w-8 h-8" />,
    color: "text-green-600",
    bg: "bg-green-50",
    delay: 0.2,
  },
  {
    title: "Bảo Hiểm 100%",
    desc: "Chính sách đền bù minh bạch. Hoàn tiền 100% giá trị khai báo nếu xảy ra mất mát hoặc hư hỏng do lỗi vận chuyển.",
    icon: <ShieldCheck className="w-8 h-8" />,
    color: "text-red-600",
    bg: "bg-red-50",
    delay: 0.3,
  },
  {
    title: "Giá Cước Bao Thuế",
    desc: "Báo giá trọn gói (All-in). Cam kết KHÔNG phát sinh phí ẩn, không phụ thu vô lý khi hàng đến nơi.",
    icon: <HandCoins className="w-8 h-8" />,
    color: "text-orange-600",
    bg: "bg-orange-50",
    delay: 0.4,
  },
  {
    title: "Lấy Hàng Tận Nhà",
    desc: "Đội ngũ Pickup phủ sóng khắp Cần Thơ và các tỉnh Miền Tây. Chỉ cần gọi là có mặt sau 30 phút.",
    icon: <MapPin className="w-8 h-8" />,
    color: "text-purple-600",
    bg: "bg-purple-50",
    delay: 0.5,
  },
  {
    title: "Tracking Real-time",
    desc: "Hệ thống theo dõi đơn hàng 24/7. Cập nhật SMS/Zalo tự động mỗi khi hàng thay đổi trạng thái.",
    icon: <Smartphone className="w-8 h-8" />,
    color: "text-teal-600",
    bg: "bg-teal-50",
    delay: 0.6,
  },
];

export default function CommitmentSection() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-accent-600 font-bold uppercase tracking-wider text-sm mb-3">
            Tại sao chọn An Tâm Express?
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Cam kết <span className="text-brand-600">Vàng</span> cho từng kiện
            hàng
          </h3>
          <p className="text-slate-600 text-lg">
            Chúng tôi không chỉ vận chuyển hàng hóa, chúng tôi vận chuyển niềm
            tin của bạn đến tay người thân phương xa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay }}
              className="flex gap-5 p-6 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group"
            >
              <div
                className={`w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center ${feature.bg} ${feature.color} group-hover:scale-110 transition-transform duration-300 shadow-sm`}
              >
                {feature.icon}
              </div>

              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
