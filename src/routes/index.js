import {
    controller
} from '../controllers';

export const routes = (app) => {
    app.route("/product")
        .get(controller.showAllProducts)
        .post(controller.createNewProduct)

    app.route("/product/:id")
        .get(controller.getOneProduct)
    // .put(controller.upDateOneProduct)
    // .delete(controller.drpoProduct)


    app.get("/", (req, res) => {
        res.send("hello world")
    })
}