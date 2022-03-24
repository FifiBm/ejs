//run npm init
//npm i express
//in your package.json, change "main": "index.js" to "main": "app.js"
//create a basic server using const express, app.get, and app.listen

// const ejs = require('ejs');
// const express = require('express'); // require express dependency
// const app = express(); // invoke express function and assign to a variable
// const PORT = 8080; // The port the server will listen on
// const path = require('path');

// app.use('/', expresss.static(path.join(_dirname, '..', 'public')));

// app.post('/form-data', (req, res) => {
//     console.log(req.body);
// });

// app.listen(PORT, () => {
//     console.log(`Server listening on port: ${PORT}!`);
// });


// //use res.send to send "Welcome"

// app.get('/', (req, res) => {
//     res.status(200).send('Welcome');
// });


const express = require('express');
const app = express();

let ejs = require('ejs');

app.get("/game/: gameTitle/: gameCreator", function(req,res) {

    const title = req.params.gameTitle;
    const creator = req.params.gameCreator;

    res.render("game.ejs", {
        gameTitle: title
        gameCreator: creator
    });
})




app.get("/game", function(req, res) {  
    res.render("game.ejs", {
        gameTitle: title
        gameCreator: creator
    });
})

app.get("/gamelist", function(req, res) {

    const game = [
        {title: "fortnite", creator: "Epic Games"},
        {title: "Dirty Bomb", creator: "Splash Damage"},
        {title: "Battlefield V", creator: "EA"},
        {title: "Madden", creator: "EA"},
    ]

    res.render("gamelist.ejs", {
        gameList: games
    })
})

app.set('view engine', 'ejs')

app.listen("3000", function() {
    console.log("Website is now online")
})