import React, { useState, useEffect, useMemo } from 'react';
import { Route, Switch } from 'react-router-dom';
// components
import Footer from './components/Footer/Footer'
import Home from './views/Home/Home'
import About from './views/Home/About/About';
import Work from './views/Home/Work/Work';
import Detail from './views/Detail/Detail'
import NotFound from './views/NotFound/NotFound'
// data
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

	const randomItem = Math.floor(Math.random() * 3);
	
	// os ui-mode check
	// const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
	const prefersDarkScheme = useMemo(() => window.matchMedia("(prefers-color-scheme: dark)"), ["(prefers-color-scheme: dark)"]);

	const uiDarkMode = () => {
		if (prefersDarkScheme.matches) {
			setDarkState('active');
			document.body.classList.add("dark-theme");
			document.body.classList.remove("light-theme");
		} else {
			setDarkState('inactive');
			document.body.classList.add("light-theme");
			document.body.classList.add("bkg"+randomItem);
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
			document.body.classList.add("bkg"+randomItem);
			document.body.classList.remove("dark-theme");
		}
	};

	useEffect(() => {
		uiDarkMode();
	}, []);

  return (
    <div className="App">
		<Switch>
			<Route path="/" exact={true} render={() => <Home Data={langs[0].data} uiData={langs[0].uidata} path={0}/>} />
			<Route path="/about" exact={true} render={() => <About uiData={langs[0].uidata}/>} />
			<Route path="/works" exact={true} render={() => <Work Data={langs[0].data} uiData={langs[0].uidata}/>} />
			<Route path="/works/:id" render={(match) => <Detail Data={langs[0].data} uiData={langs[0].uidata} {...match}/>} />
			<Route path="*" component={NotFound} />
		</Switch>
		<Footer langs={langs} langToggle={langToggle} darkModeToggle={darkModeToggle} darkState={darkState}/>
		<div className="bg-cover"></div>
    </div>
  );
}

export default App;
