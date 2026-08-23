import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, content } = await req.json();

        if (!name || !email || !content) {
            return NextResponse.json(
                { error: "Name, email and content are required" },
                { status: 400 },
            );
        }

        const user = process.env.SMTP_USER || "eldorabdukhalikov90@gmail.com";
        const pass = process.env.SMTP_PASS || "husx uwlb ewgv tjqh";
        const receiver = process.env.CONTACT_RECEIVER_EMAIL || user;

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user,
                pass,
            },
        });

        await transporter.sendMail({
            from: `"${name}" <${user}>`,
            replyTo: email,
            to: receiver,
            subject: `New Portfolio Message from ${name}`,
            text: `Sender: ${name} (${email})\n\nMessage:\n${content}`,
        });

        return NextResponse.json({
            success: true,
            message: "Message sent successfully",
        });
    } catch (err: any) {
        return NextResponse.json(
            { error: err.message || "Failed to send email" },
            { status: 500 },
        );
    }
}
