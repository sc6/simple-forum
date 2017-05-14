## Simple-Forum

A project by Steve Chang - February 12, 2017

### Instructions
Enter the `simple-forum` directory and `npm start`.

### Goals
Simple-Forum is a project I wanted to do for a while. Any virtual community needs a message board in order to thrive and grow its following. My web projects are no exception. This project would make it easy to deploy a base forum system and then apply specific styles to match a project's theme. This is something I'll be chipping away at very slowly.

5/14/2017: Changed front-end to use ReactJS.

### Tech
- ReactJS

### Roadmap
- ~~Setup a database on AWS, deploy initial app on EBS, and hope it works.~~
- Develop UI for a user info page.
- Develop UI for a thread.
- Hook up backend for posting a thread and updating user info accordingly.
- Develop UI for a thread-group.
- ~~Finish post creation interaction.~~

### Database Schema
Users:
- (ID)
- username
- email
- points
- title
- Name color
- Border color
- Background color
- Text color
- Text decoration
- Date joined
- Date last login
- Number of Posts (not a column, tallied from `Posts` table)

Threads:
- (ID)
- Title
- Number of Posts (not a column, tallied from `Posts` table)

Posts:
- (ID)
- ((userID))
- content
- views

UserTrophies:
- (ID)
- ((trophyID))
- ((userID))

Trophies:
- (ID)
- name
- ImageURL

ThankedPosts:
- (ID)
- ((postID))
- ((userID))

UserPage:
- (ID)
- ((userID))
- views

### Justifications
- This forum will be gameified, something I'm interested in. Points will be awarded for interacting or logging in each day. I will do AB testing to see what works best.
- Users will not have an avatar picture. They will instead have post styles awarded to them. (Gold background, etc.) This will incentivize earning points.