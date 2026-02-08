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
  title: "نظام انتظار العملاء QSERVE في مصر | اسعار Queuing System وشاشات الانتظار وأنظمة Nurse Call",
  description: "حلول تقنية متطورة لإدارة انتظار العملاء وأنظمة الخدمات الذاتية",
  robots: "index, follow",
  keywords: [
    "نظام انتظار العملاء",
    "انظمة انتظار العملاء",
    "اسعار نظام انتظار العملاء",
    "نظام انتظار العملاء في مصر",
    "Queue System",
    "queuing system egypt",
    "QSERVE",
    "تنظيم الدور",
    "عرض أرقام الانتظار",
    "طباعة أرقام انتظار",
    "مكونات نظام انتظار العملاء",
    "شرح نظام انتظار العملاء",
    "أنظمة استدعاء الممرضات",
    "نظام استدعاء الممرضات",
    "Nurse Call System",
    "أجهزة الخدمات الذاتية",
    "Self Service Kiosks",
    "جهاز كيوسك",
    "كيوسك",
    "شاشة تاتش",
    "شاشة لمسية تفاعلية",
    "شاشة تفاعلية",
    "نظام نداء",
    "جهاز للدفع الذاتي وطلب الطعام"
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
