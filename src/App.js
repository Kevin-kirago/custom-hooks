import React from "react";

import "./App.css";

const App = (props) => {
	return (
		<div className="App">
			<User userId={5} />
			<Post postId={15} />
		</div>
	);
};

export default App;
