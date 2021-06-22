const mongoose = require('mongoose')
const User = mongoose.model('User', {
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

module.exports = User