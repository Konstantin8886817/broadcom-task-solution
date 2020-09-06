import React from 'react';
import classes from './ReportComponent.module.css';

export default(props) => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

    let correntReport = props.report;
    let updated = new Date(correntReport.updated);

    let month = monthNames[updated.getMonth()];
    let day = updated.getDay();
    let hour = updated.getHours();
    let minutes = updated.getMinutes();
    return (
        <div className={classes.report}>
            <div className={classes.top}>
                <p>{correntReport.name.length > 30 ? correntReport.name.substring(0, 30) + '...' : correntReport.name}</p>
                <p>{month} {day}</p>
            </div>
            <div className={classes.bottom}>
                <p>{correntReport.type} : {correntReport.location}</p>
                <p>{hour}:{minutes}</p>
            </div>
        </div>
    );
}