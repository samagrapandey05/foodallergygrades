import { useEffect, useState } from "react";
import backend from './userList'

function SignIn(props) {
  
  const [users, setUsers] = useState([])

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')

  const [existing, setExisting] = useState(null)

  useEffect(() => {
    backend.getAll().then(
      response => {
        setUsers(response.data)
      }
    )
  }, [])

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }
  const handleFullnameChange = (event) => {
    setFullName(event.target.value)
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }
  const checkUser = (event) => {
    console.log("Inside addUser Function")
    event.preventDefault()
    let repeat = false
    for(let i = 0; i < users.length; i++){
      if(users[i].id === username && users[i].email === email && users[i].fullname === fullName && users[i].password === password){
        repeat = true
      }
    }
    console.log(repeat)
    if(repeat === true){
      props.setUser({id: username, email: email, fullname: fullName, password: password})
      props.setLoggedIn(true)
      setExisting(true)
    }
    else{
      setExisting(false)
    }
  }
  
    return (
      <div className="center">
        <div className="title">
        <h1>Log Into Your Food Allergy Grades Account</h1>
        <p>Enter username, password, full name, and email</p>
        <form onSubmit = {checkUser}>
          <input placeholder="enter username" value = {username} onChange = {handleUsernameChange}/>
          <p>Enter password</p>
          <input placeholder="enter password" value = {password} onChange = {handlePasswordChange}/>
          <p>Enter Full Name</p>
          <input placeholder="enter full name" value = {fullName} onChange = {handleFullnameChange}/>
          <p>Enter Email</p>
          <input placeholder="enter email" value = {email} onChange = {handleEmailChange}/>
          <button type='submit' style={{ marginTop: '30px'}}>Log In</button>
        </form>
        {(existing === false) ? <p>Login information not found</p> : null}
        </div>
      </div>
    );
  }
  
  export default SignIn;