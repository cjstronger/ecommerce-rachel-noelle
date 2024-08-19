"use server";

import { Resend } from "resend";
import { NoelleGuide } from "@/react-email-starter/emails/noelle-sendGuide";
import { addSubscriber } from "./data-services";
import { supabase } from "./supabase";

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

async function sendGuideEmail(appEmail, appFullName) {
  const { data: fileContent, fileError } = await supabase.storage
    .from("PDFs")
    .download("/Uplevel Using My Food Guide.pdf");
  if (fileError) console.error(fileError);

  const base64FileContent = await fileContent.arrayBuffer().then((buffer) => {
    return Buffer.from(buffer).toString("base64");
  });

  const downloadLink = `data:application/pdf;base64,${base64FileContent}`;

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
    react: <NoelleGuide appFullName={appFullName} file={downloadLink} />,
  });
  if (error)
    throw new Error("There was an error when sending the guide.", error);
  sent = true;
  return { data, sent };
}
