import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import List from "./list";
const App = () => {
	const [val, setval] = useState("");
	const [arr, setarr] = useState([]);
	const onchange = (event) => {
		setval(event.target.value);
	};
	const onclick = () => {
		setarr((prev) => {
			return [...prev, val];
		});
		setval("");
	};
	return (
		<React.Fragment>
			<div className="whole-background">
				<div className="card">
					<h1>ToDoList</h1>
					<br></br>
					<input value={val} type="text" onChange={onchange}></input>
					<Button className="Button" onClick={onclick}>
						<AddIcon />
					</Button>
					<br></br>

					<div>
						<ol>
							{arr.map((cur, idx) => {
								return <List cur={cur} key={idx}></List>;
							})}
						</ol>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default App;
