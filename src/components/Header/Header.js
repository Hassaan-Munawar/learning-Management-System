"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const { data: session } = useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 bg-blue-600 place-content-center text-white h-[10vh] lg:h-[11vh] shadow-md z-50">
      <div className="flex justify-between items-center px-4 py-4 md:py-0">
        <Link href="/" className="flex items-center">
          <span className="font-bold text-xl">LMS</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-4">
          {session?.user ? (
            <>
              {session.user.name === "Admin" ? (
                <Link
                  href="/admin"
                  className="hover:text-blue-200 transition-colors"
                >
                  Admin Panel
                </Link>
              ) : (
                <Link
                  href="/mycourses"
                  className="hover:text-blue-200 transition-colors"
                >
                  My Courses
                </Link>
              )}

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                  {session.user.image == null ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  ) : (
                    <Image
                      width={100}
                      height={100}
                      src={session.user.image}
                      alt="User"
                      className="rounded-full w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="text-sm">
                  <p className="font-medium">{session.user.name}</p>
                  <p className="text-xs opacity-75">{session.user.email}</p>
                </div>
                <button
                  onClick={() => signOut()}
                  className={cn(
                    "bg-red-600 border-2 border-red-600 text-white px-4 py-1 rounded-sm transition-all duration-300 ease-in-out transform hover:scale-105"
                  )}
                >
                  Sign out
                </button>
              </div>
            </>
          ) : (
            <Link href="/signin">
              <button
                className={cn(
                  "border-2 bg-white border-white text-blue-600  font-semibold px-4 py-1 rounded-sm transition-all duration-300 ease-in-out transform hover:scale-105"
                )}
              >
                Sign in
              </button>
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        {!session ? (
          <Link className="md:hidden" href="/signin">
            <button
              className={cn(
                "border-2 bg-white border-white text-blue-600 font-semibold px-4 py-1 transition-all rounded-sm duration-300 ease-in-out transform hover:scale-105"
              )}
            >
              Sign in
            </button>
          </Link>
        ) : (
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-600 py-4 space-y-4 text-center">
          {session?.user?.name === "Admin" ? (
            <Link
              href="/admin"
              onClick={closeMobileMenu}
              className="hover:text-blue-200 block"
            >
              Admin Panel
            </Link>
          ) : (
            <Link
              href="/mycourses"
              onClick={closeMobileMenu}
              className="hover:text-blue-200 block"
            >
              My Courses
            </Link>
          )}
          <div className="flex flex-col items-center space-y-2">
            <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center">
              {session?.user?.image == null ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              ) : (
                <Image
                  width={100}
                  height={100}
                  src={session.user.image}
                  alt="User"
                  className="rounded-full w-full h-full object-cover"
                />
              )}
            </div>
            <div className="text-white">
              <p className="font-medium text-md">{session.user.name}</p>
              <p className="text-sm opacity-75">{session.user.email}</p>
            </div>
            <button
              onClick={() => {
                signOut();
                closeMobileMenu();
              }}
              className={cn(
                "bg-red-600 border-2 border-red-600 text-white px-4 py-1 rounded-sm transition-all duration-300 ease-in-out transform hover:scale-105"
              )}
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </header>
  );
}


