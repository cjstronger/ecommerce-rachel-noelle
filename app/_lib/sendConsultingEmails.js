"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

export default async function sendConsultingEmail(userData, type) {
  const clientEmail = userData.email;
  const firstName = userData.fullName.split(" ")[0];
  if (type === "one-hour") {
    const { data, error } = await resend.emails.send({
      from: "Rachel Noelle <rachel@rachelnoelle.net>",
      to: [`${clientEmail}`],
      subject: "I can't wait to get started - Rachel Noelle",
      react: <NoelleGuide firstName={firstName} />,
    });
    if (error)
      throw new Error(
        "There was an error when sending the email for the product price_1Pp2M4EcxLgVB18aWx2saU1A:",
        error
      );
    return { data };
  } else if (type === "free") {
    const { data, error } = await resend.emails.send({
      from: "Rachel Noelle <rachel@rachelnoelle.net>",
      to: [`${clientEmail}`],
      subject: "Thank you for your intererst! - Rachel Noelle",
      react: <NoelleGuide firstName={firstName} />,
    });
    if (error)
      throw new Error(
        "There was an error when sending the email to the user for the free consultation:",
        error
      );
    return { data };
  } else throw new Error("Type not specified/available.");
}
