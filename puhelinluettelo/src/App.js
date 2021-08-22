import React, { useEffect, useState } from 'react'
import personService from './services/persons'
import Notification from './components/Notification'
import AllPersons from './components/AllPersons'
import Filter from './components/Filter'
import PersonAdder from './components/PersonAdder'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterText, setFiltertext ] = useState('')
  const [ successMessage, setSuccessMessage ] = useState(null)
  const [ activeTimeout, setActiveTimeout ] = useState(null)

  useEffect(() => {
    personService
    .getPersons()
    .then(receivedPersons =>{
      setPersons(receivedPersons)
    })
  }, [])

  const addName = (event) =>{
    event.preventDefault()
    const isPresent = persons.map(names => names.name.toUpperCase()).indexOf(newName.toUpperCase())
    const nameObj = {
      name: newName,
      number:newNumber,
    } 
    console.log()
    if (isPresent === -1) {
      personService
        .addPerson(nameObj)
        .then(addedPerson => {
          setPersons(persons.concat(addedPerson))
          setSuccessMessage([true,`${nameObj.name} added succesfully`])
          clearTimeout(activeTimeout)
          setActiveTimeout(setTimeout(() => {
            setSuccessMessage(null)
            },4000))
        })
        .catch(error => {
          console.log(error.response.data.error)
          if (error.response.data.error === 'number missing') {
            clearTimeout(activeTimeout)
            setSuccessMessage([false,`number missing`])
          } else if (error.response.data.error === 'name missing'){
            clearTimeout(activeTimeout)
            setSuccessMessage([false,`name missing`])
          } else if (error.response.data.error === 'too short'){
            clearTimeout(activeTimeout)
            setSuccessMessage([false,`Name has to be atleast 3 characters long, and number 8 characters.`])
          } 
          setActiveTimeout(setTimeout(() => {
            setSuccessMessage(null)
            },4000))
                  
          })

    }
    else {
      if (window.confirm(`${newName} is already in the phonebook, replace number with new? `)) {
        const personServiceProps = [persons[isPresent].id, nameObj]
        personService
          .updateNumber(personServiceProps) 
          .then(updatedPerson => {
            setPersons(persons.map(person => person.id !== updatedPerson.id ? person : updatedPerson))
            setSuccessMessage([true,`${updatedPerson.name}'s number changed to ${updatedPerson.number}`])
            clearTimeout(activeTimeout)
            setActiveTimeout(setTimeout(() => {
              setSuccessMessage(null)
              },4000))
          })
          .catch(() => {
            setSuccessMessage([false,`${nameObj.name} has been already deleted`])
            clearTimeout(activeTimeout)
            setActiveTimeout(setTimeout(() => {
              setSuccessMessage(null)
              },4000))
            })
        }
      }
      setNewName('')
      setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChance = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setFiltertext(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterText={filterText} handler={handleFilterChange}/>
      <h2>Add number</h2>
      <Notification msg={successMessage} /> 
      <PersonAdder addName={addName} newName={newName} 
      handleNameChange={handleNameChange} newNumber={newNumber} 
      handleNumberChance={handleNumberChance} />
      <h2>Numbers</h2>
      <div>
        <AllPersons 
        persons={persons} 
        filterText={filterText} 
        setPersons={setPersons} 
        setSuccessMessage={setSuccessMessage}
        activeTimeout={activeTimeout}
        setActiveTimeout={setActiveTimeout} />
      </div>
    </div>
  )
}

export default App
