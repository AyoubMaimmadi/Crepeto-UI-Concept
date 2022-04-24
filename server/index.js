// Server imports and setup
const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()

const router = require('./router')
const cors = require('cors')

app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json({ type: '*/*' }))
router(app)

const port = 3090
const server = http.createServer(app)
server.listen(port)
console.log(`Server running on: http://localhost:${port}`)
