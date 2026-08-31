import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata = {
  title: "MUHAMMAD TALHA — AI Agent Developer & Computer Vision Researcher",
  description:
    "Portfolio of Muhammad Talha — AI Agent Developer & Computer Vision Researcher specializing in YOLO-based maritime ship detection, military IRSTD, and SWaP-constrained edge AI systems.",
  keywords: [
    "Muhammad Talha",
    "AI Agent Developer",
    "Computer Vision Researcher",
    "YOLO11",
    "IRSTD",
    "Maritime Surveillance",
    "NASTP",
    "Air University IAA",
    "Superior University",
  ],
  authors: [{ name: "Muhammad Talha", email: "su72-bscsm-f22-068@superior.edu.pk" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#06090e" />
      </head>
      <body>
        <CustomCursor />
        <div className="scanline-overlay" />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
