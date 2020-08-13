import React, {useEffect}  from 'react';
// import { Link } from 'react-router-dom';
import './Card.scss';
import SubInfo from './SubInfo/SubInfo';
// import Typewriter from 'typewriter-effect';
 
function Card(props) {

	const item = props.item;
	
	const onMouseEnter = id => {
		document.getElementById("desc-"+id).style.opacity=1;
		document.getElementById("desc-"+id).style.zIndex=5;
		document.getElementById("pointer-"+id).style.opacity=0;
	};
	
	const onMouseLeave = id => {
		document.getElementById("desc-"+id).style.opacity=0;
		document.getElementById("desc-"+id).style.zIndex=-1;
	}

	const pointerPosition = ()=> {
		let pointer = document.getElementById("pointer-"+item.id);
		let parent = document.getElementById("work-"+item.id);
		pointer.style.left = Math.random() * (parent.offsetWidth - pointer.offsetWidth)+'px';
		pointer.style.top = Math.random() * (parent.offsetHeight - pointer.offsetHeight)+'px';
	};

	useEffect(() => {
		pointerPosition();
	}, [props]);

	return (
		<div className="card-wrapper col-md-6">
			<div 
				className="card"
				id={"work-"+ item.id}
				onMouseEnter={() => onMouseEnter(item.id)}
				onMouseLeave={() => onMouseLeave(item.id)}
			>
				<span class="pointer" id={"pointer-"+ item.id}></span>
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
								<div className="empty-thumb">
									<span>
										{/* <Typewriter
											options={{
											strings: ['Thumbnail is Empty :-('],
											autoStart: true,
											loop: true,
											}}
										/> */}
										Thumbnail is Empty :-(
									</span>
								</div>					  
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