const express = require('express');
const bodyParser = require('body-parser');
const app = express()

var processEnv = process.env.PORT | 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app.get('/', (req, res) => res.send('Hello World!'))
//console.log(__dirname+ "\\..\\dist\\vanila");
app.use(express.static(__dirname + "/../dist/vanila"));

app.post("/submit", (req,res)=>{
    console.log(req.body);
    res.json(req.body);
});

app.listen(processEnv, () => console.log('Listening on port 3000!'));