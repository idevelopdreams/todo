const bcrypt = require('bcryptjs')
// creating our user model//
// export the model so our index//
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
       password:{
           type: DataTypes.STRING,
           allowNull: false
       }
    });

// creating custom model for user//
// this will handle if an unhashed password the user is providing is equal to the hash password in our database/
User.prototype.validate = function(password){
    return bcrypt.compareSync(password, this.password)
}

// hooks are various methods that run during our model lifecycle//
// in this case, before a user is created, we will automatically encrypt password in coming//
User.addHook("beforeCreate", function(user){
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null)
})

    return User
}

