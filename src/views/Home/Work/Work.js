import React from 'react';
import { Link } from 'react-router-dom';

import Nav from "../../../components/Nav/Nav";
import Popup from '../../../components/Popup/Popup';
import Card from '../../../components/Card/Card';

import {animateScroll as scroll } from 'react-scroll'

import './Work.scss'

function Work(props) {

	const uiData = props.uiData.home[0];
	const data = props.Data.data;

	const onClickFootnote = (id) => {
		hideCard()
		hidePopup()
        document.getElementById("desc" + id).style.opacity = 1
		document.getElementById("desc" + id).style.zIndex = 1
		document.getElementById("popup" + id).style.zIndex = 5
		document.getElementById("pointer" + id).style.opacity = 0
		document.getElementById("popup" + id).style.zIndex = 9 
		scrollSet(id)
	}

	const onClickIcon = (id) => {
		hideCard()
        document.getElementById("desc" + id).style.opacity = 1
        document.getElementById("desc" + id).style.zIndex = 1
		document.getElementById("pointer" + id).style.opacity = 0
	}

	const onMouseEnter = (id) => {
		hideCard()
        document.getElementById("desc" + id).style.opacity = 1
        document.getElementById("desc" + id).style.zIndex = 1
		document.getElementById("pointer" + id).style.opacity = 0
    }

	const onMouseLeave = (id) => {
        hideCard()
    }
	
	// Initialize Popup
	const hidePopup = () => {
		data.map((item) => {
			document.getElementById("popup" + item.id).style.zIndex = 5
		})
	}

	// Initialize Card
	const hideCard = () => {
		data.map((item) => {
			document.getElementById("desc" + item.id).style.opacity = 0
			document.getElementById("desc" + item.id).style.zIndex = -1
		})
	}

	
	const scrollSet = (id) => {
		scroll.scrollTo(document.getElementById("popup" + id).offsetTop - 40)
	}

	return (
		<>
		<Nav />
		<div 
			className="view-layout container" 
			id="work-row"
		>
			<Popup
				id = "x"
				title = {uiData.work_title}
				width = "400"
				position = {true}
				top = "50"
				left = "26"						
				padding = {true}
				highlight = {true}
			>
				{data.map((item) => {
					return (
					<span className="mr-2" key={item.id}><span className="f-n"><a href={`#work${item.id}`} onClick={() => onClickFootnote(item.id)} >[{item.id+1}]</a></span> <Link to={`/works/${item.id}`} className="text-decoration-none"><span className="work-list">{item.title} ( {item.date} ) [{item.cate}]</span></Link></span>
					);
				})}
			</Popup>	
			<div className="bd-t"></div>
			{data.slice(0).reverse().map((item) => {
				return (
					<Popup
						id = {item.id}
						key = {item.id}
						title = {item.title}
						width = "500"
						position = {false}
						padding = {false}
						highlight = {false}
					>
						<Card
							key={item.id}
							index={item.id}
							item={item}
							onClickIcon={onClickIcon}
							onMouseEnter={onMouseEnter}
							onMouseLeave={onMouseLeave}
						/>
					</Popup>
				);
			})}
		</div>
		</>
	);
}

export default React.memo(Work);