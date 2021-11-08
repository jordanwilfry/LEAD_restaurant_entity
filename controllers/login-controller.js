// importing the modules we are to use
const mongoose = require("mongoose")
const sha256 = require("crypto-js/sha256")
const cookieParser = require("cookie-parser")

const restaurants = require("./../models/restaurant-entity")



const login = async(req, res)=>{
    const loginIdentity = req.body.loginIdentity
    const loginPassword = req.body.loginPassword
    const email = await restaurants.findOne({email:loginIdentity})
    const username = await restaurants.findOne({username:loginIdentity})
    

    if(!email && !username){
        res.json('Invalid password or Phone')
        return false
    }

    exactPassword = email ? email.password : username.password

    if(email && !email.emailVerified){
        res.json("please make sure your email is valid")
        return false
    }
    

    if( await sha256(loginPassword, exactPassword)){
        res.json('login')
        // email? res.json(email):res.json(username)
        return false
    }
 
    else{
        res.json("ivalid")
    }

}

module.exports = login

