import React from "react"

const Filter = ({ filterText, handler }) => (
    <div>Filter names shown:
        <input
        value={filterText}
        onChange={handler}/>
    </div>
)

  export default Filter  