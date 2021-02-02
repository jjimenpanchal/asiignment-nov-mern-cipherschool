import React, { useState } from 'react'

const App=()=>{
    const [ctime,settime]=useState(new Date().toLocaleTimeString());
    const utime=()=>{
        settime(new Date().toLocaleTimeString());
    }

    setInterval(utime,1000)

    return(
        <div>
            <h1>{ctime}</h1>
        </div>
    )
}
export default App;