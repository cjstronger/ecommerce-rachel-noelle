"use server";

import NoelleWelcome from "@/react-email-starter/emails/noelle-welcome";
import { Resend } from "resend";
import { addSub, checkSubByEmail } from "./data-services";

const resend = new Resend(process.env.RESEND_KEY);

export default async function submitEmail(formData) {
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const subEmail = formData.get("email");
  const { data } = await checkSubByEmail(subEmail, resend);
  if (data.length) {
    return;
  }
  const subFullName = `${firstName} ${lastName}`;
  const user = { subFullName, subEmail };
  const { error } = await addSub(user);
  if (error) throw new Error("The submit failed");
  await sendInitialSub(subEmail);
}

async function sendInitialSub(subEmail) {
  const { data, error } = await resend.emails.send({
    from: "Test <rachel@rachelnoelle.net>",
    to: [`${subEmail}`],
    subject: "Welcome to the Noelle Letter",
    react: <NoelleWelcome />,
  });
  console.log(data);
  if (error) throw new Error("There was an error sending the email.", error);
  return data;
}
