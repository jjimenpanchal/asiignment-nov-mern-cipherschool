import React from "react";
import About from "./About";
import Contact from "./Contact";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
const App = () => {
	const Error = () => {
		return <h1>Oops! Page Not Found</h1>;
	};
	return (
		<>
			<Menu />
			<Switch>
				<Route exact path="/" component={About} />
				<Route path="/contact" component={Contact} />
				<Route component={Error} />
			</Switch>
		</>
	);
};

export default App;
