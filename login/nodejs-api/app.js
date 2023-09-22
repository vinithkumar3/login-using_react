
const express = require('express');
var cors = require('cors')
var app = express()
app.use(cors())
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.get('/data', (req, res) =>{
  console.log("uu")
  res.send("success")
})
app.post('/', jsonParser,(req, res) => {
  const { username, password } = req.body;
  console.log(username, password)
    if (username === 'vinith' && password === '12345') {
    res.send('Login successful');
  } else {
    res.status(401).send('Invalid credentials');
  }
  });
  const port = 3002; // You can change the port number if needed
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});