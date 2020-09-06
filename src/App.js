import React, { useState } from 'react';
import SideBar from './components/SideBar/SideBar';

import classes from './App.module.css';

export default function (){
  const [mode, setMode] = useState(false);

  function onClickHandler(){
    setMode(!mode);
    console.log(!mode);
  }

  return (
    <div>
      {mode ? null : <button onClick={onClickHandler} className={classes.btn}>Show Reports</button>}
      {mode ? <SideBar onCloseHandler={onClickHandler}/> : null}
    </div>
  );
}
