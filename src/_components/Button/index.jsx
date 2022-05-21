import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function Button() {
  return (
    <Link to='register'>
      <button className='btn'>Sign Up</button>
    </Link>
  );
}

export default Button;