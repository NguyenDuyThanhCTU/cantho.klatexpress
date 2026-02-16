"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Tôi có thể gửi thực phẩm (cá khô, mắm) đi Mỹ được không?",
    answer:
      "Được! An Tâm Express hỗ trợ trọn gói thủ tục FDA và nhãn mác cho các loại thực phẩm khô, hải sản sấy, mắm... đảm bảo thông quan an toàn vào Mỹ.",
  },
  {
    question: "Thời gian vận chuyển đi Úc mất bao lâu?",
    answer:
      "Thông thường dịch vụ chuyển phát nhanh đi Úc mất từ 3-5 ngày làm việc. Với các vùng sâu vùng xa có thể cộng thêm 1-2 ngày phát hàng.",
  },
  {
    question: "Nếu hàng hóa bị mất mát, hư hỏng thì sao?",
    answer:
      "Chúng tôi có chính sách bảo hiểm hàng hóa lên đến 100% giá trị khai báo. Mọi quy trình đền bù được quy định rõ ràng trong hợp đồng vận chuyển.",
  },
  {
    question: "Cách tính cước phí theo cân nặng hay thể tích?",
    answer:
      "Theo quy định hàng không quốc tế, cước phí sẽ tính theo số lớn hơn giữa Cân nặng thực tế (kg) và Cân nặng quy đổi từ thể tích (Dài x Rộng x Cao / 5000).",
  },
  // --- Bổ sung thêm các mục dưới đây ---
  {
    question: "Công ty có hỗ trợ lấy hàng tận nhà không?",
    answer:
      "Có! Chúng tôi hỗ trợ lấy hàng tận nơi miễn phí tại các khu vực nội thành và hỗ trợ đóng gói, hút chân không thực phẩm đúng tiêu chuẩn xuất khẩu.",
  },
  {
    question: "Người nhận có phải đóng thêm thuế phí gì khi nhận hàng không?",
    answer:
      "Tùy vào quy định của mỗi quốc gia và giá trị hàng hóa mà có thể phát sinh thuế nhập khẩu. Chúng tôi sẽ tư vấn trước mức thuế dự kiến để bạn chủ động.",
  },
  {
    question:
      "Tôi có thể gửi các loại thuốc Tây, thuốc Nam đi nước ngoài không?",
    answer:
      "Đối với dược phẩm, chúng tôi chỉ nhận các loại thuốc có nhãn mác, toa thuốc rõ ràng và nằm trong danh mục cho phép của nước sở tại. Vui lòng liên hệ để được kiểm tra mã sản phẩm.",
  },
  {
    question: "Tôi có thể theo dõi hành trình đơn hàng bằng cách nào?",
    answer:
      "Ngay sau khi gửi hàng, bạn sẽ được cung cấp một mã Tracking Number. Bạn có thể nhập mã này trực tiếp trên website của chúng tôi để cập nhật vị trí đơn hàng 24/7.",
  },
  {
    question: "Công ty có nhận gửi hàng đi các nước châu Âu (EU) không?",
    answer:
      "Có, chúng tôi vận chuyển đến hơn 200 quốc gia, bao gồm toàn bộ khu vực EU như Đức, Pháp, Anh, Ý... với quy trình xử lý mã IOSS giúp thông quan nhanh chóng.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className=" container px-4 md:px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
          Câu hỏi thường gặp
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl overflow-hidden hover:border-brand-300 transition-colors"
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 bg-slate-50/50 hover:bg-slate-50 transition-colors text-left"
              >
                <span className="font-semibold text-slate-900 text-lg">
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <Minus className="w-5 h-5 text-brand-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-slate-600 border-t border-slate-100 leading-relaxed bg-white">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
