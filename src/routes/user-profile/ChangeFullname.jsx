import backend from './userList'
import { useEffect, useState } from "react";
function ChangeFullname(props){
    const [newFullname, setNewFullname] = useState('')

    const updateFullname = (event) => {
        event.preventDefault()
        const newUser = {id: props.user.id, email: props.user.email, fullname: newFullName, password: props.user.password}
        backend.update(props.user.id, newUser).then(response => props.setUser(response.data))
      }
    return(
        <div className="center">
        <div className = "title">

        <h1>Update your Name</h1>
        <p>Current Full Name: {props.user.fullname}</p>

        <form onSubmit={updateFullname}>
          <input placeholder="Change Full Name" value = {newFullname} onChange={(event) => setNewFullname(event.target.value)}/>
          <button type='submit'>Update Full Name</button> 
        </form>

        </div>
        </div>
    );
}
export default ChangeFullname