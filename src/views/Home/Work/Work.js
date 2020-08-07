import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../../components/Card/Card';
import './Work.scss'

function Work(props) {

	const uiData = props.uiData.home[0];
	const data = props.Data.data;

	return (
		<div className="view-layout container">
			<div className="row">
{/* Work All */}
				<div className="col-md-3 outLine">
					<span className="mb-0">
						<h2 className="bottomLine">[{uiData.work_title}]</h2>
						{data.map((item) => {
							return (
									<span className="mx-2" key={item.id}><Link to={`/work/${item.id}`}><span className="f-n">{item.id+1})</span> {item.title} ( {item.date} ) {item.cate}</Link></span>
							);
						})}
					</span>
				</div>

				<div className="col-md-9">
					<div className="row row-px">
						{/* <div className="row scroll-info"><div className="col-4">↓</div><div className="col-4">↓</div><div className="col-4">↓</div></div> */}
						{/* <span> */}
						{data.slice(0).reverse().map((item) => {
							return (
								<Card
									key={item.id}
									index={item.id}
									item={item}
								/>
							);
						})}
						{/* </span> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Work;

// /