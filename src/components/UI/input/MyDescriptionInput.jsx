import React from 'react';
import classes from "./MyDescriptionInput.module.css"

const MyDescriptionInput = (props) => {
    return (
        <input className={classes.MyDescIpt} {...props}/>
    );
};

export default MyDescriptionInput;