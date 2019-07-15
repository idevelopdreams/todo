const bcrypt = require('bcryptjs'); 

// creating our user model
// export the model so our index can use it
module.exports = function(sequelize, DataTypes){
    var User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }         
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    // create custome method for our user model.
    // this will handle if an unhashed password the user is providing 
    // is equal to the hash pasword in our database
    User.prototype.validPassword = function(password){
        return bcrypt.compareSync(password, this.password)
    }

    // Hooks are variouse methods that run during our model lifecycle
    // in this case , before a user is created, we will automatically 
    // encrypt password coming in.
    User.addHook("beforeCreate", function(user){ 
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null )
    });

    return User;
}