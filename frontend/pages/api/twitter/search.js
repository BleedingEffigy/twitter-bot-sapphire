import { getSession } from 'next-auth/react'
import { getToken } from 'next-auth/jwt';
import Twitter from 'twitter-lite';


export default async (req, res) => {
    const body = JSON.parse(req.body);
    const { query } = body;

    const session = await getSession({ req });
    const token = await getToken({ req });
    
    const client = new Twitter({
        subdomain: 'api',
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token_key: token.oauth_token,
        access_token_secret: token.oauth_token_secret
      });

    try {
        const results = await client.get('users/search', {
            q: query
        });
        console.log(results)
        return res.status(200).json({
            status: 'Ok',
            data: results
        });
    } catch(e) {
      return res.status(400).json({
        status: e.message
      });
    }
  }