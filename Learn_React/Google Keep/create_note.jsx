import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
const Create_note = (props) => {
	const [obj, setobj] = useState({
		title: "",
		content: "",
	});
	const onclick = () => {
		props.add(obj);
		setobj(() => {
			return { title: "", content: "" };
		});
	};
	const onchange = (event) => {
		if (event.target.name === "title") {
			setobj((pre) => {
				return { title: event.target.value, content: pre.content };
			});
		} else if (event.target.name === "content") {
			setobj((pre) => {
				return { content: event.target.value, title: pre.title };
			});
		}
	};
	const onclk = () => {
		console.log("brobre");
		props.onclick();
	};
	return (
		<React.Fragment>
			<div className="card">
				{!props.hide ? (
					<input
						value={obj.title}
						name="title"
						onChange={onchange}
						placeholder="Title"
					/>
				) : (
					""
				)}
				{/* <br></br> */}
				<textarea
					onClick={onclk}
					value={obj.content}
					name="content"
					placeholder="Take A Note ...."
					onChange={onchange}
				/>
				<button onClick={onclick}>
					<AddIcon></AddIcon>
				</button>
			</div>
		</React.Fragment>
	);
};
export default Create_note;
