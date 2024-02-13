import { useEffect, useState } from "react";
function FooterLoggedIn(props) {
    const [value, setValue] = useState(props.user)
    useEffect(() => {setValue(props.user)}, [props.user])
    console.log('Footer')
    return (
      <div className="footer">
        <p>Hello {props.user.fullname}</p>
        <p>Food Allergy Grades, Inc</p>
      </div>
    );
  }
  
  export default FooterLoggedIn;