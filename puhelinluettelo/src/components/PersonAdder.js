import React from "react"

const PersonAdder = ({ addName, newName, handleNameChange, newNumber, handleNumberChance }) => (
    <form onSubmit={addName}>  
        <div>    
            Name: <input
            value={newName}
            onChange={handleNameChange}/>
        </div>
        <div>
            Number: <input 
            value={newNumber}
            onChange={handleNumberChance}/>
        </div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>
)

export default PersonAdder  