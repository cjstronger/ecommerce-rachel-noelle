"use server";

import { Resend } from "resend";
import fs from "fs";
import path from "path";
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
  const { sent } = await sendGuideEmail(appEmail, firstName);
  const { error } = await addSubscriber(user);
  if (error) console.error(error);
  return { sent };
}

async function sendGuideEmail(appEmail, appFullName) {
  const { data: fileContent, fileError } = await supabase.storage
    .from("PDFs")
    .download("/MyFoodGuide-RachelNoelle.pdf");
  if (fileError) console.error(fileError);

  const base64FileContent = await fileContent.arrayBuffer().then((buffer) => {
    return Buffer.from(buffer).toString("base64");
  });

  const { data, error } = await resend.emails.send({
    from: "Rachel Noelle <rachel@rachelnoelle.net>",
    to: [`${appEmail}`],
    subject: "My Daily Food Guide - Rachel Noelle",
    attachments: [
      {
        filename: "DailyFoodGuide-RachelNoelle.pdf",
        content: base64FileContent,
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
