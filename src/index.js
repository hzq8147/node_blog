const express = require('express');
const fs = require('fs');
const fsUtils = require("./utils/fsUtils");
const app = express();
// parse request from web
let bodyParser = require('body-parser');
const port = 3000;
// parse application/json
app.use(bodyParser.json());

const allowOrigin = ["http://localhost:3001","http://127.0.0.1:3001"];
let allowCrossDomain = function (req,res,next) {
    var origin = req.headers.origin;
    if (allowOrigin.indexOf(origin) > -1 ) {
        res.header('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);
app.get('/', (req, res) => {
    res.send('hello world');
})
app.get('/getNoteList',async (req,res)=>{
    const data = await fsUtils.getNoteList();
    res.send(JSON.stringify(data));
})
app.post('/getNote',(req,res) =>{
    const buffer = fsUtils.readFile('./FE_Notes/README.md');
    res.send(buffer);

})
app.listen(port, () => {
    console.log(`app is listening ${port}`);
})
