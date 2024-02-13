const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

let userInfo = []

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/userList', (request, response) => {
  response.json(userInfo)
})
app.get('/userList/:id', (request, response) => {
  const id = request.params.id
  const note = userInfo.find(note => note.id === id)
  if(note){
    response.json(note)
  }
  else{
    response.status(404).end()
  }
  
})

app.use(express.json())
app.post('/userList', (request, response) => {
  const body = request.body
  if(!body){
    return response.status(400).json({error: 'content missing'})
  }
  const note = {
    id: body.id,
    fullname: body.fullname,
    email: body.email,
    password: body.password
  }
  userInfo = userInfo.concat(note)
  response.json(note)
})
const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})