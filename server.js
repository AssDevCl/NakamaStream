const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');

const indexRouter = require('./src/routes/indexRouter');
const authRouter = require('./src/routes/authRouter');
const dashboardRouter = require('./src/routes/dashboardRouter');

const db = require('./src/services/db');

const app = express();

app.use(session({
  secret: 'tu_secreto',
  resave: true,
  saveUninitialized: true
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/', authRouter);
app.use('/', dashboardRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
