import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

//import individual pages
import Navigation from "./components/navigation/Navigation";//log in info
import NavLoggedIn from './NavLoggedIn';
import Landing from "./routes/landing/Landing"; //home page
import Footer from "./components/footer/Footer"; //footer information
import Search_All_Restaurants from "./routes/search/Search_All_Restaurants";//Search Page for resaurants, and a Google Maps Places API, info windows, and user location
import Fast_Food from "./routes/search/Fast_Food";
import Fine_Dining from "./routes/search/Fine_Dining";
import Cafe from "./routes/search/Cafe";
import Bakery from "./routes/search/Bakery";
import SignIn from "./routes/user-profile/SignIn";
import SignUp from "./routes/user-profile/SignUp";
import Profile from "./routes/user-profile/Profile";//include restaurants visited and reviewed
import ChangeUsername from "./routes/user-profile/ChangeUsername";
import ChangePassword from "./routes/user-profile/ChangePassword";
import ChangeFullname from "./routes/user-profile/ChangeFullname";
import ChangeEmail from "./routes/user-profile/ChangeEmail";
import NotFound from "./components/NotFound";
import FooterLoggedIn from './components/footer/FooterLoggedIn'

function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState({ id: '', email: '', fullname: '', password: '' });
  const [loggedIn, setLoggedIn] = useState(false);
  const [triggeredLogout, setTriggeredLogout] = useState(false);

  return (
    <Router>
      {(loggedIn === false) ? <Navigation/> : <NavLoggedIn user={user} setUser={setUser} setLoggedIn={setLoggedIn} setTriggeredLogout={setTriggeredLogout}/>}
      <Routes>
        <Route path="/" index element={<Landing loggedIn={loggedIn} />} />
        <Route path="/search_restaurants" element={<Search_All_Restaurants />} >
          <Route path="/search_restaurants/fast_food" element={<Fast_Food/>}/>
          <Route path='/search_restaurants/fine_dining' element={<Fine_Dining/>}/>
          <Route path='/search_restaurants/cafe' element={<Cafe/>}/>
          <Route path='/search_restaurants/bakery' element={<Bakery/>}/>
        </Route>
        <Route path="/sign-up" element={(loggedIn === true)? <Profile user={user} setUser={setUser} setLoggedIn={setLoggedIn} setTriggeredLogout={setTriggeredLogout} /> : <SignUp user={user} setUser={setUser} loggedIn = {loggedIn} setLoggedIn={setLoggedIn}/>} />
        <Route path="/profile" element={(loggedIn===true) ? <Profile user={user} setUser={setUser} setLoggedIn={setLoggedIn} setTriggeredLogout={setTriggeredLogout} /> : <SignUp user={user} setUser={setUser} loggedIn = {loggedIn} setLoggedIn={setLoggedIn}/>} />
        <Route path="/profile/change_username" element={(loggedIn===true) ? <ChangeUsername user={user}/> : <SignUp user={user} setUser={setUser} loggedIn = {loggedIn} setLoggedIn={setLoggedIn}/>}/>
        <Route path="/profile/change_password" element={ (loggedIn===true) ? <ChangePassword user={user}/> : <SignUp user={user} setUser={setUser} loggedIn = {loggedIn} setLoggedIn={setLoggedIn}/>}/>
        <Route path="/profile/change_email" element={ (loggedIn===true) ? <ChangeEmail user={user} /> : <SignUp user={user} setUser={setUser} loggedIn = {loggedIn} setLoggedIn={setLoggedIn}/>}/>
        <Route path="/profile/change_fullname" element={ (loggedIn===true) ? <ChangeFullname user={user}/> : <SignUp user={user} setUser={setUser} loggedIn = {loggedIn} setLoggedIn={setLoggedIn}/>}/>
        <Route path="/sign-in" element={(loggedIn===true) ? <Profile user={user} setUser={setUser} setLoggedIn={setLoggedIn} setTriggeredLogout={setTriggeredLogout} /> : <SignIn user={user} setUser={setUser} loggedIn = {loggedIn} setLoggedIn={setLoggedIn} />} />
        {/*<Route path="/sign-in" element={loggedIn ? <Profile retrieveDatabase={retrieveDatabase} user={user} updateUser={updateUser} deleteUser={deleteUser} setLoggedIn={setLoggedIn} setTriggeredLogout={setTriggeredLogout} /> : <SignIn retrieveDatabase={retrieveDatabase} user={user} setLoggedIn={setLoggedIn} />} />
        <Route path="/profile" element={loggedIn ? <Profile retrieveDatabase={retrieveDatabase} user={user} updateUser={updateUser} deleteUser={deleteUser} setLoggedIn={setLoggedIn} setTriggeredLogout={setTriggeredLogout} /> : <NotFound />} />
        <Route path='*' element={<NotFound />} />*/}
      </Routes>
      {(loggedIn === false) ? <Footer loggedIn = {loggedIn} user = {user}/> : <FooterLoggedIn user={user}/>}
    </Router>

    /*<div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>*/
  )
}

export default App
