import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
	const url =
		"https://varun-tech-talk.herokuapp.com/api?apikey=" + process.env.REACT_APP_APIKEY;
	const [name, setName] = useState(null);
	const getData = async () => {
		const { data } = await axios.get(url);
		setName(data.name);
	};
	useEffect(() => {
		getData();
		console.log(process.env);
	}, []);
	return (
		<div className="App">
			<h1>Hello {name}</h1>
		</div>
	);
}

export default App;
