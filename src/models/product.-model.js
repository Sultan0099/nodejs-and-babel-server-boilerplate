import {
    Schema,
    model
} from "mongoose";



const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    cart: {
        type: Boolean,
        default: false
    },
    price: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        default: Date.now()
    }

});
export const Product = model('Product', productSchema)