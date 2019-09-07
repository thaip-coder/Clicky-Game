import React from 'react';
import './Nav.css';

const Nav = props => (
    <div className='container'>
    <nav className='navbar navbar-light bg-light'>
        <ul className='navbar navbar-light bg-light'>
            <li className='navbar navbar-light bg-light'>
                <a className='navbar-brand' href='/Clicky-Game/'>{props.title}</a>
            </li>
            <li className='navbar navbar-light bg-light' id='rw'>{props.rightWrong}</li>
            <li className='navbar navbar-light bg-light' id='current'>Current Score: {props.score}</li>
            <li className='navbar navbar-light bg-light' id='top'>High Score: {props.highScore}</li>
        </ul>
    </nav>
    </div>
);

export default Nav;