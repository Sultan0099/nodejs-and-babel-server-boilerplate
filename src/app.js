import express from 'express';
import bodyParser from 'body-parser';
import {
    routes
} from "./routes";
import path from 'path';
// database config 
import "./config/db-config";
// multer config
import "./config/multer-config";
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "..", "public")));
// app.use("/", router)
//  routes 
routes(app);

app.listen(PORT, () => console.log(` server is running on port ${ PORT }`));