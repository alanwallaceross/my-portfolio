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
    // Create a Nodemailer transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail account
        pass: process.env.GMAIL_PASS, // Your Gmail App Password
      },
    });

    console.log("did we get here");

    // Define the email options
    const mailOptions = {
      from: process.env.GMAIL_USER, // Your Gmail account (the sender)
      to: process.env.GMAIL_USER, // Your email address (the recipient of the contact form)
      replyTo: email, // Set the reply-to address to the form submitter's email
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

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success message
    return { message: "Message sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send message. Please try again later.");
  }
}
