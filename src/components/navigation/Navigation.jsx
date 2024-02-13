import { useNavigate } from "react-router-dom";

function Navigation() {
    let navigate = useNavigate(); 
  const routeLogIn = () =>{ 
    let path = `/sign-in`; 
    navigate(path);
  }
  const routeSignUp = () =>{ 
    let path = `/sign-up`; 
    navigate(path);
  }
    return (
      <div className = "header" >
        <button onClick={routeLogIn}>
            Log In
        </button>
        <button onClick={routeSignUp}>Sign Up</button>
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
  
  export default Navigation;