import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import TwitterProvider from 'next-auth/providers/twitter'
import {JWTOptions} from 'next-auth/jwt'


const options = {
  site: process.env.NEXTAUTH_URL,
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CONSUMER_KEY!,
      clientSecret: process.env.TWITTER_CONSUMER_SECRET!,
    }),
  ],
  pages: {
    signIn: '/',
  },
  debug: process.env.NODE_ENV === 'development',
  callbacks: {
    async jwt({token, account}: any){
      // To account for multiple providers
      // if ( account.provider && !token[account.provider] ) {
      //   token[account.provider] = {};
      // }

      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.oauth_token = account.oauth_token;
        token.oauth_token_secret = account.oauth_token_secret;
      }
      return token;
    },
  }
}

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options)