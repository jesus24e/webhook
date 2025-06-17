const express = require("express")

const {agregarAsync, obtenerTodosAsync} = require("./webhook.repositorio")

app = express()

app.use(express.json())

app.get("/", (req,res)=>{
    const data = {
        mensaje : "hola mundo"
    }
    res.status(200).json(data)
})

app.post("/api/webhook",async(req, res)=>{
    console.log(req.body)
    const body = req.body
    const headers = req.headers
    const query = req.query
    const webhook = {
        body : body,
        headers : headers,
        query: query,
        fechaDeRegistro: new Date(),
    }
    await agregarAsync(webhook)
    res.status(201).json(webhook)
});

app.listen(3000,()=>{
  console.log("http://localhost:3000");
});