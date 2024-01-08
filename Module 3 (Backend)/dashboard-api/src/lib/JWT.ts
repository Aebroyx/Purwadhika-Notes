import jsonwebtoken from 'jsonwebtoken'

interface IJWTCreate {
    id: string
    email: string
    username: string
}
export const jwtCreate = async({id, email, username}: IJWTCreate) => {
    jsonwebtoken.sign({id, email, username}, 'aboy', {
        expiresIn: '1h'
    })
}