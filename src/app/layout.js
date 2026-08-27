import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata = {
  title: "MUHAMMAD TALHA — AI Research & ML Engineer",
  description:
    "Cinematic 3D Defense-Tech Portfolio of Muhammad Talha — AI Research & ML Engineer specializing in military IRSTD, WaveYOLO, maritime surveillance, and autonomous multi-agent systems.",
  keywords: [
    "Muhammad Talha",
    "AI Research Engineer",
    "ML Engineer",
    "YOLO11",
    "IRSTD",
    "WaveYOLO",
    "Maritime Surveillance",
    "NASTP",
    "Air University IAA",
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
        <div className="scanline-overlay" />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
