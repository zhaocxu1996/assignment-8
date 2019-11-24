const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: String,
    description: String,
    due: Date
});

// todoSchema.index({todo_id: 1});

const todoModel = mongoose.model('todoModel', todoSchema);

module.exports = todoModel;