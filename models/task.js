//creating our task model
// set it toe xport becauser our infex file is expecting an export  of the model
module.exports = function (sequelize, DataTypes){
    var Task = sequelize.define("Task",{
        taskItem: {
            type: DataTypes.STRING,
                allowNUll: false
        },
        userId:{
            type:DataTypes.INTEGER
        }
    }
        
    );

    return Task
}