const express = require('express')
const app = express()

const path = require('path') // ?

const hbs = require('express-handlebars');

app.use(express.json())

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts',
}))

// setup static public directory
//app.use(express.static('public'));
app.use('/public', express.static(path.join(__dirname, 'public')))

// bodyParser ?

const articleRoutes = require('./routes/articles')
app.use('/', articleRoutes)

app.listen(3001, () => {
    console.log('App is started at http://localhost:3001')
})