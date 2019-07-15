const bcrypt = require('bcryptjs');


let password = "my password!"

console.log(password);

// how do encrypt stuff
let encryptedPass = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)

console.log(encryptedPass);




if (bcrypt.compareSync(password, encryptedPass)){
    console.log('Welcome You Are Logged In');
}else {
    console.log('ACCESS DENIED');
}

// and how do we decrypt stuff
