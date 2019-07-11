// creating our task model
// set it to export of model bc our index.js file is expecting an export of a model
module.exports = function(sequalize, DataTypes){
    var Tasks = sequalize.define("Task", {
        taskItem: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER
        }
    });

    return Tasks
}