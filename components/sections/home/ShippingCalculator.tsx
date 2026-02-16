"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator,
  ArrowRight,
  AlertCircle,
  Scale,
  Globe,
  CheckCircle2,
  Plane,
  PackageCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- LOẠI DỮ LIỆU ---

type PricingType =
  | "flat_table"
  | "per_kg_tier"
  | "hybrid_flat_then_kg"
  | "additive";

interface CountryConfig {
  id: string;
  name: string;
  flag: string;
  currency: string;
  divisor: number; // 5000 or 6000
  type: PricingType;
  flatRates?: Record<number, number>;
  bulkTiers?: { min: number; max: number; rate: number }[];
  additiveConfig?: { baseWeight: number; basePrice: number; stepPrice: number };
  note?: string;
  features?: string[]; // Ví dụ: "Bao thuế", "Giao tận nhà"
}

// --- CƠ SỞ DỮ LIỆU GIÁ (FULL) ---

const PRICING_DATA: Record<string, CountryConfig> = {
  USA: {
    id: "USA",
    name: "Mỹ (USA) & Canada",
    flag: "🇺🇸",
    currency: "VND",
    divisor: 5000,
    type: "flat_table",
    flatRates: {
      1: 1600000,
      2: 1900000,
      3: 2300000,
      4: 2700000,
      5: 3100000,
      6: 3500000,
      7: 3900000,
      8: 4200000,
      9: 4500000,
      10: 4800000,
      11: 5200000,
      12: 5500000,
      13: 5800000,
      14: 6100000,
      15: 6400000,
      16: 6600000,
      17: 6800000,
      18: 7000000,
      19: 7200000,
      20: 7400000,
    },
    bulkTiers: [
      { min: 22, max: 44, rate: 300000 },
      { min: 45, max: 99, rate: 280000 },
      { min: 100, max: 9999, rate: 240000 },
    ],
    note: "Giá chưa bao gồm thuế nhập khẩu. Vùng sâu vùng xa có thể có phụ phí.",
    features: ["Bay nhanh 5-8 ngày", "Tracking Online"],
  },
  EUR: {
    id: "EUR",
    name: "Châu Âu (Europe)",
    flag: "🇪🇺",
    currency: "VND",
    divisor: 5000,
    type: "flat_table", //
    flatRates: {
      1: 1200000,
      2: 1500000,
      3: 1800000,
      4: 2100000,
      5: 2400000,
      6: 2700000,
      7: 3000000,
      8: 3300000,
      9: 3600000,
      10: 3900000,
      11: 4100000,
      12: 4300000,
      13: 4500000,
      14: 4700000,
      15: 5000000,
      16: 5200000,
      17: 5400000,
      18: 5600000,
      19: 5800000,
      20: 6000000,
    },
    bulkTiers: [
      { min: 21, max: 44, rate: 290000 },
      { min: 45, max: 70, rate: 280000 },
      { min: 71, max: 9999, rate: 260000 },
    ],
    note: "Đã bao gồm thuế nhập khẩu (DDP). Giao tận nhà.",
    features: ["✅ BAO THUẾ", "Giao tận nhà", "10-14 ngày"],
  },
  AUS: {
    id: "AUS",
    name: "Úc (Australia)",
    flag: "🇦🇺",
    currency: "VND",
    divisor: 6000, //
    type: "flat_table",
    flatRates: {
      1: 600000,
      2: 800000,
      3: 1000000,
      4: 1300000,
      5: 1500000,
      6: 1700000,
      7: 1900000,
      8: 2100000,
      9: 2300000,
      10: 2500000,
      11: 2600000,
      12: 2700000,
      13: 2900000,
      14: 3100000,
      15: 3300000,
      16: 3400000,
      17: 3600000,
      18: 3700000,
      19: 3900000,
      20: 4000000,
    },
    bulkTiers: [
      { min: 21, max: 99, rate: 150000 },
      { min: 100, max: 9999, rate: 130000 },
    ],
    note: "Đã bao thuế. Chia thể tích /6000.",
    features: ["✅ BAO THUẾ", "Chia thể tích /6000"],
  },
  NZL: {
    id: "NZL",
    name: "New Zealand",
    flag: "🇳🇿",
    currency: "VND",
    divisor: 6000, //
    type: "flat_table",
    flatRates: {
      1: 900000,
      2: 1200000,
      3: 1500000,
      4: 1800000,
      5: 2000000,
      6: 2200000,
      7: 2400000,
      8: 2600000,
      9: 2800000,
      10: 3100000,
      11: 3400000,
      12: 3600000,
      13: 3800000,
      14: 4000000,
      15: 4300000,
      16: 4500000,
      17: 4700000,
      18: 4900000,
      19: 5100000,
      20: 5300000,
    },
    bulkTiers: [
      { min: 21, max: 44, rate: 250000 },
      { min: 45, max: 99, rate: 230000 },
      { min: 100, max: 9999, rate: 210000 },
    ],
    note: "Đã bao thuế. Vùng ngoài Auckland phụ thu 30k/kg.",
    features: ["✅ BAO THUẾ"],
  },
  JPN: {
    id: "JPN",
    name: "Nhật Bản",
    flag: "🇯🇵",
    currency: "VND",
    divisor: 5000,
    type: "hybrid_flat_then_kg", //
    flatRates: { 1: 1300000, 2: 1300000, 3: 1300000, 4: 1300000 },
    bulkTiers: [
      { min: 5, max: 10, rate: 190000 },
      { min: 11, max: 20, rate: 180000 },
      { min: 21, max: 99, rate: 170000 },
      { min: 100, max: 9999, rate: 160000 },
    ],
    note: "1-4kg đồng giá 1.300.000đ.",
  },
  KOR: {
    id: "KOR",
    name: "Hàn Quốc & Đài Loan",
    flag: "🇰🇷",
    currency: "VND",
    divisor: 5000,
    type: "hybrid_flat_then_kg", //
    flatRates: { 1: 500000, 2: 500000, 3: 500000 },
    bulkTiers: [
      { min: 4, max: 10, rate: 145000 },
      { min: 11, max: 20, rate: 135000 },
      { min: 21, max: 99, rate: 125000 },
      { min: 100, max: 9999, rate: 105000 },
    ],
    note: "1-3kg đồng giá 500.000đ.",
  },
  UAE: {
    id: "UAE",
    name: "Dubai (UAE)",
    flag: "🇦🇪",
    currency: "VND",
    divisor: 5000,
    type: "flat_table", //
    flatRates: {
      1: 700000,
      2: 1000000,
      3: 1400000,
      4: 1700000,
      5: 2000000,
      6: 2300000,
      7: 2600000,
      8: 2900000,
      9: 3200000,
      10: 3500000,
      11: 3700000,
      12: 4000000,
      13: 4200000,
      14: 4500000,
      15: 4700000,
      16: 5000000,
      17: 5200000,
      18: 5500000,
      19: 5700000,
      20: 6000000,
    },
    bulkTiers: [
      { min: 21, max: 45, rate: 270000 },
      { min: 46, max: 9999, rate: 240000 },
    ],
    features: ["Bay thẳng 4-6 ngày"],
  },
  IND: {
    id: "IND",
    name: "Ấn Độ (India)",
    flag: "🇮🇳",
    currency: "VND",
    divisor: 5000,
    type: "flat_table", //
    flatRates: {
      1: 1100000,
      2: 1400000,
      3: 1800000,
      4: 2200000,
      5: 2600000,
      6: 3000000,
      7: 3300000,
      8: 3600000,
      9: 3900000,
      10: 4200000,
      11: 4600000,
      12: 4900000,
      13: 5200000,
      14: 5500000,
      15: 5900000,
      16: 6200000,
      17: 6500000,
      18: 6800000,
      19: 7100000,
      20: 7500000,
    },
    bulkTiers: [{ min: 21, max: 9999, rate: 370000 }],
    features: ["5-7 ngày làm việc"],
  },
  PHL: {
    id: "PHL",
    name: "Philippines (Manila)",
    flag: "🇵🇭",
    currency: "VND",
    divisor: 5000,
    type: "flat_table", //
    flatRates: {
      1: 700000,
      2: 1000000,
      3: 1200000,
      4: 1500000,
      5: 1700000,
      6: 2000000,
      7: 2200000,
      8: 2400000,
      9: 2600000,
      10: 2900000,
      11: 3100000,
      12: 3400000,
      13: 3600000,
      14: 3900000,
      15: 4100000,
      16: 4400000,
      17: 4600000,
      18: 4900000,
      19: 5100000,
      20: 5400000,
    },
    bulkTiers: [{ min: 21, max: 9999, rate: 230000 }],
    note: "Giá áp dụng khu vực Manila. Vùng khác vui lòng check trước.",
  },
  MYS: {
    id: "MYS",
    name: "Malaysia",
    flag: "🇲🇾",
    currency: "VND",
    divisor: 5000,
    type: "per_kg_tier", //
    bulkTiers: [
      { min: 2, max: 5, rate: 180000 },
      { min: 6, max: 10, rate: 150000 },
      { min: 11, max: 20, rate: 140000 },
      { min: 21, max: 99, rate: 130000 },
      { min: 100, max: 9999, rate: 100000 },
    ],
    note: "Đảo bờ Đông phụ thu 60.000đ/kg. Min 2kg.",
  },
  SEA_MIX: {
    id: "SEA_MIX",
    name: "Lào, Campuchia, Thái Lan",
    flag: "🌏",
    currency: "VND",
    divisor: 5000,
    type: "per_kg_tier", //
    bulkTiers: [
      { min: 2, max: 5, rate: 250000 },
      { min: 6, max: 10, rate: 180000 },
      { min: 11, max: 20, rate: 160000 },
      { min: 21, max: 9999, rate: 120000 },
    ],
    note: "Min 2kg. Phụ thu hàng yến, rượu...",
  },
  CHN: {
    id: "CHN",
    name: "Trung Quốc",
    flag: "🇨🇳",
    currency: "VND",
    divisor: 5000,
    type: "additive", //
    flatRates: {
      1: 700000,
      2: 900000,
      3: 1100000,
      4: 1300000,
      5: 1500000,
      6: 1700000,
      7: 1900000,
      8: 2100000,
      9: 2300000,
      10: 2500000,
    },
    additiveConfig: {
      baseWeight: 10,
      basePrice: 2500000,
      stepPrice: 220000,
    },
    note: "Trên 10kg: Mỗi kg tiếp theo +220k.",
  },
  SGP: {
    id: "SGP",
    name: "Singapore",
    flag: "🇸🇬",
    currency: "VND",
    divisor: 5000,
    type: "flat_table", //
    flatRates: {
      1: 600000,
      2: 800000,
      3: 1000000,
      4: 1200000,
      5: 1400000,
      6: 1600000,
      7: 1800000,
      8: 2000000,
      9: 2200000,
      10: 2300000,
      11: 2400000,
      12: 2500000,
      13: 2600000,
      14: 2700000,
      15: 2800000,
      16: 2900000,
      17: 3000000,
      18: 3100000,
      19: 3200000,
      20: 3300000,
    },
    bulkTiers: [{ min: 21, max: 9999, rate: 150000 }],
    note: "Đông lạnh phụ thu 60.000đ/kg.",
  },
};

