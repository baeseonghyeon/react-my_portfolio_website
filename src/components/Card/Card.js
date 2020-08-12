import React from 'react';
// import { Link } from 'react-router-dom';
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
					<div className="ifram-wrapper">
						<iframe title={item.title} className="work-video" width="550" height="344" src={item.movie1+'?autoplay=1&showinfo=0&loop=1&mute=1&rel=0'} frameBorder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 
					</div>
					:
						item.thumb !== ""
						?	
							<img src={item.thumb} className="work-img" alt={item.title}></img>
						: 
							item.img1 !== ""
							?
								<img src={item.thumb} className="work-img" alt={item.title}></img>
							: 
								<div className="empty-thumb"><span>Thumbnail is Empty :-(</span></div>
				}
{/* Description part*/}
				<SubInfo
					item={item}
				/>
				
			</div>
		</div>
	);
}

export default Card;