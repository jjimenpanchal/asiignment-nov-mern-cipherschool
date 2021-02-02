import React from "react";
const Header = () => {
	const src =
		"https://previews.123rf.com/images/mohammadmuhtadi/mohammadmuhtadi1810/mohammadmuhtadi181001145/109595125-initial-letter-jk-logo-template-design.jpg";
	return (
		<React.Fragment>
			<div className="header">
				<img src={src} alt="logo" width="70" height="50" />
				<h1>Jimen Keep</h1>
			</div>
		</React.Fragment>
	);
};

export default Header;
