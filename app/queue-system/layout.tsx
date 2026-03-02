import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "نظام انتظار العملاء | Queue Management System Egypt",
    description:
        "أفضل نظام انتظار العملاء في مصر لتنظيم الطوابير داخل البنوك والمستشفيات والشركات باستخدام أحدث تقنيات Queue Management System.",
    robots: "index, follow",
    keywords: [
        "نظام انتظار العملاء",
        "Queue Management System Egypt",
        "نظام انتظار البنوك",
        "نظام انتظار المستشفيات",
        "نظام طوابير",
        "تنظيم الانتظار",
        "QSERVE",
    ],
    alternates: {
        canonical: "https://bdcegypt.com/queue-system",
    },
}

export default function QueueSystemLayout({ children }: { children: React.ReactNode }) {
    return children
}
