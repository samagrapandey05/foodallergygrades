import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import backend from './routes/user-profile/userList'
function NavLoggedIn(props) {
    const [showOtherComps, setShowOtherComps] = useState(false)
    const [showProfileComponents, setProfileComponents] = useState(false)
    let navigate = useNavigate(); 
  
    const routeHome = () =>{ 
    let path = `/`; 
    navigate(path);
  }

  const routeProfile = () =>{ 
    let path = `/profile`; 
    navigate(path);
  }
  const routeUpdateUsername = () =>{
    let path = `/profile/change_username`; 
    navigate(path);
  }
  const routeUpdatePassword = () =>{
    let path = `/profile/change_password`; 
    navigate(path);
  }
  const routeUpdateFullname = () =>{
    let path = `/profile/change_fullname`; 
    navigate(path);
  }
  const routeUpdateEmail = () =>{
    let path = `/profile/change_email`; 
    navigate(path);
  }
  const logOut = (event) => {
    event.preventDefault()
    props.setUser({id: '', email: '', fullname: '', password: '' })
    props.setLoggedIn(false)
  }
  const deleteUser = (event) => {
    event.preventDefault()
    //console.log(props.user.id)
    backend.delete(props.user.id).then(response => {
      props.setUser({id: '', email: '', fullname: '', password: '' })
      props.setLoggedIn(false)
    })
  }

  const routeSearchRestraunts = () =>{ 
    let path = `/search_restaurants`; 
    navigate(path);
  }
  const routeFastFood = () => {
    let path = '/search_restaurants/fast_food';
    navigate(path);
  }
  const routeFineDining = () => {
    let path = '/search_restaurants/fine_dining';
    navigate(path);
  }
  const routeCafe = () => {
    let path = '/search_restaurants/cafe';
    navigate(path);
  }
  const routeBakery = () => {
    let path = '/search_restaurants/bakery';
    navigate(path);
  }
    return (
      <div onMouseLeave={() => {
        setShowOtherComps(false);
        setProfileComponents(false);
      }} className = "header">
        <button onClick={routeHome} >
            Home
        </button>
        
        <button onMouseEnter = {() => setProfileComponents(true)} onClick={routeProfile}>Profile</button>
        {(showProfileComponents === true) ? <button className="subbutton" onClick={routeUpdateUsername}>Update Username</button> : null}
        {(showProfileComponents === true) ? <button className="subbutton" onClick={routeUpdatePassword}>Update Password</button> : null}
        {(showProfileComponents === true) ? <button className="subbutton" onClick={routeUpdateFullname}>Update Full Name</button> : null}
        {(showProfileComponents === true) ? <button className="subbutton" onClick={routeUpdateEmail}>Update Email</button> : null}
        {(showProfileComponents === true) ? <button className="subbutton" onClick={logOut}>Log Out</button> : null}
        {(showProfileComponents === true) ? <button className="subbutton" onClick={deleteUser}>Delete Account</button> : null}
        
        <button onMouseEnter = {() => setShowOtherComps(true)} onClick={routeSearchRestraunts}>Search Restraunts</button>
        {(showOtherComps === true) ? <button className="subbutton" onClick={routeFastFood}>Search Fast Food</button> : null}
        {(showOtherComps === true) ? <button className="subbutton" onClick={routeFineDining}>Search Fine Dining</button> : null}
        {(showOtherComps === true) ? <button className="subbutton" onClick={routeCafe}>Search Cafes</button> : null}
        {(showOtherComps === true) ? <button className="subbutton" onClick={routeBakery}>Search Bakeries</button> : null}
        {/*<article className="bg-gray-900">
        <Hero />
        <Partners />
        <Feature />
        <Cta g loggedIn={loggedIn} />
        <Stats />
        <Pricing loggedIn={loggedIn} />
        <Testimonials />
        <Team />
        <Comparison loggedIn={loggedIn} />
    <Newsletter />
        </article>*/}
      </div>
    );
  }
  
  export default NavLoggedIn;