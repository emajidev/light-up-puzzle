
import fs from 'fs';
import cors from 'cors';
import path from 'path';
import express from 'express';
import busboy from 'connect-busboy';
import bodyParser from 'body-parser';
import {LightUp} from '../src/puzzle/LightUp'
const app = express();
app.use(cors());

app.use(busboy());
let _path = path.dirname

function run_solution(){
    let light_up = new LightUp();
    let result = light_up.init();
    console.log("result",result)
    return result
}

export default function server() {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.get('/api/upload', (req, res) => {
        res.send({ status: 200 })
    });

    app.post('/api/upload', cors(), (req, res) => {
                
        let fstream;
        req.pipe(req.busboy);
        req.busboy.on('file', (fieldname, file, filename) => {
            let DIR = _path(_path(__filename)) + '/files/'
        
            fstream = fs.createWriteStream(DIR + filename)
            file.pipe(fstream);
            fstream.on('close', function () {
                let result = run_solution()
                res.send({ status: 200,solution:result });
            });
        });
    });

    app.listen(3030, () => {
        console.log("Started on PORT 3030");
    })
}
