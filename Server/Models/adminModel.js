const {Schema, model} = require('mongoose');

const adminSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },

    role: {
        type: String,
        required: true,
        default: 'admin'
    },
    
},{timestamps: true});

module.exports = model('Admin', adminSchema);