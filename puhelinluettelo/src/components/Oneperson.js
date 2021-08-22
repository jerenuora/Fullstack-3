import React from "react"
import DeleteButton from '../components/DeleteButton'

const OnePerson = ({ id,name,number, persons, setPersons, setSuccessMessage, activeTimeout, setActiveTimeout }) => (
    <div>
     <b>{name}: {number} 
     <DeleteButton
     name={name} 
     id={id} 
     persons={persons} 
     setPersons={setPersons} 
     setSuccessMessage={setSuccessMessage}
     activeTimeout={activeTimeout}
     setActiveTimeout={setActiveTimeout} /></b>
    </div>
  )

export default OnePerson