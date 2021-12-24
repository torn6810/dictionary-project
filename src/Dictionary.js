import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props){
    const[keyword, setKeyword]=useState(props.defaultKeyword);
    const[results, setResults]=useState(null);
    const[loaded, setLoaded]=useState(false);
    const[photos, setPhotos]=useState(null);

    function searchDictionaryResponse(response){
        //console.log(response.data[0].meanings[0].definitions[0].definition);
        setResults(response.data[0]);
    }

    function searchPexelsResponse(response){
        console.log(response);
        setPhotos(response.data.photos);
    }

    function search(){
        //Documentation: https://dictionaryapi.dev/
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
        axios.get(apiUrl).then(searchDictionaryResponse);

        let pexelsApiKey="563492ad6f917000010000019e22b0c7059546448b4b80b31738ef25";
        let pexelsApiUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        let headers={ Authorization: `Bearer ${pexelsApiKey}` };
        axios.get(pexelsApiUrl, {headers:headers}).then(searchPexelsResponse);
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
            <h2 className="Search-for-a-word">Search for a word</h2>
            <section>
            <form onSubmit={handleSubmit}>
                <input type="search" placeholder="Enter a word" autoFocus={true} onChange={handleWordChange} defaultValue={props.defaultKeyword}/>
                <input type="submit" value="Search" className="Search-button"/>
            </form>
            </section>
            <Results results={results}/>
            <Photos photos={photos}/>    
        </div>
    );
} else{
    load(); 
    return "loading..."
}
}