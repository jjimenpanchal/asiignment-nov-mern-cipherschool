import React from 'react';
import ReactDOM from 'react-dom';
import Card from './cards'
import data from "./data"
// import App from './App'
const arrfun=(val)=>{
    return (
        <Card
        img={val.img}
        title={val.title}
        sname={val.sname}
        link={val.link}
        ></Card>
    )    
}

ReactDOM.render(
<>
<h1 className="heading_style">List Of Top 5 Online Content 2020</h1>
{data.map(arrfun)}
</>,
document.getElementById('root')
);
