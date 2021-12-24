import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props){
    return(
        <div className="Meaning">
            <h3 className="part-of-speech">{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function(definition, index)
            {
                return(
                    <div key={index}>
                        <p>
                        <div className="definition">
                        <strong>Definition:{" "}</strong>{definition.definition}
                        </div> 
                        <div className="example">
                        <em>"{definition.example}"</em>
                        </div>
                        <Synonyms synonyms={definition.synonyms}/>
                        </p>
                    </div>
                );
            })}
        </div>
    );
}