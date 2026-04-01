import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Kusham Lata | Full-Stack Developer & Software Engineer",
  description:
    "Portfolio of Kusham Lata, a full-stack developer building React, Next.js, Node.js, Laravel, and cloud-ready SaaS products."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] font-sans text-white antialiased">
        {children}
      </body>
    </html>
  );
}
