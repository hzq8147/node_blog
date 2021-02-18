const express = require('express');
const fs = require('fs');
const fsUtils = require("./src/utils/fsUtils");
const app = express();
var bodyParser = require('body-parser');
const port = 3000;
app.use(bodyParser.json());
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
