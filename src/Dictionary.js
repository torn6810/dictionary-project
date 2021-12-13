import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(){
    const[keyword, setKeyword]=useState("");

    function search(event){
        event.preventDefault();
        alert (`Searching for "${keyword}"`);
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
        </div>
    )
}