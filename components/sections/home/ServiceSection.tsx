"use client";

import { motion } from "framer-motion";
import { Plane, Ship, Clock, DollarSign, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Chuyên Tuyến Mỹ (USA)",
    desc: "Dịch vụ bay thẳng, thủ tục FDA nhanh chóng. Giao hàng tận cửa (Door-to-door).",
    icon: <Plane className="w-8 h-8" />,
    color: "bg-blue-500",
    delay: 0.1,
  },
  {
    title: "Gửi hàng đi Úc & Canada",
    desc: "Giá cước ưu đãi nhất Miền Tây. Nhận gửi thực phẩm, mỹ phẩm, yến sào.",
    icon: <Ship className="w-8 h-8" />, // Có thể thay bằng icon Kangaroo/Lá phong nếu có SVG custom
    color: "bg-red-500",
    delay: 0.2,
  },
  {
    title: "Chuyển phát Châu Á",
    desc: "Nhật, Hàn, Đài Loan, Singapore... Thời gian toàn trình chỉ từ 1-3 ngày.",
    icon: <Clock className="w-8 h-8" />,
    color: "bg-yellow-500",
    delay: 0.3,
  },
  {
    title: "Tiết kiệm (Economy)",
    desc: "Giải pháp tối ưu chi phí cho hàng nặng, hàng cồng kềnh đi Châu Âu.",
    icon: <DollarSign className="w-8 h-8" />,
    color: "bg-green-500",
    delay: 0.4,
  },
];

export default function ServiceSection() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="mx-auto container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-accent-600 font-bold uppercase tracking-wider text-sm mb-2">
            Dịch vụ của chúng tôi
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Giải pháp vận chuyển{" "}
            <span className="text-brand-700">Đa Quốc Gia</span>
          </h3>
          <p className="text-slate-600 text-lg">
            An Tâm Express cung cấp đa dạng các gói dịch vụ tùy chỉnh theo nhu
            cầu và ngân sách của từng khách hàng tại Miền Tây.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay, duration: 0.5 }}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden"
            >
              {/* Hover Background Accent */}
              <div className="absolute inset-0 bg-brand-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div
                  className={`w-14 h-14 rounded-xl ${service.color} text-white flex items-center justify-center mb-6 shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-700 transition-colors">
                  {service.title}
                </h4>

                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.desc}
                </p>

                <a
                  href="#pricing"
                  className="inline-flex items-center text-sm font-semibold text-brand-600 hover:text-brand-800 transition-colors"
                >
                  Xem chi tiết <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
