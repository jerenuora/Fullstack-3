const mongoose = require('mongoose')
console.log(process.argv.length)
const command_parms_length = process.argv.length

if (command_parms_length<3) {
    console.log('give password as argument')
    process.exit(1)
}
  
const password = process.argv[2]
const url = `mongodb+srv://jere:${password}@cluster0.rvlap.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
    name: String,
    number: String
})
  
const Person = mongoose.model('Person', personSchema)

if (command_parms_length === 5) {
    const person = new Person({
        name: process.argv[3],
        number: process.argv[4]
        })

    person.save().then(response => {
        console.log(`added ${person.name} ${person.number} to the phonebook`)
        mongoose.connection.close()
    })

} else if (command_parms_length === 3) {
    Person.find({}).then(result => {
        console.log('phonebook:')
        result.forEach(person => {
        console.log(person.name, person.number)
        })
        mongoose.connection.close()
    })
}
