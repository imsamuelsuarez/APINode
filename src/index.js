import express from 'express'
import routerApi from './routes/index.js'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

const app = express();

dotenv.config()

const port = process.env.PORT;



app.use(express.json());

app.use(bodyParser.json());



app.listen(port, () => {
        console.log(`Corriendo en puerto ${port}`)
    })
app.get('/', (req, res) => {
    res.json({
        msg: 'servidor'
    })})




routerApi(app)
