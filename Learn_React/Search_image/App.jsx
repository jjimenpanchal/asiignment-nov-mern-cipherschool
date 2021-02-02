import React from "react";
import About from "./About";
import Contact from "./Contact";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import User from "./User";
// import { Search } from "@material-ui/icons";
import Error from "./Error";
import Search from "./Search";
const App = () => {
	// const Error = () => {
	// 	return <h1>Oops! Page Not Found</h1>;
	// };
	return (
		<>
			<Menu />
			<Switch>
				<Route exact path="/" render={() => <About name="Jimen" />} />
				<Route
					exact
					path="/contact"
					component={() => <Contact name="Jimen Contact" />}
				/>
				<Route path="/user/:fname/:lname" component={User} />

				<Route path="/search" component={Search} />
				<Route component={Error} />
			</Switch>
		</>
	);
};

export default App;
