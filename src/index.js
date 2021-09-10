
const {getNoteList} = require('./apis/getNoteList');

const express = require('express');
const fs = require('fs');
const fsUtils = require("./utils/fsUtils");
const app = express();

// parse request from web
let bodyParser = require('body-parser');
const port = 3000;
// parse application/json
app.use(bodyParser.json());
// crossdomain
const {allowCrossDomain} = require("./config/allow");
app.use(allowCrossDomain);

app.get('/', (req, res) => {
    res.send('hello world');
})
app.post('/getNoteList',getNoteList);

app.post('/getNote',(req,res) =>{
    const buffer = fsUtils.readFile('./FE_Notes/README.md');
    res.send(buffer);

})
app.listen(port, () => {
    console.log(`app is listening ${port}`);
})
