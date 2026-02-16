"use client";

import { motion } from "framer-motion";
import {
  Box,
  Scissors,
  Layers,
  Scale,
  AlertTriangle,
  CheckCircle2,
  PackageX,
} from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Chuẩn bị vật liệu",
    desc: "Sử dụng thùng carton cứng (5-7 lớp). Chuẩn bị thêm xốp nổ (bubble wrap), mút xốp, băng keo bản rộng và dao rọc giấy.",
    icon: <Box className="w-8 h-8" />,
  },
  {
    num: "02",
    title: "Xử lý hàng hóa",
    desc: "Hàng dễ vỡ: Quấn xốp nổ từng món riêng biệt. Hàng thực phẩm/mùi: Bắt buộc hút chân không và bọc kỹ nilon.",
    icon: <Layers className="w-8 h-8" />,
  },
  {
    num: "03",
    title: "Sắp xếp tối ưu",
    desc: "Nguyên tắc: 'Nặng dưới - Nhẹ trên'. Lấp đầy các khoảng trống bằng xốp hoặc giấy báo để hàng không bị xê dịch khi va đập.",
    icon: <PackageX className="w-8 h-8" />,
  },
  {
    num: "04",
    title: "Niêm phong & Dán nhãn",
    desc: "Dán băng keo theo hình chữ H (dọc và ngang mép thùng). Dán tem 'Hàng dễ vỡ' hoặc 'Chiều đứng' nếu cần thiết.",
    icon: <Scissors className="w-8 h-8" />,
  },
];

export default function PackingGuideSection() {
  return (
    <section id="packing-guide" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-bold uppercase tracking-wider mb-4 border border-blue-100">
            <Box className="w-4 h-4" /> Cẩm nang đóng gói
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Đóng gói đúng chuẩn <br />
            <span className="text-brand-600">Tiết kiệm & An toàn</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Tuân thủ quy cách đóng gói giúp bạn tránh phát sinh cước phí thể
            tích và bảo vệ hàng hóa tuyệt đối.
          </p>
        </div>

        {/* Visual Guide Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center mb-6 font-bold shadow-inner">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Comparison: Why Packing Matters */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* WARNING BOX: Volume Weight */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-orange-50 rounded-2xl p-8 border border-orange-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-200 rounded-full text-orange-700">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-orange-800">
                Cảnh báo Phí Thể Tích
              </h3>
            </div>
            <p className="text-slate-700 mb-6">
              Hàng không quốc tế tính cước theo số lớn hơn giữa{" "}
              <span className="font-bold">Cân nặng thực tế</span> và{" "}
              <span className="font-bold">Cân nặng quy đổi</span>.
            </p>

            <div className="bg-white p-4 rounded-xl border border-orange-200 flex flex-col items-center text-center">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Công thức tính
              </span>
              <div className="text-xl md:text-2xl font-black text-slate-800 flex items-center gap-2">
                (Dài x Rộng x Cao){" "}
                <span className="text-orange-500">÷ 5000</span>
              </div>
              <p className="text-xs text-slate-500 mt-2 italic">
                Ví dụ: Thùng gấu bông nhẹ 5kg nhưng to, quy đổi ra 15kg -&#x3E;
                Bạn phải trả tiền cho 15kg!
              </p>
            </div>
          </motion.div>

          {/* PRO TIPS */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-blue-50 rounded-2xl p-8 border border-blue-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-200 rounded-full text-blue-700">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-blue-800">
                Mẹo tiết kiệm chi phí
              </h3>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Scissors className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 text-sm">
                  <span className="font-bold">Cắt thùng:</span> Nếu thùng quá
                  cao so với hàng, hãy cắt bớt chiều cao thùng xuống sát mặt
                  hàng để giảm thể tích.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <PackageX className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 text-sm">
                  <span className="font-bold">Hút chân không:</span> Với quần
                  áo, gấu bông, thực phẩm khô... hút chân không giúp giảm đến
                  50% thể tích.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Scale className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 text-sm">
                  <span className="font-bold">Tận dụng khe hở:</span> Nhét các
                  vật nhỏ (vớ, phụ kiện) vào giày hoặc góc thùng để tận dụng
                  không gian chết.
                </span>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-blue-200">
              <p className="text-sm font-medium text-blue-800 text-center">
                💡 An Tâm Express hỗ trợ đóng gói & hút chân không{" "}
                <span className="font-bold uppercase">Miễn Phí</span> tại kho.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
