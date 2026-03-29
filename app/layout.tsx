import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://gs-marketing-jio6.vercel.app";

export const metadata: Metadata = {
  title: "GS Marketing",
  description: "GS Marketing builds elite door-to-door sales teams that dominate the fiber optic industry.",
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: "GS Marketing",
    description: "Elite fiber sales teams that outperform, outclose, and outdeliver.",
    url: BASE_URL,
    siteName: "GS Marketing",
    images: [
      {
        url: `/og?title=We+Don%27t+Just+Build+Teams.+We+Build+Dynasties.&sub=Elite+fiber+sales+teams+that+outperform%2C+outclose%2C+and+outdeliver.`,
        width: 1200,
        height: 630,
        alt: "GS Marketing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GS Marketing",
    description: "Elite fiber sales teams that outperform, outclose, and outdeliver.",
    images: [`/og?title=We+Don%27t+Just+Build+Teams.+We+Build+Dynasties.`],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="grain">
      <body>{children}</body>
    </html>
  );
}
