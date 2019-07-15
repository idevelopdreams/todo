// how encryption works using bcrypt module

const bcrypt = require('bcryptjs');

let password = 'my password!'

console.log(password);


// How do we encrypt stuff
let encryptedPass = bcrypt.hashSync(password,bcrypt.genSaltSync(10),null);

console.log(encryptedPass)



if(bcrypt.compareSync(password, encryptedPass)){
    console.log('Welcome you are loggedIn');
}else{
    console.log('ACCESS DENIED')
}


// and how do we decrypt stuff