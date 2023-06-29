import React from 'react';
import '../style/LoadingMessage.css'
const LoadingMessage = () => {
    return (
        <div className="loader-container">
            <div className="loader">
                <div className="circle" id="a"></div>
                <div className="circle" id="b"></div>
                <div className="circle" id="c"></div>
            </div>

        </div>

    );
}

export default LoadingMessage;