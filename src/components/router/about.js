import React from 'react';
import { useHistory } from 'react-router-dom';

function About() {
	const history = useHistory();

	function onBack() {
		history.goBack();
	}

	return (
		<div className="page">
			<h1>About Us</h1>
			<button onClick={onBack}>BACK</button>
		</div>
	);
}

export default About;
