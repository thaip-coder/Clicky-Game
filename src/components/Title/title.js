import React from 'react';
import './Title.css';

const Title = props => <h2 className="jumbotron jumbotron-fluid title">{props.children}</h2>;
 
export default Title;