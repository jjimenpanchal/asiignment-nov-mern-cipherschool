import React from 'react';
// let Pizza =(props) ==>
// function colo(){
//     document.body.style.background='blue';
// }

function Pizza(props)
{
    return(
        <div class='pizza' style={{backgroundColor:props.color}}>
            <h3>Count {props.count}</h3>
            <button onClick ={() => props.increment()  }>+</button>
            <button onClick ={() => props.refresh()  }>ReFresh</button>
            <button onClick={() => props.decrement()}>-</button>
        </div>
    );
    
}

export default Pizza;