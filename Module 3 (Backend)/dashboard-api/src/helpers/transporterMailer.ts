import nodemailer from 'nodemailer'

export const transporterNodemailer = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'aebroyx@gmail.com',
        pass: 'ifthuckcjfqrgirk'
    },
    tls: {
        rejectUnauthorized: false
    }
})