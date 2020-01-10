#qtest


1. code is set up from scratch no boilerplate and react-app is used while setting up the code

2. test cases are also set up and written only for 2 file which include saga and reducer

3. Not hosted on gh-pages

To run the code download the code from repo or you can take the clone then after that do the following step

1. npm i
2. npm run start

To run the test cases run the following command

1. npm run test

Following is the functionality

App has 4 pages

1. Home pages - dispaly a message and login button
2. Login link is provided in the header
3. on Login page no client side validation is run, but if there is some unsuccessful         login an error msg is displayed
4. After a successful login user is redirected to users dashboard page where he can see      the list of all users, with pagination
5. To see the detail of user need to click on the user pic.
6. For Loading a loading msg is used. 