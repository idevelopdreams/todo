
exports.allTodos = (req, res) => {
    console.log(req.context)
    let sql = 'SELECT * FROM task'
    req.context.db.query(sql,(err, results) => {
        if (err) throw err;
        // rendering tasks with dummyData list
       res.render('tasks', {taskToDo: results});
    });
};

exports.allPosts = (req, res) => {
    let task = req.body;
    // console.log(req.body)
    let sql = 'INSERT INTO task SET ?';
    req.context.db.query(sql, task,(err, results) => {
        if(err) throw err;
        console.log(results);
        res.redirect('/tasks');
    });
};

exports.allDeletes = (req, res) => {
    // deleting item from data set
    let sql = 'DELETE  FROM task WHERE ID=' + req.params.id;
        req.context.db.query(sql,(err, result) =>{
            if(err) throw err;
            console.log(result);
            res.json(result)
        })
}
