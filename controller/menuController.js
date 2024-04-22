const { Menu } = require("../model/Menu.model")

exports.addMenu = async (req, res) => {

    const data = {
        status: "",
        msg: "",
        menu: "",
    }
    const duplicate = await Menu.find({ $or: [{ itemname: req.body.itemname }, { itemprice: req.body.itemprice }] })
    
    if (duplicate.length == 0) {
        const menu = new Menu()
        
        menu.restaurent = req.body.restaurent
        menu.itemname = req.body.itemname
        menu.itemprice = req.body.itemprice
        menu.halfprice = req.body.halfprice
        menu.thumbnail = req.body.thumbnail
        menu.quaterprice = req.body.quaterprice

        menu.save()
        
        data.status = "success"
        data.msg = "Item added successfully"
        data.menu = menu
    }
    else {
        data.status ="fail"
        data.msg ="item already exist"
    }
    return res.send(data)
}

exports.getMenu = async (req, res) => {
    const menu = await Menu.find({restaurent:req.body.restaurent})
    return res.send(menu)
}


exports.deleteMenu = async (req, res) => {
    const Menu = Menu.deleteOne({_id:req.body.item})
    return res.send({status:"success"})
}

