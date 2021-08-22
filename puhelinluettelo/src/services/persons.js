import axios from 'axios'  
const baseUrl = '/api/persons'

const getPersons = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const addPerson = newPerson => {
    const request = axios.post(baseUrl, newPerson)
    return request.then(response => response.data)
}

const updateNumber = props => {
    const request = axios.put(`${baseUrl}/${props[0]}`, props[1])
    return request.then(response => response.data)
}

const deleteNumber = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}
const exports = { getPersons, addPerson, updateNumber, deleteNumber }
export default exports




