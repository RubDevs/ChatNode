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

function getMessage() {
    return new Promise((resolve,reject)=>{
        let lista = store.list();
        console.log(lista)
        resolve(lista);
    })
}
module.exports = {
    addMessage,
    getMessage
}