import express from 'express'
import { HelloWorld } from './routes'

const app = express()

app.get('/', (req, res) => {
    return res.json({ message: 'Teste'})

})

app.listen(3333)