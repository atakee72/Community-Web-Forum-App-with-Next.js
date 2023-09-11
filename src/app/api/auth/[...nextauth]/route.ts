import connectMongoDB from "@/lib/mongodb";
import User from "@/models/userModel";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
// import { signIn } from "next-auth/react";

interface AuthOptions {
  providers: any[]; // Update this to the actual type or use 'any' if not sure
  session: {
    strategy: string;
  };
  secret: string;
  pages: {
    signIn: string;
  };
  callbacks: {
    signIn: () => Promise<any>;
  };
}

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        // const user = { id: "1" };       //dummy user to check the functionality first
        // return user;

        const { email, password } = credentials;

        try {
          await connectMongoDB();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null;
          }

          return user;
        } catch (error) {
          console.log("🚀 ~ authorize ~ error:", error);
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
  callbacks: {
    async signIn({ user, account }) {
      console.log("🚀 ~ signIn ~ User:", user);
      console.log("🚀 ~ signIn ~ Account:", account);

      if (account.provider === "google") {
        const { name, email } = user;
        try {
          await connectMongoDB();
          const userExists = await User.findOne({ email });

          if (!userExists) {
            const apiUrl = process.env.API_URL;

            const res = await fetch(`${apiUrl}api/user`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                username: name,
                email: email,
              }),
            });

            if (res.ok) {
              return user;
            }
          }
        } catch (error) {
          console.log("🚀 ~ signIn ~ error:", error);
        }
      }

      return user;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
