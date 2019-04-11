import express, {
    Router
} from 'express';
import bodyParser from "body-parser"
import router from './routes/routes';
const app = express();

// middlewears
app.use("/", router);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`server is running at port ${  PORT }`))