import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../../../components/Card/Card';
import Popup from '../../../components/Popup/Popup';
import Nav from "../../../components/Nav/Nav";
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
		hidePopup()
        document.getElementById("desc" + id).style.opacity = 1
        document.getElementById("desc" + id).style.zIndex = 1
		document.getElementById("pointer" + id).style.opacity = 0
		document.getElementById("popup" + id).style.zIndex = 9
	}

	const onMouseEnter = (id) => {
		hideCard()
		hidePopup()
        document.getElementById("desc" + id).style.opacity = 1
        document.getElementById("desc" + id).style.zIndex = 1
		document.getElementById("pointer" + id).style.opacity = 0
		document.getElementById("popup" + id).style.zIndex = 9
    }

	const onMouseLeave = (id) => {
        hideCard()
    }
	
	const hideCard = () => {
		data.map((item) => {
			document.getElementById("desc" + item.id).style.opacity = 0
			document.getElementById("desc" + item.id).style.zIndex = -1
		})
	}

	const hidePopup = () => {
		data.map((item) => {
			document.getElementById("popup" + item.id).style.zIndex = 5
		})
	}

	const scrollSet = (id) => {
		if (id > 1) {
			setTimeout(function () {
				document.getElementById("work-row").scrollBy({top: -(document.getElementById("work-row").offsetHeight/2-(document.getElementById("work-row").offsetHeight * 0.15)), behavior: "smooth" })
			},2);
		} 
		else if (id === 2) {
			setTimeout(function () {
				document.getElementById("work-row").scrollBy({top: -(document.getElementById("work-row").offsetHeight/2-(document.getElementById("work-row").offsetHeight * 0.325)), behavior: "smooth" })
			},2);
		}
	}

	const onClickGoTop = () => {
		setTimeout(function () {
			document.getElementById("work-row").scrollTo({top: 0, behavior: "smooth" })
		},2);
    }

	return (
		<>
		<Nav />
		<div className="view-layout container" id="work-row">
			<Popup
				id = "x"
				title = {uiData.work_title}
				width = "400"
				position = {true}
				top = "4"
				left = "2"						
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
		<span 
			className="gotop-btn"
			id = "gotop-btn"
			onClick={()=>onClickGoTop()}
		>
		↑
		</span>
		</>
	);
}

export default React.memo(Work);