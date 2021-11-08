const mongoose = require('mongoose')
const Schema = mongoose.Schema

const menuSchema = new Schema(
    {
        restaurantId : {
            type : String,
            require : true,
        },
        menuName : {
            type : String,
            require : true,
        },
        menuItem : {
            type : Array,
            default : [],
            require : true,
        },   
    },
        { timestamps: true },
        { collection : 'users' }
  );

const model  = mongoose.model("menu", menuSchema);

module.exports = model