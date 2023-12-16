import React from 'react';
import '../styles.css';
import dsrLogo from '../../public/dsr-logo.png'
import Child from './Child';

const App = () => {
  return (
    <div className="container">
            <div className="header">
                <h1>Hello React from DSR!</h1>
            </div>

            <img  src={dsrLogo} alt="dsr Logo"/>

            <Child />
        </div>
  )
}

export default App