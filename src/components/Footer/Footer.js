import React from 'react';
import './Footer.scss'

function Footer(props) {

	const langs = props.langs;

	return (
		<div className="footer">
		{ langs.map((lang, index) => {
			return (
				<span className="lang-toggle-box" key={index}>
					<span
						className={lang.set === "KR" ? "lang-toggle active": "lang-toggle" }
						onClick={() => props.langToggle('KR')}
					>KR</span>
					<span
						className={lang.set === "EN" ? "lang-toggle active": "lang-toggle" }
						onClick={() => props.langToggle("EN")}
					>EN</span>
				</span>
			);
		})}
				<span className="dividing-line">|</span>
				<span className="dark-toggle-box">
					<span
						className={props.darkState === 'inactive' ? "dark-toggle dark-active" : "dark-toggle" }
						onClick={() => props.darkModeToggle(false)}
					>Day</span>
					<span
						className={props.darkState === 'active' ? "dark-toggle dark-active" : "dark-toggle" }
						onClick={() => props.darkModeToggle(true)}
					>Night</span>
				</span>
			<div>© Bae Seonghyeon (github.io)</div>
		</div>
	);
}
export default Footer;

