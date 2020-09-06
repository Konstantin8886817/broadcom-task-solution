import React from 'react';

import ReportComponent from '../ReportComponent/ReportComponent';
import classes from './ReportsList.module.css';

export default function(props){
    return (
        <div className={classes.list}>
            {
                props.list.map((i) => {
                    return <ReportComponent key={i.id} report={i}/>
                })
            }
        </div>
    );
}

// overscrolly : scroll 

// overflow-scroll-y: scroll;