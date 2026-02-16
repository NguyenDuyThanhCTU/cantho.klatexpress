"use client";

import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-brand-900 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-[50%] -left-[20%] w-[800px] h-[800px] rounded-full bg-accent-500 blur-3xl"></div>
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-blue-400 blur-3xl"></div>
      </div>

      <div className="mx-auto container relative z-10 px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Đừng để khoảng cách ngăn cản yêu thương
        </h2>
        <p className="text-brand-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Liên hệ ngay với An Tâm Express để được tư vấn gói cước tiết kiệm nhất
          hôm nay. Đội ngũ chúng tôi đã sẵn sàng hỗ trợ bạn.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="h-14 px-8 rounded-full bg-accent-500 hover:bg-accent-600 text-white font-bold text-lg shadow-lg shadow-accent-900/20 transition-all flex items-center gap-2 group w-full sm:w-auto justify-center">
            <Phone className="w-5 h-5" />
            0777 697 056 (Zalo 24/7)
          </button>

          <button className="h-14 px-8 rounded-full border border-brand-400 hover:bg-white/10 text-white font-semibold text-lg transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
            Nhận báo giá chi tiết
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
