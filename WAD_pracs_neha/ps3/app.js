const express = require('express')
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    console.log('Hello from inside of the get method of server');
    res.send([]);
});
app.post('/', (req, res) => {
    console.log('Hello from inside of the post method of server');
    console.log(req.body);
    res.status(201).json(req.body);
});

app.listen(3000,()=>{
    console.log('listenig to port 3000')
})