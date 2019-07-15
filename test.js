const bcrypt = require('bcryptjs');


let password = "ooga booga"

console.log(password);

// how to encrypt 
let encrypted = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)

console.log(encrypted)




if (bcrypt.compareSync(password, encrypted)){
    console.log('passwords match!')
}else {
    console.log('try again Birgin')
}


// how to decrypt

// let decrypted = bcrypt.