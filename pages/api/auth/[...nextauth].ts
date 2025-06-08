import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  pages: {
    signIn: "/",
  },
  callbacks: {
    async redirect({ url, baseUrl }: any) {
      return `${baseUrl}/`;
    },
    async signIn({ user, account }: any) {
      if (!user.email) return false;

      const existingUser = await prisma.user.findUnique({
        where: { email: user.email },
      });

      if (!existingUser) {
        const generatedUsername =
          user.email.split("@")[0] + "-" + Math.floor(Math.random() * 1000);

        await prisma.user.create({
          data: {
            fullName: user.name || "Google User",
            username: generatedUsername,
            email: user.email,
            googleId: account?.providerAccountId,
            profile: user.image,
          },
        });
      }

      return true;
    },
  },
};

export default NextAuth(authOptions);
