const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3001;

app.use(express.static('public'));
app.use(bodyParser.json());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.post('/', function (req, res) {
  console.log(req.body);
  res.send('POST request to the homepage')
})
