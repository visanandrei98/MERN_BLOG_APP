const mongoose = require('mongoose')

const TokensSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true
    }
}, [])
module.exports = mongoose.model('Token', TokensSchema)