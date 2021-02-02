import React, { useState } from 'react'

const App=()=>{
    var temp="👨‍👧 👨‍👦‍👦";
    const[msg,changemsg]=useState(temp)
    const[bg,changebg]=useState("purple")
    var onclk=()=>{
        temp="One Time Clicked"
        changebg("red")
        changemsg(temp);
    }

    var dclk=()=>{
        temp="Double Clicked";
        changemsg(temp)
        changebg("purple")
    }
    return (
        <div style={{backgroundColor:bg}}>
            <button style={{backgroundColor:bg}} onClick={onclk} onDoubleClick={dclk}>{msg}</button>
        </div>
        
    )
}

export default App;