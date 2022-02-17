import express from 'express'
import mongoose from 'mongoose'
import cards from './dbCards.js'
import Cors from 'cors'


//App Confing
const app = express()
const port = 8080
const connection_url = `mongodb+srv://saif:saif@cluster0.vzm4p.mongodb.net/tinder?retryWrites=true&w=majority`

//MiddleWares
app.use(express.json())
app.use(Cors())

//DB Config
mongoose.connect(connection_url);


//API EndPoints
app.get('/', (req, res) => {
    res.send('Hello bb World!')
})

app.post('/tinder/card', (req, res) => {
    const dbCard = req.body
    cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(201).send(data)
        }
    })
})

app.get('/tinder/card', (req, res) => {
    cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(200).send(data)
        }
    })
})


//Listener
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})