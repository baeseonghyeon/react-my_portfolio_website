import React, { useEffect }  from 'react';
import { Link } from 'react-router-dom';

import Card from '../../../components/Card/Card';
import Nav from "../../../components/Nav/Nav";
import './Work.scss'

function Work(props) {

	const uiData = props.uiData.home[0];
	const data = props.Data.data;

	const onClickFootnote = (id) => {
		hideCard()
        document.getElementById("desc" + id).style.opacity = 1
        document.getElementById("desc" + id).style.zIndex = 1
		document.getElementById("pointer" + id).style.opacity = 0
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
	
	const hideCard = () => {
		data.map((item) => {
			document.getElementById("desc" + item.id).style.opacity = 0
			document.getElementById("desc" + item.id).style.zIndex = -1
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

	return (
		<>
		<Nav />
		<div className="view-layout container" id="work-row">
			<div className="row">
				<div className="col-md-3">
					<div className="mb-0 outLine">
						<h2 className="bottomLine">[{uiData.work_title}]</h2>
						{data.map((item) => {
							return (
							<span className="mx-2" key={item.id}><span className="f-n"><a href={`#work${item.id}`} onClick={() => onClickFootnote(item.id)} >[{item.id+1}]</a></span> <Link to={`/works/${item.id}`} className="text-decoration-none"><span className="work-list">{item.title} ( {item.date} ) [{item.cate}]</span></Link></span>
							);
						})}
					</div>
				</div>

				<div className="col-md-9 scroll-col-md-9">
					<div className="row scroll-row">
						{data.slice(0).reverse().map((item) => {
							return (
								<Card
									key={item.id}
									index={item.id}
									item={item}
									onClickIcon={onClickIcon}
									onMouseEnter={onMouseEnter}
									onMouseLeave={onMouseLeave}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
		</>
	);
}

export default React.memo(Work);