const path = require('path')
const express = require('express')


let app = express()

// app.get('/', (req, res) => {
//
//   res.sendFile(path.resolve('index.html'));
// })

const indexPath = path.join(__dirname, '/../index.html')
app.get('/', function (_, res) { res.sendFile(indexPath) })

const publicPath = express.static(path.join(__dirname, '../public'))
app.use('/public', publicPath)

app.listen((process.env.PORT || 3000))
