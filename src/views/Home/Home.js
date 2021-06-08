import React from 'react';
import { Route } from 'react-router-dom';

import Nav from '../../components/Header';
import About from './About/About';

import './Home.scss';

function Home(props) {
	return (
		<div id="Home">
			<Nav active={true} />
			<Route path="/" exact render={() => <About uiData={props.uiData}/>} />
		</div>
	);
}

export default Home;

