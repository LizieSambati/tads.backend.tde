const express = require("express")
const router = express.Router()


router.get("/", (req, res) => res.send("E aeee"))

let tarefas = [
    {
    id: 1,
    name: "Comprar leite",
    description: "Ir no mercado da esquina e comprar leite",
    isDone: false
    },
    {
    id: 2,
    name: "Comprar ovos",
    description: "Ir no mercado da esquina e comprar ovos",
    isDone: false
    },
    {
    id: 3,
    name: "Consertar armário",
    description: "Comprar puxador e trocar",
    isDone: false
    },
    {
    id: 4,
    name: "Lavar o banheiro",
    description: "Lavar e organizar o banheiro",
    isDone: false
    },
]

// exibe a lista de tarefas cadastradas.
router.get("/tasks", (req, res) => {
    res.json(tarefas)
})

// cria uma nova tarefa.
router.post("/tasks", (req, res) => {
    const tarefa = req.body
    tarefas.push({
        id: tarefas.length + 1,
        name: tarefa.name,
        description: tarefa.description,
        isDone: false
    })
    res.status(201).json(tarefas)
})


// atualiza uma tarefa existente.
router.put("/tasks/:id", (req, res) => {
    const id = Number(req.params.id)
    const data = req.body
    const tarefa = tarefas.find(tarefa => tarefa.id === id)
    if (!tarefa) {
        return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    tarefa.name = data.name
    tarefa.description = data.description
    tarefa.isDone = data.isDone
    res.json(tarefa)
})


// exclui uma tarefa existente.
router.delete("/tasks/:id", (req, res) => {
    const id = Number(req.params.id)
    tarefas = tarefas.filter(tarefa => tarefa.id !== id)
    res.status(204).send()
})

module.exports = {
    router
}