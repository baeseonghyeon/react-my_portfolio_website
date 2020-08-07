import React from 'react';
import './Footer.scss'

function Footer(props) {

	const langs = props.langs;

	return (
		<div className="footer">
				{ langs.map((lang, index) => {
					return (
						<div className="lang-toggle-box" key={index}>
							<span
								className={lang.set === "KR" ? "lang-toggle active": "lang-toggle" }
								onClick={() => props.langToggle('KR')}
							>KR</span>
							<span
								className={lang.set === "EN" ? "lang-toggle active": "lang-toggle" }
								onClick={() => props.langToggle("EN")}
							>EN</span>
						</div>
					);
				})}
			<div>© Bae Seonghyeon (github.io)</div>
		</div>
	);
}
export default Footer;

