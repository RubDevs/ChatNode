const { Model } = require('mongoose');
const store = require('./store')

function addMessage(user,message) {
    return new Promise((resolve,reject)=>{
        if(!user || !message){
            console.error('[messageController] No hay usuario o mensaje');
            return reject('Los datos son incorrectos');
        }
        const fullMessage = {
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
module.exports = {
    addMessage,
    getMessage,
    updateMessage,
}