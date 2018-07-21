'use strict'

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
})

app.get('/404', (req, res) => {
  res.status(404).sendFile(`${__dirname}/index.html`);
})

app.get('/photo', (req, res) => {
  res.sendFile(`${__dirname}/media/photo.jpg`);
})

// app.listen(3000) // <-- comment this line out from your app

module.exports = app // export your app so aws-serverless-express can use it