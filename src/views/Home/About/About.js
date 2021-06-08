import React, { useEffect } from 'react';
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Nav from "../../../components/Header";
import Popup from "../../../components/Popup";
import { useMediaQuery } from '../../../assets/js/common';

import "./About.scss";

function About(props) {

	const data = props.uiData.home[0];

	useEffect(() => {
		document.getElementById("view-layout").style.opacity = 1;
		document.getElementById("view-layout").style.transform = 'initial';
	});

	// Popup Touch Screen Redirect Set
	const [width] = useMediaQuery();
	const touchRedirect = (url) => {
		if (width > 769){
			// window.open(url, '_blank')
			window.location.href = url;
		}
	}

	return (
		<>
		<Nav />
		<div className="view-layout container" id="view-layout">		
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
				width = "250"
				position = {true}
				top = "195"
				left = "50"
				padding = {true}
				highlight = {false}
			>
				<ul>				
					<li>
						<a target="_blank" href="mailto:baesh.dev@gmail.com" rel="noopener noreferrer" onTouchStart={()=> touchRedirect("mailto:baesh.dev@gmail.com")}>baesh.dev@gmail.com</a>
					</li>
					<li> 
						<a target="_blank" href="https://github.com/baeseonghyeon" rel="noopener noreferrer" onTouchStart={()=> touchRedirect("https://github.com/baeseonghyeon")}><FontAwesomeIcon icon={faGithub} /> Github</a>
					</li>
					<li> 
						<a target="_blank" href="https://baeseongh.tistory.com/" rel="noopener noreferrer" onTouchStart={()=> touchRedirect("https://baeseongh.tistory.com/")} className="contact-link"><svg xmlns="http://www.w3.org/2000/svg" className="icon__tistory" viewBox="0 0 408.4 408.4"><g><circle class="cls-1" cx="58.18" cy="58.18" r="58.18"/><circle class="cls-1" cx="204.2" cy="58.18" r="58.18"/><circle class="cls-1" cx="204.2" cy="204.2" r="58.18"/><circle class="cls-1" cx="204.2" cy="350.22" r="58.18"/><circle class="cls-1" cx="350.22" cy="58.18" r="58.18"/></g></svg>&nbsp;Blog</a>
					</li>
					<li> 
						<a target="_blank" href="https://www.linkedin.com/in/%EC%84%B1%ED%98%84-%EB%B0%B0-abb1441a4/" rel="noopener noreferrer" onTouchStart={()=> touchRedirect("https://www.linkedin.com/in/%EC%84%B1%ED%98%84-%EB%B0%B0-abb1441a4/")}><FontAwesomeIcon icon={faLinkedin}/> Linkedin</a>
					</li>
					<li>
						<a target="_blank" href="https://www.instagram.com/baeshash/" rel="noopener noreferrer" onTouchStart={()=> touchRedirect("https://www.instagram.com/baeshash/")}><FontAwesomeIcon icon={faInstagram} /> Instagram</a>
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
				<span className="style-list">
					<ul>
						{data.career.map((item) => {
							return (
								<li>{item.url ? <a href={item.url} target="_blank" rel="noopener noreferrer" onTouchStart={()=> touchRedirect(item.url)}>{item.title}</a> : item.title }</li>
							);
						})}
					</ul>
				</span>
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
				width = "300"
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


