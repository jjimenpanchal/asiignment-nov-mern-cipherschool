import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
const User = () => {
	const { fname, lname } = useParams();
	const location = useLocation();
	const history = useHistory();
	const onclick = () => {
		// alert("You Got Me");
		history.goBack();
	};
	return (
		<React.Fragment>
			<h1>
				You Are In {fname} {lname} Page
			</h1>
			<br />
			<br />
			<p>Your Location Is {location.pathname}</p>
			{location.pathname === `/User/jimen/luhar` ? (
				<>
					<br />
					<br />
					<button onClick={onclick}>Back</button>
					<button
						onClick={() => {
							history.push("/");
						}}
					>
						Home
					</button>
				</>
			) : null}
		</React.Fragment>
	);
};

export default User;
