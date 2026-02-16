import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google"; // Import font
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import FloatButton from "@/components/ui/FloatButton";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"], // Hỗ trợ tiếng Việt đầy đủ
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://cantho.klatexpress.com"),

  title: {
    default:
      "An Tâm Express | Gửi Hàng Đi Mỹ, Úc, Canada Giá Rẻ Tại khu vực Miền Tây | Cần Thơ",
    template: "%s | An Tâm Express Miền Tây",
  },

  description:
    "Dịch vụ chuyển phát nhanh quốc tế uy tín số 1 tại khu vực Miền Tây | Cần Thơ. Chuyên tuyến Mỹ, Úc, Canada, Châu Âu bao thuế. Nhận hàng tận nhà miễn phí, hút chân không, đóng gói chuẩn FDA.",

  keywords: [
    "gửi hàng đi mỹ cần thơ",
    "chuyển phát nhanh quốc tế miền tây",
    "gửi hàng đi úc giá rẻ",
    "vận chuyển hàng hóa quốc tế",
    "an tâm express",
    "gửi thực phẩm đi mỹ",
    "gửi thuốc tây đi nước ngoài",
    "ship hàng đi canada bao thuế",
  ],

  authors: [
    { name: "An Tâm Express Team", url: "http://cantho.klatexpress.com" },
  ],
  creator: "An Tâm Express",
  publisher: "An Tâm Express Logistics",

  // Cấu hình hiển thị khi share lên Facebook/Zalo
  openGraph: {
    title: "An Tâm Express - Gửi Hàng Quốc Tế Nhanh & Rẻ Nhất Miền Tây",
    description:
      "Miễn phí lấy hàng tận nhà tại Cần Thơ, Tiền Giang, Bến Tre. Bao thuế nhập khẩu, đền bù 100% giá trị hàng hóa.",
    url: "http://cantho.klatexpress.com",
    siteName: "An Tâm Express",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://klatexpress.com/upload/background.jpg",
        width: 1200,
        height: 630,
        alt: "Dịch vụ gửi hàng đi Mỹ An Tâm Express",
      },
    ],
  },

  // Khai báo cho Google Bot
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Canonical URL (Tránh trùng lặp nội dung)
  alternates: {
    canonical: "http://cantho.klatexpress.com",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  // Xác minh chủ sở hữu (Google Search Console)
  // verification: {
  //   google: 'mã-xác-minh-google',
  // },
};

export const viewport: Viewport = {
  themeColor: "#0ea5e9",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "An Tâm Express",
    image: "https://klatexpress.com/upload/background.jpg",
    telephone: "0777697056", // Thay số thật
    url: "http://cantho.klatexpress.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Số 38/42, Đ. Mậu Thân, P. An Hòa, Q. Ninh Kiều",
      addressLocality: "Cần Thơ",
      postalCode: "900000",
      addressCountry: "VN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 10.045162, // Thay tọa độ thật từ Google Maps
      longitude: 105.746857,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "17:30",
    },
    sameAs: [
      "https://www.facebook.com/guihangquoctemientay/",
      "https://zalo.me/0777697056",
      "https://wa.me/0777697056",
    ],
    priceRange: "$$",
  };

  return (
    <html lang="vi">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased ",
          fontSans.variable,
        )}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <FloatButton />
      </body>
    </html>
  );
}
