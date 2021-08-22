import React from 'react'
import personService from '../services/persons'


const DeleteButton = ({ id, name, persons, setPersons, setSuccessMessage, activeTimeout, setActiveTimeout })  => {
    const deleteHandler = () => {
        if (window.confirm(`Remove ${name}? `)) {
        personService
            .deleteNumber(id)
            .then(() =>{
            setPersons(persons.filter(person => person.id !== id))
            setSuccessMessage([true, `${persons.filter(person => person.id === id)[0].name} removed`])
            clearTimeout(activeTimeout)
            setActiveTimeout(setTimeout(() => { 
              setSuccessMessage(null)
              },4000))
          })
            .catch(() => {                                                      
              setSuccessMessage([false,`${name} has been already deleted`])  
              clearTimeout(activeTimeout)
              setActiveTimeout(setTimeout(() => { 
                setSuccessMessage(null)
                },4000))
              })
            }  
    }
    return(
    <div>
        <button onClick={deleteHandler}>delete</button>
    </div>
    )
}
  
export default DeleteButton