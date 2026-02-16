import type { Metadata } from "next";
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
  title:
    "An Tâm Express | Chuyển phát nhanh Quốc tế từ Miền Tây - HOTLINE: 0777 697056",
  description:
    "Dịch vụ gửi hàng đi Mỹ, Úc, Canada uy tín, giá tốt nhất Miền Tây - HOTLINE: 0777 697056",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased ",
          fontSans.variable,
        )}
      >
        {children}
        <FloatButton />
      </body>
    </html>
  );
}
