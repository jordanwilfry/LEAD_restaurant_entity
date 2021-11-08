// importing the modules we are to use
const app = require("express")
const router = app.Router()

const registration = require("./../controllers/regitration-controller")


//registration 
router.post('/', registration)



module.exports = router;
    
