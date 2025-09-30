import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stride - Next-Gen Animated Video Services",
  description:
    "Stride delivers world-class animated videos and social media reels with seamless production, fast delivery, and premium quality tailored to your brand.",
  icons: {
    icon: "/icons/favicon-dark.svg", // <- add your favicon here
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geistSans.className}>
      <body className="relative">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed inset-0 w-full h-full object-cover z-0"
        >
          <source src="/video/lavaAnimation.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional gradient overlay */}
        <div className="fixed inset-0 z-10 bg-gradient-to-br from-purple-900/40 via-black/50 to-blue-900/40" />

        {/* Main content */}
        <div className="relative z-20">{children}</div>
      </body>
    </html>
  );
}
