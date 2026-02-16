"use client";

import { cn } from "@/lib/utils";

// Danh sách các đối tác (Bạn có thể thay bằng Logo ảnh thật sau này)
const partners = [
  { name: "DHL Express", color: "text-red-600" },
  { name: "FedEx", color: "text-purple-700" },
  { name: "UPS", color: "text-amber-700" },
  { name: "Vietnam Airlines", color: "text-blue-600" },
  { name: "Eva Air", color: "text-green-600" },
  { name: "USPS", color: "text-blue-800" },
  { name: "TNT", color: "text-orange-600" },
];

export default function PartnerSection() {
  return (
    <section className="py-10 bg-white border-b border-slate-100 overflow-hidden">
      <div className="mx-auto container px-4 mb-6 text-center">
        <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">
          Đối tác vận chuyển chiến lược
        </p>
      </div>

      {/* mx-auto container cho hiệu ứng chạy */}
      <div className="relative flex overflow-x-hidden group">
        {/* Lớp phủ mờ 2 bên để tạo độ sâu (Fade effect) */}
        <div className="absolute top-0 left-0 z-10 w-20 h-full bg-gradient-to-r from-white to-transparent"></div>
        <div className="absolute top-0 right-0 z-10 w-20 h-full bg-gradient-to-l from-white to-transparent"></div>

        {/* Dải logo chạy (Nhân đôi list để chạy không bị đứt quãng) */}
        <div className="flex animate-marquee whitespace-nowrap">
          {/* Lần 1 */}
          {partners.map((partner, index) => (
            <div
              key={index}
              className="mx-8 md:mx-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 cursor-pointer"
            >
              {/* Ở đây thay bằng thẻ <img src="..." /> logo thật */}
              <span
                className={cn(
                  "text-2xl md:text-3xl font-black italic",
                  partner.color,
                )}
              >
                {partner.name}
              </span>
            </div>
          ))}

          {/* Lần 2 (Duplicate để loop) */}
          {partners.map((partner, index) => (
            <div
              key={`dup-${index}`}
              className="mx-8 md:mx-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 cursor-pointer"
            >
              <span
                className={cn(
                  "text-2xl md:text-3xl font-black italic",
                  partner.color,
                )}
              >
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
