<<<<<<< HEAD
const bcrypt = require('bcryptjs');


let password = "ooga booga"

console.log(password);

// how to encrypt 
let encrypted = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)

console.log(encrypted)
=======
// how encryption works using bcrypt module

const bcrypt = require('bcryptjs');
let password = "my password!"

console.log(password);

// how do encrypt stuff 
let encryptedPass = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)

console.log(encryptedPass);
>>>>>>> d1b48b70c7f467d1efb721cd57938d10fd19b189




<<<<<<< HEAD
if (bcrypt.compareSync(password, encrypted)){
    console.log('passwords match!')
}else {
    console.log('try again Birgin')
}


// how to decrypt

// let decrypted = bcrypt.
=======
if ( bcrypt.compareSync(password, encryptedPass)){
    console.log('Welcome you are loggedIn');
}else {
    console.log("ACCESS DENIED");
}


// and how do we decrypt stuff
>>>>>>> d1b48b70c7f467d1efb721cd57938d10fd19b189
