import express from "express"
import env from 'dotenv'
import web from './routes/web.js'
const app = express()
env.config()
const port = process.env.PORT

app.listen(port, () => {
    console.log(`Listen On port ${port}`)
})

web(app)

