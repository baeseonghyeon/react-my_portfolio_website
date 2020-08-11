import React, { useState, useEffect } from 'react';
// import { Route } from 'react-router-dom';

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
	};

	const visibleSections = () => {
		setSections(
			sections.map(section =>
				section.id === 0 
				? 
					{...section, view: <About uiData={props.uiData}/>} 
				: 
					{...section, view: <Work Data={props.Data} uiData={props.uiData}/>}
			)	
		);
	};
	 


	// useEffect(() => {
	// 	// Path 변경
	// 	setSections(
	// 		sections.map(section =>

	// 			// 0(about) 1(works)
	// 			section.id === props.path
	// 			? 
	// 				// {...section, active: true}
					
	// 				section.id === 0 
	// 				? 
	// 					{...section, view: <About uiData={props.uiData}/>, active: true} 
	// 				: 
	// 					{...section, view: <Work Data={props.Data} uiData={props.uiData}/>, active: false}
						
	// 			: 
	// 				section.id === 0 
	// 				? 
	// 					{...section, view: <About uiData={props.uiData}/>, active: false} 
	// 				: 
	// 					{...section, view: <Work Data={props.Data} uiData={props.uiData}/>, active: true}
	// 		)	
	// 	);

	// }, [props]);
	
	

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

