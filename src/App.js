import React from "react";
import "./tailwind.css";
import Social from "./components/Social";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Services from "./components/Services";

function App() {
	return (
		<div className="w-screen overflow-hidden font-Poppins">
			<Social />
			<Header />
			<HomePage />
			<About />
			<Services />
		</div>
	);
}

export default App;
