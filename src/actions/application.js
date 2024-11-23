"use server";

import { revalidatePath } from "next/cache";

export async function getApplications({
  admission = "",
  user = "",
  batch = "",
  course = "",
}) {
  let applications = await fetch(
    `${process.env.BASE_URL}/api/application?admission=${admission || ""}&user=${
      user || ""
    }&batch=${batch || ""}&course=${course || ""}`,
    {
      cache: "no-cache",
    }
  );
  applications = await applications.json();
  return applications;
}

export async function addApplication(obj) {
  console.log("Obj=>", obj);

  const batch = await fetch(`${process.env.BASE_URL}/api/application`, {
    method: "POST",
    body: JSON.stringify(obj),
    cache: "no-cache",
  });
  return await batch.json();
}

export async function updateApplication(id, status, admissionId) {
  const batch = await fetch(`${process.env.BASE_URL}/api/application`, {
    method: "PUT",
    body: JSON.stringify({
      id,
      status,
    }),
  });
  if (batch.ok) {
    revalidatePath(`/admin/admissions/${admissionId}`);
  }
}
