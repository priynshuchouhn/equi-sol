import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import google from 'next-auth/providers/google';
 
export const { auth, handlers, signIn, signOut } = NextAuth({
  ...authConfig,
  providers:[google]
});