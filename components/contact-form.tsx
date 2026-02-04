"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { sendEmail } from "@/app/actions"
import { Loader2 } from "lucide-react"

const contactFormSchema = z.object({
    name: z.string().min(2, { message: "الاسم يجب أن يكون حرفين على الأقل" }),
    email: z.string().email({ message: "يرجى إدخال بريد إلكتروني صحيح" }),
    message: z.string().min(10, { message: "الرسالة يجب أن تكون 10 أحرف على الأقل" }),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)

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
        const formData = new FormData()
        formData.append("name", data.name)
        formData.append("email", data.email)
        formData.append("message", data.message)

        try {
            const result = await sendEmail(null, formData)

            if (result.success) {
                toast.success(result.message)
                reset()
            } else {
                toast.error(result.message)
                if (result.errors) {
                    // Optionally handle specific field errors from server if needed, 
                    // but client-side validation should catch most.
                    console.error(result.errors)
                }
            }
        } catch (error) {
            toast.error("حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.")
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
