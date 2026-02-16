"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, Box, MessageCircle, Layers } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Danh mục Tabs
const tabs = [
  { id: "all", label: "Tất cả", icon: <Layers className="w-4 h-4" /> },
  {
    id: "packing",
    label: "Quy cách đóng gói",
    icon: <Box className="w-4 h-4" />,
  },
  {
    id: "goods",
    label: "Hàng hóa đi Mỹ/Úc",
    icon: <ImageIcon className="w-4 h-4" />,
  },
  {
    id: "feedback",
    label: "Feedback Khách",
    icon: <MessageCircle className="w-4 h-4" />,
  },
];

// Dữ liệu giả lập (Placeholder) - Sau này bạn thay bằng link ảnh thật
const galleryImages = [
  {
    id: 1,
    src: "https://klatexpress.com/upload/106142112591763948812.jpg",
    category: "packing",
    title: "Đóng thùng xốp",
    desc: "Chèn xốp nổ kỹ lưỡng",
  },
  {
    id: 2,
    src: "https://klatexpress.com/upload/12245093166191022331.jpg",
    category: "packing",
    title: "Đóng thùng xốp",
    desc: "Chuẩn vận chuyển quốc tế",
  },
  {
    id: 3,
    src: "https://klatexpress.com/upload/101efdb1cda345fd1cb2.jpg",
    category: "feedback",
    title: "Zalo Chat",
    desc: "Khách nhận hàng sau 4 ngày",
  },
  {
    id: 4,
    src: "https://klatexpress.com/upload/12245093166191022332.jpg",
    category: "packing",
    title: "Đóng thùng xốp",
    desc: "Chuẩn vận chuyển quốc tế",
  },
  {
    id: 5,
    src: "https://klatexpress.com/upload/12245093166191022333.jpg",
    category: "packing",
    title: "Đóng thùng xốp",
    desc: "Chuẩn vận chuyển quốc tế",
  },
  {
    id: 6,
    src: "https://klatexpress.com/upload/181342535586980981511.jpg",
    category: "packing",
    title: "Đóng thùng xốp",
    desc: "Chuẩn vận chuyển quốc tế",
  },
  {
    id: 7,
    src: "https://klatexpress.com/upload/1873608858161027396.jpg",
    category: "packing",
    title: "Đóng thùng xốp",
    desc: "Chuẩn vận chuyển quốc tế",
  },

  {
    id: 8,
    src: "https://klatexpress.com/upload/2409666594367140411.jpg",
    category: "goods",
    title: "Quần áo",
    desc: "Đóng bao tải gọn nhẹ",
  },
  {
    id: 9,
    src: "https://klatexpress.com/upload/3325299455596324170.jpg",
    category: "goods",
    title: "Quần áo",
    desc: "Đóng bao tải gọn nhẹ",
  },
  {
    id: 10,
    src: "https://klatexpress.com/upload/35c38627bf35376b6e24.jpg",
    category: "feedback",
    title: "Quần áo",
    desc: "Đóng bao tải gọn nhẹ",
  },
  {
    id: 8,
    src: "https://klatexpress.com/upload/37994083282581903751.jpg",
    category: "goods",
    title: "Quần áo",
    desc: "Đóng bao tải gọn nhẹ",
  },
  {
    id: 8,
    src: "https://klatexpress.com/upload/39908392834003620062.jpg",
    category: "goods",
    title: "Quần áo",
    desc: "Đóng bao tải gọn nhẹ",
  },
  {
    id: 8,
    src: "https://klatexpress.com/upload/3.png",
    category: "goods",
    title: "Quần áo",
    desc: "Đóng bao tải gọn nhẹ",
  },
  {
    id: 8,
    src: "https://klatexpress.com/upload/4.png",
    category: "goods",
    title: "Quần áo",
    desc: "Đóng bao tải gọn nhẹ",
  },
  {
    id: 8,
    src: "https://klatexpress.com/upload/5dd5f87adcfb54a50dea.jpg",
    category: "goods",
    title: "Quần áo",
    desc: "Đóng bao tải gọn nhẹ",
  },
  {
    id: 8,
    src: "https://klatexpress.com/upload/5.png",
    category: "goods",
    title: "Quần áo",
    desc: "Đóng bao tải gọn nhẹ",
  },
  {
    id: 8,
    src: "https://klatexpress.com/upload/6471ba9183830bdd5292.jpg",
    category: "goods",
    title: "Quần áo",
    desc: "Đóng bao tải gọn nhẹ",
  },
  {
    id: 8,
    src: "https://klatexpress.com/upload/6.png",
    category: "goods",
    title: "Quần áo",
    desc: "Đóng bao tải gọn nhẹ",
  },
  {
    id: 8,
    src: "https://klatexpress.com/upload/7.png",
    category: "goods",
    title: "Quần áo",
    desc: "Đóng bao tải gọn nhẹ",
  },
  {
    id: 8,
    src: "https://klatexpress.com/upload/8.png",
    category: "goods",
    title: "Quần áo",
    desc: "Đóng bao tải gọn nhẹ",
  },

  {
    id: 8,
    src: "https://klatexpress.com/upload/z5984489224308_49f25c3cd819123d2728f548e7448669.jpg",
    category: "goods",
    title: "Quần áo",
    desc: "Đóng bao tải gọn nhẹ",
  },

  {
    id: 8,
    src: "https://klatexpress.com/upload/z6570533583472_cb78f85540a0664de6c67f1080fba5b3.jpg",
    category: "goods",
    title: "Quần áo",
    desc: "Đóng bao tải gọn nhẹ",
  },
  {
    id: 8,
    src: "https://klatexpress.com/upload/z6897770416021_f73ca32aefb891ec1c28be317ee5c815.jpg",
    category: "goods",
    title: "Quần áo",
    desc: "Đóng bao tải gọn nhẹ",
  },
  {
    id: 8,
    src: "https://klatexpress.com/upload/z6897770709143_2f4df57516fca8f4433f63e15dc42a19.jpg",
    category: "goods",
    title: "Quần áo",
    desc: "Đóng bao tải gọn nhẹ",
  },
  {
    id: 8,
    src: "https://klatexpress.com/upload/z7239315752193_b79c708c43a4ed83d6f553a4729408b6.jpg",
    category: "goods",
    title: "Quần áo",
    desc: "Đóng bao tải gọn nhẹ",
  },
  {
    id: 8,
    src: "https://klatexpress.com/upload/z7295437727794_0d8c27dd763260ab98bc5d61948c0b80.jpg",
    category: "goods",
    title: "Quần áo",
    desc: "Đóng bao tải gọn nhẹ",
  },
  {
    id: 8,
    src: "https://klatexpress.com/upload/z7295437743312_0e4c00399f8708ca9b26e5c70e7e9649.jpg",
    category: "goods",
    title: "Quần áo",
    desc: "Đóng bao tải gọn nhẹ",
  },
  {
    id: 8,
    src: "https://klatexpress.com/upload/z7295437751455_d6d9398f799642880bd2fa6c255c945f.jpg",
    category: "goods",
    title: "Quần áo",
    desc: "Đóng bao tải gọn nhẹ",
  },
  {
    id: 8,
    src: "https://klatexpress.com/upload/z7295437768899_653ffe0d74882b0bcaba25cb221e7ffb.jpg",
    category: "goods",
    title: "Quần áo",
    desc: "Đóng bao tải gọn nhẹ",
  },
  {
    id: 8,
    src: "https://klatexpress.com/upload/z7295437775707_2d0d3f7a511160ddbfe790d266ee7b8c.jpg",
    category: "goods",
    title: "Quần áo",
    desc: "Đóng bao tải gọn nhẹ",
  },
  {
    id: 8,
    src: "https://klatexpress.com/upload/z7314185195327_3bbb946752be1b57d5bafc072ba7e525.jpg",
    category: "goods",
    title: "Quần áo",
    desc: "Đóng bao tải gọn nhẹ",
  },
  {
    id: 8,
    src: "https://klatexpress.com/upload/z7314452222484_4c462924ee85456562171f4030fc54c0.jpg",
    category: "goods",
    title: "Quần áo",
    desc: "Đóng bao tải gọn nhẹ",
  },
  {
    id: 8,
    src: "https://klatexpress.com/upload/z7324859132092_11a5692a9c4732c176ef20cd649d3292.jpg",
    category: "goods",
    title: "Quần áo",
    desc: "Đóng bao tải gọn nhẹ",
  },
];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("all");

  // Lọc hình ảnh theo tab
  const filteredImages =
    activeTab === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeTab);

  return (
    <section id="gallery" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-accent-600 font-bold uppercase tracking-wider text-sm mb-3">
            Thư viện hình ảnh
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Người thật - <span className="text-brand-600">Việc thật</span>
          </h3>
          <p className="text-slate-600 text-lg">
            Hàng ngàn kiện hàng được An Tâm Express xử lý mỗi tháng. Sự chỉn chu
            trong từng khâu đóng gói là cam kết của chúng tôi.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "relative px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 transition-colors z-10",
                activeTab === tab.id
                  ? "text-white"
                  : "text-slate-600 hover:bg-white hover:text-brand-600",
              )}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-brand-600 rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Image Grid (Masonry Layout Simulated) */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-slate-200 cursor-zoom-in"
              >
                {/* Thay src bằng ảnh thật của bạn */}
                <div className="absolute inset-0 flex items-center justify-center bg-slate-300 text-slate-400 font-bold">
                  {/* Placeholder cho ảnh nếu chưa có */}
                  <img
                    src={image.src}
                    alt={image.title}
                    className="object-cover object-bottom"
                  />
                </div>

                {/* Overlay thông tin khi hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {image.title}
                  </p>
                  <p className="text-slate-300 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {image.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button (Optional) */}
        <div className="mt-12 text-center">
          <a
            href="https://www.facebook.com/guihangquoctemientay/"
            target="_blank"
            className="inline-flex items-center gap-2 text-brand-600 font-bold hover:underline"
          >
            Xem thêm 1000+ hình ảnh trên Fanpage
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
