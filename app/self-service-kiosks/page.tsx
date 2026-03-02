"use client"

import { useState } from "react"
import { Menu, X, Phone, Mail, MapPin, Facebook, Youtube, PhoneCall } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"

function WhatsApp({ size = 24, className }: { size?: number | string; className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
        >
            <path d="M17.472 14.382c-.297-.149-1.758-0.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
    )
}

export default function SelfServiceKiosksPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="min-h-screen bg-white" dir="rtl">
            {/* SEO Hidden Keywords */}
            <div className="sr-only" aria-hidden="true">
                أجهزة الخدمات الذاتية, Self Service Kiosks Egypt, جهاز كيوسك, شاشة تاتش, شاشة لمسية تفاعلية, QSERVE
            </div>

            <header className="bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex items-center justify-between">

                        {/* Desktop Menu — pill container */}
                        <nav className="hidden md:flex items-center bg-gray-100 rounded-full px-2 py-1.5 gap-1">
                            <Link href="/" className="text-xs font-medium px-4 py-2 rounded-full text-gray-600 hover:bg-white hover:text-red-600 hover:shadow-sm transition-all">
                                الرئيسية
                            </Link>
                            <Link href="/queue-system" className="text-xs font-medium px-4 py-2 rounded-full text-gray-600 hover:bg-white hover:text-red-600 hover:shadow-sm transition-all">
                                نظام الانتظار
                            </Link>
                            <Link href="/nurse-call-system" className="text-xs font-medium px-4 py-2 rounded-full text-gray-600 hover:bg-white hover:text-red-600 hover:shadow-sm transition-all">
                                استدعاء الممرضات
                            </Link>
                            <Link href="/self-service-kiosks" className="text-xs font-semibold px-4 py-2 rounded-full bg-red-600 text-white shadow-sm transition-all">
                                الخدمات الذاتية
                            </Link>
                            <Link href="/#contact" className="text-xs font-medium px-4 py-2 rounded-full text-gray-600 hover:bg-white hover:text-red-600 hover:shadow-sm transition-all">
                                تواصل معنا
                            </Link>
                        </nav>

                        {/* WhatsApp CTA */}
                        <a
                            href="https://api.whatsapp.com/send?phone=201227993999"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-all shadow-md text-xs font-bold"
                        >
                            <WhatsApp size={18} className="text-green-300" />
                            تواصل معنا للحصول على عرض سعر
                        </a>

                        {/* Mobile Menu Button */}
                        <button className="md:hidden text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <nav className="md:hidden mt-3 flex flex-col gap-1 pb-3 border-t border-gray-100 pt-3">
                            <Link href="/" className="text-sm font-medium px-4 py-2.5 rounded-xl text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors">
                                الرئيسية
                            </Link>
                            <Link href="/queue-system" className="text-sm font-medium px-4 py-2.5 rounded-xl text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors">
                                نظام الانتظار
                            </Link>
                            <Link href="/nurse-call-system" className="text-sm font-medium px-4 py-2.5 rounded-xl text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors">
                                استدعاء الممرضات
                            </Link>
                            <Link href="/self-service-kiosks" className="text-sm font-semibold px-4 py-2.5 rounded-xl bg-red-600 text-white">
                                الخدمات الذاتية
                            </Link>
                            <Link href="/#contact" className="text-sm font-medium px-4 py-2.5 rounded-xl text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors">
                                تواصل معنا
                            </Link>
                        </nav>
                    )}
                </div>
            </header>

            <main id="main-content">

                {/* Hero Section */}
                <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/photo/modern-self-service-kiosk-touchscreen-in-public-sp.jpg"
                            alt="أجهزة الخدمات الذاتية في مصر"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="absolute inset-0 bg-black/75 z-0"></div>
                    <div className="relative z-10 container mx-auto px-4 text-center text-white">
                        <h1 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-xl tracking-tight leading-relaxed">
                            أجهزة الخدمات الذاتية –{" "}
                            <span className="text-red-500">Self Service Kiosks</span> في مصر
                        </h1>
                        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-medium text-gray-200 drop-shadow-lg">
                            حلول شاشات تاتش تفاعلية للدفع الذاتي وطلب الطعام والخدمات البنكية والحكومية
                        </p>
                        <a
                            href="https://api.whatsapp.com/send?phone=201227993999"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-red-600 text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-red-700 transition-all shadow-lg hover:shadow-red-900/50"
                        >
                            احصل على عرض سعر <WhatsApp size={24} className="text-green-300" />
                        </a>
                    </div>
                </section>

                {/* Intro Content */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-right" dir="rtl">
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                تُعدّ <strong>أجهزة الخدمات الذاتية (Self Service Kiosks)</strong> من أبرز الحلول التقنية الحديثة التي
                                تعتمد عليها الشركات والمؤسسات في مصر لتحسين تجربة العملاء وخفض تكاليف التشغيل
                            </p>
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                تعمل هذه الأجهزة على تمكين العملاء من إتمام معاملاتهم وطلب خدماتهم بشكل مستقل دون الحاجة إلى
                                موظف، مما يُقلل وقت الانتظار ويرفع كفاءة الخدمة.
                            </p>
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                توفر  حلولاً مرنة وقابلة للتخصيص بحسب احتياجات كل عميل
                            </p>
                        </div>
                    </div>
                </section>

                {/* Product Types Section */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <h2 className="text-4xl font-black text-center mb-4 text-gray-900">أنواع أجهزة الخدمات الذاتية</h2>
                        <p className="text-center text-gray-600 mb-16 text-xl">تشكيلة متكاملة تناسب جميع القطاعات</p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: " أجهزة الدفع الذاتي كيوسك  ",
                                    desc: "أجهزة كيوسك متطورة لإتمام المدفوعات النقدية والإلكترونية بكل يسر وسهولة. تدعم البطاقات البنكية ومحافظ الهاتف المحمول.",
                                    img: "/photo/self-service-kiosks-egypt-bank-branch.webp",
                                    alt: "أجهزة الدفع الذاتي في البنوك مصر",
                                },
                                {
                                    title: " كيوسك أجهزة طلب الطعام",
                                    desc: "شاشات لمسية تفاعلية للمطاعم تتيح للعملاء تصفح القائمة وتخصيص طلباتهم وإتمام الدفع دون انتظار.",
                                    img: "/photo/Self-service checkout and food ordering machines.jpeg",
                                    alt: "أجهزة طلب الطعام الذاتي في المطاعم",
                                },
                                {
                                    title: "كيوسك الخدمات الحكومية",
                                    desc: "أجهزة متعددة الأغراض تتيح للمواطنين إتمام المعاملات الحكومية وطباعة المستندات وسداد الرسوم.",
                                    img: "/photo/customer-feedback-terminal-egypt-government.webp",
                                    alt: "كيوسك الخدمات الحكومية في مصر",
                                },
                                {
                                    title: "كيوسك الفنادق والضيافة",
                                    desc: "حلول تسجيل الوصول والمغادرة الذاتية للفنادق، تُتيح للنزلاء تحديد غرفهم واستلام مفاتيحهم باستقلالية.",
                                    img: "/photo/kiosk-egypt-mall-customers-using.webp",
                                    alt: "كيوسك الفنادق والضيافة",
                                },
                                {
                                    title: "كيوسك المعلومات والخرائط",
                                    desc: "شاشات توجيه ومعلومات تفاعلية في المجمعات التجارية والمستشفيات والمطارات لمساعدة الزوار على التنقل.",
                                    img: "/photo/interactive-wayfinding-map-touchscreen-display.webp",
                                    alt: "كيوسك المعلومات والخرائط التفاعلية",
                                },
                                {
                                    title: "انتظار التذاكر والحجوزات",
                                    desc: "أجهزة متخصصة لإصدار التذاكر وإتمام الحجوزات في المترو، المطارات، الملاعب، والمراكز الترفيهية.",
                                    img: "/photo/modern-self-service-kiosk-touchscreen-in-public-sp.jpg",
                                    alt: "انتظار التذاكر والحجوزات",
                                },
                            ].map((item, i) => (
                                <div key={i} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group">
                                    <div className="relative h-52 overflow-hidden">
                                        <Image
                                            loading="lazy"
                                            src={item.img}
                                            alt={item.alt}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl font-black mb-8 text-gray-900">
                                    مميزات أجهزة <span className="text-red-600">الخدمات الذاتية</span>
                                </h2>
                                <ul className="space-y-5">
                                    {[
                                        "شاشات تاتش عالية الدقة تعمل باللمس متعدد النقاط",
                                        "دعم كامل للغتين العربية والإنجليزية",
                                        "تصميم متين مناسب للاستخدام المكثف طوال اليوم",
                                        "دعم وسائل الدفع المختلفة (كاش، بطاقات، محافظ إلكترونية)",
                                        "واجهة مستخدم سهلة وبسيطة تناسب جميع الفئات",
                                        "إمكانية التكامل مع أنظمة الشركة الحالية",
                                        "لوحة تحكم مركزية لإدارة جميع الأجهزة عن بُعد",
                                        "تقارير تفصيلية عن معدلات الاستخدام والمعاملات",
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-center gap-4">
                                            <span className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold shrink-0">
                                                ✓
                                            </span>
                                            <span className="text-gray-700 text-lg">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    loading="lazy"
                                    src="/photo/self service.jpeg"
                                    alt="جهاز خدمة ذاتية تفاعلي"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Use Cases */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <h2 className="text-4xl font-black text-center mb-4 text-gray-900">
                            قطاعات استخدام أجهزة الانتظار في مصر
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                {
                                    icon: "🏦",
                                    title: "البنوك والخدمات المالية",
                                    desc: "تقليل الضغط على موظفي الخدمة بتمكين العملاء من سداد الفواتير، استفسارات الحساب، وطلب الخدمات المصرفية ذاتياً.",
                                    img: "/photo/self-service-kiosks-egypt-bank-branch.webp",
                                    alt: "كيوسك البنوك في مصر",
                                },
                                {
                                    icon: "🍔",
                                    title: "المطاعم وسلاسل الوجبات السريعة",
                                    desc: "رفع متوسط قيمة الطلب وتسريع الخدمة عبر شاشات طلب ذاتية تعرض القائمة بالصور مع خيارات التخصيص.",
                                    img: "/photo/orderfood.jpeg",
                                    alt: "كيوسك طلب الطعام في المطاعم",
                                },
                                {
                                    icon: "🏥",
                                    title: "المستشفيات والعيادات",
                                    desc: "تسجيل المرضى وتحديد المواعيد وسداد التكاليف بشكل ذاتي، مما يُخفف العبء عن موظفي الاستقبال.",
                                    img: "/photo/interactive-map-egypt-hospital-real.webp",
                                    alt: "كيوسك المستشفيات في مصر",
                                },
                                {
                                    icon: "🏛️",
                                    title: "الجهات الحكومية",
                                    desc: "تقديم الخدمات الحكومية إلكترونياً بسهولة مع طباعة المستندات وسداد الرسوم في نقطة واحدة.",
                                    img: "/photo/customer-feedback-terminal-egypt-government.webp",
                                    alt: "كيوسك الخدمات الحكومية",
                                },
                            ].map((item, i) => (
                                <div key={i} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group flex flex-col md:flex-row">
                                    <div className="relative w-full md:w-56 h-52 md:h-auto shrink-0 overflow-hidden">
                                        <Image
                                            loading="lazy"
                                            src={item.img}
                                            alt={item.alt}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="text-3xl mb-3">{item.icon}</div>
                                        <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Gallery */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <h2 className="text-4xl font-black text-center mb-4 text-gray-900">صور المنتجات</h2>
                        <p className="text-center text-gray-600 mb-16 text-xl">أجهزة كيوسك حقيقية مُركَّبة في مصر</p>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { src: "/photo/self service.jpeg", alt: "جهاز خدمة ذاتية" },
                                { src: "/photo/Self-service checkout and food ordering machines.jpeg", alt: "جهاز دفع ذاتي وطلب طعام" },
                                { src: "/photo/modern-self-service-kiosk-touchscreen-in-public-sp.jpg", alt: "كيوسك تاتش في مكان عام" },
                                { src: "/photo/kiosk-egypt-mall-customers-using.webp", alt: "عملاء يستخدمون كيوسك في مول مصر" },
                                { src: "/photo/self-service-kiosks-egypt-bank-branch.webp", alt: "كيوسك في فرع البنك" },
                                { src: "/photo/orderfood.jpeg", alt: "جهاز طلب الطعام الذاتي" },
                            ].map((img, i) => (
                                <div key={i} className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
                                    <Image
                                        loading="lazy"
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="pb-20 pt-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-gray-900">تواصل معنا</h2>
                        <div className="text-center flex items-center justify-center gap-2 text-gray-600 mb-16 text-xl">
                            <span className="text-red-600 font-bold">تواصل معنا الآن للحصول على عرض سعر</span>
                            <PhoneCall className="text-red-600" size={24} />
                        </div>
                        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                            <div>
                                <h3 className="text-2xl font-bold mb-6 text-gray-900">معلومات التواصل</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-red-100 p-3 rounded-lg">
                                            <Phone className="text-red-600" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-1">الهاتف</h4>
                                            <a href="tel:+201227993999" className="text-gray-600 hover:text-red-600 transition-colors" dir="ltr">
                                                +20 122 799 3999
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="bg-red-100 p-3 rounded-lg">
                                            <Mail className="text-red-600" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-1">البريد الإلكتروني</h4>
                                            <a href="mailto:info@bdcegypt.com" className="text-gray-600 hover:text-red-600 transition-colors">
                                                info@bdcegypt.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="bg-red-100 p-3 rounded-lg">
                                            <MapPin className="text-red-600" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-1">العنوان</h4>
                                            <p className="text-gray-600">المنطقة الصناعية - منطقة 1000 مصنع, التجمع الثالث, القاهرة الجديدة, القاهرة</p>
                                        </div>
                                    </div>
                                    <div className="pt-6 border-t border-gray-200">
                                        <h4 className="font-bold text-gray-900 mb-4">تابعنا على</h4>
                                        <div className="flex gap-4">
                                            <a
                                                aria-label="صفحتنا على فيسبوك"
                                                href="https://www.facebook.com/profile.php?id=100063568914604"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-red-100 hover:bg-red-600 p-3 rounded-lg transition-all group"
                                            >
                                                <Facebook className="text-red-600 group-hover:text-white transition-colors" size={24} />
                                            </a>
                                            <a
                                                aria-label="قناتنا على يوتيوب"
                                                href="https://www.youtube.com/watch?v=DneFcbLK6rA"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-red-100 hover:bg-red-600 p-3 rounded-lg transition-all group"
                                            >
                                                <Youtube className="text-red-600 group-hover:text-white transition-colors" size={24} />
                                            </a>
                                            <a
                                                aria-label="التواصل معنا عبر واتساب"
                                                href="https://api.whatsapp.com/send?phone=201227993999"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-red-100 hover:bg-red-600 p-3 rounded-lg transition-all group"
                                            >
                                                <WhatsApp className="text-red-600 group-hover:text-white transition-colors" size={24} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-black text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-red-600">لماذا كيوسيرف QSERVE؟</h3>
                            <ul className="text-gray-400 list-disc leading-relaxed space-y-1 pr-5">
                                <li>حلول مصممة خصيصًا للسوق المصري</li>
                                <li>خبرة في أجهزة الخدمات الذاتية وشاشات الكيوسك</li>
                                <li>دعم فني وتركيب احترافي</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-4">روابط سريعة</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><Link href="/" className="hover:text-red-600 transition-colors">الرئيسية</Link></li>
                                <li><Link href="/queue-system" className="hover:text-red-600 transition-colors">نظام الانتظار</Link></li>
                                <li><Link href="/nurse-call-system" className="hover:text-red-600 transition-colors">استدعاء الممرضات</Link></li>
                                <li><Link href="/self-service-kiosks" className="hover:text-red-600 transition-colors">الخدمات الذاتية</Link></li>
                                <li><Link href="/#contact" className="hover:text-red-600 transition-colors">تواصل معنا</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-4">ساعات العمل</h4>
                            <p className="text-gray-400 leading-relaxed">
                                السبت - الخميس: 9:00 صباحاً - 6:00 مساءً
                                <br />
                                الجمعة: عطلة
                            </p>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                        <p>&copy; 2026 QSERVE جميع الحقوق محفوظة.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
