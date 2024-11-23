"use client";
import Link from "next/link";
import {
  FiHome,
  FiBook,
  FiUsers,
  FiClipboard,
  FiUserCheck,
  FiUser,
} from "react-icons/fi";

export default function Sidebar() {
  return (
    <div className="sm:w-20 lg:w-64 bg-blue-600 text-white flex-shrink-0">
      <nav className="flex justify-around h-full flex-col p-4 space-y-4">
        <Link
          href="/admin"
          className="hover:bg-blue-700 p-2 rounded-md flex items-center justify-center lg:justify-start space-x-2"
        >
          <FiHome className="h-6 w-6" />
          <span className="hidden lg:inline">Dashboard</span>
        </Link>
        <Link
          href="/admin/courses"
          className="hover:bg-blue-700 p-2 rounded-md flex items-center justify-center lg:justify-start space-x-2"
        >
          <FiBook className="h-6 w-6" />
          <span className="hidden lg:inline">Courses</span>
        </Link>
        <Link
          href="/admin/batches"
          className="hover:bg-blue-700 p-2 rounded-md flex items-center justify-center lg:justify-start space-x-2"
        >
          <FiClipboard className="h-6 w-6" />
          <span className="hidden lg:inline">Batches</span>
        </Link>
        <Link
          href="/admin/admissions"
          className="hover:bg-blue-700 p-2 rounded-md flex items-center justify-center lg:justify-start space-x-2"
        >
          <FiUserCheck className="h-6 w-6" />
          <span className="hidden lg:inline">Admissions</span>
        </Link>
        <Link
          href="/admin/trainers"
          className="hover:bg-blue-700 p-2 rounded-md flex items-center justify-center lg:justify-start space-x-2"
        >
          <FiUsers className="h-6 w-6" />
          <span className="hidden lg:inline">Trainers</span>
        </Link>
        <Link
          href="/admin/students"
          className="hover:bg-blue-700 p-2 rounded-md flex items-center justify-center lg:justify-start space-x-2"
        >
          <FiUser className="h-6 w-6" />
          <span className="hidden lg:inline">Students</span>
        </Link>
      </nav>
    </div>
  );
}

  