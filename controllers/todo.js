exports.allTodos = (req, res) => {
    console.log(req.context.db)
    req.context.db.Task.findAll({
        attributes: ['id', 'taskItem']
    }).then(function(results){
        res.render('tasks', {taskToDo: results});
    }).catch(function(err){
        console.log(err);
        res.json(err);
    })
};

//    let sql = 'SELECT * FROM task'
//    req.context.db.query(sql, function (err, results) {
//        if (err) throw err;
       // rendering tasks view and passing taskToDo data
///       res.render('tasks', {taskToDo: results});
 //   }); 
//}

exports.addTask = (req, res) => {
    req.context.db.Task.create({
        taskItem: req.body.taskItem
    }).then(function(){
        res.redirect('./')
    }).catch(function(err){
        console.log(err);
        res.json(err);
    })
}


exports.removeTask = (req, res) => {
    req.context.db.Task.destroy({
        where: {id: req.params.id
        }
    }).then(function(result){
        res.json(result)
    }).catch(function(err){
        console.log(err);
        res.json(err);
    })
 };
