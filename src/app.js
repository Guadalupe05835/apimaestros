const express = require('express');
const { engine } = require('express-handlebars');
const myconnection = require('express-myconnection');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const tasksRoutes = require('./routes/tasks');

const app = express();
app.set('port', 4000);

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.set('views', __dirname + '/views');
app.engine('.hbs', engine({
  extname: '.hbs',
}));
app.set('view engine', 'hbs');

app.use(myconnection(mysql, {
  host: 'aws.connect.psdb.cloud',
  user: 'sfp3vok1a3n9mlbi7aul',
  password: 'pscale_pw_r7CDmgV7zjJXXPbrgHSqtYxc1Vd2ERTL2QtBqE3BIcu',
  port: 3306,
  database: 'crudnodejs',
  ssl : true
}, 'single'));

app.listen(app.get('port'), () => {
  console.log('Listening on port ', app.get('port'));
});

app.use('/', tasksRoutes);

app.get('/', (req, res) => {
  res.render('home');
});