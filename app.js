const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

const USER = { username: 'admin', password: 'admin123' };

app.get('/', (req, res) => res.render('login'));

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  res.send(username === USER.username && password === USER.password
    ? 'Login Successful 🎉'
    : 'Invalid Credentials ❌');
});

app.listen(3000, () => console.log('Running on http://localhost:3000'));
