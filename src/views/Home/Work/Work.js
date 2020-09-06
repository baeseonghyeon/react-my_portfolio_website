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
				<div className="col-md-3">
					<div className="mb-0 outLine">
						<h2 className="bottomLine">[{uiData.work_title}]</h2>
						{data.map((item) => {
							return (
							<span className="mx-2" key={item.id}><Link to={`/work/${item.id}`}><span className="f-n">[{item.id+1}]</span> {item.title} ( {item.date} ) [{item.cate}]</Link></span>
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
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default React.memo(Work);