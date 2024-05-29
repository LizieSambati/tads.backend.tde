const express = require("express")
const server = express()

const { router : contatosRouter } = require("./routes/contatos.js")
const { router : usersRouter } = require("./routes/users.js")

server.use(express.json())
server.use("/v1", contatosRouter)
server.use("/v1", usersRouter)

const port = 5090
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})