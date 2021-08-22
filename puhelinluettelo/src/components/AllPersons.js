import React from 'react'
import OnePerson from '../components/Oneperson'

const AllPersons = ({ persons,filterText, setPersons, setSuccessMessage, activeTimeout, setActiveTimeout }) => {
  const textToTest = new RegExp(filterText.toUpperCase())
  const personsToShow = persons.filter(name => textToTest.test(name.name.toUpperCase()) === true)
  return(
    <div>
      {personsToShow.map(names => <OnePerson 
        key={names.id} 
        id={names.id} 
        name={names.name} 
        number={names.number} 
        persons={persons} 
        setPersons={setPersons}
        setSuccessMessage={setSuccessMessage}
        activeTimeout={activeTimeout}
        setActiveTimeout={setActiveTimeout} /> 
      )}
    </div>
  )
}

export default AllPersons