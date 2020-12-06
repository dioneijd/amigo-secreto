const mongo = require('mongoose')
const Person = require('../models/Person')
const Group = require('../models/Group')

const Persons = {
    async index (req, res) {
        return res.send('To be implemented')
    },

    async show (req, res) {        
        const personId = req.params.id
        const group = await Group.find({"people._id": personId})
        let person = group[0].people.find(person => person._id == personId)

        if (!person) {
            person = { error: `Person id ${req.params.id} not found` }
        }
        return res.json(person)
    },

    async store (req, res) {
        return res.send('To be implemented')
    },

    async update (req, res) {
        return res.send('To be implemented')
    },

    async destroy (req, res) {
        return res.send('To be implemented')
    }


}

module.exports = Persons