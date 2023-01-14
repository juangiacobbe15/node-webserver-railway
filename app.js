const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Serving static content
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('home', {
        name: 'Juan',
        title: 'Node course'
    });
});

app.get('/generic', function(req, res) {
    res.render('generic', {
        name: 'Juan',
        title: 'Node course'
    });
});

app.get('/elements', function(req, res) {
    res.render('elements', {
        name: 'Juan',
        title: 'Node course'
    });
});

app.listen(port, () => {
    console.log( `App listening at http://localhost:${port}`);
});