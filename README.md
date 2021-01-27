# WorkoutApp

## User Story
As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<img src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/><img src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/><img src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/><img src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>

[Link to Deployed app](https://immense-escarpment-41710.herokuapp.com/burgers)

## Description 

As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

This project is a fullstack application that tracks the users workouts and provides visual data to track progress. The application uses node.js, express, MongoDB and mongoose.

### Table Of Contents

-[Description](#Description)

-[Technologies](#Technologies)
   
-[Usages](#Usages)

-[Visuals](#Visuals)

-[Credits](#Credits)

-[License](#License) 

## Technologies

<details>
<summary>Expand to see technologies used</summary>

## Javascript

Javascript was use to make most of the program between nodeJS and jQuery. The front end functionality was provided to us.

### Mongodb

This was the application that we use to store our data, it is a noSql data base. It uses BSON objects when storing data or Binary Javascript Object Notation. When working locally, the robo app help us to see the data base and what was been stored in the collections as well as the break down of the object being stored.

### JQuery

I used jquery to help grab the data that the user input. It also gets other elements on the page, so that they can be manipulated. Each function that created has a corresponding route on the backend to help with the manipulation of the data being selected by the jQuery.

### Node

I used node to initialize package.json. After the initialization, I added mongoose, morgan, and express.  Also used node to make a connection with the data base.  We also use it to spin up a server instance. 

### NPM

I used npm to install the following dependencies mongoose, morgan, and express. 

#### **Mongoose**

I used this to query data from our mongo data base. I also used it to create a schema as well as methods for the schema to help with total duration of the workout (combining all the exercises in the workout).

#### **Express**

Express made coding this application much easier. I made use of the express function through a variable named route.  It helped to reduce the amount of code needed to make requests and responses.  I built routes and stored them in the routes files. I used the express router function to make it easier to set up the requests. 

## HTML

This was provided to us, there were three html pages. Just used HTML5 and also used cdn of "charts" to help display the data on the stats page

## CSS

This was provided for us. It was use to position and style some of the html layouts.

</details>

## Usages

To help keep track of a persons workouts. You are able to track each exercise individually so that they are combined in 

## Installation Instructions

This app is deployed. If you do want to add it locally. After forking and cloning the repository, you'll just need to run the following code:

    npm i

### Visuals

<details>
<summary>Screen Shots and Gif with Video link</summary>

![Index Page](./public/img/index.png)

![Stats Page](./public/img/stats.png)

![Exercise Page cardio](./public/img/cardio.png)

![Exercise Page resistance](./public/img/resistance.png)


Click on the gif to be linked to the video

[![Gif of video](./public/img/fitnessTracker.gif)](https://drive.google.com/file/d/1gxIVTaGGQ1s8iOfuiRzn6souWQxnQH1c/view)


</details>

## Credits

* [MongoDB](https://docs.mongodb.com/manual/tutorial/query-documents/)
* [npm Documents](https://www.npmjs.com/)
* [Express.js](https://expressjs.com/)
* [Mongoose](https://mongoosejs.com/docs/api)
* [Stack Overflow](https://stackoverflow.com/)
* [W3Schools](https://www.w3schools.com/sql/default.asp)

## License

MIT License

Copyright (c) 2020 David Wylie

## Contact

* [David Wylie Github](https://github.com/wyliedavid1984)