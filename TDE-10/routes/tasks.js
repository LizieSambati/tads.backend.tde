const express = require("express")
const { prisma } = require("../db/prisma")
const router = express.Router()
const { auth } = require("../middleware/auth")
const { z, ZodError  } = require("zod")


// teste da rota
router.get("/", (req, res) => res.send("E aeee"))


// exibe a lista de tarefas cadastradas.
router.get("/tasks", auth, async (req, res) => {
    const tasks = await prisma.listaDeTarefas.findMany()
    res.json(tasks)
})


// cria uma nova tarefa.
router.post("/tasks", auth, async (req, res) => {
    const data = req.body
    const task = await prisma.listaDeTarefas.create({
        data: {
            name: data.name,
            description: data.description,
            isDone: false,
            user: {
                connect: {
                    id: req.user,
                }
            }
        }
    })
    res.status(201).json(task)
})


// atualiza uma tarefa existente.
router.put("/tasks/:id", auth, async (req, res) => {
    const id = Number(req.params.id)
    const task = await prisma.listaDeTarefas.update({
        data: {
            name: req.body.name,
            description: req.body.description,
            isDone: req.body.isDone
        },
        where: {
            id
        }
    })
    res.json(task)
})


// exclui uma tarefa existente.
router.delete("/tasks/:id", auth, async (req, res) => {
    const id = Number(req.params.id)
    await prisma.listaDeTarefas.delete({
        where: {
            id
        }
    })
    res.status(204).send()
})

module.exports = { router }