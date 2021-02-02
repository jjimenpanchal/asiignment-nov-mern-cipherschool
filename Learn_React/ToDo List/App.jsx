import React, { useState } from "react";
import List from "./list";
const App = () => {
	const [val, setval] = useState("");
	const [arr, setarr] = useState([]);
	const onchange = (event) => {
		setval(event.target.value);
		console.log(val);
	};
	const onclick = () => {
		setarr((prev) => {
			return [...prev, val];
		});
		setval("");
	};
	const delete_arr = (id) => {
		setarr((prev) => {
			return prev.filter((cur, idx) => {
				return idx !== id;
			});
		});
	};
	return (
		<React.Fragment>
			<div className="whole-background">
				<div className="card">
					<h1>To-Do List App</h1>
					<br></br>
					<input type="text" value={val} onChange={onchange} />
					<button onClick={onclick}>+</button>
					<br></br>
					<ol>
						{arr.map((cur, idx) => {
							return <List val={cur} id={idx} funk={delete_arr} />;
						})}
					</ol>
				</div>
			</div>
		</React.Fragment>
	);
};
export default App;
