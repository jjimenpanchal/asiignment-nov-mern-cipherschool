import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Menu = () => {
	return (
		<>
			<Link to="/">About Us</Link>
			<Link to="/contact">Contact Us</Link>
			<br></br>
			<NavLink exact activeClassName="click" to="/">
				About Us
			</NavLink>
			<NavLink activeClassName="click" to="/contact">
				Contact Us
			</NavLink>
			<br></br>
			<a href="/">About Us </a>
			<a href="/contact">Contact Us</a>
		</>
	);
};
export default Menu;
