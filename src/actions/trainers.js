"use server"

import { revalidatePath } from "next/cache";

export async function getTrainers() {
    let trainers = await fetch(`${process.env.BASE_URL}/api/trainers`,{cache:"no-cache"});
    trainers = await trainers.json();
    return trainers;
}

export async function addTrainer(formData) {
    const obj = {
        name: formData.get("name"),
        email: formData.get("email"),
        qualification: formData.get("qualification")
    };

    const trainer = await fetch(`${process.env.BASE_URL}/api/trainers`, {
        method: "POST",
        body: JSON.stringify(obj),
    });
    if (trainer.ok) {
        revalidatePath("/admin/trainers");
    }
}
