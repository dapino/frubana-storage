import React from 'react';

import '../../styles/elements/Button.css'

function Button(props){
    return (
        <button className="Button">
            {props.text}
        </button>
    )
}

export default Button;