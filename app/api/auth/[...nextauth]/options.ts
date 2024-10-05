import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          // Make sure the URL is absolute
          const res = await fetch(
            `${process.env.NEXTAUTH_URL}/api/auth/login`,
            {
              method: "POST",
              body: JSON.stringify({
                email: credentials?.email,
                password: credentials?.password,
              }),
              headers: { "Content-Type": "application/json" },
            }
          );
          if (!res.ok) {
            throw new Error("Failed to log in");
          }
          const user = await res.json();
          // Return user if login is successfu
          if (user) {
            return user;
          }
          return null;
        } catch (error) {
          console.error("Error in authorize:", error);
          return null;
        }
      },
    }),
    // ... other providers
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Merge user object into the token if available
      if (user) {
        return { ...token, ...user };
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token as any; // Pass the token data to the session
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Ensure redirection to the base URL plus a relative path
      if (url.startsWith(baseUrl)) {
        return url;
      } else if (url.startsWith("/")) {
        return baseUrl + url;
      }
      return baseUrl + "/keranjang"; // Default redirection
    },
  },
};
