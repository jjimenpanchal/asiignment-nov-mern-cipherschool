import React, { useState } from "react";
import Header from "./Header";
import CreateNote from "./create_note";
import Showcard from "./show_card";
const App = () => {
	const [arr, setarr] = useState([]);
	const [hide, sethide] = useState(true);
	const addaree = (props) => {
		setarr(() => {
			return [{ title: props.title, content: props.content }, ...arr];
		});
	};
	const dclick = () => {
		sethide(true);
	};
	const onclick = () => {
		sethide(false);
	};
	return (
		<React.Fragment>
			<div onDoubleClick={dclick}>
				<Header></Header>
				<CreateNote hide={hide} onclick={onclick} add={addaree}></CreateNote>
				<div className="show_all_cards">
					{arr.map((cur) => {
						return (
							<Showcard title={cur.title} content={cur.content}></Showcard>
						);
					})}
				</div>
			</div>
		</React.Fragment>
	);
};
export default App;
