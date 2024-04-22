const { Restaurent } = require("../model/Restaurent.model")

exports.addRestaurent = async (req, res) => {

    const data = {
        status: "",
        msg: "",
        restaurent: "",
    }
    const duplicate = await Restaurent.find({ $or: [{ phone: req.body.phone }, { email: req.body.email }] })
    
    if (duplicate.length == 0) {
        const restaurent = new Restaurent()
        
        restaurent.name = req.body.name
        restaurent.phone = req.body.phone
        restaurent.email = req.body.email
        restaurent.password = req.body.password
        
        restaurent.save()

        data.status = "success"
        data.msg = "restaurent added successfully"
        data.restaurent = restaurent
    }
    else {
        data.status ="fail"
        data.msg ="restaurent already exist"
    }
    return res.send(data)
}

exports.getRestaurents = async (req, res) => {
    const restaurent = await Restaurent.find()
    return res.send(restaurent)
}

exports.getRestaurentById = async (req, res) => {
    const restaurent = await Restaurent.findById(req.body._id)
    return res.send(restaurent)
}

exports.deleteRestaurent = async (req, res) => {
    const restaurent = Restaurent.deleteOne({_id:req.body._id})
    return res.send({status:"success"})
}

