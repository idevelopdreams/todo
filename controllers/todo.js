exports.allTodos = (req, res) => {
    console.log(req.context.database)
    req.context.database.Task.findAll({
        attributes:['id', 'taskItem']
    }).then(function(results){
        // rendering tasks view and passing taskToDo data
        res.render('tasks', {taskToDo: results});
    }).catch(function(err){
        console.log(err)
        res.json(err);
    })
};
//     let sql = 'SELECT * FROM Tasks';
//     req.context.db.query(sql, function (err, results) {
//         if (err) throw err;
        
//     });

exports.todoPosts = (req, res) => {
    req.context.database.Task.create({
        taskItem: req.body.taskItem
    }).then(function(results){
        res.redirect('/')
    }).catch(function(err){
        console.log(err)
        res.json(err);
    })
};

exports.removeTask = (req, res) => {
    req.context.database.Task.destroy({
        where: {
            id: req.params.id}
    }).then(function(results){
        res.json(results)
    }).catch(function(err){
        console.log(err)
        res.json(err);
    })      
};