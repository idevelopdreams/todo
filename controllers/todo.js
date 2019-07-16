<<<<<<< HEAD
exports.allTodos =  (req, res) => {
    console.log(req.context.db)
=======
exports.allTodos = (req, res) => {
>>>>>>> 8653b4e2bb7aab14059ab5c6cf92e7e3d3325ff1
    req.context.db.Task.findAll({
        attributes: ['id', 'taskItem']
    }).then(function(results){
        // rendering tasks view and passing taskToDo data
        res.render('tasks', {taskToDo: results});
    }).catch(function(err){
        console.log(err);
        res.json(err);
<<<<<<< HEAD
    })
};

exports.postTodos = (req, res) => {
=======
    });
}

exports.addTask = (req, res) => {
>>>>>>> 8653b4e2bb7aab14059ab5c6cf92e7e3d3325ff1
    req.context.db.Task.create({
        taskItem: req.body.taskItem
    }).then(function(){
        res.redirect('/');
    }).catch(function(err){
        console.log(err);
        res.json(err);
    });
}

exports.removeTask = (req, res) => {
    req.context.db.Task.destroy({
        where: { id: req.params.id }
    }).then(function(result){
        res.json(result)
    }).catch(function(err){
        console.log(err);
        res.json(err);
    });
}
