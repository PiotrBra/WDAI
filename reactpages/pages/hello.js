import React from'react'
import panda3 from './images/panda3.jpg'
import './hello.css'

const Hello  = () => {
    return(
        <div className="hello-container">
            <div className = "hello-content">
                <img src={panda3}
                alt="szefo"
                className="hello-image"
                />
                <h2 className="hello-text">daj pan 3</h2>
            </div>
        </div>
    );
};
export default Hello;