// mongodb+srv://Jordan:7GqDbngf96qfGf0U@lead-development-backen.cg3y4.mongodb.net/leadappbackend?authSource=admin&replicaSet=atlas-ljncui-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true

const mongoose = require('mongoose')

module.exports = async function connection(){
    try {
        const connection_params = {
            useNewUrlParser : true,
            useUnifiedTopology: true,
        }
        await mongoose.connect(process.env.DB, connection_params)
        console.log(`succesfully connected to the database`)
    } catch (error) {
        console.log(error)
        console.log('could not connect to the database')
    }
}