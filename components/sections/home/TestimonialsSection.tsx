"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Chị Lan Anh",
    role: "Khách hàng tại Cần Thơ",
    content:
      "Lần đầu gửi khô cá lóc đi Mỹ cho con gái, sợ bị hải quan giữ lại mà An Tâm Express lo thủ tục FDA trọn gói. 4 ngày là con mình nhận được rồi. Rất uy tín!",
    rating: 5,
  },
  {
    name: "Anh Minh Tuấn",
    role: "Chủ shop Online tại Vĩnh Long",
    content:
      "Giá cước tốt hơn nhiều so với ra bưu điện. Nhân viên đến tận nhà đóng gói thùng xốp rất kỹ, hàng mỹ phẩm đi Úc không bị bể vỡ gì cả.",
    rating: 5,
  },
  {
    name: "Cô Ba Trà Vinh",
    role: "Khách hàng thân thiết",
    content:
      "Gửi thuốc tây với yến sào đi Canada khó lắm mà bên này làm được. Tư vấn nhiệt tình, tracking theo dõi dễ hiểu. Sẽ ủng hộ dài dài.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="mx-auto container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Khách hàng nói gì về{" "}
            <span className="text-brand-600">An Tâm Express?</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Sự hài lòng của quý khách là động lực để chúng tôi không ngừng nâng
            cao chất lượng dịch vụ mỗi ngày.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative hover:shadow-lg transition-shadow"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-100" />

              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-slate-700 mb-6 italic leading-relaxed">
                &#x22;{review.content}&#x22;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {review.name}
                  </h4>
                  <p className="text-xs text-slate-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
