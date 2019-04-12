import {
    connect
} from 'mongoose';

const mongooseConnection = connect;

mongooseConnection("mongodb://localhost:27017/product", {
        useNewUrlParser: true
    })
    .then(done => console.log(" db is connected"))
    .catch(err => console.log(err))