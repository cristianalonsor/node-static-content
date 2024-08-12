const express = require('express');
const app = express();
const hbs = require('hbs');
require('dotenv').config();
const port = process.env.PORT;

//  Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//  Middleware para servir el contenido estático -> se ejecuta antes del "/" por ende no se renderiza el hola mundo
app.use( express.static('public') )

app.get('/', function (req, res) {
  res.render('home', {
    nombre: 'Cristian Reyes',
    titulo: 'Curso de NODE'
  });
})

app.get('/generic', ( req, res ) => {
  res.render('generic', {
    nombre: 'Cristian Reyes',
    titulo: 'Curso de NODE'
  });
})

app.get('/elements', ( req, res ) => {
  res.render('elements', {
    nombre: 'Cristian Reyes',
    titulo: 'Curso de NODE'
  });
})

app.get('*', ( req, res ) => {
  //  Se debe enviar el path relativo (o sea donde se encuentra exacto la app)
  res.sendFile(__dirname + '/public/old/404.html');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})