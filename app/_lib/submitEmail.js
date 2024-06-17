"use server";

import NoelleWelcome from "@/react-email-starter/emails/noelle-welcome";
import { Resend } from "resend";
import { addSub, checkSubByEmail } from "./data-services";

const resend = new Resend(process.env.RESEND_KEY);

export default async function submitEmail(formData) {
  let subscribed = false;
  const firstName = formData.firstName;
  const lastName = formData.lastName;
  const subEmail = formData.email;
  const { data } = await checkSubByEmail(subEmail, resend);
  if (data.length) {
    subscribed = true;
    return { subscribed };
  }
  const subFullName = `${firstName} ${lastName}`;
  const user = { subFullName, subEmail };
  const { error } = await addSub(user);
  if (error) throw new Error("The submit failed");
  await sendInitialSub(subEmail);
  return { subscribed };
}

async function sendInitialSub(subEmail) {
  const { data, error } = await resend.emails.send({
    from: "Rachel Noelle <rachel@rachelnoelle.net>",
    to: [`${subEmail}`],
    subject: "Welcome to the Noelle Letter",
    react: <NoelleWelcome />,
  });
  if (error) throw new Error("There was an error sending the email.", error);
  return data;
}
