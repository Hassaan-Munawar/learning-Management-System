"use server";

import { revalidatePath } from "next/cache";

export async function getStudents() {
    let users = await fetch(`${process.env.BASE_URL}/api/students`,{cache:"no-cache"});
    users = await users.json();
    return users;
}