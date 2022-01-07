const express = require('express');
const app = express();


/*  Middleware */
app.use(express.static('public'));

/* VIEWS */
/* app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views')); */

/* Enrutadores */
let homeRouter = require('./routers/homeRouter') 


/* Rutas */
/* app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, `/views/home.html`))
}) */

app.use('/', homeRouter)


app.listen(3000, ()=>{
    console.log('Servidor funcionando');
    });
    