import React from 'react';
import './Nav.css';

const Nav = props => (
    <nav>
        <ul>
            <li className='brand animated lightSpeedIn'>
                <a href='/Clicky-Game/'>{props.title}</a>
            </li>
            <li id='rw'>{props.rightWrong}</li>
            <li id='current'>Current Score: {props.score}</li>
            <li id='top'>High Score: {props.highScore}</li>
        </ul>
    </nav>
);

export default Nav;