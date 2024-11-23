"use server";

import { revalidatePath } from "next/cache";

export async function getBatches() {
  let batches = await fetch(`${process.env.BASE_URL}/api/batches`);
  batches = await batches.json();
  return batches;
}

export async function addBatch(formData) {
  const obj = {
    title: formData.get("title"),
    description: formData.get("description"),
    course: formData.get("course"),
  };

  const batch = await fetch(`${process.env.BASE_URL}/api/batches`, {
    method: "POST",
    body: JSON.stringify(obj),
  });
  if (batch.ok) {
    revalidatePath("/admin/batches");
  }
}
