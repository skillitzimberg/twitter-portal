# PLANNING

## Wireframes

### HOME VIEW

![](./twitter_home.jpg)

### SEARCH VIEW

The vertical card carousel that changes the card size depending on its position in the parent may be a stretch goal.
![](./twitter_search.jpg)

### RANDOM VIEW

![](./twitter_random.jpg)

## Steps to Complete

### BASIC SET UP

- Create a new project with `dotnet`‘s `new React`
- Remove any React components or logic that won't be repurposed.

### USER INTERFACE

- HEADER

  - √ Create a Header component that imports a Nav component
  - √ Add Logo image or element

- NAVIGATION
  - √ Create a Nav component
  - √ Links to:
    - Home
    - Search
    - Random
  - √ Add Logo linking to Home
- HOME
  - Create a Home component with static content
    - Photo by <a href="https://unsplash.com/@the_real_napster?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dominik Lange</a> on <a href="https://unsplash.com/s/photos/bird?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- SEARCH
  - Create a Search component with static content
  - Create Tweet cards with mock response data
- RANDOM
  - Create a Random component with static content
  - Reuse Tweet card with mock random response data

### ROUTING

- Set up routing to Home
- Set up routing to Search
- Set up routing to Random

### INTERNAL API

- SEARCH
  - Create mock data file representing search results
  - Create a Model representing Tweet data
  - Set up controller to GET search results
  -
- RANDOM

### TWITTER API

- SEARCH
- RANDOM

### STYLING

- HEADER
- HOME
- SEARCH
- RANDOM

## Test Cases

- HOME:

  1.  When a USER visits the HOME page:
      - Show a site-wide navigation menu
      - Show the splash page describing the application
  2.  When a USER clicks the link for the SEARCH page:
      - Navigate to the SEARCH view
  3.  When a USER clicks the link for the RANDOM page:
      - Navigate to the RANDOM view

- SEARCH:

  1.  When a USER navigates to the SEARCH page:
      - Offer a way for the USER to search for tweets by
        - username
        - content
  2.  When a USER enters a search
      - Request relevant searches from the Twitter API
      - Display 5 - 10 tweets from the response in cards

- RANDOM:
  1.  When a USER navigates to the RANDOM page:
      - Offer a way for the USER to get a random tweet from a pre-selected set of Twitter users
  2.  When the USER requests a random tweet:
      - request a tweet from the Twitter API
      - display the response in a card

### TEST CASE PSEUDO CODE

- HOME:

  1.  When a USER visits the HOME page:
      - Show a site-wide navigation menu
      - Show the splash page describing the application
  2.  When a USER clicks the link for the SEARCH page:
      - Navigate to the SEARCH view
  3.  When a USER clicks the link for the RANDOM page:
      - Navigate to the RANDOM view

- SEARCH:

  1.  When a USER navigates to the SEARCH page:
      - Offer a way for the USER to search for tweets by
        - username
        - content
  2.  When a USER enters a search
      - Request relevant searches from the Twitter API
      - Display 5 - 10 tweets from the response in cards

- RANDOM:
  1.  When a USER navigates to the RANDOM page:
      - Offer a way for the USER to get a random tweet from a pre-selected set of Twitter users
  2.  When the USER requests a random tweet:
      - request a tweet from the Twitter API
      - display the response in a card

## Known unknowns

- How to make a vertical card carousel >> just start with a normal page scroll view
- Routing in React >> follow the logic laid out in the .NET React app template

## Unknown unknowns

## TODO

Get user by username:

- (simple) https://api.twitter.com/2/users/by/username/:username
- (more data) https://api.twitter.com/2/users/by/username/:username?user.fields=created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,url,username,verified,withheld&expansions=pinned_tweet_id&tweet.fields=attachments,author_id,conversation_id,created_at,entities,geo,id,in_reply_to_user_id,lang,possibly_sensitive,referenced_tweets,source,text,withheld
  Get tweets by userId:

- https://api.twitter.com/2/users/:id/tweets;

## Googled

- `css background image full screen`:

  - https://css-tricks.com/perfect-full-page-background-image/;

- `react img src`:

  - https://stackoverflow.com/a/39999421/3530078;

- `.NET controller pattern {action=Index}`:

  - https://docs.microsoft.com/en-us/aspnet/core/mvc/controllers/routing?view=aspnetcore-5.0;
  - https://learning.postman.com/docs/sending-requests/intro-to-collections/;

- `postman collection`:

  - https://thinkster.io/tutorials/testing-backend-apis-with-postman/using-collections-in-postman;
  - https://learning.postman.com/docs/sending-requests/intro-to-collections/;

- `twitter search tweets by user`:

  - https://developer.twitter.com/en/docs/twitter-api/v1/tweets/search/overview;
  - https://developer.twitter.com/en/docs/twitter-api/tweets/search/introduction;
  - https://developer.twitter.com/en/portal/products;
  - https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/introduction;
  - https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/quick-start;

- `transient vs singleton`:

  - https://stackoverflow.com/questions/38138100/addtransient-addscoped-and-addsingleton-services-differences;

- `c# .NET using()`:

  - https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/using-statement;
  - https://docs.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-5.0;

- `.NET WebHostEnvironment.ContentRootPath`:

  - https://mariusschulz.com/blog/getting-the-web-root-path-and-the-content-root-path-in-asp-net-core;

- `twitter api expansions`:
  - https://developer.twitter.com/en/docs/twitter-api/expansions;
  - https://developer.twitter.com/en/docs/labs/expansions;
  - https://developer.twitter.com/en/docs/twitter-api/fields;
  - https://developer.twitter.com/en/docs/labs/fields;
