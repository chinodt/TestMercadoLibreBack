// ./src/index.js
const express = require('express')
const app = express()
const port = 3000
// require API_helper.js
const api_helper = require('./API_helper')

//Endpoint test
app.get('/', (req, res) => res.send('Hola Mercado Libre!'))

app.get('/getProduct/:product', (req, res) => {
    var product = req.params.product;
    api_helper.make_API_call('https://api.mercadolibre.com/sites/MLA/search?q=' + product)
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    })
})

//Endpoint para consulta de productos por Id
app.get('/getProductById/:id', (req, res) => {
    var id = req.params.id;
    api_helper.make_API_call('https://api.mercadolibre.com/items/' + id)
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    })
})

//Endpoint para consulta de productos por Id y obtener su descripcion
app.get('/getProductDescription/:id', (req, res) => {
    var id = req.params.id;
    api_helper.make_API_call('https://api.mercadolibre.com/items/' + id + '/description')
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))