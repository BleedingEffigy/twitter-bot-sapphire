import os
import time
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
con = sqlite3.connect('./prospects.db')
cur = con.cursor()

# check if prospects table exists, create it if it doesn't
cur.execute(''' SELECT count(name)  FROM sqlite_master WHERE type='table' AND name='prospects' ''')
if cur.fetchone()[0] == 0:
    cur.execute('''CREATE TABLE prospects
                    (date text, id integer)''')

# check if following table exists, create it if it doesn't
cur.execute(''' SELECT count(name)  FROM sqlite_master WHERE type='table' AND name='following' ''')
if cur.fetchone()[0] == 0:
    cur.execute('''CREATE TABLE following
                    (date text, id integer)''')

# check if unfollowed table exists, create it if it doesn't
# cur.execute(''' SELECT count(name)  FROM sqlite_master WHERE type='table' AND name='unfollowed' ''')
# if cur.fetchone()[0] == 0:
#     cur.execute('''CREATE TABLE unfollowed
#                     (date text, id integer)''')


######## Start of program

# create the tweet
message = """
How's it going #devcommunity? I'm making this post using tweepy, a #Python library for using the twitter api. I don't expect this to be so simple, but here we go!
"""

# 1 check if prospects table is running low and refill it

# 1.1 getting a list of followers, filtering out those in unfollowed table
followers = api.get_follower_ids(screen_name='ThePracticalDev')

# 1.2 lookup_users only accepts 100 users at a time
users = api.lookup_users(user_id=followers[0:90])

# 1.3 filter ids based on follower/friends ratio. 
filtered_users = list(filter(lambda x: x.followers_count/x.friends_count < 1,users))
print("length of filtered_users " + str(len(filtered_users)))
# 1.4 store the ids in the prospects table

# create query values 'user_records' from filtered users 
user_records = [(time.time(), user.id) for user in filtered_users]

# execute insertion with user_records and commit changes
cur.executemany('''INSERT INTO prospects VALUES (?, ?);''', user_records)
print("Rows inserted into prospects " + str(cur.rowcount))
con.commit()
# 2 retrieve and remove ids from the prospects table
prospects = cur.execute('''SELECT * FROM prospects;''')
# 3 follow these ids(prospects)

# 4 put prospects into the following table
# create query parameters from prospects, which is a db cursor
prospect_records = [(time.time(), row[1]) for row in prospects]
# insert values into following table and commit changes
cur.executemany('''INSERT INTO following VALUES (?, ?);''', prospect_records)
con.commit()

# 5 filter out following table for ids that have been followed for longer than a day. 
friends = cur.execute('''SELECT * FROM following;''')
friends_records = [(row[0], row[1]) for row in friends]
# prospect_ids = cur.execute("DELETE FROM prospects WHERE id=?", ([row[1] for row in prospects]))
expired_friends_records = list(filter(lambda x: x[0],friends_records))
# Put them in unfollowed table

# Store prospects in the following table


# unpack the list and store the head
head, *_ = followers
# user = api.lookup_users(user_id=[head])
# print(str(user[0].followers_count) + ' ' + str(user[0].friends_count))

#close connection to the db
con.close()