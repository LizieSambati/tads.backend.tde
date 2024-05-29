const express = require("express")
const server = express()

const { router : tasksRouter } = require("./routes/tasks")
const { router : usersRouter} = require("./routes/users")

server.use(express.json())
server.use(tasksRouter)
server.use(usersRouter)

const port = 5090
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})