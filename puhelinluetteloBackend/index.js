require('dotenv').config()
const express = require('express')
const app = express()

const cors = require('cors')
const morgan = require('morgan')
const Person = require('./models/person')
morgan.token('POST_data', function bod (req, res) { return JSON.stringify(req.body) })
app.use(express.static('build'))

app.use(cors())
app.use(express.json())

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :POST_data'))

let persons = []

console.log(persons)

app.get('/api/persons', (req, res) => {
  Person.find({}).then(persons => {
    res.json(persons)
  })
})

app.get('/api/persons/:id', (req, res, next) => {
  Person.findById(req.params.id)
    .then(person => {
      if (person){
        res.json(person)
      } else {
        res.status(404).end()
      }
    })
    .catch(error => next(error))

})

app.get('/info', (req, res) => {
  const time = new Date()
  Person.find({}).then(persons => {
    const len = Object.keys(persons).length
    const str = `<p>Phonebook has ${len} persons' info </p>
        <p>${time}</p>`
    res.send(str)
  })
})

app.delete('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(204).end()
    })
    .catch(error => next(error))
})

app.post('/api/persons',(req,res, next) => {
  const body = req.body
  console.log(body.name)

  if (!body.name) {
    return res.status(400).json({
      error: 'name missing'
    })
  } else if (!body.number) {
    return res.status(400).json({
      error: 'number missing'
    })
  } 
  const person = new Person({
    'name': body.name,
    'number': body.number
  })
  person.save().then(savedPerson => {
    res.json(savedPerson)
  })
    .catch(error => next(error))
})

app.put('/api/persons/:id', (req,res, next) =>{
  const body = req.body

  const person = {
    name: body.name,
    number: body.number,
  }
  Person.findByIdAndUpdate(req.params.id, person, { new : true})
    .then(updatedPerson => {
      res.json(updatedPerson)
    })
    .catch(error => next(error))
})

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, req, res, next) => {
  console.error(error.name)

  if (error.name === 'CastError') {
    return res.status(400).send({ error: 'malformed id' })
  } else if (error.name === 'MongoError') {
    return res.status(400).send({ error: 'duplicate detected' })
  } else if (error.name === 'ValidationError') {
    return res.status(400).send({ error: 'too short' })

  }
  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`)
})