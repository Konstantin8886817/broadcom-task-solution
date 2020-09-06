import React from 'react';
import classes from '../SearchField/SearchField.module.css';

export default (props) => {
    return (
        <div className={classes.main}>
            <input value={props.field} onChange={(e) => props.updateField(e.target.value)} className={classes.search} placeholder='Serch Reports'/>
            <div className={classes.sort}>
                <button className={classes.up} onClick={props.sort.bind(null, 'descending')}>&#9650;</button>
                <button className={classes.down} onClick={props.sort.bind(null, 'ascending')}>&#9660;</button>
            </div>
        </div>
    );
}