const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    chat:{
        type: Schema.ObjectId,
        ref: 'chat',
        required: true,
    },
    user: {
        type: Schema.ObjectId,
        ref: 'user',
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    date: Date,
});

const model = mongoose.model('messages', mySchema);
module.exports = model;