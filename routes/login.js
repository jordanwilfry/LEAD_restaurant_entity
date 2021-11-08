const app = require("express")
const router = app.Router()

const login = require('./../controllers/login-controller')

//logging in  
router.post('/', login)


module.exports = router;