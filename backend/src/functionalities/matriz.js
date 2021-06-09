import fs from 'fs'
import path from 'path'

export default function get_matriz() {
    // matiz mxn
    let _path = path.dirname
    let BASE_PATH = _path(_path(_path(__filename)));
    let PATH = BASE_PATH + "/files/matriz.txt";
    let matriz = fs.readFileSync(PATH, 'utf-8',)
    return JSON.parse(matriz)
}