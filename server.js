// importing the module we are to use
const express = require('express')
const app = express()

// const bodyparser = require('body-parser')

const connection = require("./moongo-connect") // Calling the database connection
require('dotenv').config();

// Importing routes
const registrationRoute = require("./routes/registration")
const loginRoute = require("./routes/login")
const menuItemRoute = require("./routes/menu-item")
const menuRoute = require("./routes/menu")

connection() // connecting the 

app.use(express.json())
// application.use(bodyparser.urlencoded({
//     extended: true
// }))
// application.use(bodyparser.json())
app.get('/', (req, res)=>{
    res.json('hello')
})


//using the routes 
app.use('/register', registrationRoute)
app.use('/login', loginRoute)
app.use('/menuItem', menuItemRoute)
app.use('/menu', menuRoute)

app.listen(process.env.PORT, (err)=>{
    if(!err){
        console.log(`Server succesfully started  on port ${process.env.PORT}`)
    }
    else{
        console.log('And error occured')
    }
})