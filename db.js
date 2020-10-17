const db = require('mongoose');

db.Promise = global.Promise;
function connect(url) {
    db.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }).then(console.log('[db] Conectada con exito'))
    .catch(err=>console.error(err));
}

module.exports = connect;
