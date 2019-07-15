// how encryption works//

const bcrypt = require('bcryptjs')


let password = "my password"

console.log(password)


// encrypt//
let encryptedPass = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)

console.log(encryptedPass)

if (bcrypt.compareSync(password, encryptedPass)){
    console.log('Welcome you are logged in!')
}else{
    console.log("ACCESS DENIED")
}