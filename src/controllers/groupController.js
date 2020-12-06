const mongo = require('mongoose')
const Group = require('../models/Group')


const Groups = {
    async index (req, res) {
        return res.send('To be implemented')
    },

    async show (req, res) {
        return res.send('To be implemented')
    },

    async store (req, res) {
        let grp = req.body

        let peopleShuffle = JSON.parse(JSON.stringify(grp.people))
        let hasProblem = false

        do {
            hasProblem = false

            for (let i = peopleShuffle.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1))
                const temp = peopleShuffle[i]
                peopleShuffle[i] = peopleShuffle[j]
                peopleShuffle[j] = temp
            }

            grp.people.forEach((person, index) => {
                const friend = peopleShuffle[index]
                person.name == friend.name ? hasProblem = true : person.friend = friend.name                
            })

        } while (hasProblem)

        const groupStored = await Group.create(grp)

        if (groupStored) return res.json(groupStored)        
        return res.json({error: "erro to create group"})

    },

    async update (req, res) {
        return res.send('To be implemented')
    },

    async destroy (req, res) {
        return res.send('To be implemented')
    }


}

module.exports = Groups