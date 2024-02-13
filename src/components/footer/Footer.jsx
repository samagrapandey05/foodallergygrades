function Footer(loggedIn, user) {
    console.log('Footer')
    const conditionalLoggedIn = () => {
        if(loggedIn === true){
            console.log('logged in')
        }
        else {
            console.log('not logged in')
        }
        return(
            (loggedIn === true) ? <p>Hello {user.fullname}</p> : <p>Please log in, or sign up to create an account.</p>
        )
    }
    return (
      <div className = "footer">
        <p>Please log in, or sign up to create an account.</p>
        <p>Food Allergy Grades, Inc</p>
      </div>
    );
  }
  
  export default Footer;