import React from 'react';
import './card.css'

const Card = ({imageOfcleb,Username}) => {
    return (
        <div className='card'>
            <img src={imageOfcleb} alt="pictur" />
            <p> {Username}</p>
        </div>
    )
}

export default Card
