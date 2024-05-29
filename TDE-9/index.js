const express = require("express")
const server = express()

const { router : toDoListRouter } = require("./routes/toDoList")
const { router : usersRouter} = require("./routes/users")

server.use(express.json())
server.use(toDoListRouter)
server.use(usersRouter)

const port = 5090
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})