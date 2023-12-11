import fs from "fs"

export const fsRead = (): any => {
    return JSON.parse(fs.readFileSync('./database/db.json', 'utf-8'))
} 

export const fsWrite = (param: object): any => {
    fs.writeFileSync("./database/db.json", JSON.stringify(param))
}