// Base utils
import bodyParser from 'body-parser'
import colors from 'colors/safe'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import express from 'express'
import http from 'http'
import morgan from 'morgan'

const PORT = process.env.PORT || 3001
// const SESSION_KEY = `t~$#z:.aNilzvrlfzEbJeyj*#17s3Ot~$#z:.aNilzvrlfzEbJeyj*#17s3O6.1sjd2o0_n8pR"mAXj27G*=Q-ki["`

// Init Express server.
process.setMaxListeners(0)

const app = express()
app.use(compression())
app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({
  extended: true,
  limit: '20mb',
}))
app.use(bodyParser.json({ limit: '20mb' }))
app.use(cookieParser())

// Sessions - WIP
/*
app.use(
  session({
    secret: SESSION_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: false,
      maxAge: null,
    },
  }),
)
*/

// Allow external calls to API.
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', process.env.BASE_URL)
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('X-Frame-Options', 'deny')
  next()
})

// Go time
const server = http.createServer(app)
server.listen(PORT)

console.log(
  colors.green(`HTTP Server started, listening at: http://localhost:${PORT}...`),
)
