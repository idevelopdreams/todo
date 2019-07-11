// creating our task model
// set it to export because our index file is expecting an 
// export of a model
module.exports = function(sequelize, DataTypes){
    var Task = sequelize.define("Task", {
        taskItem: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER
        }
    });

    return Task
}