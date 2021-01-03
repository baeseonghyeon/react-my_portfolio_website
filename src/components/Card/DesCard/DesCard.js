import React from 'react';
import { Link } from 'react-router-dom';

import Popup from "../../../components/Popup/Popup";

function DesCard(props) {

	const item = props.item;
	
	return (
			<div 
				className="desc-card ft-s-s"
				id={"desc"+item.id}
			>
			<Popup	
				id = {"desc"+item.id}
				title = {item.cate + " - " + item.position }
				padding = {true}
				highlight = {false}
			>
				<span>
					<p className="desc"><span dangerouslySetInnerHTML = {{__html: item.desc.substr(0, 120)}}></span>{ item.desc.length > 120 ? <span>...<Link to={`/works/${item.id}`}> read more</Link></span> : "" }<br></br></p>
				</span>
				<span>
					{ item.link && <a href={item.link} target="_blank" rel="noopener noreferrer" className="d-block">Visit the website →<br></br></a> }
					{ item.link_mobile && <a href={item.link_mobile} target="_blank" rel="noopener noreferrer" className="d-block">Visit the website(Mobile Only) →<br></br></a> }
					{ item.link_git && <a href={item.link_git} target="_blank" rel="noopener noreferrer" className="d-block">Visit the Github Code →<br></br></a> }
					{ item.desc.length < 120 && 
						<Link className="more-btn d-block" to={`/works/${item.id}`}>	
						Read More →
						</Link>
					}


				</span>
			</Popup>	
			</div>
	)
};

export default React.memo(DesCard);