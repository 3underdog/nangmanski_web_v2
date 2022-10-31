/* eslint-disable */
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getAccessToken, getUserInformationByToken } from '@/pages/api/index';
import { UserType } from '@/pages/api/auth/userType';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials, req) {
        // JWT token 받아오기
        const accessToken = await getAccessToken(credentials).then(function (
          response
        ) {
          return response;
        });
        console.log('\n token : ', accessToken);

        // 토큰으로 유저 정보 가져오기
        const userInfo = await getUserInformationByToken(accessToken).then(
          function (response) {
            return response;
          }
        );

        // 유저정보 리턴
        if (userInfo) {
          userInfo['accessToken'] = accessToken;
          return userInfo;
        } else {
          throw new Error('Incorrect Credentials');
          // return null;
        }
      },
    }),
  ],

  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }) => {
      // maxAge: 5;
      session.user = token.user;
      return session;
    },
  },
  pages: {
    signIn: '/auth/login',
  },
  secret: process.env.SECRET,
});
