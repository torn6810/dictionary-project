import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(){
    const[keyword, setKeyword]=useState("");
    const[results, setResults]=useState(null);

    function searchWord(response){
        console.log(response.data[0].meanings[0].definitions[0].definition);
        setResults(response.data[0]);
    }

    function search(event){
        event.preventDefault();
       // alert (`Searching for "${keyword}"`);
        //Documentation: https://dictionaryapi.dev/
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
        axios.get(apiUrl).then(searchWord);
    }

    function handleWordSubmit(event){
        console.log(event.target.value);
        setKeyword(event.target.value);
    }

    return(
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" placeholder="Enter a word" autoFocus={true} onChange={handleWordSubmit}/>
                <input type="submit" value="Search"/>
            </form>
            <Results results={results}/>    
        </div>
    )
}