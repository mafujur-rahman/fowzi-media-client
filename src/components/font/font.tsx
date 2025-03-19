// components/Font.tsx
import localFont from "next/font/local";

// Load your custom font
const gellery = localFont({
  src: [
    {
      path: "../../../public/GlacialIndifference-Regular.woff2",  // Correct path
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/GlacialIndifference-Regular.woff2",  // Correct path
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--tp-ff-gallery",
  display: "swap",  // Optional: Ensures the font is displayed during loading
});

// Export the font class to be used in the layout
export default gellery;
