"use server";

import NoelleWelcome from "@/react-email-starter/emails/noelle-welcome";
import { Resend } from "resend";
import { addSub, checkSubByEmail } from "./data-services";

const resend = new Resend(process.env.RESEND_KEY);

export default async function submitEmail(formData) {
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const subEmail = formData.get("email");
  const { data } = await checkSubByEmail(subEmail);
  if (data.length) {
    return;
  }
  const subFullName = `${firstName} ${lastName}`;
  const user = { subFullName, subEmail };
  const { error } = await addSub(user);
  if (error) throw new Error("The submit failed");
  try {
    const { data1, error1 } = await resend.emails.send({
      from: "Test <onboarding@resend.dev>",
      to: subEmail,
      subject: "Welcome to the Noelle Letter",
      react: <NoelleWelcome />,
    });
    if (error1) throw new Error("There was an error sending the email.");
    return data1;
  } catch (err) {
    throw new Error("There was an error sending the email");
  }
}
