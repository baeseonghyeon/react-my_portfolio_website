import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import Popup from "../../Popup";
import { useMediaQuery } from '../../../assets/js/common';

function DesCard(props) {

	const item = props.item;

	// Popup Touch Screen Redirect Set
	let history = useHistory();
	const [width] = useMediaQuery();
	const touchRedirect = (url, _blank) => {
		if (width > 769){
			if (_blank) {
				window.location.href = url;
			} else {
				history.push(url);
			}
		}
	}

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
					<p className="desc"><span dangerouslySetInnerHTML = {{__html: item.desc.substr(0, (item.eg ? 110 : 65))}}></span>{ item.desc.length > (item.eg ? 110 : 65) ? <span>...<Link to={`/works/${item.id}`} onTouchStart={()=> touchRedirect(`/works/${item.id}`)}> read more</Link></span> : "" }<br></br></p>
				</span>
				<span>
					{ item.link && <a href={item.link} target="_blank" rel="noopener noreferrer" className="d-block" onTouchStart={()=> touchRedirect(item.link, true)} >Visit the website →<br></br></a> }
					{ item.link_mobile && <a href={item.link_mobile} target="_blank" rel="noopener noreferrer" className="d-block" onTouchStart={()=> touchRedirect(item.link_mobile, true)} >Visit the website(Mobile Only) →<br></br></a> }
					{ item.link_git && <a href={item.link_git} target="_blank" rel="noopener noreferrer" className="d-block" onTouchStart={()=> touchRedirect(item.link_git, true)} >Visit the Github Code →<br></br></a> }
					{ item.desc.length < (item.eg ? 110 : 65) && 
						<Link className="more-btn d-block" to={`/works/${item.id}`} onTouchStart={()=> touchRedirect(`/works/${item.id}`)}>	
							Read More →
						</Link>
					}
				</span>
			</Popup>	
			</div>
	)
};

export default React.memo(DesCard);