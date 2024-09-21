"use server";

import nodemailer from "nodemailer";
import { z } from "zod";

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
  message?: string | null;
};

const ContactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});

export async function handleContactForm(prevState: State, formData: FormData) {
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Send Email.",
    };
  }

  const { name, email, subject, message } = validatedFields.data;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      text: `
        You have received a new message from the contact form on your portfolio:

        Name: ${name}
        Email: ${email}
        Subject: ${subject}

        Message:
        ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return { message: "Message sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send message. Please try again later.");
  }
}
