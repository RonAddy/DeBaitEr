***Aaron Bart-Addison / October 28th, 2017 ***
# "DeBaitEr" Proposal

![alt text][pic]

 [pic]: https://thephilosophyclub.files.wordpress.com/2016/03/calvin-cartoon.jpg?w=470


**An app for the 21st century millennial. The one who wants to get things of their chest about society.**

## Description
>I wanted to create this app to centralize the 'ever-so friendly' comment sections of the numerous applications out there, but giving users an incentive to generate and contribute to meaningful debates.

>The app will allow users to login, create username, and explore the different articles of the day. Each article will be displayed for a certain time limit. Any logged in user can enter the debate section to add their opinions and read other users opinions. Users can like other users statements and the user with the most likes by the end of the debate will be crowned the King deBAITer. Users won debates will be logged in database.

## User Stories

>Users will have to Register before being able to use the application. Once logged-in, users will have access to the main feed, which will populate all the debates going on. Users can create a topic, edit before posting, delete a topic, and also read, add comments to ongoing debates

>In future versions, users will be able to like other users comments, top comments and debaiters will be displayed at the bottom of the page

## Technologies, API's, modules

>Languages, Frameworks: JavaScript, HTML, CSS, Node.js

>API's: News API

>Modules:
  
    "bcryptjs": Initializes the blowfish password encryption package for users

    "body-parser": Allows me to access and view data objects the way I want them to be viewed

    "cookie-parser":

    "dotenv": Will allow me to use an .env file to hide secret key

    "ejs": My scripting engine

    "express": Used to create my web server

    "express-session": "^1.15.6"

    "method-override": Will be used to have access to PUT and DELETE methods

    "morgan": Logger for request to server

    "passport" ,"passport-local": Will be used for user authentication

    "pg-promise": Will be used to communicate with server

    "socket.io": Real time communication

## Code Snippet Im proud of

```
<form action="/bait/discuss/<%=data.id%>" method="GET">
  <a><button type="submit" id="debait">DeBAIT !</button></a>
  <a><button id="delete">DELETE !</button></a>
</form>
```

```
baitController.showDiscuss = (req, res) => {
  Bait.findById(req.params.id)
    .then( bait => {
      res.render('user-bait/bait-discuss', {data: bait});
    })
    .catch(err => {
      res.status(500).send({error: err});
    });
};
```

```
baitRoutes.get('/discuss/:id',baitController.showDiscuss)
```

## Wireframe

(Your wireframes go here. Preferably two or more)

## Initial thoughts on app structure

>Working with the sockets.io package will probably be the biggest challenge for me. I want to delve into the documentation and see the possibilities. I also need to figure out a working 'like' system as this is one of the main parts of the app.

## Phases of Completion

>Pre-Work
PHASE 1: Wireframes
PHASE 2: Figure out database structure, needed tables.
PHASE 3: Confirm News API limitations, possibilities

>Work
PHASE 1: Set-up migrations, database etc.
PHASE 2: Build file structures
PHASE 3: Follow MVC design pattern
PHASE 4: Styling!

Links and Resources
