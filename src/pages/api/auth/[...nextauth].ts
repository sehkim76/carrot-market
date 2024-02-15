import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import CredentialsProvider from "next-auth/providers/credentials";
import KakaoProvider from "next-auth/providers/kakao";
import prisma from "@/app/helpers/prismadb"
import bcrypt from 'bcryptjs';

//const prisma = new PrismaClient()

export const authOptions : NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
        // The name to display on the sign in form (e.g. "Sign in with...")
        name: "아이디/패스워드",
        // `credentials` is used to generate a form on the sign in page.
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          email: { label: "사용자 Email", type: "text", placeholder: "사용자 아이디를 입력하세요" },
          password: { label: "암호", type: "password" }
        },
        async authorize(credentials, req) {
          if ( !credentials?.email || !credentials?.password )
          {
            throw new Error('Invalid credentials');
          }

          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email
            }
          })

          if ( !user || !user?.hashedPassword ) {
            throw new Error('Invalid credentials');
          }

          const isCorrectPassword = await bcrypt.compare(
            credentials.password, user.hashedPassword);

            if ( !isCorrectPassword ) {
              throw new Error('Invalid credentials');
            }

          return user;
          /*
          // Add logic here to look up the user from the credentials supplied
          const user = { id: "1", name: "J Smith", email: "jsmith@example.com", role: "User" }
    
          if (user) {
            // Any object returned will be saved in `user` property of the JWT
            return user
          } else {
            // If you return null then an error will be displayed advising the user to check their details.
            return null
    
            // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
          }
          */

        }
      })
  ],
  session: {
    strategy: "jwt"
  },
  jwt: {
    secret: 'secret',
    maxAge: 30 * 24 * 60 * 60
  },
  callbacks: {
    async jwt({token, user})
    {
        console.log('[nextauth] token', token);
        console.log('[nextauth] user', user);
        return { ...token, ...user}
    },
    async session({session, token}) {
        session.user = token;
        return session;
    }
  },
  pages: {
    signIn: '/auth/login'
  },
}

export default NextAuth(authOptions);