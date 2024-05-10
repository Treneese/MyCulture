import React from 'react'
import './Description.css'
function Description (props) {

    return(props.trigger) ? (
        <div className='description-popup'>
            <div className='description-inner-popup'>
                <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button>
                {props.children}
            </div>

        </div>
    ) :"";
}

export default Description