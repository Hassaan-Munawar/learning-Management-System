export { default } from "next-auth/middleware";

export const config = { matcher: ["/mycourses","/admin","/lectures/:path*"] };