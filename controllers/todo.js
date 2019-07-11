exports.allTodos = (req, res) => {    
    req.context.db.Task.findAll({
        attributes: ['id', 'taskItem']
    }).then(function(results){
        // rendering tasks view and passing taskToDo data
        res.render('tasks', {taskToDo: results});
    }).catch(function(err){
        console.log(err);
        res.json(err);
    })
}

exports.postTodos = (req, res) => {
    req.context.db.Task.create({
        taskItem: req.body.taskItem
    }).then(function(results){
        res.redirect('/');
    }).catch(function(err){
        console.log(err);
        res.json(err);
    })
}

exports.deleteTodos = (req, res) => {
    req.context.db.Task.destroy({
        where: { id: req.params.id }
    }).then(function(results){
        res.json(results)
    }).catch(function(err){
        console.log(result);
        res.json(result);
    });
}