const mongoose = require('mongoose')
const Schema = mongoose.Schema

const menuItemSchema = new Schema(
    {
        menuId : {
            type : String,
            require : true,
        },
        name : {
            type : String,
            require : true,
        },
        image : {
            type : String,
            require : true,
        },
        price : {
            type : String,
            require : true,
        },
        description : {
            type : String,
            require : true,
        },
        isAvailable : {
            type : Boolean,
            require : true,
        },
    },
        { timestamps: true },
        { collection : 'users' }
  );

const model  = mongoose.model("menuItem", menuItemSchema);

module.exports = model