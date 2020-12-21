const express = require('express')
const server = express()
const cors = require('cors') 
const {Technology} = require('../models')

//middlewares
server.use(express.json()) //La información a nivel request será dada en JSON.

//public static 
server.use(express.static(__dirname + '/../public'))

//Evita que los request de Angular sean bloqueados.
server.use(cors())

server.get('/api/technologies', async (req,res) => {
    let technologies = await Technology.find()
    //Función que otorga la ruta hacia la imagen logo.
    technologies = technologies.map((technology) => {
        technology.logo = `${req.protocol}://${req.headers.host}/img/${technology.logo}`
        //http://localhost:3000/img/node.svg
        return technology
    })
    return res.send({error: false, data: technologies})
})

server.get('/api/technology/:id', async (req,res) => {
    const {id} = req.params
    let technology = await Technology.findById(id)
    technology.logo = `${req.protocol}://${req.headers.host}/img/${technology.logo}`
    return res.send({error: false, data: technology})
})

server.get('/api/technology/search/:name', async (req,res) => {
    const {name} = req.params
    let technologies = await Technology.find({
        name: {$regex: new RegExp(name, "i")} //Ubica las coincidencias y las retorna.
    })
    technologies = technologies.map((technology) => {
        technology.logo = `${req.protocol}://${req.headers.host}/img/${technology.logo}`
        //http://localhost:3000/img/node.svg
        return technology
    })
    return res.send({error: false, data: technologies})
})

module.exports = server