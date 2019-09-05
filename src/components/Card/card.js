import React from 'react';
import './Card.css';

const Card = props => (
    <div
        classname ='card'
        value={props.id}
        onClick={() => props.clickEvent(props.id)}>
            <div className='img-container'>
                <img alt={props.name} src={props.image}/>
            </div>
        </div> 
);

export default Card;