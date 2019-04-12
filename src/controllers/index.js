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
        const newProduct = new Product(req.body)
        newProduct.save((err, product) => {
            if (err) return res.send({
                suceess: false,
                error: err
            })
            res.send({
                sucees: true,
                product
            })
        })
    }
}