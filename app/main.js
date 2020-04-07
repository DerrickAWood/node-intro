import express from "express"
import bp from "body-parser"
let server = express()
let port = 3000

let cats = [{name: "whiskers"}, {name: "mittens"}]
let dogs = [{name: "buddy"}]

server.use(bp.json())

server.get('/dogs',(req, res, next)=>{
  res.send(dogs)
})
server.post('/dogs', (req, res, next)=>{
  req.body 
  dogs.push(req.body)
  res.send(dogs)
})

server.get('/', (req, res, nexr) =>{
  res.send('hello node')
})

server.get('/cats', (req, res, next) =>{
  res.send(cats)
})

server.post('/cats', (req, res, next)=>{
  req.body 
  cats.push(req.body)
  res.send(cats)
})

server.use((err, req, res, next) => {
  console.log(err);
  res.status(400).send("Bad Request")
  
})


server.use((req,res,next) => {
  res.status(404).send('route not found')
})

server.listen(port, ()=> {
  console.log("server on ", port);
})