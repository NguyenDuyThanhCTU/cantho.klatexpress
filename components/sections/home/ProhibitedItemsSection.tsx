"use client";

import { motion } from "framer-motion";
import {
  Ban,
  AlertTriangle,
  Skull,
  Flame,
  Bomb,
  Coins,
  FileWarning,
  GlobeLock,
  BatteryWarning,
  FlaskConical,
  PawPrint,
  Utensils,
  Megaphone,
  CheckCircle2,
  Info,
} from "lucide-react";

export default function ProhibitedItemsSection() {
  return (
    <section
      id="policy"
      className="py-20 bg-slate-50 border-t border-slate-200"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-sm font-bold uppercase tracking-wider mb-4">
            <Info className="w-4 h-4" /> Chính sách vận chuyển
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Danh mục Hàng hóa <br />
            <span className="text-red-600">Cấm Gửi</span> &{" "}
            <span className="text-yellow-600">Hạn Chế</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Để đảm bảo hàng hóa được thông quan thuận lợi, quý khách vui lòng
            kiểm tra kỹ danh sách dưới đây trước khi gửi hàng.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* 1. HÀNG CẤM (RED ZONE) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border-l-4 border-red-500 shadow-sm overflow-hidden"
          >
            <div className="bg-red-50 p-4 border-b border-red-100 flex items-center gap-3">
              <div className="p-2 bg-red-200 rounded-full text-red-700">
                <Ban className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-red-800">
                1. Hàng Cấm Gửi Tuyệt Đối
              </h3>
            </div>

            <div className="p-6 grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-slate-800 font-bold">
                  <Skull className="w-5 h-5 text-red-500 mt-0.5" /> Chất ma túy
                  & Kích thích
                </div>
                <p className="text-sm text-slate-600 pl-7">
                  Thuốc phiện, các hợp chất ma túy, chất gây nghiện.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-2 text-slate-800 font-bold">
                  <Bomb className="w-5 h-5 text-red-500 mt-0.5" /> Vũ khí & Đạn
                  dược
                </div>
                <p className="text-sm text-slate-600 pl-7">
                  Súng, đạn, vật liệu nổ, pháo hoa, công cụ hỗ trợ quân sự.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-2 text-slate-800 font-bold">
                  <Flame className="w-5 h-5 text-red-500 mt-0.5" /> Vật phẩm
                  nguy hiểm
                </div>
                <p className="text-sm text-slate-600 pl-7">
                  Chất dễ cháy (sơn, xăng, dầu), bình xịt nén khí, chất lỏng dễ
                  cháy.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-2 text-slate-800 font-bold">
                  <FileWarning className="w-5 h-5 text-red-500 mt-0.5" /> Văn
                  hóa phẩm độc hại
                </div>
                <p className="text-sm text-slate-600 pl-7">
                  Ấn phẩm đồi trụy, phản động, tài liệu chống phá nhà nước.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-2 text-slate-800 font-bold">
                  <Coins className="w-5 h-5 text-red-500 mt-0.5" /> Hàng cấm
                  theo luật
                </div>
                <p className="text-sm text-slate-600 pl-7">
                  Sinh vật sống, tiền tệ, kim loại quý (Vàng, Bạc), đá quý.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-2 text-slate-800 font-bold">
                  <GlobeLock className="w-5 h-5 text-red-500 mt-0.5" /> Cấm nhập
                  theo UPU
                </div>
                <p className="text-sm text-slate-600 pl-7">
                  Các vật phẩm cấm nhập khẩu theo quy định của nước sở tại.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 2. HÀNG HẠN CHẾ (YELLOW ZONE) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border-l-4 border-yellow-500 shadow-sm overflow-hidden"
          >
            <div className="bg-yellow-50 p-4 border-b border-yellow-100 flex items-center gap-3">
              <div className="p-2 bg-yellow-200 rounded-full text-yellow-800">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-yellow-800">
                2. Hàng Hạn Chế / Có Điều Kiện
              </h3>
            </div>

            <div className="p-6 grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-slate-800 font-bold">
                  <Utensils className="w-5 h-5 text-yellow-600 mt-0.5" /> Thực
                  phẩm (Thịt)
                </div>
                <p className="text-sm text-slate-600 pl-7">
                  Các chế phẩm từ <b>Heo, Bò, Gà</b>, Trứng, Sữa (Kiểm dịch gắt
                  gao).
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-2 text-slate-800 font-bold">
                  <BatteryWarning className="w-5 h-5 text-yellow-600 mt-0.5" />{" "}
                  Điện tử & Pin
                </div>
                <p className="text-sm text-slate-600 pl-7">
                  Máy tính, điện thoại, pin dự phòng (Tuân thủ quy định an toàn
                  bay).
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-2 text-slate-800 font-bold">
                  <FlaskConical className="w-5 h-5 text-yellow-600 mt-0.5" />{" "}
                  Hóa chất
                </div>
                <p className="text-sm text-slate-600 pl-7">
                  Các loại axit, chất tẩy rửa, chất oxy hóa mạnh.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-2 text-slate-800 font-bold">
                  <PawPrint className="w-5 h-5 text-yellow-600 mt-0.5" /> Sản
                  phẩm động vật
                </div>
                <p className="text-sm text-slate-600 pl-7">
                  Ngà voi, lông thú, da động vật hoang dã cấm buôn bán.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3. LƯU Ý QUAN TRỌNG (BLUE ZONE) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-900 rounded-2xl p-8 text-white relative overflow-hidden"
        >
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 border-r border-white/20 pr-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Megaphone className="w-6 h-6 text-accent-400" /> Lưu ý quan
                trọng
              </h3>
              <p className="text-brand-100 text-sm leading-relaxed mb-4">
                Mỗi quốc gia có quy định nhập khẩu riêng biệt. Việc vi phạm có
                thể dẫn đến tịch thu hàng hóa, phạt tiền hoặc cấm nhập cảnh vĩnh
                viễn.
              </p>
              <div className="p-3 bg-white/10 rounded-lg text-sm text-white">
                <span className="font-bold text-accent-400 block mb-1">
                  Ví dụ điển hình:
                </span>
                Singapore cấm tuyệt đối kẹo cao su, thuốc lá điện tử.
              </div>
            </div>

            <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-bold text-accent-400">
                  Kiểm soát chặt chẽ:
                </h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />{" "}
                    Hạn chế pin rời, pin dự phòng.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />{" "}
                    Cấm bình xịt phòng, bình xịt tóc (nén khí).
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />{" "}
                    Cấm cồn, rượu nồng độ cao.
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                <h4 className="font-bold text-white mb-2 uppercase tracking-wide">
                  Yêu cầu bắt buộc
                </h4>
                <p className="text-sm text-slate-300 mb-4">
                  Nếu bạn vẫn muốn gửi các mặt hàng nhạy cảm (ngoài danh mục cấm
                  tuyệt đối), vui lòng liên hệ Hotline để được hướng dẫn đóng
                  gói chuyên biệt.
                </p>
                <div className="flex items-center gap-2 text-accent-400 font-bold bg-white/10 p-2 rounded text-center justify-center">
                  <AlertTriangle className="w-5 h-5" />
                  KHAI BÁO CHÍNH XÁC 100%
                </div>
                <p className="text-xs text-center text-slate-400 mt-2">
                  Tránh phát sinh rủi ro pháp lý & hải quan.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
