import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
  Send,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-slate-950 text-slate-300 text-sm">
      {/* Top Footer: Newsletter & Call to Action nhỏ */}
      <div className="border-b border-slate-800 bg-slate-900/50">
        <div className="mx-auto container px-4 py-10 md:flex md:items-center md:justify-between gap-6">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-white mb-2">
              Đăng ký nhận bảng giá mới nhất
            </h3>
            <p className="text-slate-400">
              Nhận thông tin ưu đãi vận chuyển đi Mỹ, Úc hàng tháng.
            </p>
          </div>

          <div className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              placeholder="Nhập email của bạn..."
              className="bg-slate-800 border border-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-brand-500 flex-1 md:w-80 transition-all"
            />
            <button className="bg-accent-600 hover:bg-accent-700 text-white px-6 py-3 rounded-lg font-bold transition-all flex items-center gap-2">
              Đăng ký <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto container px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1: Brand Info */}
        <div className="space-y-6">
          {/* Logo Placeholder */}
          <Link
            href="/"
            className="inline-block text-2xl font-black text-white tracking-tighter"
          >
            AnTâm<span className="text-brand-500">Express</span>
          </Link>

          <p className="text-slate-400 leading-relaxed">
            Đơn vị vận chuyển quốc tế hàng đầu tại Miền Tây. Chúng tôi mang đến
            giải pháp gửi hàng đi Mỹ, Úc, Canada nhanh chóng, an toàn và tiết
            kiệm nhất.
          </p>

          <div className="flex gap-4">
            <a
              target="_blank"
              href="https://www.facebook.com/guihangquoctemientay/"
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              target="_blank"
              href="https://zalo.me/0777697056"
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/60px-Icon_of_Zalo.svg.png" />
            </a>
            <a
              target="_blank"
              href="https://wa.me/0777697056"
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/WhatsApp_logo-color-vertical.svg/60px-WhatsApp_logo-color-vertical.svg.png" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links (Dịch vụ) */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Dịch vụ chính</h4>
          <ul className="space-y-4">
            <li>
              <Link
                href="#pricing"
                className="hover:text-accent-500 transition-colors flex items-center gap-2 group"
              >
                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-accent-500 transition-colors" />
                Gửi hàng đi Mỹ (USA)
              </Link>
            </li>
            <li>
              <Link
                href="#pricing"
                className="hover:text-accent-500 transition-colors flex items-center gap-2 group"
              >
                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-accent-500 transition-colors" />
                Gửi hàng đi Úc (Australia)
              </Link>
            </li>
            <li>
              <Link
                href="#pricing"
                className="hover:text-accent-500 transition-colors flex items-center gap-2 group"
              >
                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-accent-500 transition-colors" />
                Gửi hàng đi Canada
              </Link>
            </li>
            <li>
              <Link
                href="#pricing"
                className="hover:text-accent-500 transition-colors flex items-center gap-2 group"
              >
                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-accent-500 transition-colors" />
                Gửi hàng khu vực Châu Á
              </Link>
            </li>
            <li>
              <Link
                href="#pricing"
                className="hover:text-accent-500 transition-colors flex items-center gap-2 group"
              >
                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-accent-500 transition-colors" />
                Dịch vụ Hải Quan trọn gói
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Support Links (Hỗ trợ) */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">
            Hỗ trợ khách hàng
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                href="#hero"
                className="hover:text-accent-500 transition-colors"
              >
                Tra cứu vận đơn
              </Link>
            </li>
            <li>
              <Link
                href="#calculator"
                className="hover:text-accent-500 transition-colors"
              >
                Bảng giá cước 2026
              </Link>
            </li>
            <li>
              <Link
                href="#packing-guide"
                className="hover:text-accent-500 transition-colors"
              >
                Cấm nang đóng gói
              </Link>
            </li>
            <li>
              <Link
                href="#faq"
                className="hover:text-accent-500 transition-colors"
              >
                Chính sách bồi thường
              </Link>
            </li>
            <li>
              <Link
                href="#policy"
                className="hover:text-accent-500 transition-colors"
              >
                Hàng hóa cấm vận chuyển
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Info (Liên hệ) */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Liên hệ</h4>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <MapPin className="w-6 h-6 text-brand-500 flex-shrink-0" />
              <span>
                <span className="block text-white font-semibold mb-1">
                  Địa chỉ:
                </span>
                Số 123, Đường 30/4, P. Hưng Lợi, Q. Ninh Kiều, TP. Cần Thơ.
              </span>
            </li>
            <li className="flex gap-4">
              <Phone className="w-6 h-6 text-brand-500 flex-shrink-0" />
              <span>
                <span className="block text-white font-semibold mb-1">
                  Hotline / Zalo:
                </span>
                <a
                  href="tel:0777 697 056"
                  className="hover:text-accent-500 text-lg font-bold"
                >
                  0777 697 056
                </a>
              </span>
            </li>
            <li className="flex gap-4">
              <Mail className="w-6 h-6 text-brand-500 flex-shrink-0" />
              <span>
                <span className="block text-white font-semibold mb-1">
                  Email:
                </span>
                <a
                  href="mailto:vanchuyenklat.express@gmail.com"
                  className="hover:text-accent-500"
                >
                  vanchuyenklat.express@gmail.com
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Legal */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto container px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} An Tâm Express. All rights reserved - Designed by{" "}
            <Link
              className="hover:underline"
              href="https://dnaagency.com.vn"
              target="_blank"
            >
              DNA Agency
            </Link>
          </div>

          <div className="flex gap-8">
            <Link href="#faq" className="hover:text-white transition-colors">
              Điều khoản sử dụng
            </Link>
            <Link href="#faq" className="hover:text-white transition-colors">
              Chính sách bảo mật
            </Link>
            <span className="hidden md:inline">
              GPKD số: 0318177672 do Sở KH&ĐT TP. Hồ Chí Minh cấp
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
