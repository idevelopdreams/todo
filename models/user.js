const bcrypt = require('bcryptjs')
// creating our user model//
// export the model so our index//
module.exports = function(sequelize, DataTypes){
    var Users = sequelize.define("Users", {
       email: {
           type: DataTypes.STRING,
           allowNull: false,
           unique: true,
           validate: {
               isEmail: true
           }
       },
       password:{
           type: DataTypes.STRING,
           allowNull: false
       },
       name: {
           type: DataTypes.STRING,
       },
       avatar: {
           type: DataTypes.STRING
       }
       
    });

    // creating custom model for user//
    // this will handle if an unhashed password the user is providing is equal to the hash password in our database/
    Users.prototype.validPassword = function(password){
        return bcrypt.compareSync(password, this.password)
    }

    // hooks are various methods that run during our model lifecycle//
    // in this case, before a user is created, we will automatically encrypt password in coming//
    Users.addHook("beforeCreate", function(user){
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null)
    })

    return Users
}

