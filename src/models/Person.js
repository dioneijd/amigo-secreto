const mongo = require('mongoose')

const PersonSchema = new mongo.Schema({
    name: {
        type: String, 
        required: true
    },
    friend: {
        type: String,
        default: ''
    }
}, {
    timestamps: true,
})

module.exports = mongo.model('Person', PersonSchema)