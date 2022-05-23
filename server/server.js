const http = require('http');

const express = require('express'); //DOINSTALOWAC
const server = express();

const hostname = '127.0.0.1';
const port = 3500;

var cors = require('cors') //DOINSTALOWAC

server.use(cors())

server.get('/', (req, res) => {
  res.send('Polaczono z serwerem losowania jedzenia')
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



const { NULL } = require('mysql/lib/protocol/constants/types');

const knex = require('knex')({
    client:'mysql',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'admin',
        password: 'admin', //admin123
        database: 'mydb'
    }
})


var bodyParser = require('body-parser');
var jsonParser=bodyParser.json();



var restaurant = ""
server.post('/restauracja', jsonParser, function (req,res){
  if (req.body.restauracja == 1) restaurant = "McDonalds";
  else if (req.body.restauracja == 2) restaurant = "KFC";
  else {restaurant = "BurgerKing";}



  knex.select('*').from(req.body.produkt).where('restauracja',restaurant).orderByRaw('RAND()').limit(1).then(data => {

  
    //tutaj ma odbywac sie losowanie produktu
    
  
    res.send(data); //tu ma zostac wyslany produkt
  })
})






