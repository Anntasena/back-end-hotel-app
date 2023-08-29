const express = require('express')
const app = express()
app.use(express.json()) // Body Parser: Mengambil data yang dikirimkan oleh client melalui body

const PORT = 5004

// Import Router
const {hotelsRouter} = require('./routers')
app.use('/hotels', hotelsRouter)

app.listen(PORT, () =>  console.log(`API Running on Port ${PORT}`))