import React, { useEffect, useState } from "react";

const App = () => {
	const [num, setnum] = useState(0);
	useEffect(() => {
		// alert("brobre");
		document.title = `You Clicked ${num} Times`;
	});
	return (
		<>
			<button
				onClick={() => {
					setnum(num + 1);
				}}
			>
				ClickMe {num}
			</button>
		</>
	);
};
export default App;
