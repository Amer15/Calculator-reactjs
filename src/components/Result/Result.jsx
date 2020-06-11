import React from 'react';
import './Result.css';

const Result = props => {
    return(
        <div className="result-container">
         {props.result}
        </div>
    )
}

export default Result;