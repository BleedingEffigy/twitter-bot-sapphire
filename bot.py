import os
import tweepy
from dotenv import load_dotenv

# load environment variables from .env
load_dotenv()

# Authenticate to Twitter
auth = tweepy.OAuthHandler(os.getenv("API_KEY"), 
    os.getenv("API_SECRET"))
auth.set_access_token(os.getenv("ACCESS_TOKEN"), 
    os.getenv("ACCESS_TOKEN_SECRET"))

api = tweepy.API(auth)

try:
    api.verify_credentials()
    print("Authentication OK")
except:
    print("Error during authentication")

# create the tweet
message = """
How's it going #devcommunity? I'm making this post using tweepy, a #Python library for using the twitter api. I don't expect this to be so simple, but here we go!
"""

# getting top trend
twitter_trends = api.get_place_trends(23424977)
# for trend in twitter_trends[0]['trends']:
#     print(trend)
top_trend = twitter_trends[0]['trends'][0]
print(top_trend)
status = api.update_status(message + f" The top trend right now is {top_trend['name']}")
print(status)