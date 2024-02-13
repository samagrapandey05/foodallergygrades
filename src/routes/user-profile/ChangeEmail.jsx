import backend from './userList'
import { useEffect, useState } from "react";

function ChangeEmail(props){
    const [newEmail, setNewEmail] = useState('')

    const updateEmail = (event) => {
        event.preventDefault()
        const newUser = {id: props.user.id, email: newEmail, fullname: props.user.fullname, password: props.user.password}
        backend.update(props.user.id, newUser).then(response => props.setUser(response.data))
      }

    return(
        <div className="center">
        <div className = "title">

        <h1>Update your Email</h1>
        <p>Current Email: {props.user.email}</p>
        
        <form onSubmit={updateEmail}>
          <input placeholder="update email" value = {newEmail} onChange={(event) => setNewEmail(event.target.value)}/>
          <button type='submit'>Update Email</button> 
        </form>

        </div>
        </div>
    );
}
export default ChangeEmail