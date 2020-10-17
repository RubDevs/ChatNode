const { Model } = require('mongoose');
const store = require('./store')

function addMessage(chat,user,message) {
    return new Promise((resolve,reject)=>{
        if(!user || !message || !chat){
            console.error('[messageController] No hay usuario o mensaje o chat');
            return reject('Los datos son incorrectos');
        }
        const fullMessage = {
            chat: chat,
            user: user,
            message: message,
            date: new Date(),
        }
        //console.log(fullMessage);
        store.add(fullMessage);
        resolve(fullMessage);
    })
}

function getMessage(filterUser) {
    return new Promise((resolve,reject)=>{
        let lista = store.list(filterUser);
        console.log(lista)
        resolve(lista);
    })
}

function updateMessage(id,message) {
    return new Promise(async (resolve,reject)=>{
        if (!id || !message){
            return reject('Invalid Data');
        }
        const result = await store.update(id,message);
        resolve(result);
    })
}

function deleteMessage(id) {
    return new Promise(async (resolve,reject)=>{
        if(!id){
           return reject('Invalid data');
        }
        const result = await store.delete(id);
        resolve('Eliminado exitosamente');
    });
}
module.exports = {
    addMessage,
    getMessage,
    updateMessage,
    deleteMessage
}