const userDAO = require('./dataAccess/userDAO');
const User = require('./models/user');

async function main(){
    const user1 = new User('Antonio1', 'ea@gmail.com');
    const user2 = new User('Antonio2', 'ea@gmail.com');
    const user3 = new User('Antonio3', 'ea@gmail.com');
    const user4 = new User('Antonio4', 'ea@gmail.com');

    await userDAO.crear(user1);
    await userDAO.crear(user2);
    await userDAO.crear(user3);
    await userDAO.crear(user4);


}

main();