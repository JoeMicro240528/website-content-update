import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "نظام استدعاء الممرضات | Nurse Call System Egypt",
    description:
        "نظام استدعاء الممرضات للمستشفيات في مصر يوفر سرعة استجابة عالية وتحسين مستوى الرعاية الصحية باستخدام أحدث تقنيات Nurse Call System.",
    robots: "index, follow",
    keywords: [
        "نظام استدعاء الممرضات",
        "Nurse Call System Egypt",
        "نظام نداء الممرضات",
        "نظام استدعاء المستشفيات",
        "Nurse Call System",
        "نظام رعاية المرضى",
        "QSERVE",
    ],
    alternates: {
        canonical: "https://bdcegypt.com/nurse-call-system",
    },
}

export default function NurseCallLayout({ children }: { children: React.ReactNode }) {
    return children
}
