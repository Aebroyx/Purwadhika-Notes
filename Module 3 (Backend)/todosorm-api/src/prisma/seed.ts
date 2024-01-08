import prisma from '../connection';

const users = [
    {
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: '12345678'
    }
]

const createUsers = async() => {
    try {
        await prisma.users.createMany({
            data: users
        })
    } catch (error) {
        console.log(error)
    }
}

createUsers();