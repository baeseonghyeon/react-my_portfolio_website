import React from 'react';
import { Link } from 'react-router-dom';
// import './Card.scss';

function SubInfo(props) {

	const item = props.item;

	// const onClick = id => {
	// 	window.location.href='/work/'+id;
	// }

	return (
			<div 
				className="desc-card ft-s-ss"
				id={"desc-"+item.id}
				// onClick={() => onClick(item.id)}
			>
				<h3 className="title">{item.title}</h3>
				{ item.position !== "" ? <p className="cate">[{item.cate}] | [{item.position}]</p> : <p className="cate">[{item.cate}]</p> }
				<span>
					<p className="desc"><span dangerouslySetInnerHTML = {{__html: item.desc}}></span><br></br></p>
				</span>
				
				<span>
					{ item.link !== "" ? <a href={item.link} target="_blank" rel="noopener noreferrer" className="d-block">Visit the website<br></br></a> : null }
					{ item.link_mobile !== "" ? <a href={item.link_mobile} target="_blank" rel="noopener noreferrer" className="d-block">Visit the website(Mobile Only)<br></br></a> : null }
					{ item.link_git !== "" ? <a href={item.link_git} target="_blank" rel="noopener noreferrer" className="d-block">Visit the Github Code<br></br></a> : null }
					<Link className="more-btn d-block" to={`/work/${item.id}`}>	
						Read More >
					</Link>
				</span>
			</div>
	)
};

export default SubInfo;