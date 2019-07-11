exports.register = (req, res) => {
    res.render('register');
}
    // console.log(req.context.db.Task)
    // req.context.db.Task.findAll({
    //     attributes: ['id', 'taskItem']
    // }).then((results)=>{
    //     // rendering tasks with dummyData list
    //     res.render('tasks', {taskToDo: results});
    // }).catch((err)=>{
    //     console.log(err);
    //     res.json(err);
    // })


exports.login = (req, res) => {
    res.render('login');
    // req.context.db.Task.create({
    //     taskItem: req.body.taskItem
    // }).then(()=>{
    //     res.redirect('/tasks')
    // }).catch((err)=>{
    //     console.log(err)
    //     res.json(err)
    // })
};

exports.userPost = (req, res) => {
    res.render('login');
    // req.context.db.Task.destroy({
    //     where: { id: req.params.id }
    // }).then((result)=>{
    // res.json(result)
    // }).catch((err)=>{
    // console.log(err)
    // res.json(err)
    // })
};

exports.profile = (req,res) => {
    res.render('profile');
}

exports.logout = (req,res) => {
    res.redirect('/tasks');
}