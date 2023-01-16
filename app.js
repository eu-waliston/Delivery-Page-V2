const { urlencoded } = require('express');
const express = require('express');
const path = require('path')
const rootRouter = require('./src/routes/index')

const app = express();
app.use(express.json());
app.use(urlencoded({extended: true}))

app.use(express.static(__dirname + '/public'))
app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs');

app.use('/', rootRouter);

app.listen(3000, () => {
    console.log("App listening at port 3000");
})