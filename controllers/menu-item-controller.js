// const mongoose = require("mongoose")


// const menuItem = require("./../models/menu-item-entity")
// const menu = require("./../models/menu-entity")


// //what shoul will be able to do on menu item entity ???
// //taking menu item entries
// const newNemuItem = async(req, res) => {
//     const name = req.body.name
//     const image = req.body.image
//     const price = req.body.price

// //make a menu 
//     const newMenuItemClass = await new menuItem({
//         name : name,
//         image : image,
//         price : price,
//         isAvailable : true,
//         menuId : "12212312312"
//     })

//     try {
//         newMenuItemClass.save()
//         res.status(200).json(newMenuItemClass)
//     } catch (error) {
//         res.status(500).json(error)
//     }

// }
// // adding the menu item into the menu list
// const addMenuItemToMenu = async (req, res)=>{
//     try {
//         await menu.updateOne({$push: {menuItem : req.params.menuItemId} })        
//     } catch (error) {
//         res.status(500).json(error)
//     }
// }


// //update a menu item
// const updateMenuItem = async (req,res)=>{
//     try {
//         const menuItem = await menuItem.findByIdAndUpdate(req.params.id, {
//             $set: req.body
//         })
//         res.status(200).json('menu item have been updated')
//     } catch (error) {
//         res.status(500).json(error)
//     }
// }


// //delele a menu item

// const deleteMenuItem = async (req,res)=>{
//     try {
//         await menuItem.findByIdAndDelete(req.params.id)
//         res.status(200).json('menuItem have been deleted')
//     } catch (error) {
//         res.status(500).json(error)
//     }
// }

// //get a menuItem 

// const getMenuItem = async (req, res) => {
//     try {
//         const menuItem = menuItem.findById(req.params.id)   
//         console.log(menuItem)
//         res.status(200).json(menuItem);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// }


//   //get all menuItems 

// const getAllMenuItem = async (req, res) => {
//     try {
//       const menuItems = await menuItem.find()
//       res.status(200).json(menuItems);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   }

// module.exports = {
//     newNemuItem,
//     addMenuItemToMenu,
//     updateMenuItem,
//     deleteMenuItem,
//     getMenuItem,
//     getAllMenuItem
// }