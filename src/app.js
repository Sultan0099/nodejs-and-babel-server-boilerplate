import express from 'express';
import bodyParser from 'body-parser';
import {
    routes
} from "./routes";
import "./config/db-config";
const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// app.use("/", router)

routes(app);

app.listen(PORT, () => console.log(` server is running on port ${ PORT }`));