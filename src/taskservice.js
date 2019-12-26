import axios from 'axios';

const baseUrl = 'http://localhost:3001/tasks';

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const add = item => {
    const request = axios.post(baseUrl, item)
    return request.then(response => response.data)
}

const update = (id, updatedNote) => {
    const request = axios.put(`${baseUrl}/${id}`, updatedNote)
    return request.then(response => response.data)
}

const remove = id => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default {
    getAll: getAll,
    add: add,
    update: update,
    remove: remove
}