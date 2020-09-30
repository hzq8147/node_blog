const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('hello world');
})
app.get('')
app.listen(port, () => {
    console.log(`app is listening ${port}`);
})