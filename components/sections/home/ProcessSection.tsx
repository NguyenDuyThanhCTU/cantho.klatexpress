export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Liên hệ & Báo giá",
      desc: "Gọi hotline hoặc gửi yêu cầu. Chúng tôi tư vấn gói cước tốt nhất.",
    },
    {
      num: "02",
      title: "Nhận hàng tận nơi",
      desc: "Đội ngũ đến tận nhà tại các tỉnh Miền Tây để đóng gói miễn phí.",
    },
    {
      num: "03",
      title: "Vận chuyển & Tracking",
      desc: "Hàng bay ngay trong ngày. Cập nhật lộ trình liên tục.",
    },
    {
      num: "04",
      title: "Giao hàng thành công",
      desc: "Giao tận tay người nhận tại nước ngoài (Door-to-Door).",
    },
  ];

  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 translate-x-20"></div>

      <div className="mx-auto container relative z-10 px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: Image/Banner */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              {/* Thay bằng ảnh thật của nhân viên/kho bãi An Tâm Express */}
              <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
                <img src="https://klatexpress.com/upload/5.png" />
              </div>
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-white/20">
                <p className="text-brand-800 font-bold text-lg">
                  100% Đóng gói Miễn Phí
                </p>
                <p className="text-slate-500 text-sm">Tiêu chuẩn xuất khẩu</p>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent-500 rounded-full opacity-20 blur-xl"></div>
          </div>

          {/* Right: Steps */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
              Quy trình gửi hàng <br />
              <span className="text-brand-600">Đơn giản & Minh bạch</span>
            </h2>

            <div className="space-y-8">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="flex-shrink-0 relative">
                    <div className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center font-bold text-slate-400 group-hover:border-accent-500 group-hover:text-accent-500 transition-all bg-white z-10 relative">
                      {step.num}
                    </div>
                    {/* Line connector */}
                    {idx !== steps.length - 1 && (
                      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-full bg-slate-100 group-hover:bg-accent-100 transition-colors"></div>
                    )}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-accent-600 transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-slate-500 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
