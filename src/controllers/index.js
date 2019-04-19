import {
    Product
} from '../models/product.-model';


export const controller = {
    showAllProducts(req, res) {
        Product.find({}, (err, products) => {
            if (err) return res.send({
                success: false,
                error: err
            })
            res.json({
                success: true,
                products
            })
        })
    },
    createNewProduct(req, res) {
        console.log(req.body)
        const {
            title,
            img,
            details,
            cart,
            price
        } = req.body;
        const newProduct = new Product({
            title,
            img,
            details,
            cart,
            price
        })
        newProduct.save((err, product) => {
            if (err) return res.send({
                suceess: false,
                error: err
            })
            res.json({
                success: true,
                product
            })
        })
    },

    getOneProduct(req, res) {
        Product.findById(req.params.id, (err, product) => {
            if (err) return res.send({
                success: false,
                error: err
            })
            res.json({
                success: true,
                product
            })
        })
    },


}