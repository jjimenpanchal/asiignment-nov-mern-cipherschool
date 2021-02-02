import React from "react";
import { NavLink } from "react-router-dom";
const Error = () => {
	return (
		<>
			<h1>404 Error Not Found</h1>
			<p>
				<NavLink to="/"> Go Back</NavLink>
			</p>
		</>
	);
};

export default Error;
