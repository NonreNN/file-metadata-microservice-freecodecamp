const express = require('express');
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });
const path = require('path')
const pug = require('pug')

const app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.get('/', function (req, res,) {
    res.render('index')
})

app.post('/', upload.single('file'), function (req, res, next) {
    res.json({size : req.file.size})
})

app.listen(process.env.PORT || 3000);