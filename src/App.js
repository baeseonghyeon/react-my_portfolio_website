import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import Footer from './components/Footer/Footer'
import Home from './views/Home/Home'
import Detail from './views/Detail/Detail'
import arrayData from './assets/json/data.json'
import uiData from './assets/json/ui_data.json'

function App() {

// Language setting
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

// Dark&Light Mode setting
	const [darkState, setDarkState] = useState(['']);
	
	// os ui-mode check
	const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

	const uiDarkMode = () => {
		if (prefersDarkScheme.matches) {
			setDarkState('active');
			document.body.classList.add("dark-theme");
			document.body.classList.remove("light-theme");
		} else {
			setDarkState('inactive');
			document.body.classList.add("light-theme");
			document.body.classList.remove("dark-theme");
		}		
	};
	
	// toggle dark mode check
	const darkModeToggle = data => {
		if (data === true) {
			setDarkState('active');
			document.body.classList.add("dark-theme");
			document.body.classList.remove("light-theme");
		} else {
			setDarkState('inactive');
			document.body.classList.add("light-theme");
			document.body.classList.remove("dark-theme");
		}
	};

	useEffect(() => {
		uiDarkMode();
	}, []);

  return (
    <div className="App">
		{/* onClick={() => props.onToggle(item.id)} */}
		<Route path="/about" exact={true} render={()=> <Home Data={langs[0].data} uiData={langs[0].uidata} path={0}/>} />
		<Route path="/works" exact={true} render={()=> <Home Data={langs[0].data} uiData={langs[0].uidata} path={1}/>} />
		<Route path="/" exact={true} render={()=> <Home Data={langs[0].data} uiData={langs[0].uidata} path={0}/>} />
		<Route path="/work/:id" render={(match)=> <Detail Data={langs[0].data} uiData={langs[0].uidata} {...match}/>} />
		<Footer langs={langs} langToggle={langToggle} darkModeToggle={darkModeToggle} darkState={darkState}/>
    </div>
  );
}

export default App;
