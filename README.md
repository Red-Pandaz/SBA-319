# SBA 319

## Project Description
This repository was created to fulfill the requirements of SBA-319.
A database with 3 collections was made to mimic the structure of a basic web forum.

## How to Use
### Users
**Create**: Submit a POST request to /users/ with the following body:

`{
    "username": YOUR_NEW_USERNAME
}`

**Read**: Submit a GET request to /users/

**Update**: Submit a PUT request to /users/ with the following body:

`{
    "username": UPDATED_USERNAME
}`

**Delete** Submit a DELETE request to /users/ID_TO_DELETE

### Posts
**Create**: Submit a POST request to /posts/ with the following body:

`{
    "postContent": POST_CONTENT,
    "poster": USER_ID
}`

**Read**: Submit a GET request to /posts/

**Update**: Submit a PUT request to /posts/ID_TO_UPDATE with the following body:

`{
    "postContent": UPDATED_POST_CONTENT,
    "poster": UPDATED_USER_ID
}`

**Delete** Submit a DELETE request to /posts/ID_TO_DELETE

### Users
**Create**: Submit a POST request to // with the following body:

`{
    "commentContent": COMMENT_CONTENT,
    "post": POST_ID
    "commenter": USER_ID
}`

**Read**: Submit a GET request to //

**Update**: Submit a PUT request to // with the following body:

`{
    "commentContent": UPDATED_COMMENT_CONTENT,
    "post": UPDATED_POST_ID
    "commenter": UPDATED_USER_ID
}`

**Delete** Submit a DELETE request to /comments/ID_TO_DELETE

## Technologies Used
MongoDB/Mongoose

Express
