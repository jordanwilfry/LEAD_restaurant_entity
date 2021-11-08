// importing the modules we are to use
const mongoose = require("mongoose")
const sha256 = require("crypto-js/sha256")

const restaurants = require("./../models/restaurant-entity")


 const register = async(req, res) => {
    //password manipulation
    const password = req.body.password
    const encryptedPassword = sha256(password)
    // const decryptedPassword = sha256(encryptedPassword)
    console.log(encryptedPassword)
    // console.log(decryptedPassword)


    const restaurantName = req.body.restaurantName
    const username = req.body.username
    const email = req.body.email
    const address = req.body.address
    const phoneNumber = req.body.phoneNumber
    const openingTime = req.body.openingTime
    const closingTime = req.body.closingTime
    const maximunDeliveryTime = req.body.maximunDeliveryTime
    const photo = req.body.photo
    const description = req.body.description
    // })

    // router.post('/save', async(req, res) => {
    const restaurantsInformations = await new restaurants({
        restaurantName : restaurantName,
        username : username,
        email : email,
        address : address,
        phoneNumber : phoneNumber,
        password : encryptedPassword,
        openingTime : openingTime,
        closingTime : closingTime,
        maximunDeliveryTime : maximunDeliveryTime,
        photo : photo,
        description : description,
    })
    
    try {
        restaurantsInformations.save()
        console.log("user successfuly created")
        res.status(200).json(restaurantsInformations)
    } catch (error) {
        console.log(error)
    }
}

module.exports = register;
