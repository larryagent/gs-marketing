import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GS Marketing — Elite Sales Teams",
  description: "GS Marketing builds elite door-to-door sales teams that dominate the fiber optic industry. We don't just sell. We dominate.",
  openGraph: {
    title: "GS Marketing — Elite Sales Teams",
    description: "Join the #1 fiber sales organization. Partner with us today.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="grain">
      <body>{children}</body>
    </html>
  );
}
