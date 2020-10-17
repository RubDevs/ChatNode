const Model = require('./model');

function addChat(chat){
    const myChat = new Model(chat);
    return myChat.save();
}

function getChats(userId){
    return new Promise((resolve,reject)=>{
        let filter = {};
        if(userId){
            filter = {
                users: userId,
            }
            console.log(userId);
        }
        Model.find(filter)
        .populate('users')
        .exec((error,populated)=>{
            if(error){
                reject(error);
            }
            resolve(populated);
        })
    })
    
}

// async function updateChat(id,message){
//     const foundMessage = await Model.findOne({
//         _id: id
//     });
//     foundMessage.message = message
//     const newMessage = await foundMessage.save();
//     return newMessage;
// }

// async function deleteChat(id) {
//     return Model.deleteOne({
//         _id: id
//     });

// }

module.exports = {
    add: addChat,
    list: getChats,
    // update: updateMessage,
    // delete: deleteMessage
    //get
    //update
    //delete
}