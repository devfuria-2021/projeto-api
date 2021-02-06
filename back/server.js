const express = require('express');
const cors = require('cors');

const doSomething = require("./api");

const app = express();
const port = 3000;

app.use(cors());

//
// http://localhost:3000/my-route?foo=1234
//
app.get('/my-route?', (req, res) => {
    let foo = parseInt(req.query.foo);
    res.send(doSomething(foo));
})

app.listen(port, () => {
    console.log(`server running ${port}`)
})
