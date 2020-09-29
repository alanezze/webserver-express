const express = require('express')
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));


//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


//configuraciond e HEROKU
//crear el puerto como constante, cambiarlo el app.use y crear start en el package.json\
//crear todo como git (crear .gitignore , ejecutar: git init, git add. y por ultimo git commit -m "xNOMBREx")
const port = process.env.PORT || 3000;



let a = {
    nombre: 'alan',
    anio: new Date
};

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'alan'
    });
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.listen(port, () => {
    console.log(`escuchando puerto ${port}`);
}); //se cambia el 3000 por el port