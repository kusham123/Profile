import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Kusham Lata | Full-Stack Developer & Software Engineer",
  description:
    "Portfolio of Kusham Lata, a full-stack developer building React, Next.js, Node.js, Laravel, and cloud-ready SaaS products."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var key='portfolio-theme';var stored=localStorage.getItem(key);var system=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';document.documentElement.dataset.theme=stored||system;}catch(e){document.documentElement.dataset.theme='dark';}})();`
          }}
        />
      </head>
      <body className="bg-[#0a0a0a] font-sans text-white antialiased">
        {children}
      </body>
    </html>
  );
}
