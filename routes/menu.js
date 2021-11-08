const app = require("express")
const router = app.Router()
const menu = require("./../models/menu-entity")


//// creating a new menu
router.post('/', async (req, res)=>{
    const menuName = req.body.menuName

//make a menu 
    const newMenuClass = await new menu({
        menuName : menuName,
        restaurantId : "12212312312"
    })

    try {
        newMenuClass.save()
        res.status(200).json(newMenuClass)
    } catch (error) {
        res.status(500).json(error)
    }

})


////updatade a menu 
router.put('/:id', async (req,res)=>{
    try {
            await menu.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
        res.status(200).json('menu item have been updated')
    } catch (error) {
        res.status(500).json(error)
    }
})


////delele a menu
router.delete('/:id', async (req,res)=>{
    try {
        await menu.findByIdAndDelete(req.params.id)
        res.status(200).json('menuItem have been deleted')
    } catch (error) {
        res.status(500).json(error)
    }
})


////get a menu 
router.get("/:id",  async (req, res) => {
    try {
        const tempMenu = await menu.findById(req.params.id)   
        console.log(tempMenu)
        res.status(200).json(tempMenu);
    } catch (err) {
        res.status(500).json(err);
    }
})


////get all menus
router.get("/", async (req, res) => {
    try {
      const tempMenu = await menu.find()
      res.status(200).json(tempMenu);
    } catch (err) {
      res.status(500).json(err);
    }
  })



module.exports = router;