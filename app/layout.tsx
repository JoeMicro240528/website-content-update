import type React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Toaster } from "sonner"

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "B.D.C NET FLAVOURS | نظام انتظار العملاء كيوسيرف",
  description: "حلول تقنية متطورة لإدارة انتظار العملاء وأنظمة الخدمات الذاتية",
  robots: "index, follow",
  keywords: [
    "نظام انتظار العملاء",
    "اسعار نظام انتظار العملاء",
    "انظمة انتظار العملاء",
    "نظام انتظار العملاء في مصر",
    "تنظيم الدور",
    "إدارة الطوابير",
    "جهاز أرقام انتظار العملاء",
    "شاشة انتظار العملاء",
    "طابعة أرقام انتظار العملاء",
    "نظام استدعاء العملاء",
    "النداء الآلي",
    "Queue Management System",
    "Customer Queue System",
    "Queue System Egypt",
    "Q System",
    "QMS",
    "QSERVE",
    "كيوسيرف",
    "نظام كيو سيستم",
    "Nurse Call System",
    "استدعاء الممرضات"
  ],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" style={{ scrollBehavior: "smooth" }}>
      <body className={`${cairo.className} antialiased`}>
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  )
}
