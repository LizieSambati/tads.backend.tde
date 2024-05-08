// Crie uma aplicação de lista de tarefas (to-do list) utilizando o framework Express.js. 
// A aplicação deve permitir que os usuários cadastrem, editem e excluam tarefas.

// A aplicação deve ter as seguintes rotas:
// -   `GET /tasks`: exibe a lista de tarefas cadastradas.
// -   `POST /tasks`: cria uma nova tarefa.
// -   `PUT /tasks/:id`: atualiza uma tarefa existente.
// -   `DELETE /tasks/:id`: exclui uma tarefa existente.

// Os dados das tarefas serão armazenados em memória.
// Uma tarefa contem:
// - Id
// - nome
// - descrição
// - isDone


const express = require("express")
const {router} = require("./routes/ToDoList")
const server = express()
server.use(express.json())

const port = 5090
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})

server.use(router)