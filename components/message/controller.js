const { Model } = require('mongoose');
const store = require('./store');
const {socket} = require('../../socket');

function addMessage(chat,user,message,file) {
    return new Promise((resolve,reject)=>{
        if(!user || !message || !chat){
            console.error('[messageController] No hay usuario o mensaje o chat');
            return reject('Los datos son incorrectos');
        }
        let fileUrl = '';
        if(file) {
            fileUrl = 'http://localhost:3000/app/files/' + file.filename;
        }

        const fullMessage = {
            chat: chat,
            user: user,
            message: message,
            date: new Date(),
            file: fileUrl
        }
        //console.log(fullMessage);
        store.add(fullMessage);
        socket.io.emit('message',fullMessage);

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