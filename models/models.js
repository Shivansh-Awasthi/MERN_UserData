const mongoose = require('mongoose');
const schema = mongoose.Schema;

const register = new schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    }
})


const Register = mongoose.model('Register', register);




module.exports = Register