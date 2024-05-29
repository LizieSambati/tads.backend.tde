const { prisma } = require("./prisma")

const findContato = async (userId) => {
    return await prisma.contatos.findMany({
        where: {
            userId
        }
    })
}

const saveContato = async (name, phone, email, userId) => {
    return await prisma.contatos.create({
        data: {
            name,
            phone,
            email,
            user: {
                connect: {
                    id: userId,
                }
            }
        }
    })
}

const updateContato = async (id, data, userId) => {
    await prisma.contatos.updateMany({
        data,
        where: {
            id,
            userId: userId,
        }
    })
    return await findById(id, userId);
}

const deleteContato = async (id, userId) => {
    return await prisma.contatos.deleteMany({
        where: {
            id,
            userId: userId
        }
    })
}

const findById = async (id, userId) => {
    const contato = await prisma.contatos.findFirst({
        where: {
            id,
            userId: userId,
        }
    })
    return contato
}

module.exports = {
    findContato,
    saveContato,
    updateContato,
    deleteContato,
    findById,
}