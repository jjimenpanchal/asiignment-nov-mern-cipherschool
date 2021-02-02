import React, { useState } from'react';
import './index.css'

const App=()=>{

const [curtime,settime]=useState(new Date().toLocaleTimeString())  ;
const changetime=()=>{
    settime(new Date().toLocaleTimeString())
}
return (
    <React.Fragment>
        <h1>{curtime}</h1>
        <button onClick={changetime}>ClickMe</button>
    </React.Fragment>
)
}
export default App ;