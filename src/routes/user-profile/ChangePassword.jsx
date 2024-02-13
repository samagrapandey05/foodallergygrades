import backend from './userList'
import { useEffect, useState } from "react";
function ChangePassword(props){
    const [newPassword, setNewPassword] = useState('')
    const updatePassword = (event) => {
        event.preventDefault()
        const newUser = {id: props.user.id, email: props.user.email, fullname: props.user.fullname, password: newPassword}
        backend.update(props.user.id, newUser).then((response) => {
          props.setLoggedIn(true)
          props.setUser(response.data)
        })
      }
    return(
        <div className="center">
        <div className = "title">

        <h1>Update your password</h1>
        <p>Current Password: {props.user.password}</p>
        <form onSubmit={updatePassword}>
          <input placeholder="update password" value = {newPassword} onChange={(event) => {setNewPassword(event.target.value)}}/>
          <button type='submit'>Update Password</button> 
        </form>

        </div>
        </div>
    );
}
export default ChangePassword