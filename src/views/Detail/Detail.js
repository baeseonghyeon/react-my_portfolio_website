import React from 'react';
import Nav from '../../components/Nav/Nav'
import Popup from '../../components/Popup/Popup'
import './Detail.scss'

function Detail({match, Data, uiData}) {

	const item = Data.data[match.params.id];

	const onClickGoTop = () => {
        setTimeout(function () {
            document.getElementById("detail-scroll").scrollTo({top: 0, behavior: "smooth" })
        },2);
    }

	return (
		<div id="Detail">
			<Nav data={item} />
			<div className="detail-layout">
				<div className="detail-section">
					<div className="view-layout px-0" id="detail-scroll">
						<div className="container mt-1 ft-s-s">
							<div className="detail-desc">
								<Popup
									id = {"info"+item.id}
									title = {item.title}
									position = {true}
									top = "3"
									left = "2"							
									padding = {true}
									highlight = {true}
								>
									<ul className="work-info">
										<li><strong>Date:</strong> {item.date}</li>
										<li><strong>Category:</strong> {item.cate}</li>
										<li><strong>Position:</strong> {item.position}</li>
									</ul>
								</Popup>
								<Popup
									id = {item.id}
									title = {item.title}
									width = "400"
									position = {true}
									top = "17"
									left = "3"					
									padding = {true}
									highlight = {false}
								>									
									<div className="desc px-0">
										<p><span dangerouslySetInnerHTML = {{__html: item.desc}}></span></p>
										{ item.link !== "" ? <a href={item.link} target="_blank" rel="noopener noreferrer">Visit the website →<br></br></a> : null }
										{ item.link_mobile !== "" ? <a href={item.link_mobile} target="_blank" rel="noopener noreferrer">Visit the website(Mobile Only) →<br></br></a> : null }
										{ item.link_git !== "" ? <a href={item.link_git} target="_blank" rel="noopener noreferrer">Visit the Github Code →<br></br></a> : null }
									</div>	
								</Popup>	

							</div>	
							<div className="row mt-5 m-auto justify-content-center">
								{ item.movie1 !== "" ? <div className="col-md-6 mb-0 p-0"><div className="detail-video-wrapper"><iframe title={item.title} className="detail-video" width="550" height="350" src={item.movie1+'?autoplay=1&showinfo=0&loop=1&mute=1&rel=0'} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div></div>  : null }
								{ item.movie2 !== "" ? <div className="col-md-6 mb-0 p-0"><div className="detail-video-wrapper video2"><iframe title={item.title} className="detail-video" width="550" height="350" src={item.movie2+'?autoplay=1&showinfo=0&loop=1&mute=1&rel=0'} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div></div>  : null }
							</div>
							<div className="row mb-4 m-auto justify-content-center">
								{ item.img1 !== "" ? <div className="col-md-6 mb-0 p-0"><img src={item.img1} className="detail-img" alt={item.title}></img></div> : null }
								{ item.img2 !== "" ? <div className="col-md-6 mb-0 p-0"><img src={item.img2} className="detail-img img2" alt={item.title}></img></div> : null }
								{ item.img3 !== "" ? <div className="col-md-6 mb-0 p-0"><img src={item.img3} className="detail-img" alt={item.title}></img></div> : null }
								{ item.img4 !== "" ? <div className="col-md-6 mb-0 p-0"><img src={item.img4} className="detail-img img4" alt={item.title}></img></div> : null }
							</div>
							
						</div>
					</div>	
				</div>	
			</div>
			<span 
			className="gotop-btn"
			onClick={()=>onClickGoTop()}
			>
			↑
			</span>
		</div>
	);
}

export default Detail;

