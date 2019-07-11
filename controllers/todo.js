
exports.allTodos = (req, res) => {
    // console.log(req.context.db.Task)
    req.context.db.Task.findAll({
        attributes: ['id', 'taskItem']
    }).then((results)=>{
        // rendering tasks with dummyData list
        res.render('tasks', {taskToDo: results});
    }).catch((err)=>{
        console.log(err);
        res.json(err);
    })
};

exports.allPosts = (req, res) => {
    req.context.db.Task.create({
        taskItem: req.body.taskItem
    }).then(()=>{
        res.redirect('/tasks')
    }).catch((err)=>{
        console.log(err)
        res.json(err)
    })
};

exports.allDeletes = (req, res) => {
    req.context.db.Task.destroy({
        where: { id: req.params.id }
    }).then((result)=>{
    res.json(result)
    }).catch((err)=>{
    console.log(err)
    res.json(err)
    })
};
