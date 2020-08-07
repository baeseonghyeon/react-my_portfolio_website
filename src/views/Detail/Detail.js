import React from 'react';
import Nav from '../../components/Nav/Nav'
import './Detail.scss'

function Detail({match, Data, uiData}) {
	
	const item = Data.data[match.params.id];

	return (
		<>
			<Nav data={item} />
			<div className="work-layout">
				<div className="view-layout">
					{/* <h1 className="bottomLine">{item.title}</h1> */}
					<div className="container mt-1 ft-s-s">
						<p className="desc"><span dangerouslySetInnerHTML = {{__html: item.desc}}></span></p>
						{ item.link !== "" ? <a href={item.link} target="_blank" rel="noopener noreferrer">Visit the website<br></br></a> : null }
						{ item.link_mobile !== "" ? <a href={item.link_mobile} target="_blank" rel="noopener noreferrer">Visit the website(Mobile Only)<br></br></a> : null }
						{ item.link_git !== "" ? <a href={item.link_git} target="_blank" rel="noopener noreferrer">Visit the Github Code<br></br></a> : null }
						<div className="row mt-5">
							{ item.movie1 !== "" ? <div className="col-md-6 p-0 mb-1"><div className="detail-video-wrapper"><iframe className="detail-video" width="550" height="350" src={item.movie1+'?autoplay=1&showinfo=0&loop=1&mute=1'} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>  : null }
							{ item.movie2 !== "" ? <div className="col-md-6 p-0 mb-1"><div className="detail-video-wrapper"><iframe className="detail-video" width="550" height="350" src={item.movie2+'?autoplay=1&showinfo=0&loop=1&mute=1'} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>  : null }
						</div>
						<div className="row my-5">
							{/* { item.img1 !== "" ? <div className="col-md-6"><iframe className="work-img" src={item.img1}></iframe></div> : null } */}
							{ item.img1 !== "" ? <div className="col-md-6"><img src={item.img1} className="work-img" alt="image1"></img></div> : null }
							{ item.img2 !== "" ? <div className="col-md-6"><img src={item.img2} className="work-img" alt="image2"></img></div> : null }
							{ item.img3 !== "" ? <div className="col-md-6"><img src={item.img3} className="work-img" alt="image3"></img></div> : null }
							{ item.img4 !== "" ? <div className="col-md-6"><img src={item.img4} className="work-img" alt="image4"></img></div> : null }
						</div>
					</div>
					
				</div>	
			</div>
		</>
	);
}

export default Detail;

