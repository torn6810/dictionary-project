import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props){
    const[keyword, setKeyword]=useState(props.defaultKeyword);
    const[results, setResults]=useState(null);
    const[loaded, setLoaded]=useState(false);

    function searchWord(response){
        console.log(response.data[0].meanings[0].definitions[0].definition);
        setResults(response.data[0]);
    }

    function search(){
        //Documentation: https://dictionaryapi.dev/
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
        axios.get(apiUrl).then(searchWord);
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function handleWordChange(event){
        console.log(event.target.value);
        setKeyword(event.target.value);
    }

    function load(){
    setLoaded(true);
    search();
    }

    if (loaded){
    return(
        <div className="Dictionary">
            <section>
            <form onSubmit={handleSubmit}>
                <input type="search" placeholder="Enter a word" autoFocus={true} onChange={handleWordChange}/>
                <input type="submit" value="Search" className="Search-button"/>
            </form>
            </section>
            <Results results={results}/>    
        </div>
    );
} else{
    load(); 
    return "loading..."
}
}