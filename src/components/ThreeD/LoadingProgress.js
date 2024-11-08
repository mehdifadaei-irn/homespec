// LoadingProgress.js
import React from 'react';
// import  './loading.css'
import classes from "./loading.module.css";


const LoadingProgress = ({ progress }) => {

    // className="progress-container"
    return (
        <div className={classes.background} >
            <div className="progress-bar" style={{ width: `${progress}%` }}>
                {progress}%
            </div>
        </div>
    );
};

export default LoadingProgress;



