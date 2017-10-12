#README

##Description
CMPS (Cinema Movie Play Schedule) is a full-stack application that pulls movies
playing in Washington, DC and their showtimes from tmsapi.com, displaying them
for the user. CMPS also allows users to create accounts and sign in and out.

If you find yourself in looking for a movie to watch in Washington, DC, use
CMPS.

##Example

Here are images of CMPS running in the browser:

##Features

-User Sidebar Component that creates new user
-Header and nav bar that redirects to App home and user profile page
-Movie dropdown that pulls from api; if movie selected, displays showtimes
-Sign in section
-Sign out button
-User profile section that displays user photo, name, and photo url

##Technologies Used

CMPS uses a React front-end and Express backend along with moment and axios
dependencies.

##Installation instructions

You can run the project in your browser by going to https://cmps-backend.herokuapp.com/

If you want to run the app locally, follow the following instructions:

(Mac)
1. Go to https://github.com/SpenBot/cmps-backend and fork the repository
2. Install Mongo and nodemon globally using these instructions:
https://treehouse.github.io/installation-guides/mac/mongo-mac.html
https://www.npmjs.com/package/nodemon
4. Run the following bash commands in your terminal after you change into the
directory where you want to store this back-end repository:
  ```bash
  $ git clone git@github.com:SpenBot/cmps-backend.git
  $ cd cmps-backend
  $ npm install
  ```
5. Open a new tab in your terminal, and
 in that new tab, run this bash command:
  ```bash
  $ mongod
  ```
6. In the first tab, run the following bash command:
  ```bash
  $ nodemon
  ```
7. Fork this repository (cmps-frontend)
8. Open a new terminal tab, and in that tab, run the following bash commands in
your terminal after you change into the directory where you want to store this
front-end repository:
  ```bash
  $ git clone git@github.com:blinkhorn/cmps-frontend.git
  $ cd cmps-frontend
  $ npm install
  ```
9. Run the app using the following bash command:
```bash
$ npm start
```

##Contribution Guidelines

To contribute to our code, identify bugs, and propose improvements, please
submit issues to the back-end [here](https://github.com/SpenBot/cmps-backend/issues "cmps-backend issues") and front-end [here](https://github.com/blinkhorn/cmps-frontend/issues "cmps-frontend issues").

##Group Member Roles

Spenser and Melley worked on the back-end and Patrick and Christian worked on
the front-end when we first started. When Spenser and Melley finished the
back-end (which includes linking the movie API to the dropdown on the homepage
and programming the results component),they helped Patrick and Christian with
the front-end. Much of the time we worked using the driver and navigator
technique in pairs, trading the coding and overseeing roles after lunch every
day. After Melley and Spenser finished the back-end, Spenser worked on user
sign-in functionality. Melley worked on the CSS styling for the site and worked
on the MovieID. Christian and Patrick programmed the user sidebar along with
other components that we didn't end up using. Patrick deployed the
back-end and front-end to Heroku and composed this Readme.Christian worked on
the delete portion of the CRUD functionality for users.
