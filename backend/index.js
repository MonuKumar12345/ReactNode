const express = require('express');
const app = express();
const controller = require('./controller/controller');
const connectDB = require('./database/database');
connectDB();
let cors = require('cors')
app.use(cors())
const Apis = require('./router/router');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(Apis);

app.listen(6000, ()=>{
    console.log("working at port");
})