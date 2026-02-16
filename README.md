# 📦 An Tâm Express - Website Chuyển Phát Nhanh Quốc Tế

![Next.js](https://img.shields.io/badge/Next.js-14.0-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8?style=flat-square&logo=tailwind-css)
![Status](https://img.shields.io/badge/Status-Ready_to_Deploy-success?style=flat-square)

> **Website Landing Page hiện đại dành cho dịch vụ Logistics/Chuyển phát nhanh quốc tế, tập trung vào thị trường Cần Thơ & Miền Tây.**

Dự án được tối ưu hóa cho **SEO Local**, trải nghiệm người dùng (UX) mượt mà và tỷ lệ chuyển đổi (Conversion Rate) cao với các công cụ tính giá tự động.

---

## 🚀 Tính Năng Nổi Bật

- **⚡ Hiệu suất vượt trội:** Xây dựng trên Next.js 14 (App Router) & Server Components.
- **📱 Responsive 100%:** Giao diện tương thích hoàn hảo từ Mobile, Tablet đến Desktop.
- **🧮 Shipping Calculator (Tính Cước):**
  - Tự động tính trọng lượng thể tích `(D x R x C) / Divisor`.
  - Tự động nhận diện chia 5000 (Mỹ/Á) hoặc 6000 (Úc).
  - Logic giá theo nấc (Tiered) và cộng dồn (Additive) cho từng quốc gia.
- **📍 Mạng lưới bưu cục:** Hiển thị danh sách kho hàng (Cần Thơ, SG, Tiền Giang...) kèm nút chỉ đường Google Maps.
- **💬 Float Button (CTA):** Nút liên hệ nổi tích hợp Zalo, Messenger, Hotline với hiệu ứng Pulse thu hút.
- **🎨 Hiệu ứng UI/UX:** Sử dụng `framer-motion` cho các hoạt ảnh cuộn, tabs, accordion mượt mà.
- **🛡️ Thông tin minh bạch:** Các section về Phụ thu, Hàng cấm, và Hướng dẫn đóng gói chi tiết.
- **🔍 SEO Chuẩn:** Cấu hình Metadata, OpenGraph, JSON-LD Schema cho Local Business.

---

## 🛠️ Tech Stack

| Công nghệ     | Mô tả                                           |
| :------------ | :---------------------------------------------- |
| **Framework** | [Next.js 14](https://nextjs.org/) (App Router)  |
| **Language**  | [TypeScript](https://www.typescriptlang.org/)   |
| **Styling**   | [Tailwind CSS](https://tailwindcss.com/)        |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons**     | [Lucide React](https://lucide.dev/)             |
| **Utils**     | `clsx`, `tailwind-merge`                        |

---

## 📂 Cấu Trúc Dự Án

```bash
src/
├── app/                 # App Router (Pages & Layout)
│   ├── layout.tsx       # Root Layout (Metadata, Header, Footer, FloatBtn)
│   ├── page.tsx         # Trang chủ (Lắp ghép các Section)
│   └── globals.css      # Global Styles & Tailwind Directives
├── components/
│   ├── layout/          # Header, Footer
│   ├── sections/        # Các thành phần chính của trang chủ
│   │   ├── HeroSection.tsx
│   │   ├── ShippingCalculator.tsx  # ⚠️ Logic tính giá quan trọng
│   │   ├── PricingSection.tsx      # Bảng giá tham khảo
│   │   ├── SurchargeSection.tsx    # Phụ thu & Hàng khó
│   │   ├── LocationSection.tsx     # Danh sách kho
│   │   ├── PackingGuideSection.tsx # Hướng dẫn đóng gói
│   │   ├── GallerySection.tsx      # Thư viện ảnh
│   │   └── ... (các section khác)
│   └── ui/              # Components nhỏ (Button, Input, FloatButton)
├── lib/                 # Utility functions (cn, formatters)
└── public/              # Hình ảnh, assets, icons



```
