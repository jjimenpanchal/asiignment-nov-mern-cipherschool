import React from "react";

const show_card = (props) => {
	return (
		<React.Fragment>
			<div className="show_card">
				<h3>{props.title}</h3>
				<br></br>
				<p>{props.content}</p>
			</div>
		</React.Fragment>
	);
};
export default show_card;