// --- COMPONENT CHÍNH ---

export default function ShippingCalculator() {
  const [selectedCountry, setSelectedCountry] = useState("USA");
  const [weight, setWeight] = useState<number | "">("");
  const [length, setLength] = useState<number | "">("");
  const [width, setWidth] = useState<number | "">("");
  const [height, setHeight] = useState<number | "">("");
  const [result, setResult] = useState<{
    weight: number;
    price: number;
    note: string;
    features?: string[];
  } | null>(null);

  // Reset kết quả khi đổi nước
  useEffect(() => {
    setResult(null);
  }, [selectedCountry]);

  const calculate = () => {
    if (!weight) return;

    const config = PRICING_DATA[selectedCountry];
    if (!config) return;

    // 1. Tính trọng lượng thể tích & Làm tròn
    let volWeight = 0;
    if (length && width && height) {
      volWeight =
        (Number(length) * Number(width) * Number(height)) / config.divisor;
    }

    // So sánh trọng lượng thực và thể tích
    let finalWeight = Math.max(Number(weight), volWeight);

    // Quy tắc làm tròn: Luôn làm tròn lên (Ceil)
    finalWeight = Math.ceil(finalWeight);

    let finalPrice = 0;
    let note = config.note || "";

    // 2. Xử lý Logic Giá
    if (config.type === "flat_table") {
      if (config.flatRates && config.flatRates[finalWeight]) {
        finalPrice = config.flatRates[finalWeight];
      } else if (config.bulkTiers) {
        const tier = config.bulkTiers.find(
          (t) => finalWeight >= t.min && finalWeight <= t.max,
        );
        if (tier) {
          finalPrice = finalWeight * tier.rate;
        } else {
          // Fallback nếu vượt bảng (lấy mốc cuối)
          const lastTier = config.bulkTiers[config.bulkTiers.length - 1];
          finalPrice = finalWeight * lastTier.rate;
        }
      }
    } else if (config.type === "hybrid_flat_then_kg") {
      let isFlat = false;
      if (config.flatRates) {
        // Kiểm tra xem có trong range đồng giá không (ví dụ 1-4kg)
        const maxFlatWeight = Math.max(
          ...Object.keys(config.flatRates).map(Number),
        );
        if (finalWeight <= maxFlatWeight) {
          // Lấy giá của mốc 1kg hoặc giá chung (Vì config đồng giá là value giống nhau)
          finalPrice = Object.values(config.flatRates)[0];
          isFlat = true;
        }
      }

      if (!isFlat && config.bulkTiers) {
        const tier = config.bulkTiers.find(
          (t) => finalWeight >= t.min && finalWeight <= t.max,
        );
        if (tier) finalPrice = finalWeight * tier.rate;
        else {
          // Fallback
          const lastTier = config.bulkTiers[config.bulkTiers.length - 1];
          finalPrice = finalWeight * lastTier.rate;
        }
      }
    } else if (config.type === "per_kg_tier") {
      if (config.bulkTiers) {
        // Xử lý Min weight (VD: Malay min 2kg)
        const minWeight = config.bulkTiers[0].min;
        if (finalWeight < minWeight) {
          finalWeight = minWeight;
          note = `Đã áp dụng trọng lượng tối thiểu ${minWeight}kg. ` + note;
        }

        const tier = config.bulkTiers.find(
          (t) => finalWeight >= t.min && finalWeight <= t.max,
        );
        if (tier) {
          finalPrice = finalWeight * tier.rate;
        } else {
          // Nếu lớn hơn max tier, lấy tier cuối
          const lastTier = config.bulkTiers[config.bulkTiers.length - 1];
          finalPrice = finalWeight * lastTier.rate;
        }
      }
    } else if (config.type === "additive") {
      // Trung Quốc
      if (config.flatRates && config.flatRates[finalWeight]) {
        finalPrice = config.flatRates[finalWeight];
      } else if (config.additiveConfig) {
        const { baseWeight, basePrice, stepPrice } = config.additiveConfig;
        if (finalWeight > baseWeight) {
          const extraKg = finalWeight - baseWeight;
          finalPrice = basePrice + extraKg * stepPrice;
        }
      }
    }

    setResult({
      weight: finalWeight,
      price: finalPrice,
      note,
      features: config.features,
    });
  };

  const currentConfig = PRICING_DATA[selectedCountry];

  return (
    <section
      id="calculator"
      className="py-20 bg-brand-900 text-white relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10 bg-repeat"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-accent-600/20 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10 mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left: Intro & Context */}
          <div className="lg:w-1/3 space-y-6 pt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/20 text-accent-400 text-xs font-bold uppercase tracking-wider border border-accent-500/20">
              <Calculator className="w-4 h-4" /> Công cụ ước tính 2024
            </div>

            <h2 className="text-3xl md:text-5xl font-black leading-tight">
              Tra Cứu <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-yellow-400">
                Giá Cước Online
              </span>
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed">
              Hệ thống tự động cập nhật bảng giá mới nhất cho hơn 20 quốc gia.
              Nhập trọng lượng và kích thước để nhận báo giá ngay lập tức.
            </p>

            <div className="grid gap-3 pt-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="p-2 rounded-full bg-brand-600/30">
                  <Scale className="w-5 h-5 text-brand-400" />
                </div>
                <div className="text-sm">
                  <p className="font-bold text-white">Trọng lượng thể tích</p>
                  <p className="text-slate-400">
                    (Dài x Rộng x Cao) / {currentConfig.divisor}
                  </p>
                </div>
              </div>

              {currentConfig.features &&
                currentConfig.features.includes("✅ BAO THUẾ") && (
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-green-900/30 border border-green-500/30">
                    <div className="p-2 rounded-full bg-green-600/30">
                      <PackageCheck className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="text-sm">
                      <p className="font-bold text-green-400">
                        Dịch vụ Bao Thuế (DDP)
                      </p>
                      <p className="text-slate-400">
                        Không phát sinh phí nhập khẩu
                      </p>
                    </div>
                  </div>
                )}
            </div>
          </div>

          {/* Right: Interactive Form */}
          <div className="lg:w-2/3 w-full">
            <div className="bg-white rounded-3xl p-6 md:p-8 text-slate-900 shadow-2xl relative overflow-hidden">
              {/* Form Header */}
              <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center text-3xl shadow-inner">
                    {currentConfig.flag}
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Quốc gia đến
                    </label>
                    <select
                      value={selectedCountry}
                      onChange={(e) => setSelectedCountry(e.target.value)}
                      className="bg-transparent font-black text-xl md:text-2xl text-slate-900 outline-none cursor-pointer hover:text-brand-600 transition-colors pr-8 appearance-none"
                      style={{ backgroundImage: "none" }}
                    >
                      {Object.values(PRICING_DATA).map((cfg) => (
                        <option key={cfg.id} value={cfg.id}>
                          {cfg.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Currency Badge */}
                <div className="px-4 py-2 rounded-lg bg-slate-50 font-bold text-slate-500 text-sm">
                  Đơn vị: VNĐ
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Input Column */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Trọng lượng (kg)
                    </label>
                    <div className="relative group">
                      <input
                        type="number"
                        value={weight}
                        onChange={(e) =>
                          setWeight(
                            e.target.value === "" ? "" : Number(e.target.value),
                          )
                        }
                        placeholder="Nhập số kg..."
                        className="w-full h-14 pl-4 pr-12 rounded-xl border-2 border-slate-200 focus:border-brand-500 outline-none text-xl font-bold transition-all group-hover:border-slate-300"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">
                        KG
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Kích thước đóng gói (cm){" "}
                      <span className="font-normal text-slate-400 text-xs ml-1">
                        (Không bắt buộc)
                      </span>
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {["Dài", "Rộng", "Cao"].map((label, idx) => (
                        <div key={label} className="relative">
                          <input
                            type="number"
                            placeholder={label}
                            onChange={(e) => {
                              const val = Number(e.target.value);
                              if (idx === 0) setLength(val);
                              if (idx === 1) setWidth(val);
                              if (idx === 2) setHeight(val);
                            }}
                            className="w-full h-12 px-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand-500 focus:bg-white outline-none text-center font-semibold text-slate-700 transition-all"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={calculate}
                    className="w-full h-14 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl shadow-lg shadow-brand-500/30 transition-all flex items-center justify-center gap-2 text-lg active:scale-95"
                  >
                    Tra cứu ngay <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Result Column */}
                <div className="relative">
                  <AnimatePresence mode="wait">
                    {!result ? (
                      <motion.div
                        key="empty"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="h-full flex flex-col items-center justify-center text-center p-6 bg-slate-50 rounded-2xl border border-dashed border-slate-300"
                      >
                        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                          <Calculator className="w-8 h-8 text-slate-300" />
                        </div>
                        <p className="text-slate-500 font-medium">
                          Nhập thông tin bên trái để xem kết quả
                        </p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="result"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="h-full bg-brand-50 rounded-2xl border border-brand-100 p-6 flex flex-col"
                      >
                        <div className="flex justify-between items-start mb-6">
                          <div>
                            <p className="text-sm text-brand-600 font-bold uppercase tracking-wider mb-1">
                              Tổng cước phí
                            </p>
                            <p className="text-4xl font-black text-slate-900">
                              {new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              }).format(result.price)}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-slate-500 font-bold uppercase">
                              Trọng lượng tính cước
                            </p>
                            <p className="text-2xl font-bold text-brand-700">
                              {result.weight} KG
                            </p>
                          </div>
                        </div>

                        {/* Features List */}
                        {result.features && (
                          <div className="space-y-2 mb-6">
                            {result.features.map((feat, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-2 text-sm text-slate-700 font-medium"
                              >
                                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                                {feat}
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Notes */}
                        <div className="mt-auto pt-4 border-t border-brand-200">
                          {result.note && (
                            <div className="flex gap-2 text-xs text-brand-800 bg-brand-100/50 p-3 rounded-lg mb-3">
                              <AlertCircle className="w-4 h-4 flex-shrink-0" />
                              <p>{result.note}</p>
                            </div>
                          )}
                          <p className="text-[10px] text-slate-400 text-center">
                            * Giá trên là ước tính. Chưa bao gồm phụ phí vùng
                            sâu vùng xa (nếu có).
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
