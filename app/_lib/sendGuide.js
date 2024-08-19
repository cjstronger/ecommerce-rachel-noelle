"use server";

import { Resend } from "resend";
import { addSubscriber } from "./data-services";
import { supabase } from "./supabase";
import NoelleGuide from "@/react-email-starter/emails/noelle-sendGuide";

const resend = new Resend(process.env.RESEND_KEY);

let sent = false;

export default async function sendGuide(formData) {
  const firstName = formData.first;
  const appEmail = formData.email;
  const subFullName = formData.first;
  const subEmail = formData.email;
  const user = { subFullName, subEmail };
  const { check } = await addSubscriber(user);
  if (check?.length) return;
  const { sent } = await sendGuideEmail(appEmail, firstName);
  return { sent };
}

async function sendGuideEmail(appEmail, firstName) {
  const { data: fileContent, fileError } = await supabase.storage
    .from("PDFs")
    .download("/Uplevel Using My Food Guide.pdf");
  if (fileError) console.error(fileError);

  const base64FileContent = await fileContent.arrayBuffer().then((buffer) => {
    return Buffer.from(buffer).toString("base64");
  });

  const { data, error } = await resend.emails.send({
    from: "Rachel Noelle <rachel@rachelnoelle.net>",
    to: [`${appEmail}`],
    subject: "My Free Ebook - Rachel Noelle",
    attachments: [
      {
        filename: "Uplevel Using My Food Guide.pdf",
        content: base64FileContent,
        type: "application/pdf",
      },
    ],
    react: <NoelleGuide firstName={firstName} />,
  });
  if (error)
    throw new Error("There was an error when sending the guide.", error);
  sent = true;
  return { data, sent };
}
