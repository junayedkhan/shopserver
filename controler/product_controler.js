import product_model from "../model/product_model.js";


export const create_product = (req, res) => {
    try {
        let create_product = new product_model(req.body)
        create_product.save()
        res.status(200).send(create_product)
    } catch (error) {
        res.status(400)
    }
}

export const get_product = async(req, res) => {
    try {
        let get_product = await product_model.find({})
        get_product.reverse()
        res.status(200).json(get_product)
    } catch (error) {
        res.status(400).json({ message: "product not found !" })
    }
}

export const get_category = async(req, res) => {
    try {
        let get_category = await product_model.distinct("category")
        res.status(200).json(get_category)
    } catch (error) {
        res.status(400).json({ message: "product not found !" })
    }
}

export const getProductsInCategory = async(req, res) => {
    try {
        const category = req.params.category;
        let getProductsInCategory = await product_model.find({category})
        res.status(200).json(getProductsInCategory)
    } catch (error) {
        res.status(400).json({ message: "product not found !" })
    }
}

export const get_product_details = async(req, res) => {
    try {
        let get_product_details = await product_model.findById(req.params._id)
        res.status(200).json(get_product_details)
    } catch (error) {
        res.status(400).json({ message: "product details not found !" })
    }
}

