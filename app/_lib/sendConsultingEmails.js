"use server";

import { addClient } from "./data-services";

export default async function sendConsultingEmail(userData, type) {
  await addClient(userData);
}
