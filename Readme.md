# Content Management System(Based React)

Technologies used : HTML,CSS,JAVASCRIPT,VITE+REACTJS, REACT ROUTER, NodeJs, Express, MySql, cors, axios, uuid, nodemon

Development Tools : MYSQL, VS Code, XAMPP(Mysql) 

"VITE + REACT" -> This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Pre Requisite -> 'Node Js' should be installed on the 

This website shows case basic CRUD functionality and implement very basic CMS website features

XAMPP was used to create mysql database on the local host

The query for the sql data base is ->
  CREATE TABLE users (
  id varchar(30) NOT NULL,
  name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  dob varchar(20) NOT NULL,
  phone bigint(10) NOT NULL
)

TO start the website follow these steps

1) WE go to CMS folder in VS Code
2) Open a terminal (front end)
3) Enter the command : 'npm i'
4) Enter the command : 'npm run dev'
5) Open a terminal (back end)
5) Enter the command : 'npm i'
6) Enter the command :  'npm start'
5) Click the url generated and it will take you to the website. (frontend terminal)
6) To terminate the website we enter "ctrl+ c" on terminal in vs code
7) Then type "y" and press enter

The website opens to a homepage Its consist of three elements in navbar which are (Add Users, View Users, Home) Each of these pages can be accessed by clicking on the name in navbar on the top middle as well, there is a widget showing current number of users.

# Home
![alt text](Home.png)

# Add Users
![alt text](<Add Users.png>)

# Edit Users
![alt text](<Edit Users.png>)

# View Users
![alt text](ViewUsers.png)