import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
	const [num, setnum] = useState();
	const [name, setname] = useState();
	const [move, setmove] = useState();
	useEffect(() => {
		async function getdata() {
			const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
			console.log(res);
			setname(res.data.name);
			setmove(res.data.moves.length);
		}
		getdata();
	});
	return (
		<React.Fragment>
			<h1>
				You Selected <span style={{ color: "red" }}>{num}</span>
			</h1>
			<h1>
				My Name Is <span style={{ color: "red" }}>{name}</span>
			</h1>
			<h1>
				I Have <span style={{ color: "red" }}> {move} </span>Moves
			</h1>
			<select
				value={num}
				onChange={(event) => {
					setnum(event.target.value);
				}}
			>
				<option value="1">1</option>
				<option value="25">25</option>
				<option value="3">3</option>
				<option value="4">4</option>
			</select>
		</React.Fragment>
	);
};

export default App;
