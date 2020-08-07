import React from 'react';

import './Section.scss'

function Section(props) {

	const items = props.data;

	return (
		<div className="layout">
			{items.map((item, index) => {
				return (					
					<div 
						key={index}
						className={item.active ? "section visible": "section invisible" }
					>
						{item.view}
					</div>
				);
			})}		
		</div>
	);
}

export default Section;

