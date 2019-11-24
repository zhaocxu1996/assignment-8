const TodoModel = require('../model/todo');
const time = require('time-formater');

module.exports = {
    // create todo service
    create : function (content, res) {
        let returnInfo;
        let todo = {
            title: content,
            description: content,
            due: time().format('HH:mm MM/DD/YYYY')
        };
        TodoModel.create(todo, (err, ret) => {
            console.log(err);
            console.log(ret);
            if (err!=null) {
                returnInfo = err;
            } else {
                returnInfo = ret;
            }
            res.end(JSON.stringify(returnInfo));
        });
    },
    //fetch todo service
    find : async function (res) {
        let returnInfo;
        try {
            const todos = await TodoModel.find({});
            console.log(todos);
            returnInfo =JSON.stringify(todos);
            res.end(returnInfo)
        } catch (err) {
            returnInfo = {
                code: 404,
                msg: `failed to find todo`,
                data: `${err}`
            };
            res.end(JSON.stringify(returnInfo));
        }
    },
    //update todo service
    update : function(id, title, res) {
        let returnInfo;
        let todo = {
            title: title,
            description: title,
            due: time().format('HH:mm MM/DD/YYYY')
        };
        TodoModel.findByIdAndUpdate()
        TodoModel.update({'_id': id}, todo, (err, ret) => {
            console.log(err);
            console.log(ret);
            if (err != null) {
                returnInfo = err;
            } else {
                returnInfo = ret;
            }
            res.end(JSON.stringify(returnInfo));
        })
    },
    //delete todo service
    delete : function(id, res) {
        let returnInfo;
        const filter = {'_id': id};
        TodoModel.deleteOne(filter, (err, result)=>{
            console.log(err);
            console.log(result);
            let r = JSON.stringify(result);
            if (result.deletedCount==0) {
                returnInfo = {
                    code: 404,
                    msg: `failed to delete todo ${id}`,
                    data: `${r}`
                };
                res.end(JSON.stringify(returnInfo));
            } else {
                returnInfo = {
                    code: 200,
                    msg: `delete ${id} successfully`,
                    data: `${r}`
                };
                res.end(JSON.stringify(returnInfo));
            }
        });
    }
};