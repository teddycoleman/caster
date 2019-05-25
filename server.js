const express = require('express');
const mysql = require('mysql');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'me',
  password: 'secret',
  database: 'my_db',
});

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'dist')));

// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }

//   console.log('connected as id ' + connection.threadId);
// });

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.get('/podcasts', function (req, res) {
  res.send(200);
});

app.listen(port);
