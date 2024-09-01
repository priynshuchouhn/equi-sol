import type { NextAuthConfig } from 'next-auth';
import prisma from '@/lib/db';




async function saveUserToDatabase(userInfo: any) {
  const existingUser = await prisma.user.findUnique({
    where: { email: userInfo.email },
  });

  if (!existingUser) {
    // If the user doesn't exist, create a new record
    const user = await prisma.user.create({
      data: {
        name: userInfo.name,
        email: userInfo.email,
        profileImageUrl: userInfo.image,
        provider: userInfo.provider,
        providerAccountId: userInfo.providerAccountId,
      },
    });

    return user
  }
  return existingUser;
}

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  }, jwt: {
    maxAge: 30 * 24 * 60 * 60
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

      const DbUser = await saveUserToDatabase(userData);
      console.log(user, DbUser)

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
      session.user.id = token.id as string;
      session.user.name = token.name;
      session.user.email = token.email as string;
      session.user.image = token.image as string;
      return session;
    },
    async jwt({ token, user, account, profile, }) {
      if (user) {
        const userData = {
          name: user.name,
          email: user.email,
          image: user.image,
          provider: account?.provider,
          providerAccountId: account?.providerAccountId,
        };

        const DbUser = await saveUserToDatabase(userData);

        // Add DbUser data to the token
        token.id = DbUser.userId;
        token.name = DbUser.name;
        token.email = DbUser.email;
        token.image = DbUser.profileImageUrl;
      }

      return token;
    }
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;