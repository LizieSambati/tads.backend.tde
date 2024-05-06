// Crie um projeto node.
// - Configure um script de start
// - Configure um script dev utilizando o nodemon
// - Crie um servidor express que rode na porta 5000
// - Crie uma rota GET /health que retorne um JSON: {"status": "running"}


const express = require("express")
const server = express()

const port = 5000

server.get("/", (req, res) => {
    res.send("E ae?")
})

server.get("/health", (req, res) => {
    res.json({ status: "running" });
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})