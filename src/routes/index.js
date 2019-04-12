import {
    controller
} from '../controllers';

export const routes = (app) => {
    app.route("/product")
        .get(controller.showAllProducts)
        .post(controller.createNewProduct)

    // app.route("/product:id")
    //     .put(controller.update)
    //     .get(controller.showOne)
    //     .delete(controller.del)


    app.get("/", (req, res) => {
        res.send("hello world")
    })
    console.log("routes")
}