"use server"

import { z } from "zod"
import nodemailer from "nodemailer"

const contactFormSchema = z.object({
    name: z.string().min(2, { message: "الاسم يجب أن يكون حرفين على الأقل" }),
    email: z.string().email({ message: "يرجى إدخال بريد إلكتروني صحيح" }),
    message: z.string().min(10, { message: "الرسالة يجب أن تكون 10 أحرف على الأقل" }),
})

export async function sendEmail(prevState: any, formData: FormData) {
    const validatedFields = contactFormSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
    })

    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
            message: "يرجى التأكد من صحة البيانات المدخلة",
        }
    }

    const { name, email, message } = validatedFields.data

    try {
        // Check if environment variables are set
        if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
            console.warn("SMTP credentials are missing. Email simulation mode.")
            // Simulate delay
            await new Promise((resolve) => setTimeout(resolve, 1000))

            // For development/testing without real credentials
            console.log("Email Payload:", { name, email, message })

            return {
                success: true,
                message: "تم إرسال رسالتك بنجاح! (وضع المحاكاة - تأكد من إعداد بيانات SMTP)",
            }
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 465,
            secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        })

        const mailOptions = {
            from: `"${name}" <${process.env.SMTP_USER}>`, // Sender address
            to: process.env.CONTACT_EMAIL || process.env.SMTP_USER, // List of receivers
            replyTo: email,
            subject: `رسالة جديدة من موقعك: ${name}`,
            text: `
        الاسم: ${name}
        البريد الإلكتروني: ${email}
        
        الرسالة:
        ${message}
      `,
            html: `
        <h3>رسالة جديدة من نموذج التواصل</h3>
        <p><strong>الاسم:</strong> ${name}</p>
        <p><strong>البريد الإلكتروني:</strong> ${email}</p>
        <p><strong>الرسالة:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
        }

        await transporter.sendMail(mailOptions)

        return {
            success: true,
            message: "تم إرسال رسالتك بنجاح!",
        }
    } catch (error) {
        console.error("Error sending email:", error)
        return {
            success: false,
            message: "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة لاحقاً.",
        }
    }
}
