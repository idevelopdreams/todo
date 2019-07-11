// creating our task model
// set to export for server requirement
module.exports = (sequelize, DataTypes) => {
    var Task = sequelize.define("Task",{
        taskItem: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userID: {
            type: DataTypes.INTEGER,
        }
    });

    return Task
}