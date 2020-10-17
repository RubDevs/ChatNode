const { Model } = require('mongoose');
const store = require('./store')

function addUser(name) {

    if(!name){
        console.error('[userController] No hay usuario');
        return Promise.reject('Los datos son incorrectos');
    }
    const user = {
        name,
    };
    return store.add(user);
}

function getUser(filterUser) {
    return new Promise((resolve,reject)=>{
        let lista = store.list(filterUser)
        .then((lista)=>{
            resolve(lista);
        })
        .catch(err=>{
            reject('Internal error')
        });        
    })
}

function updateUser(id,name) {
    return new Promise(async (resolve,reject)=>{
        if (!id || !name){
            return reject('Invalid Data');
        }
        const result = await store.update(id,name);
        resolve(result);
    })
}

function deleteUser(id) {
    return new Promise(async (resolve,reject)=>{
        if(!id){
           return reject('Invalid data');
        }
        const result = await store.delete(id);
        resolve('Eliminado exitosamente');
    });
}
module.exports = {
    addUser,
    getUser,
    updateUser,
    deleteUser
}