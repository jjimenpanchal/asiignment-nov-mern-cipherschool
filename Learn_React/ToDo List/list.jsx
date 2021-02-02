import React from "react";

const List = (props) => {
	const onclick = () => {
		return props.funk(props.id);
	};
	return (
		<React.Fragment>
			<div className="list_style">
				<i class="cross_button" aria-hidden="true" onClick={onclick}>
					X
				</i>
				<li>{props.val}</li>
			</div>
		</React.Fragment>
	);
};
export default List;
