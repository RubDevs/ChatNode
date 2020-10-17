const { Model } = require('mongoose');
const store = require('./store')

function addChat(users) {
    return new Promise((resolve,reject)=>{
        if(!users || !Array.isArray(users)){
            console.error('[chatController] No hay usuarios');
            return reject('Los datos son incorrectos');
        }
        const chat = {
            users: users,
        }
        store.add(chat)
        .then((data)=>{
            resolve(data);
        })
        .catch(err=>{
            reject(err);
        });
        
    })
}

function getChats(userId) {
    return new Promise((resolve,reject)=>{
        let lista = store.list(userId)
        .catch(err=>{
            reject(err);
        })

        resolve(lista);
        
        //console.log(lista)
    })
}

// function updateMessage(id,message) {
//     return new Promise(async (resolve,reject)=>{
//         if (!id || !message){
//             return reject('Invalid Data');
//         }
//         const result = await store.update(id,message);
//         resolve(result);
//     })
// }

// function deleteMessage(id) {
//     return new Promise(async (resolve,reject)=>{
//         if(!id){
//            return reject('Invalid data');
//         }
//         const result = await store.delete(id);
//         resolve('Eliminado exitosamente');
//     });
// }
module.exports = {
    addChat,
    getChats,
    // updateMessage,
    // deleteMessage
}