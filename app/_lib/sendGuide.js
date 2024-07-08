"use server";

import { Resend } from "resend";
import fs from "fs";
import path from "path";
import { NoelleGuide } from "@/react-email-starter/emails/noelle-sendGuide";

const resend = new Resend(process.env.RESEND_KEY);
let sent = false;

const filePath = path.join(
  "public",
  "attachments/MyFoodGuide-RachelNoelle.pdf"
);
const fileContent = fs.readFileSync(filePath).toString("base64");

export default async function sendGuide(formData) {
  const firstName = formData.first;
  const appEmail = formData.email;
  const { sent } = await sendGuideEmail(appEmail, firstName);
  return { sent };
}

async function sendGuideEmail(appEmail, appFullName) {
  const { data, error } = await resend.emails.send({
    from: "Rachel Noelle <rachel@rachelnoelle.net>",
    to: [`${appEmail}`],
    subject: "Thank you for your application!",
    attachments: [
      {
        filename: "DailyFoodGuide-RachelNoelle.pdf",
        content: fileContent,
        type: "application/pdf",
      },
    ],
    react: <NoelleGuide appFullName={appFullName} />,
  });
  if (error)
    throw new Error("There was an error when sending the guide.", error);
  sent = true;
  return { data, sent };
}