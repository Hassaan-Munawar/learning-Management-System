"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Sidebar from "@/components/SideBar/SideBar";

export default function Layout({ children }) {
  const { data: session } = useSession();

  if (session?.user.name !== "Admin") {
    redirect("/");
  }
  return (
    <div className="flex flex-row lg:flex-row h-[90vh] lg:h-[89vh] bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">{children}</main>
    </div>
  );
}
