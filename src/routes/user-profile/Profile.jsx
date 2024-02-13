import backend from './userList'
import { useEffect, useState } from "react";

function Profile(props) {
    const [newUsername, setNewUsername] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [newFullname, setNewFullname] = useState('')
    console.log('User Profile')
    console.log('Password: ', props.user.password)
    //delete current user
    const deleteUser = (event) => {
      event.preventDefault()
      //console.log(props.user.id)
      backend.delete(props.user.id).then(response => {
        props.setUser({id: '', email: '', fullname: '', password: '' })
        props.setLoggedIn(false)
      })
    }
    //change username, email, password, or fullname
    const updateUsername = (event) => {
      event.preventDefault()
      const newUser = {id: newUsername, email: props.user.email, fullname: props.user.fullname, password: props.user.password}
      const oldID = props.user.id
      backend.create(newUser).then(response => props.setUser(response.data))
      backend.delete(oldID)
    }
    const updatePassword = (event) => {
      event.preventDefault()
      const newUser = {id: props.user.id, email: props.user.email, fullname: props.user.fullname, password: newPassword}
      backend.update(props.user.id, newUser).then((response) => {
        props.setLoggedIn(true)
        props.setUser(response.data)
      })
    }
    const updateEmail = (event) => {
      event.preventDefault()
      const newUser = {id: props.user.id, email: newEmail, fullname: props.user.fullname, password: props.user.password}
      backend.update(props.user.id, newUser).then(response => props.setUser(response.data))
    }
    const updateFullname = (event) => {
      event.preventDefault()
      const newUser = {id: props.user.id, email: props.user.email, fullname: newFullName, password: props.user.password}
      backend.update(props.user.id, newUser).then(response => props.setUser(response.data))
    }
    //log out of the account
    const logOut = (event) => {
      event.preventDefault()
      props.setUser({id: '', email: '', fullname: '', password: '' })
      props.setLoggedIn(false)
    }
    return (
      <div className = "center">
      <div className = "title">
        <h1>Hello, {props.user.fullname}</h1>
        {/*<button onClick={deleteUser}>Delete Account</button>
        <form onSubmit={updateUsername}>
          <input value = {newUsername} onChange={(event) => setNewUsername(event.target.value)}/>
          <button type='submit'>Update Username</button> 
        </form>
        <form onSubmit={updatePassword}>
          <input value = {newPassword} onChange={(event) => {setNewPassword(event.target.value)}}/>
          <button type='submit'>Update Password</button> 
        </form>
        <form onSubmit={updateEmail}>
          <input value = {newEmail} onChange={(event) => setNewEmail(event.target.value)}/>
          <button type='submit'>Update Email</button> 
        </form>
        <form onSubmit={updateFullname}>
          <input value = {newFullname} onChange={(event) => setNewFullname(event.target.value)}/>
          <button type='submit'>Update Full Name</button> 
        </form>
        <button onClick={logOut}>Log Out</button>*/}
      </div>
      </div>
    );
  }
  
  export default Profile;