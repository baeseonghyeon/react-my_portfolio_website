import React from 'react';
import Nav from '../../components/Nav/Nav'
import './Detail.scss'

function Detail({match, Data, uiData}) {
	
	const item = Data.data[match.params.id];

	return (
		<div id="Detail">
			<Nav data={item} />
			<div className="detail-layout">
				<div className="detail-section">
					<div className="view-layout">
						<div className="container mt-1 ft-s-s">
							<div className="desc">
								<p><span dangerouslySetInnerHTML = {{__html: item.desc}}></span></p>
								{ item.link !== "" ? <a href={item.link} target="_blank" rel="noopener noreferrer">Visit the website<br></br></a> : null }
								{ item.link_mobile !== "" ? <a href={item.link_mobile} target="_blank" rel="noopener noreferrer">Visit the website(Mobile Only)<br></br></a> : null }
								{ item.link_git !== "" ? <a href={item.link_git} target="_blank" rel="noopener noreferrer">Visit the Github Code<br></br></a> : null }
							</div>	
							<div className="row mt-5 m-auto">
								{ item.movie1 !== "" ? <div className="col-md-6 mb-1 pd-03"><div className="detail-video-wrapper"><iframe title={item.title} className="detail-video" width="550" height="350" src={item.movie1+'?autoplay=1&showinfo=0&loop=1&mute=1&rel=0'} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div></div>  : null }
								{ item.movie2 !== "" ? <div className="col-md-6 mb-1 pd-03"><div className="detail-video-wrapper"><iframe title={item.title} className="detail-video" width="550" height="350" src={item.movie2+'?autoplay=1&showinfo=0&loop=1&mute=1&rel=0'} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div></div>  : null }
							</div>
							<div className="row mb-4 m-auto">
								{ item.img1 !== "" ? <div className="col-md-6 pd-03"><img src={item.img1} className="detail-img" alt={item.title}></img></div> : null }
								{ item.img2 !== "" ? <div className="col-md-6 pd-03"><img src={item.img2} className="detail-img" alt={item.title}></img></div> : null }
								{ item.img3 !== "" ? <div className="col-md-6 pd-03"><img src={item.img3} className="detail-img" alt={item.title}></img></div> : null }
								{ item.img4 !== "" ? <div className="col-md-6 pd-03"><img src={item.img4} className="detail-img" alt={item.title}></img></div> : null }
							</div>
						</div>
					</div>	
				</div>	
			</div>
		</div>
	);
}

export default Detail;

