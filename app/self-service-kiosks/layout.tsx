import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "أجهزة الخدمات الذاتية | Self Service Kiosks Egypt",
    description:
        "أفضل أجهزة الخدمات الذاتية في مصر شاشات تاتش تفاعلية للدفع الذاتي وطلب الطعام والخدمات البنكية والحكوية.",
    robots: "index, follow",
    keywords: [
        "أجهزة الخدمات الذاتية",
        "Self Service Kiosks Egypt",
        "شاشة تاتش",
        "شاشة لمسية تفاعلية",
        "جهاز دفع ذاتي",
        "جهاز طلب طعام",
        "QSERVE",
    ],
    alternates: {
        canonical: "https://bdcegypt.com/self-service-kiosks",
    },
}

export default function SelfServiceKiosksLayout({ children }: { children: React.ReactNode }) {
    return children
}
