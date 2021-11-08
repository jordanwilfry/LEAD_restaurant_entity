const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RestaurantSchema = new Schema(
    {
        restaurantName : {
            type : String,
            require : true,
        },
        username : {
            type : String,
            require : true,
        },
        email : {
            type : String,
            require : true,
        },
        address : {
            type : String,
            require : true,
        },
        phoneNumber : {
            type : Number,
            require : true,
        },
        password : {
            type : String,
            require : true,
        },
        isVerified : {
            type : Boolean,
            require : true,
        },
        openingTime : {
            type : String,
            require : true,
        },
        closingTime : {
            type : String,
            require : true,
        },
        maximunDeliveryTime : {
            type : String,
            require : true,
        },
        photo : {
            type : String,
        },
        ratings : {
            type : Number,
        },
        description : {
            type : String,
        }
    },
        { timestamps: true },
        { collection : 'users' }
  );

const model  = mongoose.model("restaurants", RestaurantSchema);

module.exports = model