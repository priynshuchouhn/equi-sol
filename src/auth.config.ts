import type { NextAuthConfig } from 'next-auth';
import prisma from '@/lib/db';




async function saveUserToDatabase(userInfo:any) {
  const existingUser = await prisma.user.findUnique({
    where: { email: userInfo.email },
  });

  if (!existingUser) {
    // If the user doesn't exist, create a new record
    await prisma.user.create({
      data: {
        name: userInfo.name,
        email: userInfo.email,
        profileImageUrl: userInfo.image,
        provider: userInfo.provider,
        providerAccountId: userInfo.providerAccountId,
      },
    });
  }
}

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      // This callback is triggered on successful sign-in.
      // console.log(user, account, profile)
      const userData = {
        name: user.name,
        email: user.email,
        image: user.image,
        provider: account?.provider,
        providerAccountId: account?.providerAccountId,
      };

      await saveUserToDatabase(userData);

      return true;
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        // return Response.redirect(new URL('/dashboard', nextUrl));
        return true
      }
      return false;
    },
    async session({ session, user, token }) {
      return session
    },
    async jwt({ token, user, account, profile, }) {
      return token
    }
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;