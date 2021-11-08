const app = require("express")
const router = app.Router()
const menuItem = require("./../models/menu-item-entity")
const menu = require("./../models/menu-entity")

// const menuItem = require("./../controllers/menu-item-controller")


// creating a new menu item
// router.post('/', menuItem.newNemuItem)
router.post('/', async (req, res)=>{
    const name = req.body.name
    const image = req.body.image
    const price = req.body.price

//make a menu 
    const newMenuItemClass = await new menuItem({
        name : name,
        image : image,
        price : price,
        isAvailable : true,
        menuId : "12212312312"
    })

    try {
        newMenuItemClass.save()
        res.status(200).json(newMenuItemClass)
    } catch (error) {
        res.status(500).json(error)
    }

})


//adding the nemu item to the menu
// router.put('/:menuItemId', menuItem.addMenuItemToMenu)
router.put('/add/:menuItemId/:menuId',async (req, res)=>{      ///the first params is the id of the menu item and the second is of the menu
    try {
        const selectedMenu = await menu.findById(req.params.menuId)

        if(!selectedMenu.menuItem.includes(req.params.menuItemId)){  
            await selectedMenu.updateOne({$push: {menuItem : req.params.menuItemId} })
            res.status(200).json('successfully added')                  
        }  
        else{
            res.json("the menu item is allready on the menu")
        }    
    } catch (error) {
        res.status(500).json(error)
    }
})

//removing the nemu item to the menu
// router.put('/:menuItemId', menuItem.addMenuItemToMenu)
router.put('/remove/:menuItemId/:menuId',async (req, res)=>{
    try {
        const selectedMenu = await menu.findById(req.params.menuId)
        if(selectedMenu.menuItem.includes(req.params.menuItemId)){
            await selectedMenu.updateOne({$pull: {menuItem : req.params.menuItemId} })  
            res.status(200).json('successfully removed')                  
        }  
        else{
            res.json("you can remove a menu item that is not even on the menu")
        }   
    } catch (error) {
        res.status(500).json(error)
    }
})


//updatade a menu item
// router.put('/:id', menuItem.updateMenuItem)
router.put('/:id', async (req,res)=>{
    try {
            await menuItem.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
        res.status(200).json('menu item have been updated')
    } catch (error) {
        res.status(500).json(error)
    }
})


//delele a menu item
// router.delete('/:id', menuItem.deleteMenuItem)
router.delete('/:id', async (req,res)=>{
    try {
        await menuItem.findByIdAndDelete(req.params.id)
        res.status(200).json('menuItem have been deleted')
    } catch (error) {
        res.status(500).json(error)
    }
})


//get a menu item 
// router.get("/:id", menuItem.getMenuItem)
router.get("/:id",  async (req, res) => {
    try {
        const menu_item = await menuItem.findById(req.params.id)   
        console.log(menu_item)
        res.status(200).json(menu_item);
    } catch (err) {
        res.status(500).json(err);
    }
})


//get all menu items 
// router.get("/allmenus", menuItem.getAllMenuItem)
router.get("/", async (req, res) => {
    try {
      const menu_items = await menuItem.find()
      res.status(200).json(menu_items);
    } catch (err) {
      res.status(500).json(err);
    }
  })



module.exports = router;