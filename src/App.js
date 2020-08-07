import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import Footer from './components/Footer/Footer'
import Home from './views/Home/Home'
import Detail from './views/Detail/Detail'
import arrayData from './assets/json/data.json'
import uiData from './assets/json/ui_data.json'

function App() {

	// KR 한국어
	const krUiData = uiData[0];
	const KrData = arrayData[0];
	// EN 영어
	const enUiData = uiData[1];
	const enData = arrayData[1];
 
	const [langs, setLangs] = useState([
		{
			set: 'KR',
			data: KrData,
			uidata: krUiData,
		},
	])

	const langToggle = data => {
		setLangs(
			langs.map(lang=>
				data === 'EN' 
				? 
					{...lang, set: 'EN', data: enData, uidata: enUiData}
					
				: 
					{...lang, set: 'KR', data: KrData, uidata: krUiData}
			)
		);
	};

	// const urlChange = id => {
	// 	setSections(
	// 		sections.map(section =>
	// 			section.id === id 
	// 			? 
	// 				{...section, active: true}
	// 			: 
	// 				{...section, active: false}
	// 		)	
	// 	);
	// };	

  return (
    <div className="App">
		{/* onClick={() => props.onToggle(item.id)} */}
		<Route path="/about" exact={true} render={()=> <Home Data={langs[0].data} uiData={langs[0].uidata} path={0}/>} />
		<Route path="/works" exact={true} render={()=> <Home Data={langs[0].data} uiData={langs[0].uidata} path={1}/>} />
		<Route path="/" exact={true} render={()=> <Home Data={langs[0].data} uiData={langs[0].uidata} path={0}/>} />
		<Route path="/work/:id" render={(match)=> <Detail Data={langs[0].data} uiData={langs[0].uidata} {...match}/>} />
		<Footer langs={langs} langToggle={langToggle} />
    </div>
  );
}

export default App;
