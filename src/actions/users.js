"use server"

export async function getUsers() {
    let users = await fetch(`${process.env.BASE_URL}/api/users`);
    users = await users.json();
    return users;
}