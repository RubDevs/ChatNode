const db = require('mongoose');
const Model = require('./model');

db.Promise = global.Promise;
db.connect('mongodb+srv://db_user_chat_node:GEtNpxWiWklkMYo3@cluster0.dljzv.gcp.mongodb.net/chat_node?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log('[db] Conectada con exito'))
.catch(err=>console.error(err));


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