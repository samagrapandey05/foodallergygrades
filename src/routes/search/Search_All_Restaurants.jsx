import { useEffect, useState } from "react";
import Autofill from './Autofill';
//import backend from './restaurant-list.js'
function Search_All_Restaurants() {
    const [searchInput, setSearchInput] = useState("");
    const [places, setPlaces] = useState([]);
    const [autoFill, setAutofill] = useState(false);
    const [numOptions, setNumOptions] = useState(0)

    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
        if(event.target.value.length > 0){
            setAutofill(true);
            console.log("Input length non-zero")
        }
        if(event.target.value.length === 0){
            setAutofill(false);
        }
    }

    const setTopMargin = () => {
        if(numOptions === 0){
            return 0;
        }
        if(numOptions === 1){
            return 66;
        }
        if(numOptions === 2){
            return 68.5;
        }
        if(numOptions === 3){
            return 71;
        }
        if(numOptions === 4){
            return 73.5;
        }
        if(numOptions >= 5){
            return 76;
        }
    }

    return (
      <div class="center">
        <div class="title">
        <h1>Search Restraunts</h1>
        </div>
        <form class="searchForm">
            <input class="searchBar" placeholder="Search All Restraunts..." value = {searchInput} onChange = {handleInputChange}/>
        </form>
        <div className = "autofill">
            {(autoFill === true) ? <Autofill searchInput={searchInput} numOptions={numOptions} setNumOptions={setNumOptions}/> : null}
        </div>
      </div>
    );
  }
  
  export default Search_All_Restaurants;