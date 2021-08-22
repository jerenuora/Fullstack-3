import React from 'react'

const Notification = ({ msg }) => {
    const notificationStylePos = {
        color: 'green',
        backround: 'lightgreen',
        fontSize: 18,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10   
      }
    const notificationStyleNeg = {
        color: 'red',
        backroundColor: 'pink',
        fontSize: 18,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10   
    }
        
    if (msg === null) {
      return null
    }
    if (msg[0] === true) {
        return ( 
        <div style={notificationStylePos}>
            {msg[1]}
        </div>
        )
    }
    else {
        return ( 
            <div style={notificationStyleNeg}>
                {msg[1]}
            </div>
            )
    }
}

export default Notification