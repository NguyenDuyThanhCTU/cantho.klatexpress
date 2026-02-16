import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"], // Sử dụng font đã config
      },
      colors: {
        // Màu thương hiệu (Brand Colors)
        brand: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          500: "#0ea5e9", // Sky blue - tượng trưng cho đường hàng không
          600: "#0284c7",
          700: "#0369a1", // Main Primary
          900: "#0c4a6e", // Deep Navy
        },
        accent: {
          500: "#f97316", // Orange - Tốc độ, năng động
          600: "#ea580c",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-pattern": "url('/images/grid.svg')", // Chuẩn bị cho phần background hiện đại
        marquee: "marquee 25s linear infinite", // Tốc độ chạy 25s
      },
      animation: {
        "fade-in-up": "fadeInUp 0.5s ease-out",
        "spin-slow": "spin 3s linear infinite", // Cho các icon logistics (bánh răng, trái đất)
        "bounce-slow": "bounce-slow 3s infinite", // Mới thêm
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }, // Dịch chuyển 50% vì ta đã nhân đôi nội dung
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" }, // Nhún nhẹ 5px
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
