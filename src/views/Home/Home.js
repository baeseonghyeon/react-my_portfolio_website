import React, { useState, useEffect } from 'react';

import Nav from '../../components/Nav/Nav';
import Section from '../../components/Section/Section';
import About from './About/About';
import Work from './Work/Work';

import './Home.scss';

function Home(props) {

	const [sections, setSections] = useState([
		{
			id: 0,
			title: 'Bae Seonghyeon',			
			view: <About uiData={props.uiData}/>,
			active: true,
		},
		{
			id: 1,
			title: 'Works',
			view: <Work Data={props.Data} uiData={props.uiData}/>,
			active: false,
		},
	])

	const onToggle = id => {
		setSections(
			sections.map(section =>
				section.id === id
				? 
					{...section, active: true}
				: 
					{...section, active: false}
			)	
		);

		id === 0
		? 
			window.location.hash = 'about'
		: 
			window.location.hash = 'works'
	};

	const visibleSections = () => {
		setSections(
			sections.map(section =>
				window.location.hash === '#about'
				? 
					section.id === 0
					? 
						{...section, view: <About uiData={props.uiData}/>, active: true} 
					: 
						{...section, active: false}		
				:	
					window.location.hash === '#works'	
					?
						section.id === 1
						? 
							{...section, view: <Work Data={props.Data} uiData={props.uiData}/>, active: true} 
						: 
							{...section, active: false}		
					:
						section.id === 0
						? 
							{...section, view: <About uiData={props.uiData}/>, active: true} 
						: 
							{...section, active: false}	
			)	
		);
	};

	useEffect(() => {
		visibleSections();
	}, [props]);

	return (
		<div id="Home">
			<Nav 
				data={sections}
				onToggle={onToggle}
			/>
			<Section 
				data={sections}
			/>
		</div>
	);
}

export default Home;

