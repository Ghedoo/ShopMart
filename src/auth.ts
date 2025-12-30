import CredentialsProvider from "next-auth/providers/credentials";
import { AuthOptions } from "next-auth";
import { FailedLoginResponse, SuccessLoginResponse } from "@/interfaces";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials");
        }

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/signin`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          }
        );

        const payload: SuccessLoginResponse | FailedLoginResponse =
          await response.json();

        if (!response.ok || !("token" in payload)) {
          throw new Error(payload.message || "Login failed");
        }

        return {
          id: payload.user._id,
          user: payload.user,
          token: payload.token,
        };
      },
    }),
  ],

  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.user = user.user;
        token.token = user.token;
      }
      return token;
    },

    session({ session, token }) {
      session.user = token.user;
      session.token = token.token; // 🔥 هذا السطر يحل مشاكل الـ token
      return session;
    },
  },

  pages: {
    signIn: "/login",
    error: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
};
