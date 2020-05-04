## Eat-Da-Burger!
A Node, Express, Handlebars, MySQL, and an MVC Design Pattern Burger app that lets users input the names of burgers they'd like to eat... and then devour them! Please check out the launched app on Heroku linked above!


## Getting Started:
Download the "images" folder to visualize each command given.
This will allow you to better see how Eat-Da-Burger works.


## Actions:
* Whenever a user submits a burger's name, your app will display the burger on the
 the left side of the page -- waiting to be bought.

* Each burger in the waiting area also has a `Buy` button. When the user
 clicks it, the burger will move to the right side of the page waiting to be removed.

* The app will store every burger in a database, whether devoured or not.


## DEMO:
This application demonstrates a simple full-stack application with a front end implemented with HTML/CSS and elements from the Bootstrap framework and the backend implemented with Node.js and Express. HTML template is done with the help of Handlebars.
![Screen shot](/images/DEMO.gif)


## Back-End:
The user may enter any burger name to add it to the menu. This also adds the new burger entry into the MySQL database. The initial burger entry is added as available on the menu and placed on the left side of the screen. The user may then eat/ delete any burger by clicking on it, which moves it into the adjacent column and updates its status accordingly in the database.
![Screen shot](/images/BACKEND.png)


## Directory Structure
All The Recommended Files And Directories Should Look Like The Following Structure:

```
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   ├── assets
│       ├── css
│       │   └── burger_style.css
│       ├── img
│       │   └── burgerpic2.png
│       └── js
│           └── burgers.js
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```


## Technologies & Concepts Used:
* Model-View-Controller (MVC)
* Object Relational Mapping (ORM)
* Express.js
* HTTP Requests (GET, POST)
* Routes & Static Content
* Handlebars Engine Integration
* Node.js
* Backend API Calls
* Handlebars Templates & Layouts
* MySQL
* NPM Packages: 
 +  mysql@2.18.1 (https://www.npmjs.com/package/mysql)
 +  body-parser@1.19.0(https://www.npmjs.com/package/body-parser)
 +  express-handlebars@4.0.4(https://www.npmjs.com/package/express-handlebars)
 +  express@4.17.1(https://www.npmjs.com/package/express)

# Burger Ordering Application - Made by Muhammad Ali.