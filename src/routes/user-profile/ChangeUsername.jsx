import backend from './userList'
import { useEffect, useState } from "react";

function ChangeUsername(props){
    const [newUsername, setNewUsername] = useState('')
    const updateUsername = (event) => {
        event.preventDefault()
        const newUser = {id: newUsername, email: props.user.email, fullname: props.user.fullname, password: props.user.password}
        const oldID = props.user.id
        backend.create(newUser).then(response => props.setUser(response.data))
        backend.delete(oldID)
      }
    console.log('In Change Username')
    return(
        <div className="center">
        <div className = "title">

        <h1>Update your username</h1>
        <p>Current Username: {props.user.id}</p>
        <form onSubmit={updateUsername}>
          <input placeholder="update username..." value = {newUsername} onChange={(event) => setNewUsername(event.target.value)}/>
          <button type='submit'>Update Username</button> 
        </form>

        </div>
        </div>
    );
}
export default ChangeUsername