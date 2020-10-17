const Model = require('./model');

function addMessage(message){
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessages(user){
    let filter = {};
    if(user){
        filter = { user: user};
    }
    const list = await Model.find(filter);
    return list;
}

async function updateMessage(id,message){
    const foundMessage = await Model.findOne({
        _id: id
    });
    foundMessage.message = message
    const newMessage = await foundMessage.save();
    return newMessage;
}

async function deleteMessage(id) {
    return Model.deleteOne({
        _id: id
    });

}

module.exports = {
    add: addMessage,
    list: getMessages,
    update: updateMessage,
    delete: deleteMessage
    //get
    //update
    //delete
}