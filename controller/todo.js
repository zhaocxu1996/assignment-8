//This is todo items controller
const TodoService = require('../services/todoService');

class todo {
    //fetch controller
    async fetch(req, res, next) {
        // let id = req.body.id;
        // console.log(id);
        // const output = await TodoService.find();
        // console.log(output);
        res.setHeader("Content-Type", "application/json");
        // res.end(JSON.stringify(output));
        TodoService.find(res);
    }
    //add controller
    async add(req, res, next) {
        let title = req.params.title;
        console.log(title);
        res.setHeader("Content-Type", "application/json");
        TodoService.create(title, res);
    }
    //update controller
    async update(req, res, next) {
        let id = req.params.id;
        console.log(id);
        let title = req.params.title;
        TodoService.update(id, title, res);
    }
    //delete controller
    async delete(req, res, next) {
        let id = req.params.id;
        TodoService.delete(id, res);
    }
}

module.exports = new todo();