const Model = require('./model');

function addUser(user){
    const myUser = new Model(user);
    myUser.save();
}

async function getUser(user){
    let filter = {};
    if(user){
        filter = { name: user};
    }
    const list = await Model.find(filter);
    return list;
}

async function updateUser(id,name){
    const foundUser = await Model.findOne({
        _id: id
    });
    foundUser.name = name
    const newUser = await foundUser.save();
    return newUser;
}

async function deleteUser(id) {
    return Model.deleteOne({
        _id: id
    });

}

module.exports = {
    add: addUser,
    list: getUser,
    update: updateUser,
    delete: deleteUser
    //get
    //update
    //delete
}