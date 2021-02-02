import React from "react";

const Searchresult = (props) => {
	const link = `https://source.unsplash.com/900x500/?${props.name}`;
	return props.name === "" ? null : <img src={link} alt="Search Reasult"></img>;
};
export default Searchresult;
