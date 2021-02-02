import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
const List = (props) => {
	const [line, setline] = useState(false);
	const onclick = () => {
		setline(true);
	};
	return (
		<React.Fragment>
			<div className="list_style">
				<Button className="delbtn" onClick={onclick}>
					<DeleteIcon className="delbtn"></DeleteIcon>
				</Button>

				<li style={{ textDecoration: line ? "line-through" : "none" }}>
					{props.cur}
				</li>
			</div>
		</React.Fragment>
	);
};
export default List;
