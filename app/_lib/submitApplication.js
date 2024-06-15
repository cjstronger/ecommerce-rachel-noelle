"use server";

import { Resend } from "resend";
import { addApplicant, checkApplicantByEmail } from "./data-services";
import NoelleApply from "@/react-email-starter/emails/noelle-apply";

const resend = new Resend(process.env.RESEND_KEY);

export default async function submitApplication(formData) {
  console.log(formData);
  const firstName = formData.first;
  const lastName = formData.last;
  const appEmail = formData.email;
  const { data } = await checkApplicantByEmail(appEmail);
  if (data.length) {
    return;
  }
  const appFullName = `${firstName} ${lastName}`;
  const user = { appFullName, appEmail };
  const { error } = await addApplicant(user);
  if (error) throw new Error("The submit failed");
  await sendApplication(appEmail, appFullName);
}

async function sendApplication(appEmail, appFullName) {
  const { data, error } = await resend.emails.send({
    from: "Rachel Noelle <rachel@rachelnoelle.net>",
    to: [`${appEmail}`],
    subject: "Thank you for your application",
    react: <NoelleApply appFullName={appFullName} />,
  });
  console.log(data);
  if (error) throw new Error("There was an error sending the email.", error);
  return data;
}
