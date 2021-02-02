import React, { useState } from "react";

const App = () => {
	// var val = 0;
	const [val, setval] = useState(0);
	const onclickinc = () => {
		setval(val + 1);
	};
	const onclickdsc = () => {
		if (val > 0) setval(val - 1);
		else {
			alert("Cannot Decrement Further");
		}
	};
	return (
		<React.Fragment>
			<div className="whole-background">
				<div className="card">
					<h1>{val}</h1>
					<br></br>
					<button onClick={onclickinc}>+</button>
					<button onClick={onclickdsc}>-</button>
				</div>
			</div>
		</React.Fragment>
	);
};
export default App;
