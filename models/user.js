//creating our user mddel
// export the model so our index\
module.exports = function (sequelize, DataTypes){
    var User = sequelize.define("User",{
      email: {
          type:DataTypes.STRING,
          allowNUll: false,
          unique: true,
          validate: {
              isEmail: true
          }
      },
      password: {
        type:DataTypes.STRING,
        allowNUll: false,
      }
        
    });
        
    return User
}