let http = require("http");
const mongoose = require('mongoose');
const express = require('express');
const Todo = require('./controller/todo');

let app = express();
let router = express.Router();
router.route('/todo').get(Todo.fetch);
router.route('/todo/:content').post(Todo.add);
router.route('/todo/:id/:content').put(Todo.update);
router.route('/todo/:id').delete(Todo.delete);
app.use(router);

let port = 3000;
let hostname = "localhost";
http.createServer(app).listen(port, hostname, ()=> {
    console.log(`Server is listening on port ${port}`);
});

const dbUrl = 'mongodb://localhost:27017/hw8';
mongoose.connect(dbUrl, (err) => {
    if(err){
      console.log(`connect database failed`);
    }else{
      console.log(`connect database successfully`);
    }
});