import os
import sqlite3
import tweepy
from dotenv import load_dotenv

# load environment variables from .env
load_dotenv()

# Authenticate to Twitter
auth = tweepy.OAuthHandler(os.getenv("API_KEY"), 
    os.getenv("API_SECRET"))
auth.set_access_token(os.getenv("ACCESS_TOKEN"), 
    os.getenv("ACCESS_TOKEN_SECRET"))

# instantiate v1.1 api 
api = tweepy.API(auth)

#verify credentials work
try:
    api.verify_credentials()
    print("Authentication OK")
except:
    print("Error during authentication")

# connect to DB
con = sqlite3.connect('prospects.db')
cur = con.cursor()

######## Start of program

# create the tweet
message = """
How's it going #devcommunity? I'm making this post using tweepy, a #Python library for using the twitter api. I don't expect this to be so simple, but here we go!
"""

# check if prospects table is running low and refill it

# getting a list of followers, filtering out those in unfollowed table
followers = api.get_follower_ids(screen_name='ThePracticalDev')

# filter ids based on follower/friends ratio
users = api.lookup_users(user_id=followers[0:50])
print(users)
# store the ids in the prospects table

# retrieve and remove ids from the prospects table

# follow these filtered ids, and store them in the following table

# filter following table for ids that have been followed for longer than a day. Put them in unfollowed table


# unpack the list and store the head
head, *_ = followers
# user = api.lookup_users(user_id=[head])
# print(str(user[0].followers_count) + ' ' + str(user[0].friends_count))
