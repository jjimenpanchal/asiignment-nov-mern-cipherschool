import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
	return (
		<>
			<div className="navbar">
				<NavLink className="link" exact activeClassName="click" to="/">
					About Us
				</NavLink>
				<NavLink exact className="link" activeClassName="click" to="/contact">
					Contact Us
				</NavLink>
				<NavLink
					className="link"
					activeClassName="click"
					to="/User/Jimen/Panchal"
				>
					User
				</NavLink>
				<NavLink className="link" activeClassName="click" to="/search">
					Search
				</NavLink>
			</div>
		</>
	);
};
export default Menu;
