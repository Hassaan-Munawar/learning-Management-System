import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import handleLoginUser from "@/components/HandleLoginUser/handleLoginUser"; 

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        if (email === `${process.env.ADMIN_EMAIL}` && password === `${process.env.ADMIN_PASSWORD}`) {
          return {
            id: "admin",
            name: "Admin",
            email:`${process.env.ADMIN_EMAIL}`,
            image: null,
          };
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        const user = await handleLoginUser(profile);
        account.id = user._id.toString();
        account.name = user.name;
        account.email = user.email;
        account.image = profile.picture;
      }
      return true;
    },
    async jwt({ token, account, user }) {
      if (account?.provider === "google") {
        token.id = account.id;
        token.name = account.name;
        token.email = account.email;
        token.image = account.image;
      } else if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.image = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        name: token.name,
        email: token.email,
        image: token.image,
        id: token.id,
      };
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/", 
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };


