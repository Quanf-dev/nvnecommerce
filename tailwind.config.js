import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Roboto", "sans-serif"] },
      colors: {
        primary: {
          light: "#d7ccc8", // Màu vàng nhạt
          DEFAULT: "#ce8c24", // Màu vàng chính
          dark: "#4e342e", // Màu vàng đậm
        },
        textBackground: {
          light: "#eeeeee",
          DEFAULT: "#555", // Màu nâu chính
          dark: "#333", // Màu nâu đậm
        },
        textDesc: {
          light: "#333",
          DEFAULT: "#777",
        },
      },
      flexGrow: {
        2: "2",
        3: "3",
      },
      flexShrink: {
        2: "2",
        3: "3",
      },
    },
  },
  plugins: [],
});
