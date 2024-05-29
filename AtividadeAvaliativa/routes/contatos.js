const express = require("express")
const router = express.Router()

const { findContato, saveContato, updateContato, deleteContato } = require("../db/contatos")
const { auth } = require("../middleware/auth")
const { z, ZodError  } = require("zod")

const ContatoSchema = z.object({
    name: z.string(),
    phone: z.string().refine(val => /^(\d{10,15})$/.test(val)),
    email: z.string().email(),
})

// GET /v1/contatos - retornar todos os contatos de um usuário
router.get("/contatos", auth, async (req, res) => {
    const user = req.user
    const contatos = await findContato(user)
    if (contatos.length === 0) {
        return res.json({ message: "Agenda sem contatos salvos" });
    }
    res.json({contatos})
})

// POST /v1/contato - Adicionar um contato
router.post("/contato", auth, async (req, res) => {
    try {
        const { name, phone, email } = ContatoSchema.parse(req.body)
        const contato = await saveContato(name, phone, email, req.user)
        res.json({contato})
    } catch (error) {
        if (error instanceof z.ZodError) res.status(400).json(error)
        console.log(error)
        res.status(500).send()
    }
})

// PUT /v1/contato/:id - Atualizar um contato
router.put("/contato/:id", auth, async (req, res) => {
    try {
      const id = Number(req.params.id);
      const data = ContatoSchema.parse(req.body);
      const contato = await updateContato(id, data, req.user);
      res.json(contato);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json(error.errors.map((err) => err.message));
      }
      res.status(500).send();
    }
  })

// DELETE /v1/contato/:id - Deletar um contato
router.delete("/contato/:id", auth, async (req, res) => {
    try {
        const id = Number(req.params.id)
        const userId = req.user.id
        const result = await deleteContato(id, userId)
        if (result.count === 0) {
            return res.status(404).json({ message: "Contato não encontrado ou não pertence ao usuário"})
        }
        res.status(204).send()
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Erro ao deletar contato" })
    }
})

module.exports = { router }