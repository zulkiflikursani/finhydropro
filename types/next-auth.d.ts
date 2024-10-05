import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      nama: string;
      email: string;
      level: number;
      customer_company: string;
      no_telpon: string;
      alamat: string;
      status: string;
    };
  }
}
