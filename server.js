require('dotenv').config()
require('./config/database')
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')

const app = express()


const PORT = process.env.PORT || 3001

app.use(logger('dev'))
app.use(express.json())



app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))
// app.use((req, res, next) => {
//     res.locals.date = {}
//     next()   
// })
// app.use('/api/items', require('./routes/api/items'))
app.use('/api/users', require('./routes/api/users'))
 
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})


app.listen(PORT, () => {
    console.log(`I'm am listening on ${PORT}. We In the House`)
})