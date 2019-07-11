//creating out task model
//set it to export beacause our index file is expecting an 
//export of the model
module.exports = function(sequelize, DataTypes){
    var Task = sequelize.define("Task", {
        taskItem: {
            type: DataTypes.STRING,
            allowNull: false
        },
        UserId: {
            type: DataTypes.INTEGER
        }
    });

    return Task
}








