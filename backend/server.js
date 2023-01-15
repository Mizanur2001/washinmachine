import express from "express"
import env from 'dotenv'
import web from './routes/web.js'
import corse from 'cors'

const app = express()
env.config()
const port = process.env.PORT
app.use(express.json())
app.use(corse({
    origin: '*'
}))



app.listen(port, () => {
    console.log(`Listen On port ${port}`)
})

web(app)

