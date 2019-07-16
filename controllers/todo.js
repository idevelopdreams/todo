exports.allTodos = (req, res) => {
    req.context.db.Task.findAll({
        attributes: ['id', 'taskItem']
    }).then(function(results){
        // rendering tasks view and passing taskToDo data
        res.render('tasks', {taskToDo: results});
    }).catch(function(err){
        console.log(err);
        res.json(err);
    });
}

exports.addTask = (req, res) => {
    req.context.db.Task.c    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

        taskItem: req.bod    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    }).then(function(){
        res.redirect('/')    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    }).catch(function(err    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

        console.log(err);    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

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
