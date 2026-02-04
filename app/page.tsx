"use client"

import { useState } from "react"
import { Menu, X, Phone, Mail, MapPin, ChevronLeft, ChevronRight, Facebook, Youtube } from "lucide-react"
import Image from "next/image"
import { ContactForm } from "@/components/contact-form"

function WhatsApp({ size = 24, className }: { size?: number | string, className?: string }) {
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

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const galleryImages = [
    "/photo/gallery-1-queue-egypt-hospital-waiting.webp",
    "/photo/gallery-2-kiosk-egypt-telecom-store.webp",
    "/photo/gallery-3-nurse-call-egypt-clinic.webp",
    "/photo/gallery-4-ticket-dispenser-egypt-bank.webp",
    "/photo/gallery-5-digital-signage-egypt-university.webp",
    "/photo/gallery-6-turnstile-egypt-government.webp",
    "/photo/gallery-7-interactive-directory-egypt-mall.webp",
    "/photo/gallery-8-queue-display-egypt-clinic.webp",
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  function scrollToSection(arg0: string) {
    document.getElementById(arg0)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a
              href="https://api.whatsapp.com/send?phone=201227993999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors shadow-md group"
            >
              <WhatsApp size={24} className=" text-green-300" />
              <div className="flex gap-2 leading-tight">
                <span className="text-xs font-bold opacity-90">اتصل بنا الآن</span>
              </div>
            </a>

            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-8 items-center">
              <a href="#home" className="text-gray-700 hover:text-red-600 transition-colors font-semibold">
                الرئيسية
              </a>
              <a href="#services" className="text-gray-700 hover:text-red-600 transition-colors font-semibold">
                خدماتنا
              </a>
              <a href="#products" className="text-gray-700 hover:text-red-600 transition-colors font-semibold">
                منتجاتنا
              </a>
              <a href="#gallery" className="text-gray-700 hover:text-red-600 transition-colors font-semibold">
                معرض الصور
              </a>
              <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors font-semibold">
                تواصل معنا
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 flex flex-col gap-4 pb-4">
              <a href="#home" className="text-gray-700 hover:text-red-600 transition-colors font-semibold">
                الرئيسية
              </a>
              <a href="#services" className="text-gray-700 hover:text-red-600 transition-colors font-semibold">
                خدماتنا
              </a>
              <a href="#products" className="text-gray-700 hover:text-red-600 transition-colors font-semibold">
                منتجاتنا
              </a>
              <a href="#gallery" className="text-gray-700 hover:text-red-600 transition-colors font-semibold">
                معرض الصور
              </a>
              <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors font-semibold">
                تواصل معنا
              </a>
            </nav>
          )}
        </div>
      </header>

      <main id="main-content">

        {/* Hero Section */}
        <section id="home" className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/photo/queue-system-egypt-bank-real-installation.webp"
              alt="Hero Background"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/75 z-0"></div>

          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-balance drop-shadow-xl tracking-tight">
              نظام انتظار العملاء <span className="text-red-500">كيوسيرف</span>
            </h2>
            <p className="text-xl md:text-3xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium text-gray-200 drop-shadow-lg">
              حلول تقنية متطورة لإدارة انتظار العملاء وتحسين تجربة الخدمة
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <button onClick={() => {
                scrollToSection("services");
              }} className="bg-red-600 cursor-pointer text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-red-700 transition-all shadow-lg hover:shadow-red-900/50 transform hover:scale-105 border-2 border-transparent">
                اكتشف خدماتنا
              </button>
              <a
                href="https://api.whatsapp.com/send?phone=201227993999"
                target="_blank"
                rel="noopener noreferrer"
                className="decoration-none"
              >
                <button className="bg-transparent flex items-center gap-2 cursor-pointer text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-white/10 transition-all shadow-lg border-2 border-white backdrop-blur-sm">
                  اتصل بنا <WhatsApp size={24} className="animate-pulse text-green-300" />
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-gray-900">خدماتنا</h2>
            <p className="text-center text-gray-600 mb-16 text-xl">نقدم مجموعة متكاملة من الحلول التقنية المتطورة</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Service 1 */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    loading="lazy"
                    src="/photo/queue-system-egypt-bank-real-installation.webp"
                    alt="أنظمة انتظار العملاء"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">أنظمة انتظار العملاء QSERVE</h3>
                  <p className="text-gray-600 leading-relaxed">
                    نظام متكامل لإدارة طوابير الانتظار وتحسين تدفق العملاء بكفاءة عالية
                  </p>
                </div>
              </div>

              {/* Service 2 */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    loading="lazy"
                    src="/photo/nurse-call-system-egypt-hospital-real.webp"
                    alt="أنظمة استدعاء الممرضات"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">أنظمة استدعاء الممرضات</h3>
                  <p className="text-gray-600 leading-relaxed">
                    حلول متطورة للرعاية الصحية تضمن استجابة سريعة وفعالة للمرضى
                  </p>
                </div>
              </div>

              {/* Service 3 */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    loading="lazy"
                    src="/photo/digital-clock-egypt-mosque-real.webp"
                    alt="الساعات المركزية"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">الساعات المركزية</h3>
                  <p className="text-gray-600 leading-relaxed">
                    أنظمة ساعات رقمية متزامنة لجميع المواقع مع دقة عالية وتصميم عصري
                  </p>
                </div>
              </div>

              {/* Service 4 */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    loading="lazy"
                    src="/photo/kiosk-egypt-mall-customers-using.webp"
                    alt="أجهزة الخدمات الذاتية"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">أجهزة الخدمات الذاتية</h3>
                  <p className="text-gray-600 leading-relaxed">أكشاك خدمة ذاتية تفاعلية توفر تجربة مستخدم سلسة ومريحة</p>
                </div>
              </div>

              {/* Service 5 */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    loading="lazy"
                    src="/photo/digital-signage-egypt-airport-real.webp"
                    alt="اللافتات الرقمية"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">اللافتات الرقمية</h3>
                  <p className="text-gray-600 leading-relaxed">
                    شاشات عرض رقمية ذكية لعرض المعلومات والإعلانات بطريقة جذابة وفعالة
                  </p>
                </div>
              </div>

              {/* Service 6 */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    loading="lazy"
                    src="/photo/customer-feedback-terminal-egypt-government.webp"
                    alt="أنظمة تقييم الخدمة"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">أنظمة تقييم الخدمة</h3>
                  <p className="text-gray-600 leading-relaxed">
                    أدوات قياس رضا العملاء وجمع الملاحظات لتحسين جودة الخدمات
                  </p>
                </div>
              </div>

              {/* Service 7 */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    loading="lazy"
                    src="/photo/turnstile-gate-egypt-metro-station.jpg"
                    alt="أنظمة الدخول والخروج"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">أنظمة الدخول والخروج</h3>
                  <p className="text-gray-600 leading-relaxed">
                    حلول أمنية متقدمة لإدارة دخول وخروج الموظفين والزوار بكفاءة
                  </p>
                </div>
              </div>

              {/* Service 8 */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    loading="lazy"
                    src="/photo/interactive-map-egypt-hospital-real.webp"
                    alt="الخرائط التفاعلية"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">الخرائط التفاعلية</h3>
                  <p className="text-gray-600 leading-relaxed">
                    شاشات توجيه تفاعلية تساعد الزوار في التنقل بسهولة داخل المباني الكبيرة
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-gray-900">منتجاتنا</h2>
            <p className="text-center text-gray-600 mb-16 text-xl">تشكيلة واسعة من المنتجات عالية الجودة</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Product Category 1 */}
              <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 border-2 border-red-100">
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    loading="lazy"
                    src="/photo/queue-products-egypt-installation.webp"
                    alt="منتجات إدارة الطوابير"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">منتجات إدارة الطوابير</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  شاشات عرض، موزعات التذاكر، وحدات الاستدعاء، لوحات التحكم
                </p>
                <button className="text-red-600 font-bold hover:text-red-700 transition-colors">عرض المزيد ←</button>
              </div>

              {/* Product Category 2 */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 border-2 border-gray-100">
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    loading="lazy"
                    src="/photo/nurse-call-equipment-egypt-hospital.webp"
                    alt="منتجات الرعاية الصحية"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">منتجات الرعاية الصحية</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  أنظمة استدعاء الممرضات، شاشات المرضى، لوحات التحكم الطبية
                </p>
                <button className="text-red-600 font-bold hover:text-red-700 transition-colors">عرض المزيد ←</button>
              </div>

              {/* Product Category 3 */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 border-2 border-blue-100">
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    loading="lazy"
                    src="/photo/self-service-kiosks-egypt-bank-branch.webp"
                    alt="أكشاك الخدمة الذاتية"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">أكشاك الخدمة الذاتية</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  نماذج متعددة للخدمات البنكية، الفنادق، المطاعم، والمحلات
                </p>
                <button className="text-red-600 font-bold hover:text-red-700 transition-colors">عرض المزيد ←</button>
              </div>

              {/* Product Category 4 */}
              <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 border-2 border-green-100">
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    loading="lazy"
                    src="/photo/led-screens-egypt-commercial-building.webp"
                    alt="شاشات العرض الرقمية"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">شاشات العرض الرقمية</h3>
                <p className="text-gray-700 leading-relaxed mb-4">شاشات LED، LCD، شاشات تفاعلية، وحلول العرض المتكاملة</p>
                <button className="text-red-600 font-bold hover:text-red-700 transition-colors">عرض المزيد ←</button>
              </div>

              {/* Product Category 5 */}
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 border-2 border-purple-100">
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    loading="lazy" src="/photo/synchronized-clocks-egypt-office.webp" alt="أنظمة الساعات" fill className="object-cover" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">أنظمة الساعات</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  ساعات رقمية مركزية، ساعات خارجية، أنظمة التوقيت الدقيق
                </p>
                <button className="text-red-600 font-bold hover:text-red-700 transition-colors">عرض المزيد ←</button>
              </div>

              {/* Product Category 6 */}
              <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 border-2 border-yellow-100">
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    loading="lazy"
                    src="/photo/access-control-egypt-corporate-entrance.webp"
                    alt="أنظمة التحكم بالدخول"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">أنظمة التحكم بالدخول</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  بوابات إلكترونية، قارئات البطاقات، أنظمة البصمة، كاميرات المراقبة
                </p>
                <button aria-label="عرض المزيد" className="text-red-600 font-bold hover:text-red-700 transition-colors">عرض المزيد ←</button>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-gray-900">معرض الصور</h2>
            <p className="text-center text-gray-600 mb-16 text-xl">صور حقيقية من مشاريعنا المنفذة</p>

            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  loading="lazy"
                  src={galleryImages[currentImageIndex] || "/photo/placeholder.svg"}
                  alt="معرض الصور"
                  width={800}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />

                <button
                  aria-label="الشريحة السابقة"
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
                >
                  <ChevronLeft size={32} className="text-gray-900" />
                </button>

                <button
                  aria-label="الشريحة التالية"
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
                >
                  <ChevronRight size={32} className="text-gray-900" />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {galleryImages.map((_, index) => (
                    <button
                      aria-label={(index + 1) + "الانتقال إلى الشريحة"}
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className="w-10 h-10 flex items-center justify-center rounded-full"
                    >

                      <span className={`w-3 h-3 rounded-full transition-all ${index === currentImageIndex ? "bg-white w-8" : "bg-white/50"}`}></span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 mt-8">
                {galleryImages.slice(0, 4).map((img, index) => (
                  <button
                    aria-label="عرض الصورة"
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative h-24 rounded-lg overflow-hidden transition-all ${index === currentImageIndex ? "ring-4 ring-red-600" : "opacity-70 hover:opacity-100"
                      }`}
                  >
                    <Image loading="lazy" src={img || "/photo/placeholder.svg"} alt={`صورة ${index + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-gray-900">تواصل معنا</h2>
            <p className="text-center text-gray-600 mb-16 text-xl">نحن هنا للإجابة على استفساراتك</p>

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
                      <a
                        href="tel:+201227993999"
                        className="text-gray-600 hover:text-red-600 transition-colors"
                        dir="ltr"
                      >
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
                      <p className="text-gray-600"> مصر</p>
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
              <h3 className="text-2xl font-bold mb-4 text-red-600">B.D.C NET</h3>
              <p className="text-gray-400 leading-relaxed">
                نقدم حلول تقنية متطورة لإدارة انتظار العملاء وتحسين تجربة الخدمة في جميع القطاعات
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">روابط سريعة</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#home" className="hover:text-red-600 transition-colors">
                    الرئيسية
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-red-600 transition-colors">
                    خدماتنا
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-red-600 transition-colors">
                    منتجاتنا
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-red-600 transition-colors">
                    تواصل معنا
                  </a>
                </li>
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
            <p>&copy; 2026 B.D.C NET FLAVOURS. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
