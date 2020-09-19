const express = require('express')
const server = express()

server.post('/prox', (req, res) => {
	res.send('<h1>Cadastro realizado com sucesso<h1>')
})

server.get('/', (req, res) => {
	res.sendFile(__dirname + "/html/index.html");
})

server.get('/equipe', (req, res) => {
	res.sendFile(__dirname + "/html/equipe.html");
})

server.listen(9999, () => {
	console.log('Servidor disponivel em http://localhost:9999')
	console.log('Para derrubar ele ctrl + c')
})

