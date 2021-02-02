import React from 'react';
import "./index.css"

const Check=(props)=>{
    var {x,y,z}=props;

    if ((x===y) && (x===z))
    {
        return (
            <>
                <h2>{x}{y}{z}</h2>
                <h2>Matched</h2>
            </>
        )
    }
    else{
        return (
            <>
                <h2>{x}{y}{z}</h2>
                <h2>Not Matched</h2>
            </>
        )
    }
}

function App()
{
    
    return (
        <React.Fragment>
        <h1 className="heading">🎰 Slot Machine Game</h1>
        <div className="machine">
            <Check x= '❤️' y='❤️' z='❤️'></Check>
            {/* <hr></hr> */}
            <br></br>
            <Check x= '🩸' y= '😄' z='❤️'></Check>
            <br></br>
            <Check x= '👡' y='😢' z= '🦆'></Check>
            <br></br>
            <Check x= '🎅' y='🎅' z='🎅'></Check>
            <br></br>
        </div>
        
        </React.Fragment>

    )
}
export default App;
