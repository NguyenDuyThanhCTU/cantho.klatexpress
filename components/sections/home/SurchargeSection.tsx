"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Snowflake,
  Pill,
  Box,
  Zap,
  Info,
  Droplets,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function SurchargeSection() {
  return (
    <section
      id="surcharges"
      className="py-20 bg-white border-t border-slate-100"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-sm font-bold uppercase tracking-wider mb-4 border border-red-100">
            <Info className="w-4 h-4" /> Thông tin quan trọng
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Bảng Phụ Thu & <br className="md:hidden" />
            <span className="text-brand-600">Dịch Vụ Đặc Biệt</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Áp dụng cho các mặt hàng khó, hàng nguy hiểm hoặc yêu cầu đóng gói
            bảo quản đặc biệt (FDA, MSDS, Đá khô...).
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* GROUP 1: Y TẾ & MỸ PHẨM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow bg-slate-50/50"
          >
            <div className="bg-white p-4 border-b border-slate-100 flex items-center gap-3">
              <div className="p-2 bg-pink-100 rounded-lg text-pink-600">
                <Pill className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-800">
                Thuốc & Mỹ Phẩm
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center border-b border-dashed border-slate-200 pb-3">
                <span className="text-slate-600 font-medium">
                  Thuốc Tây (Thường)
                </span>
                <span className="font-bold text-brand-600">300k - 400k</span>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-slate-200 pb-3">
                <span className="text-slate-600 font-medium">
                  Thuốc Tây đi Nhật/Hàn/Đài
                </span>
                <span className="font-bold text-brand-600">200k - 300k</span>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-slate-200 pb-3">
                <span className="text-slate-600 font-medium">
                  Thuốc Trung (Đông Y)
                </span>
                <span className="font-bold text-brand-600">500k</span>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-slate-200 pb-3">
                <span className="text-slate-600 font-medium">
                  Thuốc cho Động vật
                </span>
                <span className="font-bold text-red-600">1.000k</span>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-slate-200 pb-3">
                <span className="text-slate-600 font-medium flex items-center gap-1">
                  <Droplets className="w-3 h-3" /> Chất lỏng
                </span>
                <span className="font-bold text-brand-600">200k</span>
              </div>
              <div className="flex justify-between items-start pt-1">
                <span className="text-slate-600 font-medium">
                  Sơn móng tay (Gel)
                </span>
                <div className="text-right">
                  <span className="block font-bold text-brand-600 text-sm">
                    &lt; 20 chai: 300k
                  </span>
                  <span className="block font-bold text-brand-600 text-sm">
                    &gt; 20 chai: 600k
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* GROUP 2: HÀNG ĐÔNG LẠNH (HOT) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border-2 border-blue-100 overflow-hidden shadow-lg shadow-blue-500/10 bg-white relative"
          >
            {/* Badge Hot */}
            <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">
              CHUYÊN TUYẾN
            </div>

            <div className="bg-blue-50 p-4 border-b border-blue-100 flex items-center gap-3">
              <div className="p-2 bg-blue-200 rounded-lg text-blue-700">
                <Snowflake className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-800">
                Hàng Đông Lạnh
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-slate-700">
                    🇺🇸 Đi Mỹ (USA)
                  </span>
                  <span className="font-black text-blue-600">500.000đ</span>
                </div>
                <p className="text-xs text-slate-500">
                  Bao gồm: Túi giữ nhiệt, Gel lạnh, Đá khô bảo quản 3-4 ngày.
                </p>
              </div>

              <div className="bg-orange-50/50 p-3 rounded-lg border border-orange-100">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-slate-700">
                    🇦🇺 Đi Úc (Australia)
                  </span>
                  <span className="font-black text-orange-600">
                    250.000đ/kg
                  </span>
                </div>
                <ul className="text-xs text-slate-500 list-disc pl-4 space-y-0.5">
                  <li>
                    Chỉ nhận đi <b>Sydney & Melbourne</b>
                  </li>
                  <li>
                    Min: <b>20kg trở lên</b>
                  </li>
                  <li>Giá trọn gói (Không phụ thu thêm)</li>
                </ul>
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-600">🇰🇷 Đi Hàn Quốc</span>
                  <span className="font-bold text-slate-900">
                    300k + 20k/kg
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-600">🇹🇼 Đi Đài Loan</span>
                  <span className="font-bold text-slate-900">20k/kg</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* GROUP 3: ĐIỆN TỬ & CỒNG KỀNH */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow bg-slate-50/50"
          >
            <div className="bg-white p-4 border-b border-slate-100 flex items-center gap-3">
              <div className="p-2 bg-yellow-100 rounded-lg text-yellow-700">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-800">
                Điện Tử & Đặc Biệt
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center border-b border-dashed border-slate-200 pb-3">
                <span className="text-slate-600 font-medium">Đóng kiện gỗ</span>
                <span className="font-bold text-brand-600">500k - 600k</span>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-slate-200 pb-3">
                <span className="text-slate-600 font-medium">Gửi Tượng đá</span>
                <span className="font-bold text-brand-600">400k</span>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-slate-200 pb-3">
                <span className="text-slate-600 font-medium">
                  Hàng điện tử đi Hàn
                </span>
                <span className="font-bold text-brand-600">200k</span>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-slate-200 pb-3">
                <span className="text-slate-600 font-medium">
                  Máy móc đi Úc
                </span>
                <span className="font-bold text-brand-600">30k/kg</span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="text-slate-600 font-medium flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3 text-orange-500" /> Máy dùng
                  Pin
                </span>
                <span className="font-bold text-red-600">500k/máy</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* IMPORTANT NOTE BOX */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-12 bg-yellow-50 border border-yellow-200 rounded-xl p-6 flex flex-col md:flex-row gap-6 items-start"
        >
          <div className="p-3 bg-yellow-100 rounded-full text-yellow-700 flex-shrink-0">
            <Box className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">
              Lưu ý về Trọng lượng hàng Đông Lạnh
            </h4>
            <p className="text-slate-700 leading-relaxed">
              Đối với hàng đông lạnh, để đảm bảo nhiệt độ an toàn trong suốt
              chuyến bay, chúng tôi bắt buộc phải sử dụng:
              <span className="font-semibold">
                {" "}
                Thùng xốp chuyên dụng + Túi giữ nhiệt + Gel lạnh/Đá khô.
              </span>
            </p>
            <p className="mt-2 text-slate-700">
              Do đó, trọng lượng thực tế sau khi đóng gói sẽ{" "}
              <span className="font-bold text-red-600">
                tăng thêm từ 2 - 3kg
              </span>{" "}
              cho mỗi kiện hàng tiêu chuẩn (25kg). Quý khách vui lòng lưu ý để
              tính toán cước phí chính xác.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
