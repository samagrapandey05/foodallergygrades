import { useEffect, useState } from "react";
function Autofill(props) {
    const [numMatches, setNumMatches] = useState(props.numOptions)
    useEffect(()=>{
        setNumMatches(props.numOptions);
    },[props.numOptions])

    //have some logic for checking the matches and determining the number of matches
    props.setNumOptions(5);

    return(
        <div className="dropDown">
            {(numMatches > 0) ? <button className="dropDownOption">Option 1</button> : null}
            {(numMatches > 1) ? <button className="dropDownOption">Option 2</button> : null}
            {(numMatches > 2) ? <button className="dropDownOption">Option 3</button> : null}
            {(numMatches > 3) ? <button className="dropDownOption">Option 4</button> : null}
            {(numMatches > 4) ? <button className="dropDownOption">Option 5</button> : null}
        </div>
    );
}
export default Autofill