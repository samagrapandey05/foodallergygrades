import backend from './userList'
import { useEffect, useState } from "react";

function SignUp(props) {
  //console.log('SignUp Page')
  if(props.loggedIn === true){
    console.log("logged in")
  }
  else{
    console.log("logged out")
  }
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')

  const [unique, setUnique] = useState(true)
  const [names, setNames] = useState([])

  useEffect(() => {
    backend.getAll().then(
      response => {
        setNames(response.data)
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
  const addUser = (event) => {
    console.log("Inside addUser Function")
    event.preventDefault()
    const userInfo = backend.getAll()
    let repeat = false
    for(let i = 0; i < names.length; i++){
      if(names[i].id === username){
        repeat = true
      }
    }
    console.log(repeat)
    if(repeat === false){
      console.log("into undefined")
      const userObject = {
      id: username, email: email, fullname: fullName, password: password
      }
      backend.create(userObject).then(response => {
      setNames(names.concat(response.data))
      props.setUser(response.data)
      props.setLoggedIn(true)
      console.log(props.user.id)
      console.log(props.user.email)
      console.log(props.user.fullname)
      console.log(props.user.password)
      console.log(props.loggedIn)
      setUnique(true)
    })
  }
  else{
    console.log("Into non unique")
    setUnique(false)
  }
  }
    return (
      <div className="center">
        <div className = "title">
        <h1>Create Your Food Allergy Grades Account</h1>
        <p>Enter username, password, full name, and email</p>
        <form onSubmit = {addUser}>
          <input placeholder='enter username' value = {username} onChange = {handleUsernameChange}/>
          <p>Hello</p>
          <input placeholder='enter password' value = {password} onChange = {handlePasswordChange}/>
          <p>Hello</p>
          <input placeholder='enter full name' value = {fullName} onChange = {handleFullnameChange}/>
          <p>Hello</p>
          <input placeholder='enter email' value = {email} onChange = {handleEmailChange}/>
          <button type='submit' style={{ marginTop: '30px'}}>Create Account</button>
        </form>
        {unique === false ? <p>Username taken, please retry with a different username.</p> : null}
        </div>
      </div>
    );
  }
  
  export default SignUp;