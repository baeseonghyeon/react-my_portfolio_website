import React from 'react';
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Nav from "../../../components/Nav/Nav";
import "./About.scss"

function About(props) {

	const data = props.uiData.home[0];

	return (
		<>
		<Nav />
		<div className="view-layout container">
			<div className="row" id="about-row">
				<div className="col-md-3">
					<div className="outLine mb-3">
						<p>
							<span dangerouslySetInnerHTML = {{__html: data.intro}}></span>
						</p>
						<ul>				
							<li>
								<a target="_blank" href="mailto:baesh.dev@gmail.com" rel="noopener noreferrer">baesh.dev@gmail.com</a>
							</li>
							<li> 
								<a target="_blank" href="https://github.com/baeseonghyeon" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> Github</a>
							</li>
							<li> 
								<a target="_blank" href="https://www.linkedin.com/in/%EC%84%B1%ED%98%84-%EB%B0%B0-abb1441a4/" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/> Linkedin</a>
							</li>
							<li>
								<a target="_blank" href="https://www.instagram.com/baeshash/" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /> Instagram</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="col-md-6 about-mid">
					<p className="about-align-left">
						<span dangerouslySetInnerHTML = {{__html: data.desc}}></span>		
					</p>
					<p className="about-align-center">
						<span dangerouslySetInnerHTML = {{__html: data.history}}></span>
					</p>
					<p className="about-align-center">
						<span dangerouslySetInnerHTML = {{__html: data.stack}}></span>
					</p>
				</div>
				<div className="col-md-3 about-right">
					<p>{data.footer1}</p>
					<p>{data.footer2}</p>
				</div>
			</div>
		</div>
		</>
	);
}

export default React.memo(About);


