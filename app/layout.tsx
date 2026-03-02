import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Toaster } from "sonner"

const cairo = localFont({
  src: "../public/fonts/cairo.ttf",
  variable: "--font-cairo",
  weight: "200 1000",
  display: "swap",
})



export const metadata: Metadata = {
  title: "نظام انتظار العملاء في مصر | Queue Management System Egypt | QSERVE",
  description: "نظام انتظار العملاء في مصر من QSERVE يوفر أحدث حلول Queue Management System لتنظيم الطوابير في البنوك والمستشفيات والشركات مع دعم فني كامل وتركيب احترافي.",
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
    icon: "/photo/qserve-queue-management-system-display.webp",
    apple: "/photo/qserve-queue-management-system-display.webp",
  },
  alternates: {
    canonical: "https://bdcegypt.com/",
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
