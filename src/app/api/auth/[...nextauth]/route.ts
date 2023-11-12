import NextAuth, { NextAuthOptions } from "next-auth";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "local_user",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if (!user) return null;

        const passwordsMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!passwordsMatch) return null;

        console.log("user", user);

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  // this option is actually not required, since no adapter is specified the strategy is jwt by default
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user, account, profile }) {
      // TODO: right now the jwt sent is the default, might need to add some fields to its payload (user role?)
      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
