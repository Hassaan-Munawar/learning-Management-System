
import { redirect } from "next/navigation";
import Sidebar from "@/components/SideBar/SideBar"
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";


export default async function Layout({ children }) {
  const session = await getServerSession(authOptions)

  if (session?.user?.name !== "Admin") {
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
