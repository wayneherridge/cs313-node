// load the things we need
var express = require('express');

var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// index page 
app.get('/', function (req, res) {
    var drinks = [
        { name: 'Coke', caffeine: 5 },
        { name: 'Lucozade', caffeine: 3 },
        { name: 'Dr Pepper', caffeine: 9 }
    ];

    var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

    // use res.render to load up an ejs view file

    res.render('pages/index', {
        drinks: drinks,
        tagline: tagline
    });
});

// about page 
app.get('/about', function (req, res) {
    res.render('pages/about');
});

app.listen(8400);
console.log('8400 is the magic port');