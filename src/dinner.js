import React from 'react';

function Dinner(props) {
    return(
        <div>
        <h1> Our Menu for {props.Days} is {props.dishName} with {props.sweetDish} </h1>
        
        </div>
    )

}
export default Dinner;