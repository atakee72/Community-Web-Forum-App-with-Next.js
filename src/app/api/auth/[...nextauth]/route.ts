import connectMongoDB from "@/lib/mongodb";
import User from "@/models/userModel";
import NextAuth from "next-auth/next";
import CredentialsProvider, {
  CredentialsConfig,
} from "next-auth/providers/credentials";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import { OAuthConfig } from "next-auth/providers/oauth"; // Import OAuthConfig
import { SessionStrategy } from "next-auth";
// import { signIn } from "next-auth/react";
const googleClientId = process.env.GOOGLE_CLIENT_ID || "";
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET || "";

export const authOptions: {
  providers: (CredentialsConfig<{}> | OAuthConfig<GoogleProfile>)[];
  session: {
    strategy: string;
  };
  secret: string | undefined;
  pages: { signIn: string | undefined };
  callbacks: {
    signIn({ user, account }: { user: any; account: any }): Promise<any>;
  };
} = {
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

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
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    }),
  ],
  session: {
    strategy: "jwt" as SessionStrategy,
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
                name: name,
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
