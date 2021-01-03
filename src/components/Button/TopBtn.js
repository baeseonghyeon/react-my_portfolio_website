import React, { useEffect }  from 'react';
import "./TopBtn.scss";
import {animateScroll as scroll } from 'react-scroll'


function TopBtn() {

	useEffect(() => {
		document.addEventListener('scroll', () => {
			let TopPositon = window.scrollY;
			let topBtn = document.getElementById('go-top-btn');
			TopPositon > 100 ? topBtn.style.opacity = 1 : topBtn.style.opacity = 0 ;
        });
	});


	const onClickGoTop = () => {
		scroll.scrollToTop();
	}


	return (
		<span
			className='go-top-btn'
			id='go-top-btn'
			onClick={()=>onClickGoTop()}
		>
		↑
		</span>
	)
};

export default React.memo(TopBtn);