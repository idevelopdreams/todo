// creating our user model
// set to export for server requirement
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define("User",{
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

    // create custom user model
    User.prototype.validPassword = (password) => {
        return bcrypt.compareSync(password, this.password)
        
    };
    // in this case before user is created we will automatically hash the incoming password


    User.addHook("beforeCreate", (user) => {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null)
        console.log(user.password)

    });
    return User
}