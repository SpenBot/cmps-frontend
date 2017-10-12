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
