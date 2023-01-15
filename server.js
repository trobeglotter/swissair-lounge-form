const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');


app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log('Hello, world');
    res.render('index.ejs');
});

app.listen(port, () => {
    console.log('App listening to port 3000');
})






