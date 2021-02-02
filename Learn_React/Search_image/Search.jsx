import React, { useState } from "react";
import Searchresult from "./Searchresult";
const Search = () => {
	const [img, setimg] = useState("");
	const onchange = (event) => {
		setimg(event.target.value);
	};
	return (
		<div className="input_div">
			<br></br>
			<input
				className="input"
				value={img}
				onChange={onchange}
				type="text"
			></input>
			<br />
			<Searchresult name={img}></Searchresult>
		</div>
	);
};

export default Search;
