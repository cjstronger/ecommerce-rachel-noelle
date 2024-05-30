"use server";

import NoelleWelcome from "@/react-email-starter/emails/noelle-welcome";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

export default async function submitEmail(formData) {
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const clientEmail = formData.get("email");
  try {
    const { data, error } = await resend.emails.send({
      from: "Test <onboarding@resend.dev>",
      to: clientEmail,
      subject: "Welcome to the Noelle Letter",
      react: <NoelleWelcome />,
    });
    if (error) throw new Error("There was an error sending the email.");
    return data;
  } catch (err) {
    throw new Error("There was an error sending the email");
  }
}
