import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Counter from "./SecondsCounter"
import '../../styles/index.css'

//create your first component
const Home = () => {
	return (
		<Counter/>	
	);
};

export default Home;