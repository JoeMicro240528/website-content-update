"use client"

import { useState, useRef } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"
import emailjs from "@emailjs/browser"

const contactFormSchema = z.object({
    name: z.string().min(2, { message: "الاسم يجب أن يكون حرفين على الأقل" }),
    email: z.string().email({ message: "يرجى إدخال بريد إلكتروني صحيح" }),
    message: z.string().min(10, { message: "الرسالة يجب أن تكون 10 أحرف على الأقل" }),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const formRef = useRef<HTMLFormElement>(null)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
    })

    async function onSubmit(data: ContactFormValues) {
        setIsSubmitting(true)

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

        console.log("Debug EmailJS Keys:", {
            hasServiceId: !!serviceId,
            hasTemplateId: !!templateId,
            hasPublicKey: !!publicKey
        })

        if (!serviceId || !templateId || !publicKey) {
            toast.error("خطأ في الإعدادات: مفاتيح EmailJS مفقودة")
            console.error("Missing EmailJS keys", { serviceId, templateId, publicKey })
            setIsSubmitting(false)
            return
        }

        try {
            await emailjs.send(
                serviceId,
                templateId,
                {
                    name: data.name,
                    email: data.email,
                    message: data.message,
                },
                publicKey
            )

            toast.success("تم إرسال رسالتك بنجاح!")
            reset()
        } catch (error: any) {
            console.error("EmailJS Error Detail:", error)
            const errorMessage = error?.text || error?.message || "حدث خطأ غير معروف"
            toast.error(`فشل الإرسال: ${errorMessage}`)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <label className="block text-gray-700 font-semibold mb-2">الاسم</label>
                <input
                    {...register("name")}
                    type="text"
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${errors.name ? "border-red-500 focus:border-red-600" : "border-gray-200 focus:border-red-600"
                        }`}
                    placeholder="أدخل اسمك"
                    disabled={isSubmitting}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
                <label className="block text-gray-700 font-semibold mb-2">البريد الإلكتروني</label>
                <input
                    {...register("email")}
                    type="email"
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${errors.email ? "border-red-500 focus:border-red-600" : "border-gray-200 focus:border-red-600"
                        }`}
                    placeholder="أدخل بريدك الإلكتروني"
                    disabled={isSubmitting}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
                <label className="block text-gray-700 font-semibold mb-2">الرسالة</label>
                <textarea
                    {...register("message")}
                    rows={4}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors resize-none ${errors.message ? "border-red-500 focus:border-red-600" : "border-gray-200 focus:border-red-600"
                        }`}
                    placeholder="اكتب رسالتك هنا"
                    disabled={isSubmitting}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="animate-spin" size={20} />
                        جاري الإرسال...
                    </>
                ) : (
                    "إرسال"
                )}
            </button>
        </form>
    )
}
