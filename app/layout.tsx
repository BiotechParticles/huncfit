import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HUNC FIT — Built at 50. Not for Everyone.",
  description: "Tobin Titus lost 155 lbs of fat and gained 20 lbs of muscle at age 50. Here's everything he used, and how you can do it too.",
  openGraph: {
    title: "HUNC FIT — Built at 50. Not for Everyone.",
    description: "Started at 49. Done by 50. 155 lbs of fat gone. 20 lbs of muscle gained. No surgery. No shortcuts. Just work — and the tools to keep doing it.",
    type: "website",
    url: "https://huncfit.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
