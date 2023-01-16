import express from "express"
import env from 'dotenv'
import web from './routes/web.js'
import corse from 'cors'
import { dirname } from 'path';
import path from "path"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


console.log(__dirname)

const app = express()
env.config()
const port = process.env.PORT
app.use(express.json())
app.use(corse({
    origin: "https://washinmachine.com"
}))

app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});





app.listen(port, () => {
    console.log(`Listen On port ${port}`)
})

web(app)

