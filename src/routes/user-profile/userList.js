import axios from 'axios'
const baseUrl = 'http://localhost:3000/userList'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
  console.log(`${baseUrl}/${id}`)
  console.log(newObject)
  return axios.put(`${baseUrl}/${id}`, newObject)
}

const deleteResource = (id) => {
  console.log(`${baseUrl}/${id}`)
  return axios.delete(`${baseUrl}/${id}`)
}
export default { 
  getAll: getAll, 
  create: create, 
  update: update,
  delete: deleteResource
}