const express = require("express")
const router = express.Router()

const { findByEmail, register } = require("../db/users")

const bcrypt = require("bcrypt")
const z = require("zod")
const jwt = require("jsonwebtoken")

const UserSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})

router.get("/", (req, res) => res.send("E aeee"))

// POST /v1/register
router.post("/register", async (req, res) => {
    try {
        const { email, password } = UserSchema.parse(req.body)
        const user = await findByEmail(email)
        if (user) return res.status(400).json({ message: "Usuário já existe" })
        const hash = bcrypt.hashSync(password, 10)
        const savedUser = await register(email, hash)
        delete savedUser.password
        res.json(savedUser)
    } catch (error) {
        if (error instanceof z.ZodError) res.status(400).json(error)
        res.status(500).send()
    }    
})

// POST /v1/login
router.post("/login", async (req, res) => {
    try {
        const { email, password } = UserSchema.parse(req.body)
        const user = await findByEmail(email)
        if (!user) return res.status(401).json({ message: "Credenciais inválidas" })
        const isSamePassword = bcrypt.compareSync(password, user.password);
        if (!isSamePassword)
            return res.status(401).json({ message: "Credenciais inválidas" })
        const token = jwt.sign({ id: user.id }, process.env.SECRET)
        res.json({
            token,
        })
    } catch (error) {
        if (error instanceof z.ZodError) res.status(400).json(error)
        res.status(500).send()
    }
})

module.exports = { router }