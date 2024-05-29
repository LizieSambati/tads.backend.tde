const { prisma } = require("./prisma")

const register = async (email, password) => {
    return await prisma.users.create({
        data: {
            email,
            password
        }
    })
}

const findByEmail = async (email) => {
    return await prisma.users.findUnique({
        where: {
            email
        }
    })
}

module.exports = {
    register, 
    findByEmail
}