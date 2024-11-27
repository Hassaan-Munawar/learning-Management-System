"use server";

import { revalidatePath } from "next/cache";

export async function getCourses() {
  let courses = await fetch(`${process.env.BASE_URL}/api/courses`,{cache:"no-cache"});
  courses = await courses.json();
  return courses;
}

export async function addCourse(formData) {
  const obj = {
    title: formData.get("title"),
    description: formData.get("description"),
    duration: formData.get("duration"),
    eligibility: formData.get("eligibility").split(","),
    thumbnail: formData.get("thumbnail"),
  };

  const course = await fetch(`${process.env.BASE_URL}/api/courses`, {
    method: "POST",
    body: JSON.stringify(obj),
  });
  if (course.ok) {
    revalidatePath("/admin/courses");
  }
}
