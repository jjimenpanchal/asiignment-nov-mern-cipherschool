import React, { useState } from "react";

const App = () => {
	const [fullname, setfname] = useState({
		fname: "",
		lname: "",
		email: "",
		mobile: "",
	});

	const clkevent = (event) => {
		event.preventDefault();
		alert("Form Submitted");
	};
	const onchange = (event) => {
		const val = event.target.value;
		const name = event.target.name;
		setfname((preValue) => {
			return {
				...preValue,
				[name]: val,
			};
			// if(name==='fname')
			// {
			// return{
			//     fname:val,
			//     lname:preValue.lname,
			//     email:preValue.email,
			//     mobile:preValue.mobile
			// }
			// }
			// else if (name==='lname')
			// {
			//     return{
			//         fname:preValue.fname,
			//         lname:val,
			//         email:preValue.email,
			//         mobile:preValue.mobile
			//     }
			// }
			// else if (name==='email')
			// {
			//     return{
			//         fname:preValue.fname,
			//         lname:preValue.lname,
			//         email:val,
			//         mobile:preValue.mobile
			//     }
			// }
			// else if (name==='mobile')
			// {
			//     return{
			//         fname:preValue.fname,
			//         lname:preValue.lname,
			//         email:preValue.email,
			//         mobile:val
			//     }
			// }
		});
	};

	return (
		<React.Fragment>
			<div>
				<form onSubmit={clkevent}>
					<div>
						<h1>
							Hello {fullname.fname} {fullname.lname}
						</h1>
						<p>{fullname.email}</p>
						<p>{fullname.mobile}</p>
						<input
							autoComplete="off"
							required="true"
							type="text"
							onChange={onchange}
							placeholder="Enter Your Name"
							name="fname"
							value={fullname.fname}
						></input>
						{/* <button onClick={clkevent}>ClickMe</button> */}
						<br />
						<input
							autoComplete="off"
							required="true"
							type="text"
							onChange={onchange}
							placeholder="Enter Your Last Name"
							name="lname"
							value={fullname.lname}
						></input>
						<br />
						<input
							autoComplete="off"
							required="true"
							type="email"
							onChange={onchange}
							placeholder="Enter Your Email Address"
							name="email"
							value={fullname.email}
						></input>
						<br />
						<input
							autoComplete="off"
							required="true"
							type="number"
							onChange={onchange}
							placeholder="Enter Your Mobile Number"
							name="mobile"
							value={fullname.mobile}
						></input>
						<button type="submit">ClickMe</button>
					</div>
				</form>
			</div>
		</React.Fragment>
	);
};
export default App;
