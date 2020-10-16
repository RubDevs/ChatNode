const db = require('mongoose');
const Model = require('./model');

db.Promise = global.Promise;
db.connect('mongodb+srv://db_user_chat_node:GEtNpxWiWklkMYo3@cluster0.dljzv.gcp.mongodb.net/chat_node?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

console.log('[db] Conectada con exito')
function addMessage(message){
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessages(){
    const list = await Model.find();
    return list;
}

module.exports = {
    add: addMessage,
    list: getMessages,
    //get
    //update
    //delete
}