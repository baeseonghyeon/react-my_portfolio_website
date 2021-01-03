import React from 'react';
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Nav from "../../../components/Nav/Nav";
import Popup from "../../../components/Popup/Popup";

import "./About.scss";


function About(props) {

	const data = props.uiData.home[0];

	return (
		<>
		<Nav />
		<div className="view-layout container">		
			<Popup
				id = "0"
				title = "BAE-SEONGHYEON"
				width = "350"
				position = {true}
				top = "50"
				left = "26"
				padding = {true}
				highlight = {true}
			>
				<p>
					<span dangerouslySetInnerHTML = {{__html: data.intro}}></span>
				</p>
			</Popup>
			<Popup
				id = "1"
				title = "CONTACT"
				width = "200"
				position = {true}
				top = "175"
				left = "50"
				padding = {true}
				highlight = {false}
			>
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
			</Popup>
			<Popup
				id = "2"
				title = "COMMENT"
				width = "400"
				position = {false}
				padding = {true}
				highlight = {false}
			>
				<p className="about-align-left">
					<span dangerouslySetInnerHTML = {{__html: data.desc}}></span>		
				</p>
			</Popup>
			<Popup
				id = "3"
				title = "CAREER"
				width = "500"
				position = {false}
				padding = {true}
				highlight = {false}
			>
				<span className="style-list" dangerouslySetInnerHTML = {{__html: data.history}}></span>
			</Popup>
			<Popup
				id = "4"
				title = "SKILL"
				width = "500"
				position = {false}
				padding = {true}
				highlight = {false}
			>
				<span className="style-list" dangerouslySetInnerHTML = {{__html: data.stack}}></span>
			</Popup>			
			<Popup
				id = "5"
				title = "INFORMATION"
				width = "250"
				position = {false}
				padding = {true}
				highlight = {false}
			>
				<p>{data.footer1}</p>
				<p>{data.footer2}</p>
			</Popup>		
		</div>
		</>
	);
}

export default React.memo(About);


