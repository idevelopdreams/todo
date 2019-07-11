// creating our task model
// set it to export b/c our index.js file expects an
// export of the model
module.exports = function(sequelize, DataTypes){
    var Task = sequelize.define("Task", {
        taskItem: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
        },
    });

    return Task
    
}