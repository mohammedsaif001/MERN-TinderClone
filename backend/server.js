const express = require('express')

//App Confing
const app = express()
const port = 8080

//MiddleWares



//DB Config


//API EndPoints
app.get('/', (req, res) => {
    res.send('Hello World!')
  })


//Listener
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })