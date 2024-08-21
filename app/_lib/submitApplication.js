"use server";

import { Resend } from "resend";
import { addApplicant, checkApplicantByEmail } from "./data-services";
import NoelleApply from "@/react-email-starter/emails/noelle-apply";
import NoelleApplication from "@/react-email-starter/emails/noelle-application";

const resend = new Resend(process.env.RESEND_KEY);
let applied = false;

export default async function submitApplication(formData) {
  const firstName = formData.first;
  const lastName = formData.last;
  const appEmail = formData.email;
  const appId = formData.id;

  const { data } = await checkApplicantByEmail(appEmail);
  if (data.length) {
    applied = true;
    return { applied };
  }
  const appFullName = `${firstName} ${lastName}`;
  const user = { appFullName, appEmail, appId };
  const { error } = await addApplicant(user);
  if (error) throw new Error("The submit failed");
  await sendApplication(formData);
  await sendApplyNotif(appEmail, firstName);
  return { applied };
}

async function sendApplyNotif(appEmail, firstName) {
  const { data, error } = await resend.emails.send({
    from: "Rachel Noelle <rachel@rachelnoelle.net>",
    to: [`${appEmail}`],
    subject: "Thank you for your application!",
    react: <NoelleApply appFullName={firstName} />,
  });
  if (error)
    throw new Error(
      "There was an error when sending the notification email to the applicant.",
      error
    );
  return data;
}

async function sendApplication(formData) {
  const { data, error } = await resend.emails.send({
    from: "Coaching Applications <rachel@rachelnoelle.net>",
    to: "rachelnstrong@gmail.com",
    subject: "You have a new applicant!",
    react: <NoelleApplication data={formData} />,
  });
  if (error) throw new Error("Application to Rachels email could not be sent");
  return data;
}
