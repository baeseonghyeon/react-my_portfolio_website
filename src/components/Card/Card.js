import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';
import SubInfo from './SubInfo/SubInfo';

function Card(props) {

	const item = props.item;

	const onMouseEnter = id => {
		document.getElementById("desc-"+id).style.opacity=1;
	};
	
	const onMouseLeave = id => {
		document.getElementById("desc-"+id).style.opacity=0;
	}

	const onClick = id => {
		if (document.getElementById("desc-"+id).style.opacity == 0) {
			document.getElementById("desc-"+id).style.opacity= 1;
		} else {
			document.getElementById("desc-"+id).style.opacity= 0;
		}		 
	}

	return (
		<div className="card-wrapper col-md-6">
			<div 
				className="card"
				id={"work-"+ item.id}
				onMouseEnter={() => onMouseEnter(item.id)}
				onMouseLeave={() => onMouseLeave(item.id)}
			>
				{ 
					item.movie1 !== ""
					?
					<div class="ifram-wrapper">
						<iframe className="work-video" width="550" height="344" src={item.movie1} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
					</div>
					// auto play
					// <iframe className="work-video" width="550" height="315" src={item.movie1+'?autoplay=1'} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
					// <iframe className="work-video" width="550" height="344" src={item.movie1} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 
					
					:
						item.thumb !== ""
						?	
							<img src={item.thumb} className="work-img" alt="Responsive image"></img>
						: 
							item.img1 !== ""
							?
								<img src={item.thumb} className="work-img" alt="Responsive image"></img>
							: 
								"Thumbnail is Empty :-(" 
				}
{/* Description part*/}
				<SubInfo
					item={item}
				/>
				
			</div>
			{/* <p class="mobile-btn" onClick={() => onClick(item.id)}>{item.title}, {item.date}</p> */}
			{/* <Link to={`/work/${item.id}`}>	
			<h3 className="mt-3"><span className="f-n-s">{item.id+1})</span>{item.title}<span className="n-ul">, {item.date}</span></h3>
			</Link> */}
			
		</div>
	);
}

export default Card;